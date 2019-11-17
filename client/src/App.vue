<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <span>{{resp}}</span>
  </div>
</template>

<script>
  import {HelloRequest} from "proto_pb"; //the Js file contains the messages defined in the proto file
  import {GreeterClient} from "proto_grpc_web_pb"  //The Js file contains the service and the rpc call defined in the proto file

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      inputField: "",
      resp: "None"
    };
  },
  created: function() {
    this.client = new GreeterClient("http://localhost:8080", null, null);
    this.yayHello();
  },
  methods: {
    yayHello: function () {

      //Create an HelloRequest made in the proto file
      let getRequest = new HelloRequest();

      //Set the name defined in the proto file (Name with capital letter)
      getRequest.setName('World');

      //sayHello is the function declared in the `proto_grpc_web_pb.js` file. It is the function declared in the proto.proto file
      // it is not clear why it is not capital letter.
      this.client.sayHello(getRequest, {}, (err, response) => {
        this.resp = response;
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
