<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Team {{this.$route.params.id}}</h3>
            <router-link :to="{name: 'event', params: {tag: this.$route.params.tag}}" class="btn btn-sm btn-secondary text-white float-right">Back</router-link>
            <button data-toggle="modal" data-target="#eventModal" type="button" id="create-event" class="btn btn-sm btn-haaukins float-right mr-2">Restart</button>
            <div class="clearfix"></div>
            <hr>
            <div v-if="error" class="alert alert-danger alert-dismissible">{{error}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="success" class="alert alert-success alert-dismissible">{{success}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="loaderIsActive" class="alert myalert-loading alert-dismissible">
                <div class="d-inline mr-2">
                    <img class="loading-logo" src="../assets/bluelogo.png" width="50" height="50">
                </div>
                <div class="d-inline mr-2">{{loader_id}}</div>
                <div class="d-inline"><strong>{{loader_msg}}</strong></div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="top: 13px;">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <hr>
            <div class="table-responsive">
                <table class="table mx-auto table-hover table-striped" id="teamsEventTableAction" cellspacing="0" style="table-layout: auto; width: 50%">
                    <thead>
                    <tr class="text-center">
                        <td>#</td><td>Challenge</td><td>Action</td>
                    </tr>
                    </thead>
                    <tbody v-if="challenges">
                        <tr v-for="(challenge,count) in challenges.split(',')" v-bind:key="challenge">
                            <td>{{count + 1}}</td>
                            <td>{{challenge}}</td>
                            <td><button v-on:click="resetExercise(challenge)" type="button" class="btn btn-danger btn-sm">Reset</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4>Team Info</h4>
            <div class="table-responsive">
                <table class="table mx-auto table-hover table-striped" id="teamsEventTableInfo" cellspacing="0" style="table-layout: auto; width: 100%">
                    <thead>
                        <tr class="text-center">
                            <td>#</td><td>Image Name</td><td>Type</td><td>ID</td><td>State</td>
                        </tr>
                    </thead>
                    <tbody v-if="infos">
                        <tr v-for="(info,count) in infos.instancesList" v-bind:key="info.id">
                            <td>{{count + 1}}</td>
                            <td>{{info.image}}</td>
                            <td>{{info.type}}</td>
                            <td>{{info.id}}</td>
                            <td><span><strong>{{getTeamInfoState(info.state)}}</strong></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { daemonclient } from "../App";
    import { GetTeamInfoRequest, ResetExerciseRequest, Team, ListEventsRequest } from "daemon_pb"

    export default {
        name: "TeamAction",
        components: {Navbar, Footer},
        data: function () {
            return {
                error: null,
                success: null,
                challenges: null,
                infos: null,

                loaderIsActive: false,
                loader_msg:"Loading...",
                loader_id:""
            }
        },
        created() {
            this.getTeamInfo();
            this.listEvent();
        },
        methods: {
            getTeamInfo () {
                let getRequest = new GetTeamInfoRequest();
                getRequest.setEventtag(this.$route.params.tag);
                getRequest.setTeamid(this.$route.params.id)

                daemonclient.getTeamInfo(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    if (err == null) {
                        this.infos = response.toObject()
                    }else{
                        this.error = err['metadata']['grpc-message'];
                    }
                });
            },
            listEvent: function () {
                let getRequest = new ListEventsRequest();
                daemonclient.listEvents(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    if (err == null) {
                        let response_obj = response.toObject()
                        for(let i = 0; i < response_obj['eventsList'].length; i++){
                            if(response_obj['eventsList'][i]['tag'] == this.$route.params.tag){
                                this.challenges = response_obj['eventsList'][i]['exercises'];
                                break;
                            }
                        }
                    }else{
                        this.error = err;
                    }
                });
            },
            getTeamInfoState (stateS) {
                let state = parseInt(stateS)
                if (state == 0) {
                    return "RUNNING"
                }if (state == 1){
                    return "NOT RUNNING"
                }if (state == 2){
                    return "SUSPENDED"
                }
            },
            resetExercise (tag) {
                const that = this
                this.loaderIsActive = true

                let getRequest = new ResetExerciseRequest();
                let getTeam = new Team();

                getTeam.setId(this.$route.params.id);

                getRequest.setEventtag(this.$route.params.tag);
                getRequest.setExercisetag(tag);

                //todo if we do not set any teams, the challenge will be resetted for every team
                getRequest.addTeams(getTeam);

                const call = daemonclient.resetExercise(getRequest, {Token: localStorage.getItem("user")});

                call.on('data', function(response) {
                    //this.status = response.getErrormessage();
                    window.console.log(response.getStatus())

                    that.loader_msg = response.getStatus()
                    that.loader_id = response.getTeamid()

                });
                call.on('error', function(e) {
                    that.error = e
                });
                call.on('status', function() {
                    setTimeout(function(){
                        that.loaderIsActive = false
                        that.success = "Exercises successfully reset!"
                        that.getTeamInfo()
                    }, 1000);
                });
            }
        }
    }
</script>

<style scoped>

</style>