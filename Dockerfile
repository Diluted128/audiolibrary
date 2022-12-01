FROM node:14.21-alpine3.15
WORKDIR /app
COPY node-backend/package*.json .
RUN npm install --quiet
COPY node-backend/. .
EXPOSE 3000