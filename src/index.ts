import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/barbie", (req, res) => {
  res.send("PINK 💖");
});

app.get("/oppenheimer", (req, res) => {
  res.send("BOOM 💥");
});

app.listen(port, () => {
  return console.log("Server is listening on port: ", port);
});
