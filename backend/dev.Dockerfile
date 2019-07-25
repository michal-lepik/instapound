FROM node:dubnium

WORKDIR /backend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install

COPY . .
COPY wait-for-it /usr/local/bin/

RUN chmod +x /usr/local/bin/wait-for-it

CMD wait-for-it ${DB_HOST}:${DB_PORT} && npm run dev
