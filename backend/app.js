const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("server");
});

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
