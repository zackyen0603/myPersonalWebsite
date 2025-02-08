FROM node:18

# 設定工作目錄為 /app
WORKDIR /app

# 複製 package.json 及相關檔案後安裝依賴
COPY package.json package-lock.json ./
RUN npm install

# 複製所有專案檔案
COPY . .

# 建立 Next.js 應用
RUN npm run build

EXPOSE 3000

# 啟動開發模式 (或 production 模式)
# CMD ["npm", "run", "dev"]

CMD ["npm", "run", "start"]