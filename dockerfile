FROM node:latest
WORKDIR /myapp
RUN npm install -g nodemon
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "dev" ]