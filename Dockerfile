FROM node:latest

WORKDIR /app

COPY package.json /app/
COPY package.lock.json /app/

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 80

CMD ["nginx", "-s", "deamonoff"]