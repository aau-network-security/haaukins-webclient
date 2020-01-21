# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src src
COPY vue.config.js ./
COPY *.pem ./
COPY daemon*.js node_modules/
COPY public public
RUN npm run build

# production stage
FROM nginx:1.16.0-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./*.pem /etc/nginx/
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8003 
CMD ["nginx", "-g", "daemon off;"]
