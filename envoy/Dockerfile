FROM envoyproxy/envoy:latest
COPY envoy.yaml /etc/envoy/envoy.yaml
## do not forget to mount certificate files into docker image
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml --log-level debug
