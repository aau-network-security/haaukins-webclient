### Run the client

```bash
$ cd client
$ docker build -t webclient .
$ docker run -d -p 8001:8000 webclient:latest
```

browse ```http://localhost:8001/```