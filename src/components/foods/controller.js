import { PrismaClient } from "@prisma/client";
import { success, error } from "../../network";
/**
 * CRUD Food
 */

const prisma = new PrismaClient();

export const getFoods = async (req, res) => {
  try {
    const foods = await prisma.food.findMany();

    return success({
      res,
      body: foods,
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

export const storeFood = async (req, res) => {
  try {
    const data = req.body;

    const food = await prisma.food.create({ data });

    return success({
      res,
      body: food,
    });
  } catch (err) {
    return error({
      res,
      body: {
        message: err.message,
      },
    });
  }
};

export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const food = await prisma.food.update({
      where: {
        id: +id,
      },
      data,
    });

    return success({
      res,
      body: food,
    });
  } catch (err) {
    return error({
      res,
      body: {
        message: err.message,
      },
    });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.food.delete({
      where: {
        id: +id,
      },
    });

    return success({
      res,
      body: {
        message: "Food deleted",
      },
    });
  } catch (err) {
    return error({
      res,
      body: {
        message: err.message,
      },
    });
  }
};
