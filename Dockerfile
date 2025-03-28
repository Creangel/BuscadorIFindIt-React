# Use the official Node.js image with Alpine
FROM node:current-alpine

# Set the working directory
WORKDIR /app

# Copy the entire app into the container
COPY . /app

# Make sure the script has execution permissions
RUN chmod +x build-buscador-ifindit-react.sh

CMD ["/bin/sh", "-c", "/app/build-buscador-ifindit-react.sh && tail -f /dev/null"]