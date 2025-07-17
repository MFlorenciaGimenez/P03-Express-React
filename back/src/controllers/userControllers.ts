import { Request, Response } from "express";
import { createUserService, findUserByCredentialId, getAllUsersService} from "../services/userService";
import { getUserByIdService } from "../services/userService";
import { validateCredentialService } from "../services/credentialService";
import { User } from "../entities/User";


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allusers = await getAllUsersService();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({
      message: "couldn't get the users"
    });
  }
};
export const getUserById = async( req:Request, res:Response) =>{
    const { id } = req.params;
    try {
        const user: User  = await getUserByIdService(Number(id));
        res.status(200).json(user);   
    } catch (error) {
        res.status(500).json({
            message:"couldn't find the user"
        })
    }
};
export const registerUser = async (req:Request, res:Response) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    try {
        const newUser: User = await createUserService({name, email, birthdate, nDni, username, password})
        res.status(201).json(newUser);    
    } catch (error) {
        res.status(500).json({
            message:"couldn't register"
        });
    }
};
export const loginUser = async (req:Request, res:Response) => {
    try {
        const { username, password} = req.body;
        const credential: number = await validateCredentialService({
            username,password
        });
        const user = await findUserByCredentialId(credential);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: "couldn't login"
        });
    }
};




