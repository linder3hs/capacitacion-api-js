import { Router } from "express";
import * as Controller from "./controller";

const productRouter = Router();

productRouter.route("/").get(Controller.getProducts);
productRouter.route("/store").post(Controller.storeProduct);
productRouter.route("/update/:id").put(Controller.updateProduct);
productRouter.route("/delete/:id").delete(Controller.deleteProduct);

export default productRouter;
