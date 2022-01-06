import { Router } from "express";
import * as Controller from "./controller";

const foodRouter = Router();

foodRouter.route("/").get(Controller.getFoods);
foodRouter.route("/store").post(Controller.storeFood);
foodRouter.route("/update/:id").put(Controller.updateFood);
foodRouter.route("/delete/:id").delete(Controller.deleteFood);

export default foodRouter;
