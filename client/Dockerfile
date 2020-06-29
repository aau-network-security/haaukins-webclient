# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src src

# DO NOT FORGET TO SET VUE_APP_SLACK_API_KEY ENVIRONMENT VARIABLE IN .env file
# in production, otherwise slack notification cannot reach
COPY daemon*.js node_modules/
COPY public public
RUN npm run build
RUN npm install --global http-server
EXPOSE 80

CMD ["http-server","dist", "-p", "8003"]
