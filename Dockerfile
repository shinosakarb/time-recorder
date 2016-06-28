FROM node:6-slim
EXPOSE 4000

COPY . /app
WORKDIR /app

RUN npm install
CMD npm start
