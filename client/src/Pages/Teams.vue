<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Event {{this.$route.params.tag}}</h3>
            <router-link :to="{name: 'home'}" class="btn btn-sm btn-secondary text-white float-right">Back</router-link>
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
    import { REST_API_ENDPOINT , REST_API_PORT  } from "../App.vue";

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
                fetch(REST_API_ENDPOINT + ":" + REST_API_PORT +  "/admin/event/"+this.$route.params.tag+"/list/teams", opts)
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

          async restartTeamLab (teamID) {
              const opts = {
                method:"POST",
                headers: {
                  "Content-Type": "application/json",
                  "token": localStorage.getItem("user")
                },
                body: JSON.stringify({
                  "eventTag": this.$route.params.tag,
                  "teamId": teamID
                })
              }
              this.loaderIsActive = true;
              this.loader_msg = "Restarting Team " + teamID +" Lab...";
          
          
            await fetch (REST_API_ENDPOINT + ":" + REST_API_PORT + "/admin/lab/restart", opts)
              .then(response => response.json())
              .then(response => {
                if (response["status"] !== "") {
                  this.success = response["status"];
                  this.loaderIsActive = false;
                }
                this.listTeams();
              }).catch(error => { 
                this.loaderIsActive = false;
                this.error = error;
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
              that.loaderIsActive = true;
              that.loader_msg = "Pruning " +teamId +" team's resources...."
                await fetch(REST_API_ENDPOINT + ":" + REST_API_PORT + "/admin/team/delete", opts)
                .then(response => response.json())
                .then(response => {
                  if (response["code"] !== "") {
                    this.error = response["message"];
                    this.loaderIsActive = false;
                    return
                  }
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
            async resetFrontend(teamID){
                this.loaderIsActive = true   
                const opts = {
                  method:"POST",
                  headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("user")
                  },
                  body: JSON.stringify({
                    "eventTag": this.$route.params.tag,
                    "teams": [{'Id':teamID}]
                  })
                }
                this.loaderIsActive = true
                this.loader_msg = "Resetting frontends of teams " 
                await fetch(REST_API_ENDPOINT + ":" + REST_API_PORT +  "/admin/frontend/reset", opts)
                  .then(response => response.json())
                  .then(response => {
                      if (response["code"] !== "" ) {
                        this.error = response["message"];
                        this.loaderIsActive = false
                        return 
                      }
                      if (response["status"] !== "" ) {
                        this.success = response["status"];
                      } 
                      this.loaderIsActive = false
                      this.listTeams();
                  }).catch(error => {
                      this.loaderIsActive = false
                      this.error = error;
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
                  "teamID": this.teamUpdate,
                  "password": this.password,
                  "passwordRepeat": this.repeatPassword
                })
              }
              fetch(REST_API_ENDPOINT + ":" + REST_API_PORT +"/admin/team/update", opts)
                .then(res => res.json())
                .then(res => {
                  if (res["code"] !== "") {
                    this.error = res["message"];
                    this.password = ""
                    this.repeatPassword = ""
                    return
                  }
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
          suspendResumeTeamLab: async function (teamID, setSuspend) {

              const opts = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "token": localStorage.getItem("user")
                },
                body: JSON.stringify({
                  "eventTag": this.$route.params.tag,
                  "teamId": teamID,
                  "suspend": setSuspend
                })
              }

              this.loaderIsActive = true;
              if (setSuspend) {
                this.loader_msg = "Suspending Team " + teamID + " Lab...";
              } else {
                this.loader_msg = "Resuming Team " + teamID + " Lab...";
              }
            await fetch(REST_API_ENDPOINT + ":" + REST_API_PORT  + "/admin/team/suspend", opts)
                  .then(res => res.json())
                  .then(res => {
                    if (Object.keys(res).length !== 0) {
                      this.error = res
                      this.loaderIsActive = false;
                      return
                    }
                    this.loaderIsActive = false;
                    if (setSuspend) {
                      this.success = "Team " + teamID + " Lab suspended!";
                    } else {
                      this.success = "Team " + teamID + " Lab resumed!";
                    }
                    this.listTeams();
                  }).catch(error => {
                    this.loaderIsActive = false;
                    this.error = error;
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