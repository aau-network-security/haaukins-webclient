### Run the client

```bash
$ cd client
$ docker build -t webclient .
$ docker run -d -p 8081:8080 webclient:latest
```

browse ```http://localhost:8081/```