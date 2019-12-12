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
        <div class="container" style="margin-top: 100px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Events List</h3>
            <button data-toggle="modal" data-target="#eventModal" type="button" id="create-event" class="btn btn-haaukins float-right">Create Event</button>
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
            <div class="table-responsive mt-1">
                <table class="table table-hover table-striped">
                    <thead>
                        <th>Event_Tag</th><th>Name</th><th>#_Team</th><th>#_Exercises</th><th>Capacity</th><th>Creation_Date</th><th>Action</th>
                    </thead>
                    <tbody v-if="events">
                        <tr v-for="event in events.eventsList" v-bind:key="event.tag">
                            <td><strong><router-link :to="{name: 'event', params: {tag: event.tag}}" class="text-haaukins" >{{event.tag}}</router-link></strong></td>
                            <td>{{event.name}}</td>
                            <td>{{event.teamcount}}</td>
                            <td>{{challenges_count(event.exercises)}}</td>
                            <td>{{event.capacity}}</td>
                            <td>{{event.creationtime}}</td>
                            <td><button v-on:click="stopEvent(event.tag)" type="button" class="btn btn-danger btn-sm">Stop</button></td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6" class="text-center">No events founds...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        <modal-event @createEvent="createEvent"/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { ListEventsRequest, StopEventRequest } from "daemon_pb";
    import { daemonclient } from "../App";
    import ModalEvent from "../components/Modal-Event";

    export default {
        name: "Home",
        components: {ModalEvent, Footer, Navbar},
        data: function () {
            return {
                events: null,
                error: null,
                success: null,
                submitted: false,
                status: null,
                stopEventResponse: null,
                loaderIsActive: false,
                loader_status: ""
            }
        },
        created: function() {
            this.listEvent();
        },
        methods: {
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
                this.loaderIsActive = true
                this.loader_status = "Creating Event..."

                const call = daemonclient.createEvent(request, {Token: localStorage.getItem("user")});

                call.on('data', function(response) {
                    //TODO nothign receive because cause the deamon dosen't send anything
                    window.console.log(response)
                });
                call.on('end', function() {
                    //TODO to decide if keep it or not
                    window.console.log("enddd")
                });
                call.on('error', function(e) {
                    that.error = e
                });
                call.on('status', function(status) {
                    that.loaderIsActive = false

                    //todo Modify it, its just needed to dismiss the modal (i still dont know how)
                    window.location.reload()
                    //CHECK HOW TO HIDE MODAL WITHOUT JQUERY
                    if (status['metadata']['grpc-message'] == "") {
                        that.success = "Event Successfully Created!"
                        that.listEvent()
                    }else{
                        that.error = "adaaadadada"
                    }
                });
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
                call.on('end', function() {
                    //TODO to decide if keep it or not
                    window.console.log("enddd")
                });
                call.on('error', function(e) {
                    that.error = e
                });
                call.on('status', function(status) {
                    that.loaderIsActive = false
                    if (status['metadata']['grpc-message'] == "") {
                        that.success = "Event Successfully Stop!"
                        that.listEvent()
                    }
                });
            },
            challenges_count (challenges_string) {
                const challenges = challenges_string.split(",");
                return challenges.length
            }
        }
    }
</script>
<style>
    h3 {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    }
</style>
