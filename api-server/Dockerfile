FROM node:18

WORKDIR /app

ENV PORT=3001

COPY ./package.json ./package.json
COPY ./stamps.json ./stamps.json
COPY ./index.js ./index.js


RUN npm install

EXPOSE 3001

CMD ["node", "index.js"]
