FROM node:dubnium

WORKDIR /backend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD npm run prod
