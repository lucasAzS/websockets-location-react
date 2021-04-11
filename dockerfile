FROM node:15.13.0-slim

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app