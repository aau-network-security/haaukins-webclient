<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 100px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Frontends List</h3>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <div class="table-responsive mt-1">
                <table class="table table-hover table-striped">
                    <thead>
                    <th>Image</th><th>Size</th><th>Memory (MB)</th><th>cpu</th>
                    </thead>
                    <tbody v-if="frontends">
                        <tr v-for="frontend in frontends.frontendsList" v-bind:key="frontend.image">
                            <td>{{frontend.image}}</td>
                            <td>{{frontend.size}}</td>
                            <td>{{frontend.memorymb}}</td>
                            <td>{{frontend.cpu}}</td>
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
        name: "VMs",
        components: {Footer, Navbar},
        data: function () {
            return {
                frontends: null,
                error: null
            }
        },
        created: function() {
            this.listFrontends();
        },
        methods: {
            listFrontends: function () {
                let getRequest = new Empty();
                daemonclient.listFrontends(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    this.frontends = response.toObject()
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