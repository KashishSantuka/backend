import express from "express";
import cors from "cors";
import taskRouter from "./route/taskRoute.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/task", taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});