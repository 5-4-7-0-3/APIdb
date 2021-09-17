FROM node

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.ts"]

