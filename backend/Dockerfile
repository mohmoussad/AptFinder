FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g sequelize-cli

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
