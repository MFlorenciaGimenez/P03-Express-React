import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/indexRouter";

const server = express();

server.use(morgan("dev"));
server.use(
  cors({
    origin: "https://sakuraproject.vercel.app/",

    credentials: true,
  })
);
server.use(express.json());
server.use(router);

export default server;
