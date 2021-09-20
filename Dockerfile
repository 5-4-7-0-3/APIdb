FROM node:lts-alpine

WORKDIR /api

COPY . .

RUN npm install
# RUN npm run tsc:w

EXPOSE 27017

CMD ["nodemon", "index.ts"]

