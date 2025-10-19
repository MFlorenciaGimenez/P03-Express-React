import ICreateUserDto from "../dtos/IcreateUserDto";
import { User } from "../entities/User";
import { createCredentialService } from "./credentialService";
import {
  credentialRepository,
  userRepository,
} from "../repositories/indexRepository";
import { Credential } from "../entities/Credential";

export const getAllUsersService = async (): Promise<User[]> => {
  const allUsers: User[] | undefined = await userRepository.find({
    relations: { reservations: true },
  });
  return allUsers;
};

export const getUserByIdService = async (id: number) => {
  const user: User | null = await userRepository.findOne({
    where: { id },
    relations: ["reservations"],
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const createUserService = async (
  createUserDto: ICreateUserDto
): Promise<User> => {
  const { name, email, birthdate, password } = createUserDto;

  await createCredentialService({ email, password });

  const newUser: User = userRepository.create({ name, email, birthdate });
  await userRepository.save(newUser);
  return newUser;
};

export const findUserByCredentialId = async (
  credentialsId: number
): Promise<User | null> => {
  const user: User | null = await userRepository.findOneBy({
    credential: { id: credentialsId },
  });
  if (!user) {
    throw new Error("user not found");
  }
  return user;
};
