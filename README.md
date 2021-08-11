# Getting Started

This project is a very lightweight bff for the task. As such it is incomplete as it is missing a structure and unit/api tests.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the server in development mode

## More Info

The project uses express in typescript. Given it's role as a bff, only additional dependencies that were added were axios for sending requests to the splyt-qa api, cors for handling cors options and express-validator for validating inputs.

As for structure, it's organised in a semi-layer like architecture (the call to splyt's api could be moved to the service layer). This allows for easier testing.
Additionally, one would also need to perform integration/api tests using a library supertest.
