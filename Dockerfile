FROM node:20.16.0-slim
WORKDIR /user/src/app
COPY . .
RUN npm install
RUN npm run build
USER node
CMD ["npm","run","start:prod"]