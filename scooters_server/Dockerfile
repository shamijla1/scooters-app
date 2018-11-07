
############### Dockerfile ##############
# Build ->
#   docker build . -t local/scooters_server:latest
# Run ->
#   docker run -p 5000:5000 --name scooters_server local/scooters_server:latest
# Stop ->
#   docker stop scooters_server
##########################################

FROM node:8.11.3-alpine
WORKDIR /usr/src/app

# docker build should not rerun npm install unless package.json changes
# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/ 
COPY package.json .

# skip red stdout texts, do not install devDependencies
# adding curl for health check in Docker-compose
RUN npm install --loglevel warn --production && \
	apk update && \
	apk add curl

COPY . .

EXPOSE 5000

# node index.js instead of npm start to reduce number of processes
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
CMD [ "node", "index.js" ]