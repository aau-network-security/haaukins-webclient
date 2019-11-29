<template>
    <div>
        <Navbar/>
            <div class="container" style="margin-top: 100px">
                <h3 class="float-left font-weight-bold text-gray-800 mb-1">Event {{this.$route.params.tag}}</h3>
                <button data-toggle="modal" data-target="#eventModal" type="button" id="create-event" class="btn btn-haaukins float-right">Create Event</button>
                <div class="clearfix"></div>
                <hr>
                <div v-if="error" class="alert alert-danger">{{error}}</div>
                <div v-if="success" class="alert alert-success">{{success}}</div>
                <div>{{teams}}</div>
                <div>{{eventStatus}}</div>
            </div>
            <Footer/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { daemonclient } from "../App";
    import { ListEventTeamsRequest, RestartTeamLabRequest } from "daemon_pb"

    export default {
        name: "Teams",
        components: {Footer, Navbar},
        data: function () {
            return {
                error: null,
                success: null,
                teams: null,
                eventStatus: null
            }
        },
        created() {
            this.listTeams();
            this.restartTeamLab();
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
                getRequest.setEventtag(this.$route.params.tag);
                getRequest.setTeamid('f5e0e0e8')
                daemonclient.restartTeamLab(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    if (err == null) {
                        this.eventStatus = response.toObject();
                        window.console.log(this.eventStatus)
                    }else{
                        this.error = err['metadata']['grpc-message'];
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>