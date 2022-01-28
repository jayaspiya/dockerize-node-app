# Base Image
FROM node:16
# Create Working Directory
WORKDIR /usr/src/app
# Copy all the files to Docker Container
COPY . .
# Install all dependencies
RUN npm install
# Expose docker port
EXPOSE 3000
# Start Project
CMD [ "node", "app.js" ]