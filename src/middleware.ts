import cors from "cors";
import { query, validationResult, ValidationChain } from "express-validator";
import express from "express";

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

export const corsMiddleware = cors(options);

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

export const driversParamsValidationMiddleware = validate([
    query('latitude').isFloat({min:-90,max:90}),
    query('longitude').isFloat({min:-180,max:180}),
    query('count').isNumeric()
])
  
