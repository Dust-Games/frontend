FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chown -R node /app/node_modules

# новое
RUN mkdir -p node_modules/.vite && chmod -R 777 node_modules/.vite

# новое
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev-docker"]

# FROM node:alpine3.17

# RUN mkdir /app && chown node:node /app
# WORKDIR /app

# USER node
# COPY --chown=node:node package.json package-lock.json* ./
# # COPY package*.json ./

# RUN npm install

# COPY --chown=node:node . .
# # COPY . .

# EXPOSE 5173

# ENTRYPOINT npm run dev-docker
# # CMD ["npm", "run", "dev-docker"]