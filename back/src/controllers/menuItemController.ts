import { Request, Response } from "express";
import { getAllItems } from "../services/menuService";

export const getMenu = async (req: Request, res: Response) => {
  try {
    const items = await getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: "error fetching menu items",
    });
  }
};
