FROM node:dubnium

WORKDIR /frontend

COPY . .
RUN npm install && npm install -g @angular/cli@8.0.1

CMD ng serve --host 0.0.0.0
