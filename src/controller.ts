import express from "express"
import { DriversApiResponse } from "./types";
import axios from "axios";

export const driverController = async (req, res) => {
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
}