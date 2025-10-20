import { Request, Response } from "express";
import { createMenuItem, getAllItems } from "../services/menuService";

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
export const addMenuItem = async (req: Request, res: Response) => {
  try {
    const newItem = await createMenuItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding menu item" });
  }
};
