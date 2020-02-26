<template>
    <div>
        <div id="loader" v-bind:class="{ 'show-loader': loaderIsActive }">
            <div class="loader-content p-3 text-center">
                <div class="d-inline mr-2">
                    <img class="loading-logo" src="../assets/bluelogo.png" width="60" height="60">
                </div>
                <div class="d-inline mr-2">{{loader_status}}</div>
            </div>
        </div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Events List</h3>
            <b-button id="show-btn" @click="showModal" class="btn-haaukins float-right">Create Event</b-button>
            <b-button v-on:click="update_exercises_file" class="btn-secondary float-right mr-2">Update Exercise file</b-button>
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
            <div v-if="createEventProgress" class="alert alert-warning alert-dismissible">
                <div class="d-inline mr-2">
                    <img class="loading-logo" src="../assets/bluelogo.png" width="50" height="50">
                </div>
                <div class="d-inline mr-2">Creation Event in progress...</div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="table-responsive mt-1">
                <table class="table table-hover table-striped">
                    <thead>
                        <th>Event_Tag</th><th>Name</th><th>#_Team</th><th>#_Exercises</th><th>Capacity</th><th>Creation_Date</th><th>Finish_Date</th><th>Action</th>
                    </thead>
                    <tbody v-if="events!=null">
                        <tr v-for="event in events.eventsList" v-bind:key="event.tag">
                            <td><strong><router-link :to="{name: 'event', params: {tag: event.tag}}" class="text-haaukins" >{{event.tag}}</router-link></strong></td>
                            <td>{{event.name}}</td>
                            <td>{{event.teamcount}}</td>
                            <td>{{challenges_count(event.exercises)}}</td>
                            <td>{{event.capacity}}</td>
                            <td>{{beaut_date(event.creationtime)}}</td>
                            <td>{{beaut_date(event.finishtime)}}</td>
                            <td><button v-on:click="stopEvent(event.tag)" type="button" class="btn btn-danger btn-sm">Stop</button></td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="8" class="text-center">No events founds...</td>
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

    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { ListEventsRequest, StopEventRequest, Empty } from "daemon_pb";
    import { daemonclient } from "../App";
    import EventModal from "../components/EventModal";

    export default {
        name: "Home",
        components: { EventModal, Footer, Navbar},
        data: function () {
            return {
                events: null,
                error: null,
                success: null,
                submitted: false,
                status: null,
                stopEventResponse: null,
                loaderIsActive: false,
                loader_status: "", createEventProgress: false,
                memory: "", cpu: "", memoryError: "", cpuError: ""
            }
        },
        created: function() {
            this.listEvent();
            this.monitorHost()
        },
        methods: {
            showModal: function(){
                this.$bvModal.show('create-event-modal')
                setTimeout(function () {
                    let i = document.getElementById("eventStartTime");
                    i.className += "datepicker";
                    let j = document.getElementById("eventFinishTime");
                    j.className += "datepicker";
                },100);
            },
            listEvent: function () {
                let getRequest = new ListEventsRequest();
                daemonclient.listEvents(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    if (err == null) {
                        this.events = response.toObject()
                    }else{
                        this.error = err;
                    }
                });
            },
            createEvent: function (request) {
                const that = this

                if (this.memory <= 85){
                    this.createEventProgress = true;
                    this.$bvModal.hide('create-event-modal')

                    const call = daemonclient.createEvent(request, {Token: localStorage.getItem("user")});

                    call.on('data', function(response) {
                        //TODO nothign receive because cause the deamon dosen't send anything
                        window.console.log(response)
                    });
                    call.on('error', function(e) {
                        that.error = e
                    });
                    call.on('status', function(status) {
                        that.createEventProgress = false;
                        if (status['metadata']['grpc-message'] == "") {
                            that.success = "Event Successfully Created!"
                            that.listEvent()
                        }else{
                            that.error = status['metadata']['grpc-message']
                        }
                    });
                }else{
                    that.$bvModal.hide('create-event-modal')
                    this.error = "Error! Not enough memory on the Server."
                }


            },
            stopEvent: function (tag) {
                const that = this
                this.loaderIsActive = true
                this.loader_status = "Stopping " + tag + "..."

                let getRequest = new StopEventRequest();
                getRequest.setTag(tag)

                const call = daemonclient.stopEvent(getRequest, {Token: localStorage.getItem("user")});


                call.on('data', function(response) {
                    //TODO nothign receive because cause the deamon dosen't send anything
                    window.console.log(response)
                });
                call.on('error', function(e) {
                    that.error = e
                });
                call.on('status', function(status) {
                    that.loaderIsActive = false
                    if (status['metadata']['grpc-message'] == "") {
                        that.success = "Event Successfully Stop!"
                        that.listEvent()
                    }else{
                        that.error = "Error! Try again.."
                    }
                });
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
            beaut_date: function (string_date){
                let date = new Date(string_date);
                return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
            },
            update_exercises_file: function () {
                let getRequest = new Empty();
                daemonclient.updateExercisesFile(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    this.success = response.getMsg()
                });
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