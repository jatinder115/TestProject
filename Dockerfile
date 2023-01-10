FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 4800
# required for docker desktop port mapping

CMD ["npm", "start"]