import express from "express";

import { DriversApiResponse } from "./types";
import { corsMiddleware, driversParamsValidationMiddleware  } from "./middleware";
import bffRouter from "./routes";

const app = express();
const PORT = 8000;


app.use(corsMiddleware);
app.use("/", bffRouter);

app.listen(8080, () => {
    console.log("Here I am")
});