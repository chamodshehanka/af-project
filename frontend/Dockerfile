FROM node:12-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install react-scripts@3.4.1 -g --silent

RUN npm install

COPY ./ /app/

RUN npm run build

CMD ["npm", "start"]