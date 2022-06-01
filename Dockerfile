# pull image node
FROM node
# définir le rép de travail
WORKDIR /app
# installer les dependencies du app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# ajouter l'app
COPY . .
EXPOSE 3000
# start l'app
CMD ["npm","start"]