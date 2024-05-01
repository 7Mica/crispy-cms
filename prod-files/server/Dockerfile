FROM node:14-alpine

WORKDIR /app

COPY ../.. /app

RUN npm install

RUN npm run build

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start:prod"]
