import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import taskRouter from "../../route/taskRoute.js";

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.use("/task", taskRouter);

// ✅ THIS replaces app.listen()
export const handler = serverless(app);