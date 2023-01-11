FROM node

WORKDIR /app

RUN yarn global add @nestjs/cli
COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile
COPY . .

RUN nest build

CMD ["node", "dist/main.js"]
