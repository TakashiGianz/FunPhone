import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.use("/", express.static("console"));

app.get("/api", (req, res) => {
  res.json({
    sala: "22334455",
    usersOn: [
      {
        name: "Fernando",
        avatar: "/img/fe.jpg",
      },
      {
        name: "Camila",
        avatar: "/img/pp.jpg",
      },
      {
        name: "Fabio",
        avatar: "/img/fabio.jpg",
      },
      {
        name: "Ellen",
        avatar: "/img/ellen.jpg",
      },
      {
        name: "Mariane",
        avatar: "/img/Mari.jpg",
      },
    ],
  });
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
