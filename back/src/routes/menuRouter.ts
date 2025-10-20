import { Router } from "express";
import { getMenu } from "../controllers/menuItemController";

const menuRouter = Router();

menuRouter.get("/", getMenu);

export default menuRouter;
