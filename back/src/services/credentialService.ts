
import IcreatecredentialsDto from "../dtos/IcreateCredentialsDto";
import { Credential } from "../entities/Credential";
import { credentialRepository } from "../repositories/indexRepository";



export const createCredentialService = async (createCredentialDto : IcreatecredentialsDto ):Promise<Credential> => {
    const { username, password} = createCredentialDto;
    const foundCredential: Credential | null = await credentialRepository.findOneBy({ username });
    if(foundCredential) throw new Error(`credential ${username} already exist`)
    
    const newCredential: Credential = credentialRepository.create({
        username,
        password,
    })
    await credentialRepository.save(newCredential);
    return newCredential;    
}

export const validateCredentialService = async (validateCredentialDto : IcreatecredentialsDto): Promise<number> => {
    const { username, password } = validateCredentialDto;
    const credential: Credential | null = await credentialRepository.findOneBy({username})
    if(!credential){
        throw new Error("Credential not found");
    }
    if(password!== credential.password){
        throw new Error("wrong password");
    }
    return credential.id;
};