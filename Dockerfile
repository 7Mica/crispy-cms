FROM node:14-alpine

WORKDIR /app

RUN RUN npm install

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start:prod"]
