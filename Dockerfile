FROM node:14-alpine

WORKDIR /app

COPY ./package.json /app

RUN npm install

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start:prod"]
