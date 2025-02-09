# 我的個人網站

此專案為一個使用 Next.js 開發的前端應用程式，展示了個人經歷、技術專長、工作經驗以及相關專案。以下是各個檔案與資料夾的簡要說明：

## 資料夾結構

- `src/app/`: 包含應用程式的主要頁面與元件。
  - `page.tsx`: 首頁的主要程式碼，展示個人自我介紹、技術專長、工作經驗等。
  - `news/page.tsx`: 新聞列表頁面，展示最新的新聞資訊。
- `src/data/`: 包含應用程式所需的資料。
  - `newsItems.ts`: 新聞項目的資料，包含標題、描述、日期、分類等資訊。
  - `projects.ts`: 專案資料，包含專案標題、描述、標籤、開始與結束日期等資訊。

## 主要功能

- **首頁展示**：展示個人介紹、技術專長、工作經驗等資訊。
- **專案展示**：展示個人參與的專案，並提供依標籤篩選的功能。
- **棒球新聞列表**：展示與我相關的最新棒球新聞資訊，並提供依日期、標題、分類排序的功能。

## 使用技術

- **Next.js**：React 框架，用於伺服器端渲染與靜態網站生成。
- **Tailwind CSS**
- **TypeScript**

## 如何執行

1. 安裝相依套件：
   ```bash
   npm install
   ```

2. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

3. 在瀏覽器中開啟 `http://localhost:3000` 查看應用程式。

## 使用 Dockerfile 部署在本機
執行以下指令，將專案打包成 Docker 映像檔，並且執行容器。
```bash
docker build -t my-personal-website .
docker run -p 3000:3000 my-personal-website
```
即可在本地端部署，並且透過 `http://localhost:3000` 查看應用程式。

## 部署於 Vercel 的步驟
1. 登入 Vercel 帳戶：
   如果沒有 Vercel 帳戶，去 [Vercel 官網](https://vercel.com/) 註冊並登入。

2. 專案連結到 Vercel：
   - 到 Vercel 的儀表板，點擊 "New Project"。
   - 選擇 Git 儲存庫平台（GitHub），並授權 Vercel 存取你存庫。
   - 在專案列表中找到並選擇個人網站專案儲存庫。

3. 設定專案：
   - 在 "Configure Project" 頁面，確認專案名稱和框架偵測（應該會自動偵測為 Next.js）。
   - 如果需要，確認並設定環境變數。

4. 部署專案：
   - 點擊 "Deploy" 按鈕，Vercel 會自動開始部署專案。
   - 部署完成後，你會看到專案的預覽連結，點擊它就可查看已部署的網站。

5. 設定自訂網域（可選）：
   - 如果你有自訂網域，可以在 Vercel 儀表板的專案設定中，把自訂網域指向本專案。
   - 按照 Vercel 提供的指示，更新 DNS 設定。


## 已部署網站
此專案已部署至 Vercel，並使用 Vercel 的 Edge Functions 提供即時的資訊更新。您可以透過以下連結查看已部署的網站：
[個人網站](https://my-personal-website-zack.vercel.app/)

