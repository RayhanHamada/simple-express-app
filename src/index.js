const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.end("Berhasil Coeg");
});

app.listen(PORT, () => console.log(`server berjalan pada port ${PORT}`));
