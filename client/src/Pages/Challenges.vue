<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 100px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Challenges List</h3>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <div class="table-responsive mt-1">
                <table class="table table-hover table-striped">
                    <thead>
                        <th>Challenge Tag</th><th>Name</th><th>Docker Image</th><th>vBox Image</th>
                    </thead>
                    <tbody v-if="challenges">
                        <tr v-for="challenge in challenges.exercisesList" v-bind:key="challenge.tagsList[0]">
                            <td>{{challenge.tagsList[0]}}</td>
                            <td>{{challenge.name}}</td>
                            <td>{{challenge.dockerimagecount}}</td>
                            <td>{{challenge.vboximagecount}}</td>
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
    import { Empty } from "daemon_pb";
    import { daemonclient } from "../App";

    export default {
        name: "Challenges",
        components: {Footer, Navbar},
        data: function () {
            return {
                challenges: null,
                error: null
            }
        },
        created: function() {
            this.listChallenges();
        },
        methods: {
            listChallenges: function () {
                let getRequest = new Empty();
                daemonclient.listExercises(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    this.challenges = response.toObject()
                });
            }
        }
    }
</script>

<style scoped>
    h3 {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    }
</style>