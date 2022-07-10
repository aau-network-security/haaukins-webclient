<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <div class="row">
              <div class="col-md-4 col-6"><h3 class="float-left font-weight-bold text-gray-800 mb-1">Events List</h3>

              </div>
              <div class="col">
                <div class="btn-group">
                  <button id="show-btn" @click="showModal" type="button" class="btn mr-2 btn-warning btn-secondary">Create Event</button>
                  <button id="show-challenge-btn" @click="showChallengeModal" type="button" class="btn mr-2 btn-haaukins  btn-secondary">Add Challenge</button>
                  <button id="announce-btn" @click="showAnnounceModal" type="button" class="btn btn-haaukins">Announce</button>

                </div>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle float-right" type="button" id="dropdownActionButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownActionButton">
                    <b-dropdown-item v-on:click="create_signup_key">Invite User</b-dropdown-item>
                    <b-dropdown-text>
                      <b-form-radio-group
                          v-model="userSelected"
                          :options="userOptions"
                          value-field="item"
                          text-field="name"
                      ></b-form-radio-group>
                    </b-dropdown-text>
                  </div>
                </div>
                <b-dropdown id="event-status" text="Event Status" class="float-right mr-2">
                  <b-dropdown-item-button v-on:click="listEvent(Running)">Running</b-dropdown-item-button>
                  <b-dropdown-item-button v-on:click="listEvent(Booked)">Booked</b-dropdown-item-button>
                  <b-dropdown-item-button v-on:click="listEvent(Suspended)">Suspended</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
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
                <div class="d-inline mr-2">{{loader_status}}</div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="top: 13px;">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class=" mt-1 mb-5" style="overflow: -moz-scrollbars-horizontal; overflow-x: scroll;">
                <table class="table table-hover table-striped">
                    <thead>
                        <th>Event Tag</th><th>Name</th><th>#_Team</th><th>#_Exercises</th><th>Availability</th><th>Capacity</th><th>Status</th><th>Action</th><th>Stop</th><th>Secret_Key</th><th>Created_By</th><th>Creation_Date</th><th>Finish_Date</th>
                    </thead>
                    <tbody v-if="events!=null">
                        <tr v-for="event in events" v-bind:key="event.tag">
                            <td><strong><router-link :to="{name: 'event', params: {tag: event.tag}}" class="text-haaukins" >{{event.tag}}</router-link></strong></td>
                            <td>{{event.name}}</td>
                            <td>{{event.teamCount}}</td>
                            <td>{{challenges_count(event.exercises)}}</td>
                            <td>{{event.availability}}</td>
                            <td>{{event.capacity}}</td>
                            <td>{{event_status(event.status)}}</td>
                            <td><button v-on:click="suspendResumeEvent(event.tag, event.status)" type="button" class="btn btn-warning btn-sm" :disabled="event.status == Booked">{{suspendResumeEventButton(event.status)}}</button></td>
                            <td><button v-on:click="stopEvent(event.tag)" type="button" class="btn btn-danger btn-sm">Stop</button></td>
                            <td>{{event.secretEvent}}</td>
                            <td>{{event.createdBy}}</td>
                            <td>{{beauty_date(event.creationTime)}}</td>
                            <td>{{beauty_date(event.finishTime)}}</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="12" class="text-center">No events founds...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="top-footer">
            <div class="mycontainer py-2">
                <div class="row text-center">
                    <div class="col-md-6">
                        <div v-if="!memoryError">
                            Memory {{memory}} %
                            <span class="icon" v-bind:class="{'text-success': memory <= 50, 'text-warning': memory < 75 && memory >50, 'text-danger': memory >= 75}">
                                <i class="fas fa-circle"></i>
                            </span>
                        </div>
                        <div v-else>
                            {{memoryError}}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div v-if="!cpuError">
                            CPU {{cpu}} %
                            <span class="icon" v-bind:class="{'text-success': cpu <= 50, 'text-danger': cpu >= 75, 'text-warning': cpu < 75 && cpu >50}">
                                <i class="fas fa-circle"></i>
                            </span>
                        </div>
                        <div v-else>
                            {{cpuError}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <EventModal @createEvent="createEvent" v-on:modalToHome="bookingValue" :memoryProp="this.memory"/>
        <ChalModal @addChallenge="addChallenge" :events="this.events" />
        <AnnounceModal @addAnnouncement="addAnnouncement" />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { 
      Empty } from "daemon_pb";
    import { daemonclient, API_ENDPOINT } from "../App";
    import EventModal from "../components/EventModal";
    import ChalModal from "../components/ChalModal";
    import AnnounceModal from "../components/AnnounceModal";

    export default {
        name: "Home",
        components: {ChalModal, EventModal, AnnounceModal, Footer, Navbar},
        data: function () {
            return {
                //isInviteUserSuperUser: false,
                events: null,
                error: null,
                success: null,
                status: null,
                loaderIsActive: false,
                loader_status: "Loading...",
                memory: "", cpu: "", memoryError: "", cpuError: "",
                Running: 0, Suspended: 1, Booked: 2,
                userOptions: [
                  { item: 'super_user', name: 'Super User' },
                  { item: 'np_user', name: 'NP User' },
                ],
                userSelected: ""
            }
        },
        created: function() {
            this.listEvent(this.Running);
            this.monitorHost()
        },
        methods: {
            event_status: function(status){
                switch (status) {
                    case this.Running:
                        return "RUNNING";
                    case this.Suspended:
                        return "SUSPENDED";
                    case this.Booked:
                        return "BOOKED";
                }
                return "ERROR";
            },
            suspendResumeEventButton: function(status) {
                switch (status) {
                    case this.Running:
                        return "Suspend";
                    case this.Suspended:
                        return "Resume";
                }
                return "Suspend";
            },
            showModal: function(){
                this.$bvModal.show('create-event-modal')
                setTimeout(function () {
                    let i = document.getElementById("eventStartTime");
                    i.className += "datepicker";
                    let j = document.getElementById("eventFinishTime");
                    j.className += "datepicker";
                },100);
            },
            showChallengeModal: function (){
              this.$bvModal.show('add-challenge-modal')
            },
            showAnnounceModal: function (){
              this.$bvModal.show('add-announcement-modal')
            }
            ,
            listEvent: function (status) {
              const opts = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},

              };
            
              fetch(API_ENDPOINT+'/admin/event/list/'+status, opts).then(response => response.json())
              .then(response => {
                if (response.message !== undefined) {
                  window.console.log("Unable to fetch -", response.message);
                  this.error = response.message;
                  return
                }
                this.events = response.events
                this.events.sort(function (a, b) {
                    return new Date(a.creationtime.replace(/\s/, 'T')) - new Date(b.creationtime.replace(/\s/, 'T'));
                })
              })
            },

             addChallenge: function (request) {
               const that = this
               that.loaderIsActive = true
               that.loader_status = "Adding challenges to event ... "
               this.$bvModal.hide('add-challenge-modal')
               const call = daemonclient.addChallenge(request, {Token: localStorage.getItem("user")});
               call.on('data', function (response) {
                 that.loader_status = response.getMessage()
                 // window.console.log(response)
               });
               call.on('error', function (error) {
                 that.loaderIsActive = false;
                 that.error = error
                 // window.console.log(error['message'])
               });
               call.on('end', function () {
                 that.loaderIsActive = false
                 if (that.error === null) {
                    that.success = "Challenges are added to event successfully !"
                 }
                 window.console.log("enddd")
               })
               call.on('status', function () {
                 that.loaderIsActive = false;
               });
             },
            addAnnouncement: function (request) {

            const opts = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                body: JSON.stringify(request)
                };

            fetch(API_ENDPOINT+'/admin/manage/notification', opts)
                .then(response => response.json())
                .then(response => {
                    if (response.response === undefined) {
                        window.console.log("Unable to fetch -", response.message);
                        this.error = response['response'];
                        return
                    }
                    this.success = response['response'];
                })
              this.$bvModal.hide('add-announcement-modal')
          
            },
            createEvent: function (opst) {
                const that = this

                if (this.memory <= 95){
                    this.loaderIsActive = true;
                    this.loader_status = "Creating event ... ";
                    this.$bvModal.hide('create-event-modal')

                    
                     fetch(API_ENDPOINT+'/admin/event/create',opst)
                        .then(response => response.json())
                        .then(response => {
                            window.console.log("response is : "+JSON.stringify(response))
                            this.listEvent(this.Running)
                            this.loaderIsActive = false;
                            this.success = response['Message']
                        }) 
                        .catch(error => {
                            this.loaderIsActive = false;
                            this.error = error
                            window.console.log(error['message'])
                        })  
                }else{
                    that.$bvModal.hide('create-event-modal')
                    this.error = "Error! Not enough memory on the Server."
                }


            },
            suspendResumeEvent: function (tag, status) {
                this.loaderIsActive = true
                const opts = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                    
                };
                let body = {
                    "eventTag": tag,
                    "suspend": false
                }

                if (status == this.Running){
                    body['suspend'] = true
                    opts['body'] = JSON.stringify(body)
                }
                else if (status == this.Suspended){
                    opts['body'] = JSON.stringify(body)
                }

                fetch(API_ENDPOINT+'/admin/event/suspend', opts)
                    .then(response => response.json())
                    .then(response => {
                        this.success = response['status'];
                        this.listEvent(this.Running)
                    })
                    .catch(error => {
                        this.loaderIsActive = false;
                        this.error = error
                        window.console.log(error['message'])
                    })
                    .finally(() => {
                        this.loaderIsActive = false
                    }) 
            },
            stopEvent: function (tag) {
                this.loaderIsActive = true
                this.loader_status = "Stopping " + tag + "..."
                const opts = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                    body: JSON.stringify({
                        "tag": tag
                    })
                };
                fetch(API_ENDPOINT+'/admin/event/stop', opts)
                .then(response => response.json())
                .then(response=> {
                    this.listEvent(this.Running)
                    this.loaderIsActive = false
                    this.success = response['status']
                })
                .catch(error => {
                    this.loaderIsActive = false;
                    this.error = error
                })
                .finally(() => {
                    this.loaderIsActive = false
                })
                    
            },
            bookingValue: function (value){
                if (value.ok) {
                    this.success = "Event" + value.event + "Successfully Booked!"
                }else{
                    this.error = "Error while booking the Event"
                }
            },
            challenges_count: function (challenges_string){
                const challenges = challenges_string.split(",");
                return challenges.length
            },
            beauty_date: function (string_date){
                let date = new Date(string_date.replace(/\s/, 'T'));
                return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
            },
            create_signup_key: function () {

              const opts = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
              }
              let body = {}
              if (this.userSelected == 'super_user') {
                  body['super_user'] = true
                }
              if (this.userSelected == 'np_user') {
                body['np_user'] = true
              }
              opts['body'] = JSON.stringify(body)

              fetch(API_ENDPOINT+'/admin/invite', opts)
                  .then(response => response.json())
                  .then(response => {
                    window.console.log('invite response '+ JSON.stringify(response))
                    if (response['message'] !== "" ){
                      // this is in case of token is invalidated
                      this.error = response['message']
                    }
                    if (response['error'] !== "") {
                      this.error = response['error']
                    }
                    this.success = response['key']
                  })
                  .catch(error => {
                      this.error = error
                   })
            
            },
            monitorHost: function () {
                const that = this;
                let getRequest = new Empty();

                const call = daemonclient.monitorHost(getRequest, {Token: localStorage.getItem("user")});

                call.on('data', function(response) {
                    //TODO nothign receive because cause the deamon dosen't send anything
                    let memory = response.getMemorypercent()
                    that.memory = memory.toFixed(2)
                    let cpu = response.getCpupercent()
                    that.cpu = cpu.toFixed(2)
                    that.memoryError = response.getMemoryreaderror()
                    that.cpuError = response.getCpureaderror()
                });
                call.on('error', function(e) {
                    that.error = e
                });
                call.on('status', function(status) {
                  if (status.details === 'token contains an invalid number of segments') {
                     that.$router.push({ path: 'login' })
                     window.localStorage.clear()
                  }
                    window.console.log(status)
                });
            },
         }
        }
</script>
<style>
    h3 {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    }
    .top-footer {
        position: absolute;
        bottom: 60px;
        width: 100%;
        /* Set the fixed height of the footer here */
        color: #000!important;
        font-weight: bold;
    }
    .top-footer > .mycontainer {
        background-color:  rgb(210,255,76)  !important;
        padding-right: 15px;
        padding-left: 15px;
    }
    .datepicker{
        width: 100%;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
    }
    .visibility{
        z-index: 100000;
    }
</style>