# Upgraded versions start from 1.13 of envoy
# creates issue on safari browser,
# related issue can be viewed over here https://github.com/envoyproxy/envoy/issues/10514
FROM envoyproxy/envoy:v1.12.0
COPY envoy.yaml /etc/envoy/envoy.yaml
## do not forget to mount certificate files into docker image
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml --log-level debug
