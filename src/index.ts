import express from "express";
import axios from "axios";
import { DriversApiResponse } from "./types";
import { corsMiddleware, driversParamsValidationMiddleware  } from "./middleware";

const app = express();
const PORT = 8000;


app.use(corsMiddleware);
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/drivers', driversParamsValidationMiddleware, async (req, res) => {
    const driverRequest = req.query;
    try {
        const result = await axios.get("https://qa-interview-test.splytech.dev/api/drivers", {
            params: {
                latitude: driverRequest.latitude,
                longitude: driverRequest.longitude,
                count: driverRequest.count
            }
        });
        const resultData = result.data as DriversApiResponse;
        res.status(200).send(resultData);
    } catch (ex) {
        console.log(ex);
        res.status(500).send()
    }
});

app.listen(8080, () => {
    console.log("Here I am")
})