const express = require("express");
const mysql2 = require("mysql2");
const app = express();

const dbConfig = {
  database: "abe-garaj-demo",
  user: "abeUser",
  password: "abeUser",
  host: "localhost",
  connectionLimit: 10,
};
const connection = mysql2.createConnection(dbConfig);

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

// route
app.get("/", function (req, res) {
  console.log("server");
});
const PORT = 8800;
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
