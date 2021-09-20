import express from "express";
import router from "./routes/index.js"
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.use("/", express.static("console"));
app.use("/api", router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
