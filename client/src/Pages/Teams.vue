<template>
    <div>
        <div id="loader" v-bind:class="{ 'show-loader': loaderIsActive }">
            <div class="loader-content p-3 ">
                <div class="d-inline mr-2">
                    <img class="loading-logo" src="../assets/bluelogo.png" width="60" height="60">
                </div>
                <div class="d-inline mr-2">{{loader_id}}</div>
                <div class="d-inline"><strong>{{loader_msg}}</strong></div>
            </div>
        </div>
        <Navbar/>
        <div class="container" style="margin-top: 100px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Event {{this.$route.params.tag}}</h3>
            <router-link :to="{name: 'home'}" class="btn btn-sm btn-secondary text-white float-right">Back</router-link>
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
            <hr>
            <ul class="list-group list-group-flush">

                <li class="list-group-item px-0">
                    <div class="row">
                        <div class="col-4">
                            <a class="btn btn-nobox collapsed" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="true" aria-controls="collapseExample1">
                            aadawad
                            </a>
                        </div>
                        <div class="col-3">
                            aa
                        </div>
                        <div class="col-5">
                            aa
                        </div>
                    </div>

                        <span class="mr-3"></span>
                    <div class="collapse" id="collapseExample1">
                        <div class="card card-body mt-2">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </li>
                <li class="list-group-item px-0">
                    <a class="btn btn-nobox collapsed" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="true" aria-controls="collapseExample2">
                        Link with href<span class="mr-3"></span>
                    </a>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body mt-2">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </li>

            </ul>
            <div>{{teams}}</div>
            <button v-on:click="restartTeamLab">reset lab</button>
            <button v-on:click="resetExercise">reset challenge</button>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { daemonclient } from "../App";
    import { ListEventTeamsRequest, RestartTeamLabRequest, ResetExerciseRequest, Team } from "daemon_pb"

    export default {
        name: "Teams",
        components: {Footer, Navbar},
        data: function () {
            return {
                error: null,
                success: null,
                teams: null,
                eventStatus: null,
                loaderIsActive: false,

                loader_msg:"null",
                loader_id:""
            }
        },
        created() {
            this.listTeams();
            //this.restartTeamLab();
        },
        methods: {
            listTeams () {
                let getRequest = new ListEventTeamsRequest();
                getRequest.setTag(this.$route.params.tag);
                daemonclient.listEventTeams(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    if (err == null) {
                        this.teams = response.toObject();
                    }else{
                        this.error = err['metadata']['grpc-message'];
                    }
                });
            },
            restartTeamLab () {
                let getRequest = new RestartTeamLabRequest();
                getRequest.setEventtag("dec4");
                getRequest.setTeamid("88a0dc5f")

                const call = daemonclient.restartTeamLab(getRequest, {Token: localStorage.getItem("user")});

                call.on('data', function(response) {
                    //this.status = response.getErrormessage();
                    window.console.log(response)
                });
                call.on('end', function() {
                    window.console.log("enddd")
                });
                call.on('error', function(e) {
                    window.console.log(e)
                });
                call.on('status', function(status) {
                    window.console.log(status)
                });
            },
            resetExercise () {
                const that = this

                this.loaderIsActive = true

                let getRequest = new ResetExerciseRequest();
                let getTeam = new Team();

                getTeam.setId("50f810ce");

                getRequest.setEventtag("boot");
                getRequest.setExercisetag("csrf");
                getRequest.setExercisetag("sql");

                //if we do not set any teams, the challenge will be resetted for every team
                //getRequest.addTeams(getTeam);

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
                    }, 1000);
                });
            }
        }
    }
</script>

<style scoped>
    .btn-nobox {
        box-shadow: none !important;
        outline: 0;
    }
    .list-group-item span {
        border: solid #222;
        border-width: 0 1px 1px 0;
        display: inline;
        cursor: pointer;
        padding: 5px;
        position: absolute;
        right: 0;
        margin-top: 10px;
    }

    .list-group-item a.btn.collapsed span {
        transform: rotate(40deg);
        -webkit-transform: rotate(40deg);
        transition: .3s transform ease-in-out;
    }


    .list-group-item a.btn span {
        transform: rotate(-140deg);
        -webkit-transform: rotate(-140deg);
        transition: .3s transform ease-in-out;
    }
</style>