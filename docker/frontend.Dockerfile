FROM node:lts-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chown -R node /app/node_modules

EXPOSE 5173

CMD ["npm", "run", "dev-docker"]