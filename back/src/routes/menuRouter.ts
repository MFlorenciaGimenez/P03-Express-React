import { Router } from "express";
import { addMenuItem, getMenu } from "../controllers/menuItemController";

const menuRouter = Router();

menuRouter.get("/", getMenu);

menuRouter.post("/", addMenuItem);

export default menuRouter;
