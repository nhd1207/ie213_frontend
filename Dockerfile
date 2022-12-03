FROM node:16 as build
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:16-alpine
RUN mkdir /app && cd /app
RUN npm i -g serve
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build
CMD ["serve", "-s", "build"]