<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <h3 class="float-left font-weight-bold text-gray-800 mb-1">Team {{this.$route.params.id}} Challenges</h3>
      <router-link :to="{name: 'event', params: {tag: this.$route.params.tag}}" class="btn btn-sm btn-secondary text-white float-right">Back</router-link>
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
      <div class="table-responsive">
        <table class="table mx-auto table-hover table-striped" id="teamsEventTableInfo" cellspacing="0" style="table-layout: auto; width: 100%">
          <thead>
          <tr class="text-center">
            <td> </td><td class="text-haaukins" style="text-align: left; font-weight: bolder">Name</td><td style="text-align: left; font-weight: bolder"> Tag</td><td style="text-align: left; font-weight: bolder" > Flag</td><td style="text-align: left; font-weight: bolder">Action</td>
          </tr>
          </thead>
          <tbody v-if="infos">
          <tr v-for="(info,count) in infos.flagsList" v-bind:key="info.tag">
            <td>{{count + 1}}</td>
            <td>{{info.challengename}}</td>
            <td>{{info.challengetag}}</td>
            <td class="label info" style="text-align: left; font-weight: bold">{{info.challengeflag}}</td>
            <td><button class="btn btn-warning btn-sm m-btn-responsive" v-on:click="solveChallenge(info.challengetag)">Solve it !</button></td>
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
import { daemonclient } from "../App";
import { GetTeamInfoRequest, SolveChallengeRequest } from "daemon_pb"

export default {
  name: "FlagsAction",
  components: {Navbar, Footer},
  data: function () {
    return {
      error: null,
      success: null,
      infos: null,
    }
  },
  created() {
    this.getTeamChallenges();
  },
  methods: {
    getTeamChallenges () {
      let getRequest = new GetTeamInfoRequest();
      this.error =null
      this.success = null
      getRequest.setEventtag(this.$route.params.tag);
      getRequest.setTeamid(this.$route.params.id)

     daemonclient.getTeamChals(getRequest,{Token: localStorage.getItem("user")}, (err, response) => {
        if (err == null) {
          // window.console.log(response)
          this.infos = response.toObject()
        }else{
          this.error = err["message"];
        }
      });


    },

    solveChallenge: function (chalTag) {
      let getRequest = new SolveChallengeRequest()
      getRequest.setEventtag(this.$route.params.tag);
      getRequest.setTeamid(this.$route.params.id)
      getRequest.setChallengetag(chalTag)
      this.error = null
      this.success = null
        daemonclient.solveChallenge(getRequest,{Token: localStorage.getItem("user")}, (err, response) => {
        if (err == null) {
          this.success = response.toObject().status
        }else{
          this.error =  err["message"];
        }
      });
    },
  }
}
</script>

<style scoped>

</style>