import { Request, Response, NextFunction } from "express";
import IreservationDto from "../dtos/IreservationDto"


export const validateReservation = (req: Request<{}, {}, IreservationDto>, 
  res: Response,
  next: NextFunction):void => {
    const{date, time, userId } = req.body;
    if(!date || typeof date !=="string" || isNaN(Date.parse(date))){
        res.status(400).json({
            error:"date is required and must be a string"
        });
        return;
    }
    if(!time|| typeof time !== "string"){
        res.status(400).json({
            error: "time is required and must be a string"
        });
        return;
    }
    if(!userId || typeof userId !== "number"){
        res.status(400).json({
            error:"userId is required and must be a number"
        });
        return;
    };
}



 