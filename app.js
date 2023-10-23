const express = require("express");
const app = express();
const db = require("./models");
const router = require("./routers");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); // 모든 도메인에 대해 액세스 허용 (*)
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 허용되는 HTTP 메서드 설정
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 허용되는 헤더 설정
//   next();
// });
app.use(cors());
app.use("/api", router);

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db 연결 성공!");
  })
  .catch(console.error);

app.listen(9980, () => {
  console.log("잘 된다니까");
});
