import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import router from "./routes";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", router);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
