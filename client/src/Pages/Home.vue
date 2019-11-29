<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 100px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Events List</h3>
            <button data-toggle="modal" data-target="#eventModal" type="button" id="create-event" class="btn btn-haaukins float-right">Create Event</button>
            <div class="clearfix"></div>
            <hr>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <div v-if="success" class="alert alert-success">{{success}}</div>
            <div class="table-responsive mt-1">
                <table class="table table-hover table-striped">
                    <thead>
                        <th>Event Tag</th><th>Name</th><th>Team</th><th>Exercises</th><th>Capacity</th><th>Creation Date</th><th>Action</th>
                    </thead>
                    <tbody v-if="events">
                        <tr v-for="event in events.eventsList" v-bind:key="event.tag">
                            <td><router-link :to="{name: 'event', params: {tag: event.tag}}" >{{event.tag}}</router-link></td>
                            <td>{{event.name}}</td>
                            <td>{{event.teamcount}}</td>
                            <td>{{event.exercisecount}}</td>
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
    import { ListEventsRequest } from "daemon_pb";
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
                token: localStorage.getItem("user")
            }
        },
        created: function() {
            this.listEvent();
        },
        methods: {
            listEvent: function () {
                let getRequest = new ListEventsRequest();
                daemonclient.listEvents(getRequest, {Token: this.token}, (err, response) => {
                    if (err == null) {
                        this.events = response.toObject()
                    }else{
                        this.error = err;
                    }
                });
            },
            createEvent: function (request) {
                this.success = "done!"
                //Create the function that create the event
                // daemonclient.createEvent()
                window.console.log(request);
            },
            stopEvent: function (tag) {
                //create function that stop an event
                alert(tag)
            }
        }
    }
</script>
<style>
    h3 {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    }
</style>
