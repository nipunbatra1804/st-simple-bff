import express from "express";
import axios from "axios";
import { DriversApiResponse } from "./types";
import cors from "cors"
import { query, validationResult, ValidationChain } from "express-validator";

const app = express();
const PORT = 8000;

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


const validate = (validations: ValidationChain[]) => {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      await Promise.all(validations.map(validation => validation.run(req)));
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
  
      res.status(400).json({ errors: errors.array() });
    };
  };

const getDriversValidator = validate([
    query('latitude').isFloat({min:-90,max:90}),
    query('longitude').isFloat({min:-180,max:180}),
    query('count').isNumeric()
])
  



app.use(cors(options));
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/drivers', getDriversValidator, async (req, res) => {
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