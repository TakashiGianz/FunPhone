import express from "express";
import cors from "cors"
const app = express();
const port = 3000;

app.use(cors())

app.use("/", express.static("console"));
app.use("/mobile", express.static("gamepad"));

app.get("/api", (req, res) => {
  res.json({ sala: "12345678" });
});

app.post("/api", (req, res) => {
  res.json({ nome: "Post" });
});

app.put("/api", (req, res) => {
  res.json({ nome: "Put" });
});

app.delete("/api", (req, res) => {
  res.json({ nome: "Delete" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
