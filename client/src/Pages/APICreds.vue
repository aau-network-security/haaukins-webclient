<template>
    <div>
      <Navbar/>
      <div class="container" style="margin-top: 40px">
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <div class="card text-center">
          <div class="card-header">
            Haaukins API Creds
          </div>
          <div class="card-body">
            <h5 class="card-title">Credentials to launch secret challenges on API</h5>
            <p class="card-text"> <b style="font-size: x-large">username: {{ username }} </b><br> <b style="font-size: x-large">password:  {{ password }} </b>  </p>
            <a href="https://api.haaukins.com:3333" class="card-link">API Link</a>
          </div>
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
    name: "APICreds",
    components:{Footer, Navbar},
    data: function (){
      return {
        error: null,
        username: null,
        password: null
      }
    },
    created: function (){
        this.getAPICreds();
    },
    methods: {
      getAPICreds: function () {
        let getRequest = new Empty();
        daemonclient.getAPICreds(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
          this.error = err;
          if (err.message === 'token contains an invalid number of segments') {
            this.$router.push({ path: 'login' })
            window.localStorage.clear()
          }
          this.username = response.getUsername()
          this.password = response.getPassword()
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