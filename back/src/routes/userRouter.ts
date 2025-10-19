import { Router } from "express";

import {
  getUserById,
  getAllUsers,
  registerUser,
  loginUser,
} from "../controllers/userControllers";
import { validateCreateUser } from "../middlewares/validateUser";
console.log("✅ userRouter cargado");
const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/register", validateCreateUser, registerUser);

userRouter.post("/login", loginUser);

export default userRouter;
