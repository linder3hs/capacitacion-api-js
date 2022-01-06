import productModel from "./model";
import { success, error } from "../../network";
/**
 * Controller for products
 */

export const getProducts = async (req, res) => {
  const products = await productModel.find();

  return success({
    res,
    body: products,
  });
};

export const storeProduct = async (req, res) => {
  // try catch
  try {
    // aca podemos leer la data que envia el cliente
    const body = req.body;

    const product = new productModel(body);

    await product.save();

    return success({
      res,
      body,
    });
  } catch (err) {
    // vamos a devolver una respuesta con el error
    return error({
      res,
      body: {
        error: err.message,
      },
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    //* necesito el id del elemento que quiero actualizar
    //* Aca obtener el id que el cliente envia por la URL
    const { id } = req.params;

    const body = req.body;

    let product = await productModel.findOneAndUpdate(
      {
        _id: id,
      },
      body
    );

    product = await productModel.findById(id);

    return success({
      res,
      body: product,
    });
  } catch (err) {
    return error({
      res,
      body: {
        error: err.message,
      },
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await productModel.findByIdAndRemove(id);

    return success({
      res,
      body: {
        message: "Product deleted",
      },
    });
  } catch (err) {
    return error({
      res,
      body: {
        error: err.message,
      },
    });
  }
};
