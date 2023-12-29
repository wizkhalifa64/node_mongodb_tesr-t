import express from "express";
import cors from "cors";
import "dotenv/config";
import { config } from "dotenv";
import mongoose from "mongoose";
import adminRouter from "./router/admin";
import employeeRouter from "./router/employee";
import authRouter from "./router/auth";

function main() {
  config();
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use("/auth", authRouter);
  app.use("/admin", adminRouter);
  app.use("/employee", employeeRouter);
  const PORT = process.env.PORT;
  mongoose
    .connect(process.env.DB_CONNECTION_STRING as string)
    .then(() =>
      app.listen(PORT, () => {
        console.log("API is running at http://localhost:8080");
      })
    )
    .catch((er) => console.log(er));
}

main();
