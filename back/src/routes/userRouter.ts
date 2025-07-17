import { Router } from "express";

import { getUserById, getAllUsers, registerUser, loginUser } from "../controllers/userControllers";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/register",registerUser );

userRouter.post("/login", loginUser);

export default userRouter
