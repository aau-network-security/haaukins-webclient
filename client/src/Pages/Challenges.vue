<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Challenges List</h3>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <b-table
                    v-if="challenges"
                    striped
                    :items="challenges.exercisesList"
                    :fields="challengesFields"
            >
                <template v-slot:cell(tagsList)="row">
                    {{ row.item.tagsList[0] }}  {{ row.item.tagsList[1] }}
                </template>

                <template v-slot:cell(secret)="row">
                  {{ row.item.secret }}
                </template>

               <template v-slot:cell(exerciseinfoList)="row">
                    <b-button size="sm" @click="row.toggleDetails">
                        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                    </b-button>
                </template>

               <template v-slot:row-details="row">
                    <b-card>
                        <b-table
                                class="text-center"
                                head-variant="dark"
                                small
                                :items="row.item.exerciseinfoList"
                        >

                        </b-table>
                    </b-card>
                </template>
            </b-table>
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
                error: null,
                challengesFields: [
                    {key:"tagsList", label:"Tags List"},
                    {key:"name", label:"Name"},
                    {key:"secret", label:"Secret"},
                    {key:"dockerimagecount", label:"#_Docker"},
                    {key:"vboximagecount", label:"#_VBox"},
                    {key:"exerciseinfoList", label:"Challenges"}
                ],
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