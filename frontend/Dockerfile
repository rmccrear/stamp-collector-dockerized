# FROM node:18
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD ["npm", "start"]

# ./Dockerfile

# Start with this container from DockerHub.
FROM node:18 

# This is the directory we will use within the Docker container.
WORKDIR /app

# Copy only the files we need to run our project
COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src

# After copying files from our local workspace to the container, we need to install dependencies inside the container.
RUN npm install 

# open Docker's "firewall" to allow traffic from port 3000
EXPOSE 3000 

CMD ["npm", "start"]
