FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

RUN yarn build

# USER next.js

EXPOSE 3000

CMD [ "yarn", "start" ]