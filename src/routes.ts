import express from "express";
import { driversParamsValidationMiddleware  } from "./middleware";
import { driverController } from "./controller";

const bffRouter = express.Router();

bffRouter.get("/drivers", driversParamsValidationMiddleware, driverController);

export default bffRouter;