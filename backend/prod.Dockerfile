FROM node:dubnium

WORKDIR /backend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run tsc

CMD npm run prod
