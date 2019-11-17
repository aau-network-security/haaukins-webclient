# My first Vue
1. to create vue project from base follow this link: `https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d`

## Proto
1. create the pb.go file 
``` protoc -I proto/ proto/proto.proto --go_out=plugins=grpc:proto ```




## Server



## Client


### the entire sequence of steps:
- Make the envoy base project
```bash
vue create hello-world
```
- Create the proto
```proto
protoc -I proto/ proto/proto.proto --go_out=plugins=grpc:proto
```

```proto
cd proto
protoc proto.proto --js_out=import_style=commonjs,binary:../client --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../client
```
   
- Create the Server
- Create envoy
- Deal with the client:
 - Move the js_proto file inside the node_modules and start to modify the App.vue file
```bash
cd client
npm run serve
```
- start the envoy
```bash

```