FROM node:16-alpine

# 앱 디렉토리 생성
WORKDIR /app

# 앱 의존성 설치
COPY package*.json ./

RUN npm install --silent
RUN npm i -g pm2 --silent

# 앱 소스 추가
COPY . .

#Production mode
CMD [ "npm", "start" ]

EXPOSE 3000