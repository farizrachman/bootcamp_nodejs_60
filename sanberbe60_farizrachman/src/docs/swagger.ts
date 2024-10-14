import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];










swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);