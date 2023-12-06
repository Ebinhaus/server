const express = require("express");
const fs = require("fs");
app = express();
port = 5000;
cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
 res.send({ message: "Привет от Макса!!!"});
});
// создаем парсер для данных от клиента React
const urlencodedParser = express.urlencoded({extended: false});
// маршрут для POST - запроса формы
app.post("/find", urlencodedParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
 const username = req.body.username;
 const password = req.body.password;
 console.log("Username: " + username);
 console.log("Password: " + password);
 //запись в файл
 fs.writeFile('file.txt', username + " " + password, function(error){
 if(error) throw error; // ошибка чтения файла, если есть
 console.log('Данные успешно записаны в файл');
 res.send("Макс загрузил данные на сервер и записала в файл");
});
});
app.listen(port, () => console.log("Backend server live on " + port));