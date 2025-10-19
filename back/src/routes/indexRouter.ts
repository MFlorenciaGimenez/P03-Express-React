import { Router } from "express";

import userRouter from "./userRouter";
import reservationRouter from "./reservationRouter";
console.log("✅ indexRouter cargado");
const indexRouter = Router();

indexRouter.use("/users", userRouter);

indexRouter.use("/appointments", reservationRouter);

export default indexRouter;
