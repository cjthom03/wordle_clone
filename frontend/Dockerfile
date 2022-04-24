# Build stage 1: Compile all the assets for front end consumption
FROM node:17-alpine as compiler

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production

# add app
COPY . ./

# build the app
RUN yarn build


# Build stage 2: Start the server
FROM nginx
COPY --from=compiler /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=compiler /app/dist /app/dist
