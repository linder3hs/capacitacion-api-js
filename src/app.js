import express from "express";
import cors from "cors";
import { base_url, mongo_db_url } from "./config";
import connect from "./db";
import { productRouter, foodRouter } from "./components";

export const app = express();

// vamos a crear la connection a la base de datos
connect(mongo_db_url);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${base_url}/products`, productRouter);
app.use(`${base_url}/foods`, foodRouter);
