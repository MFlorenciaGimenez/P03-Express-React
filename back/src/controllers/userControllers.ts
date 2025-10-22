import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getAllUsersService,
} from "../services/userService";
import { getUserByIdService } from "../services/userService";
import { validateCredentialService } from "../services/credentialService";
import { User } from "../entities/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allusers = await getAllUsersService();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(404).json({
      message: "couldn't get the users",
    });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "couldn't find the user",
    });
  }
};
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, birthdate, password } = req.body;

  try {
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      password,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    console.error(error.message);
    res.status(400).json({
      message: "EMAIL ALREADY REGISTERED",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;
    const credential: number = await validateCredentialService({
      email,
      password,
    });
    const user = await findUserByCredentialId(credential);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: "failed to logIn",
    });
  }
};
