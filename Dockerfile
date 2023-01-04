# Version légère de Node
FROM node:12-alpine as build

# Dossier où l'app sera dockeriser
WORKDIR /app

# Copie de l'app dans le dossier app/
COPY . /app/

# Installation des node_modules dans l'app
RUN npm install

# Expose sur le port 8080
EXPOSE 8080

# Execute la commande node server.js
CMD [ "node", "server.js" ]
