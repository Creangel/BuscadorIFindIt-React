# Stage 1: Build React app
FROM node:current-alpine as builder

# Copy the react-frontend app files into the container
COPY . /app

WORKDIR /app/react-frontend

# Install Yarn
RUN apk add --no-cache yarn

# Install dependencies and build the React app by usinf yarn
RUN yarn install && yarn build

# Stage 2: Nginx to serve built files
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /app/react-frontend/build /usr/share/nginx/html

# Create alias files for main.*.js and main.*.css
RUN ln -s $(ls /usr/share/nginx/html/static/js/main.*.js | head -n 1) /usr/share/nginx/html/main.js \
    && ln -s $(ls /usr/share/nginx/html/static/css/main.*.css | head -n 1) /usr/share/nginx/html/main.css

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
                                              
