FROM node:dubnium as builder

WORKDIR /frontend

COPY ./package-lock.json ./
COPY ./package.json ./
COPY ./angular.json ./

RUN npm install && npm install -g @angular/cli@8.0.1

COPY . .

RUN ng build --prod

FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /frontend/dist/frontend /frontend/build
