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
                            <td>{{getChallengeName(challenge)}}</td>
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
                        <tr v-for="(info,count) in infos" v-bind:key="info.id">
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
    import { API_ENDPOINT } from '../App.vue';

    export default {
        name: "TeamAction",
        components: {Navbar, Footer},
        data: function () {
            return {
                error: null,
                success: null,
                challenges: null,
                infos: null,
                challengesList: null,
                loaderIsActive: false,
                loader_msg:"Loading...",
                loader_id:""
            }
        },
        created() {
            this.getTeamInfo();
            this.listEvent(0);
            this.listChallenges();
        },
        methods: {
            getTeamInfo () {

               const opts = {
                   method: 'GET',
                   headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                 };

                 fetch(API_ENDPOINT+'/admin/team/'+this.$route.params.tag+'/'+this.$route.params.id+'/info', opts)
                    .then(response => response.json())
                    .then(response => {
                        this.infos = response['instances'];
                    })
                    .catch(error => {
                        this.error = error;
                    });

            },
            listEvent: function (status) {
                const opts = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},

                };
            
                fetch(API_ENDPOINT+'/admin/event/list/'+status, opts).then(response => response.json())
                .then(response => {
                    this.events = response['events'];

                    for (let i = 0; i < this.events.length; i++) {
                        if (this.events[i]['tag'] == this.$route.params.tag) {
                            this.challenges = this.events[i]['exercises'];
                            break;
                        }
                    }
                })
                .catch(error => {
                    this.error = error;
                });
            },

            listChallenges: function () {
                const opts = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                };

                fetch(API_ENDPOINT+'/admin/exercise/list', opts).then(response => response.json())
                .then(response => {
                    this.challengesList = response['exercises'];
                })
                .catch(error => {
                    this.error = error;
                });

            },
            getChallengeName: function (tag) {
                let chalName;
                if (this.challengesList == null) {
                    return
                }




            this.challengesList.forEach(function(challenge) {
                    if (challenge['tags'][0] == tag){
                        chalName =  challenge['name'];
                    }
                }, chalName);


                return chalName
            },
            getTeamInfoState: function (state) {
                if (state == 0) {
                    return "RUNNING"
                }if (state == 1){
                    return "NOT RUNNING"
                }if (state == 2){
                    return "SUSPENDED"
                }
            },
            resetExercise: async function (tag) {
                this.loaderIsActive = true;
                this.loader_msg = "Resetting exercise "+tag+ " ...";
                const opts = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                    body: JSON.stringify({
                        "eventTag": this.$route.params.tag,
                        "teams": [{'Id':this.$route.params.id}],
                        "exerciseTag": tag
                    })
                };
            await  fetch(API_ENDPOINT+'/admin/event/reset/exercise', opts)
                    .then(response => response.json())
                    .then(response => {
                        if (response['code'] !== undefined){
                            this.error = response['message'];
                            this.loaderIsActive = false; 
                            return 
                        }
                        this.success = response['status'];
                        this.loaderIsActive = false;
                    }).catch(error => {
                        this.error = error;
                        this.loaderIsActive = false;
                    });
            },
        }
    }
</script>

<style scoped>

</style>