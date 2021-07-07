FROM node:14.17.0-alpine

WORKDIR /Chall-rick-and-morty

ENV PATH /Chall-rick-and-morty/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]