<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
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
            <div class="table-responsive">
                <table class="table mx-auto table-hover table-striped" id="teamsEventTable" cellspacing="0" style="table-layout: auto; width: 100%">
                    <thead>
                        <tr class="text-center">
                          <!-- Emails are not used on event users, not collected hence it is commented -->
                          <!-- <td>#</td><td>Team_ID</td><td>Name</td><td>Email</td><td>Reset</td><td>Restart</td><td>Actions</td> -->
                          <td>#</td><td>Team ID</td><td>Name</td><td>Last Access</td><td>Reset</td><td>Restart</td><td>Actions</td>
                        </tr>
                    </thead>
                    <tbody v-if="teams">
                        <tr v-for="(team,count) in teams" v-bind:key="team.id">
                            <td class="text-center">{{count + 1}}</td>
                            <td><strong><router-link :to="{name: 'team', params: {id: team['Id']}}" class="text-haaukins" >{{team['Id']}}</router-link></strong></td>

                            <td>{{team['Name']}}</td>
                            <!-- <td>{{team['Email']}}</td> -->
                            <td>{{formatDate(team['AccessedAt'])}}</td>
                            <td class="text-center"><button class="btn btn-secondary btn-sm" v-on:click="resetFrontend(team['Id'])">Frontend</button></td>
                            <td class="text-center"><button class="btn btn-secondary btn-sm" v-on:click="restartTeamLab(team['Id'])">Lab</button></td>
                            <td class="text-center">
                              <router-link :to="{name:'flags', params: {id: team['Id'], flags:'flags'}}" class="text-haaukins"><button class="btn btn-warning btn-sm m-btn-responsive">Flags</button></router-link>
                              <button class="btn btn-warning btn-sm m-btn-responsive" v-on:click="suspendResumeTeamLab(team['Id'], true)">Suspend</button>
                              <button class="btn btn-warning btn-sm mr-1" v-on:click="suspendResumeTeamLab(team['Id'], false)">Resume</button>
                              <button class="btn btn-secondary btn-sm m-btn-responsive" v-on:click="openModal(team['Id'])">Update</button>
                              <button class="btn btn-danger btn-sm m-btn-responsive" v-on:click="deleteTeam(team['Id'])">Delete</button>
                          </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="7" class="text-center">No Teams founds...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
      <b-modal ref="modal" id="update-team-modal" centered hide-footer>
        <template v-slot:modal-title>
          Update  {{teamUpdate}} password
        </template>
        <b-form ref="form" @submit.stop.prevent="updateTeamPassword()">
          <b-form-group
              id="fieldset-updatePass"
              label="New Password"
              label-for="updatePass"
          >
            <b-form-input
                id="updatePass"
                v-model="password"
                type="password"
                required
            ></b-form-input>
          </b-form-group>
          <b-form-group
              id="fieldset-updateRepeatPass"
              label="Repeat Password"
              label-for="updateRepeatPass"
          >
            <b-form-input
                id="updateRepeatPass"
                v-model="repeatPassword"
                type="password"
                required
            ></b-form-input>
          </b-form-group>
          <b-button variant="secondary" @click="$bvModal.hide('update-team-modal')">Close</b-button>
          <b-button type="submit" class="btn-haaukins float-right">Update</b-button>
        </b-form>
      </b-modal>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { daemonclient } from "../App";
    import {
      RestartTeamLabRequest,
      ResetFrontendsRequest,
      Team,
      SetTeamSuspendRequest,
    } from "daemon_pb"
    import { API_ENDPOINT } from "../App.vue";

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
                teamUpdate : "",
                loader_msg:"Loading...",
                loader_id:""
            }
        },
        created() {
            this.listTeams();
        },
        methods: {
            listTeams () {
                const opts = {
                  method:"GET",
                  headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("user")
                  }
                }
                fetch(API_ENDPOINT + "/admin/event/"+this.$route.params.tag+"/list/teams", opts)
                .then(response => response.json())
                .then(response => {
                    this.teams = response["teams"];
                }).catch(error => {
                    this.error = error;
                });

            },

            formatDate(date) {
                return new Date(date).toLocaleString();
            },
            restartTeamLab (teamID) {
                const that = this
                this.loaderIsActive = true

                let getRequest = new RestartTeamLabRequest();
                getRequest.setEventtag(this.$route.params.tag);
                getRequest.setTeamid(teamID)

                const call = daemonclient.restartTeamLab(getRequest, {Token: localStorage.getItem("user")});

                call.on('data', function(response) {
                    //this.status = response.getErrormessage();
                    that.loader_msg = response.getStatus()
                    that.loader_id = teamID
                    window.console.log(response)
                });
                call.on('end', function() {
                  window.console.log("enddd")
                  that.loaderIsActive=false
                  that.listTeams()
                });
                call.on('error', function(e) {
                    that.error = e
                });
                call.on('status', function() {
                    that.loaderIsActive = false
                  setTimeout(function(){
                    that.loaderIsActive = false
                    that.success = "Team [ " +teamID + " ] Lab Successfully Restarted!"
                  }, 500);
                });
            },
          async deleteTeam(teamId){
              const that = this; 
              const opts = {
                method : "POST", 
                headers : {
                  "Content-Type" : "application/json",
                  "token" :  localStorage.getItem("user")
                },
                body : JSON.stringify({
                  "evTag" : this.$route.params.tag,
                  "teamId" : teamId
                })
              }

             var x = confirm("Do you really want to delete " + teamId + " on event "+ this.$route.params.tag+ " ?");
             if (x) {
              this.loaderIsActive = true;
              this.loader_msg = "Pruning " +teamId +" team's resources...."
                await fetch(API_ENDPOINT+ "/admin/team/delete", opts)
                .then(response => response.json())
                .then(response => {
                  if(response["message"] !== ""){
                    that.loaderIsActive = false
                    that.success = response["message"]
                    that.listTeams()
                  }
                }).catch(error => {
                  that.success = null
                  that.error = error
                })
                
             }
             },
            resetFrontend(teamID){
                const that = this
                this.loaderIsActive = true

                let getRequest = new ResetFrontendsRequest();
                let getTeam = new Team();

                getTeam.setId(teamID);
                getRequest.setEventtag(this.$route.params.tag);
                getRequest.addTeams(getTeam);

                const call = daemonclient.resetFrontends(getRequest, {Token: localStorage.getItem("user")});

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
                        that.success = "Frontend successfully restarted!"
                    }, 1000);
                });
            },
            openModal: function (teamid) {
              this.teamUpdate = teamid
              this.$bvModal.show('update-team-modal')
            },
            updateTeamPassword: function () {
              if (this.password != this.repeatPassword){
                this.$bvModal.hide('update-team-modal')
                this.password = ""
                this.repeatPassword = ""
                this.error = "Passwords don't match each other!"
                return
              }

              const opts = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "token": localStorage.getItem("user")
                },
                body: JSON.stringify({
                  "eventTag": this.$route.params.tag,
                  "teamId": this.teamUpdate,
                  "password": this.password,
                  "passwordRepeat": this.repeatPassword
                })
              }
              fetch(API_ENDPOINT+"/admin/team/update", opts)
                .then(res => res.json())
                .then(res => {
                  if (res.error) {
                    this.error = res.error
                  } else {
                    this.success = res['status']
                    this.$bvModal.hide('update-team-modal')
                    this.password = ""
                    this.repeatPassword = ""
                  }
                })
                .catch(err => {
                  this.$bvModal.hide('update-team-modal')
                  this.error = err
                })
                this.$bvModal.hide('update-team-modal')
            },
            suspendResumeTeamLab: function (teamID, setSuspend) {
                let getRequest = new SetTeamSuspendRequest()
                getRequest.setTeamid(teamID)
                getRequest.setEventtag(this.$route.params.tag)
                getRequest.setSuspend(setSuspend)

                daemonclient.setTeamSuspend(getRequest, {Token: localStorage.getItem("user")}, (err) => {
                    if (err == null) {
                        this.success = "Action completed!"
                    }else{
                        this.error = err["message"];
                    }
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

    .m-btn-responsive{
        margin-right: 5px;
    }

    @media (max-width: 992px) {
        .m-btn-responsive{
            margin-right: 0px;
            margin-bottom: 5px;
        }
    }

</style>