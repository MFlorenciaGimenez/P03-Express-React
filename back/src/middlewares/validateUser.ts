import { Request, Response, NextFunction } from "express";
import ICreateUserDto from "../dtos/IcreateUserDto";

export const validateCreateUser = (
  req: Request<{}, {}, ICreateUserDto>,
  res: Response,
  next: NextFunction
): void => {
  const { name, email, birthdate, nDni, username, password } = req.body;

  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required and must be a string" });
    return;
  }
  if (name.length < 3 || name.length > 50) {
    res.status(400).json({ error: "name must be between 3 and 50 characters" });
    return;
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ error: "Valid email is required" });
    return;
  }

  if (
    !birthdate ||
    typeof birthdate !== "string" ||
    isNaN(Date.parse(birthdate))
  ) {
    res.status(400).json({ error: "Valid birthdate is required" });
    return;
  }

  if (!nDni || typeof nDni !== "number") {
    res.status(400).json({ error: "nDni is required and must be a number" });
    return;
  }

  if (!username || typeof username !== "string") {
    res
      .status(400)
      .json({ error: "Username is required and must be a string" });
    return;
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    res.status(400).json({
      error: "Password is required and must be at least 6 characters long",
    });
    return;
  }

  next();
};
