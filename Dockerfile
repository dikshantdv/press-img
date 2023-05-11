FROM node:16-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm run export

FROM nginx
COPY --from=build /app/out /usr/share/nginx/html