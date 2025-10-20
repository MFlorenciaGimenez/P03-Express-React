import { Router } from "express";

import userRouter from "./userRouter";
import reservationRouter from "./reservationRouter";
import menuRouter from "./menuRouter";

const indexRouter = Router();

indexRouter.use("/users", userRouter);

indexRouter.use("/appointments", reservationRouter);

indexRouter.use("/menu", menuRouter);

export default indexRouter;
