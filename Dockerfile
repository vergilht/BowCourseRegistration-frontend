# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle the source code inside the Docker image
COPY . .

# If your frontend requires a build step, include it here
RUN npm run build

# Make port 3000 available to the world outside the container
EXPOSE 3000

# Serve the static build folder on the specified port
CMD [ "npm", "start" ]
