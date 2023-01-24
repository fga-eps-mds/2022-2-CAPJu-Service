import express from "express";
import cors from "cors";
import routes from "./routes.js";
import cron from "node-cron";
import axios from "axios";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

cron.schedule("0 0 0 * * *", () => {
  axios
    .get("http://localhost:3333/sendFlowsAtrasados")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

export default app;
