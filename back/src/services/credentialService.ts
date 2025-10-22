import IcreatecredentialsDto from "../dtos/IcreateCredentialsDto";
import { Credential } from "../entities/Credential";
import { credentialRepository } from "../repositories/indexRepository";

export const createCredentialService = async (
  createCredentialDto: IcreatecredentialsDto
): Promise<Credential> => {
  const { email, password } = createCredentialDto;
  const foundCredential: Credential | null =
    await credentialRepository.findOneBy({ email });
  if (foundCredential) throw new Error(`credential ${email} already exist`);

  const newCredential: Credential = credentialRepository.create({
    email,
    password,
  });
  await credentialRepository.save(newCredential);
  return newCredential;
};

export const validateCredentialService = async (
  validateCredentialDto: IcreatecredentialsDto
): Promise<number> => {
  const { email, password } = validateCredentialDto;
  const credential: Credential | null = await credentialRepository.findOneBy({
    email,
  });
  console.log("Found credential:", credential);
  if (!credential) {
    throw new Error("Credential not found");
  }
  if (password !== credential.password) {
    throw new Error("wrong password");
  }
  return credential.id;
};
