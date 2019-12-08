FROM node:12-alpine

WORKDIR ~/src/pithy-nodejs/api
ADD api .
RUN npm i
EXPOSE 8000
ENTRYPOINT node app.js
