FROM node:dubnium

WORKDIR /frontend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install -g @angular/cli@8.0.1
RUN npm install

COPY . .

CMD ng serve --host 0.0.0.0
