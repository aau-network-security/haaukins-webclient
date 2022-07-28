<template>
    <div>
      <Navbar/>
      <div class="container" style="margin-top: 40px">
        <div v-if="this.error" class="alert alert-danger">{{this.error}}</div>
        <div class="card text-center">
          <div class="card-header">
            Haaukins API Creds
          </div>
          <div class="card-body">
            <h5 class="card-title">Credentials to launch secret challenges on API</h5>
            <p class="card-text"> <b style="font-size: x-large">username: {{ this.username }} </b><br> <b style="font-size: x-large">password:  {{ this.password }} </b>  </p>
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
  import { REST_API_ENDPOINT , REST_API_PORT  } from "../App";
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
        const opts = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},

        };
        fetch(REST_API_ENDPOINT + ":" + REST_API_PORT +'/admin/get/api/creds', opts)
            .then(response => response.json())
            .then(response => {
              if (response['message'] !== ""){
                this.error = response['message']
              }
              if (response['error'] !== ""){
                this.error = response['error']
              }
              this.username = response['username']
              this.password = response['password']
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