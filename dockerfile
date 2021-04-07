FROM node:15.13.0-alpine3.10

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app