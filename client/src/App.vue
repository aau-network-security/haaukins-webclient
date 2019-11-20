<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <input v-model="inputField" v-on:keyup.enter="listEvent()" placeholder="Your Name..">
    <button @click="login()" class="btn btn-primary">login</button>
    <button @click="listEvent()" class="btn btn-primary">List events</button>
    <br>
    <span>{{resp}}</span>
    <span>{{token}}</span>
    <span>{{err}}</span>
  </div>
</template>

<script>
  import {LoginUserRequest, ListEventsRequest} from "daemon_pb"; //the Js file contains the messages defined in the proto file
  import {DaemonClient} from "daemon_grpc_web_pb"  //The Js file contains the service and the rpc call defined in the proto file

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      inputField: "",
      resp: "aaa",
      err: "",
      dummy: "",
      token: "",
    };
  },
  created: function() {
    this.client = new DaemonClient("http://localhost:8080", null, null);
    //this.login();
  },
  methods: {
    login: function () {

      //Create an HelloRequest made in the proto file
      let getRequest = new LoginUserRequest();
      getRequest.setUsername("gian");
      getRequest.setPassword("bomber1");

      //sayHello is the function declared in the `proto_grpc_web_pb.js` file. It is the function declared in the proto.proto file
      // it is not clear why it is not capital letter.
      this.client.loginUser(getRequest, {}, (err, response) => {
        this.err = err;
        this.token = response;
      });
    },
    listEvent: function () {
      let getRequest = new ListEventsRequest();
      let token = this.token;
      this.client.listEvents(getRequest, {Token: token}, (err, response) => {
        this.resp = response;
        this.err = err;
        window.console.log(response)
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
