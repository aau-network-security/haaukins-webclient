#!/usr/bin/env bash
cd proto/ && protoc daemon.proto --js_out=import_style=commonjs,binary:../client --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../client

# add this value to proto file
# option go_package = "github.com/aau-network-security/haaukins/daemon/proto";

# install
# go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
# go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
# go get -u google.golang.org/grpc