# PASO 1 - Node.js
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# PASO 2 - NGINX
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "deamon off;" ]

# docker build -t docker-react-image:1.0 .
# docker run -p 4000:80 --name docker-react-container - docker-react-image:1.0