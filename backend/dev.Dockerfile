FROM node:dubnium

WORKDIR /backend

COPY ./package-lock.json ./
COPY ./package.json ./
COPY ./wait_for_db.sh ./

RUN npm install

COPY . .

RUN chmod +x wait_for_db.sh

CMD npm run dev
