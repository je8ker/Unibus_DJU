const express = require("express");
const path = require("path"); // path 모듈 사용
// const myqsl = require("mysql");
const database = require("./database"); //db연결
const session = require("express-session");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken"); //jwt 추가
const app = express();
const PORT = process.env.PORT || 3000; //포트번호
const cors = require('cors');

//미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAMYo1+gacimt467lxNdZyevwfXkq2mOf", //암호화키
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, //https를 사용할때는 true로 변경
  })
);

//로그인 세션정보 확인
app.use("/userprofile", (req, res, next) => {
  // 세션에 사용자 정보가 없으면 로그인 페이지로 리다이렉트
  if (!req.session.user && !req.headers.authorization) {
    return res.redirect("/login");  // 로그인 페이지로 리다이렉트
  }

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, "1241412");
      req.session.user = decoded;
    } catch (err) {
      return res.redirect("/login");  // JWT 검증에 실패하면 로그인 페이지로 리다이렉트
    }
  }

  next();
});

//로그인
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // MySQL에서 사용자 정보 조회
  database.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("MySQL 쿼리 에러: " + err.stack);
        res.status(500).send("서버 에러");
        return;
      }

      // 사용자가 존재하면 로그인 성공
      if (results.length > 0) {
        //세션에 사용자 정보 저장
        res.status(200).send("로그인 성공");
        req.session.user = results[0];
      } else {
        res.status(401).send("로그인 실패");
      }
    }
  );
});

//문의사항
app.get('/api/inquiries', (req, res) => {
  // Inquiries 테이블에서 모든 데이터 조회
  database.query('SELECT * FROM inquiries', (err, results) => {
    if (err) {
      console.error('MYSQL 쿼리 에러:', err);
      res.status(500).json({ error: '서버 에러' });
    } else {
      res.json(results);
    }
  });
});

app.post('/api/inquiries', (req, res) => {
  const { name, email, message } = req.body;

  // Inquiry 테이블에 새로운 데이터 삽입
  const insertQuery = 'INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)';
  database.query(insertQuery, [name, email, message], (err, results) => {
    if (err) {
      console.error('Error submitting inquiry:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: '문의가 성공적으로 제출되었습니다.' });
      console.log("문의가 성공적으로 제출되었습니다.");  
    }
  });
});

//index.html 로드
app.use("/", express.static(path.join(__dirname, "../frontend/dist")));

//vue 앱 리다이렉션
// 기본 경로 '/'을 통해 빌드된 ../frontend/dist/index.html 파일을 로드시킨다.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
