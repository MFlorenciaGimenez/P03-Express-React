
import ICreateUserDto from "../dtos/IcreateUserDto";
import { User } from "../entities/User";
import { createCredentialService } from "./credentialService";
import { credentialRepository, userRepository } from "../repositories/indexRepository";
import { Credential } from "../entities/Credential";


export const getAllUsersService = async(): Promise<User[]> => {
  const allUsers: User[] | undefined = await userRepository.find({
    relations:{reservations:true},
  })
  return allUsers;  
  
};
    
export const getUserByIdService = async(id : number) => {
   
    const user: User | null = await userRepository.findOne({
     where: { id },
     relations:["reservations"],
    })
     if (!user) {
  throw new Error("User not found");
}
    return user;

};

export const createUserService = async (createUserDto : ICreateUserDto) => {
  const { name, email, birthdate, nDni, username, password } = createUserDto;

  const foundUser:User | null = await userRepository.findOneBy({email});
  if (foundUser){
    throw new Error("User already registed")
  }
  const newCredential: Credential = await createCredentialService({
    username,
    password,
  });
  const newUser:User = userRepository.create({
    name, email, birthdate, nDni
  });
  await userRepository.save(newUser);
  newUser.credential= newCredential;
  await userRepository.save(newUser);
  return newUser;
 };


export const findUserByCredentialId = async (credentialsId: number):Promise< User | null> => {
  const user : User | null = await userRepository.findOneBy({
    credential: {id:credentialsId}
  });
  if(!user){
    throw new Error("Can not find the user")
  };
  return user;
};

