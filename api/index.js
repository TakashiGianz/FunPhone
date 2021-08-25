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
        id: 0,
      },
      {
        name: "Camila",
        avatar: "/img/pp.jpg",
        id: 1,
      },
      {
        name: "Fabio",
        avatar: "/img/fabio.jpg",
        id: 2,
      },
      {
        name: "Ellen",
        avatar: "/img/ellen.jpg",
        id: 3,
      },
      {
        name: "Mariane",
        avatar: "/img/Mari.jpg",
        id: 4,
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
