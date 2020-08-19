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
RUN NODE_ENV=production npm run build


# production stage
FROM nginx:1.16.0-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE  8003
CMD ["nginx", "-g", "daemon off;"]


# tried however did not work for routing pages :\
##CMD ["node","./src/serve.js"]
##ENTRYPOINT ["http-server","./dist/", "--cors", "--ssl","--cert", "/etc/certs/domain.cert.pem", "--key", "/etc/certs/private.key.pem","-p", "8003" ]
