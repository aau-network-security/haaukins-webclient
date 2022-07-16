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
          <tbody v-if="this.infos">
          <tr v-for="(info,count) in this.infos" v-bind:key="info['tag']">
            <td>{{count + 1}}</td>
            <td>{{info['challengeName']}}</td>
            <td>{{info['challengeTag']}}</td>
            <td class="user-select-all" style="text-align: left; font-weight: bold">{{info['challengeFlag']}}</td>
            <td><button class="btn btn-warning btn-sm m-btn-responsive" v-on:click="solveChallenge(info['challengeTag'])">Solve it !</button></td>
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
import { API_ENDPOINT } from "../App";

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
      this.error =null
      this.success = null


      const opts = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')}
      };

      fetch(API_ENDPOINT+'/admin/team/'+this.$route.params.tag+'/'+this.$route.params.id+'/challenges', opts)
          .then (response => response.json())
          .then(response => {
            window.console.log('Team information' +JSON.stringify(response))
            if (response['message'] !== "") {
              this.error = response['message']
            }
            this.infos = response['flags']
          });


    },

    solveChallenge: function (chalTag) {

      var x = confirm("Are you sure you want to solve challenge " + chalTag + " for team "+ this.$route.params.id+ " ?");
      if (x) {

        const opts = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
          body: JSON.stringify({
            'eventTag': this.$route.params.tag,
            'challengeTag': chalTag,
            'teamID': this.$route.params.id,
          })
        };
        fetch(API_ENDPOINT+'/admin/challenge/solve', opts)
            .then(response => response.json())
            .then(response => {
              window.console.log('solve challenge response: '+ JSON.stringify(response))
              if (response['message'] !== "") {
                  this.error = response['message']
              }
              this.success = response['status']
            })

      }
    },
  }
}
</script>

<style scoped>

</style>