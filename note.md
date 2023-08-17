----------------------------------------------
Class seventyOne - 使用CRA進行開發
使用文件:App.js & Input.js

----------------------------------------------
Class seventyTwo - 載入外部套件(axios)
1.npm install axios
2.取得randomUser API
使用文件:App.js

----------------------------------------------
Class seventyThree - 啟用Sass功能
1.npm install sass
使用文件:App.js & all.scss

----------------------------------------------
Class seventyFour - 啟用Bootstrap
1.npm install bootstrap@5.3.1
2.到all.scss 內部@import "bootstrap/scss/bootstrap";
如何更改bootstrap預設樣式:
1.node_modules -> bootstrap -> _variables.scss複製到assets
2.更改primary顏色
3.all.sass 內部@import "bootstrap/scss/functions";
              @import "./variables";
使用文件:App.js & all.scss

----------------------------------------------
Class seventyFive - 編譯完整版本
1.進行編譯：npm run build
2.會建立出build檔, 另外獨立開啟build資料夾可以正常執行
使用文件:App.js

----------------------------------------------
Class seventySix - 環境變數說明
.env.development 只能在npm start時執行
.env.production 才會在npm run build過後的build檔執行
/*記得開啟build檔後是使用Go Live運行,不用再npm start!!*/
(範例productuon api: https://jsonplaceholder.typicode.com/users)
使用文件:App.js & .env.development & .env.production

----------------------------------------------
Class seventyOne - 快速部署到Github-Pages
1.左邊選項原始檔控制,讓變更的檔案暫存,訊息可以寫git init
2.去github建立儲存庫cra-sample
3.在VS Code內建終端機執行以下指令：
git remote add origin https://github.com/HaoShengChien/cra-sample.git
git branch -M main
git push -u origin main

使用文件:App.js


