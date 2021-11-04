import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { IdUserDTO } from "../dto/user/idUserDTO";
import { NameUserDTO } from "../dto/user/nameUserDTO";
import { SaveUserDTO } from "../dto/user/saveUserDTO";
import { User } from "../models/user";
import { IUserService } from "./interfaces/IUserService";
import { LoginUserDTO } from "../dto/user/loginUserDTO";
import jwt from "jsonwebtoken";

export class UserService implements IUserService{

    constructor(private userRepository:  IUserRepository){}

    async findById(idUserDTO: IdUserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findByUser(nameUserDTO: NameUserDTO): Promise<User> {
        return await this.userRepository.findByUser(nameUserDTO);
    }
    async save(saveUserDTO: SaveUserDTO): Promise<void> {
        try{
            let nameUserDTO : NameUserDTO = {name: saveUserDTO.name};
            const user = await this.findByUser(nameUserDTO);
            if (user)
                throw new Error("User already exists");
            await this.userRepository.save(saveUserDTO);
        }catch(err){
            throw err;
        }
    }
    async login(loginUserDTO: LoginUserDTO): Promise<User> {
        try{
            const user = await this.findByUser(loginUserDTO);
            if (!user)
                throw new Error("User does not exist");

            if (user.password != loginUserDTO.password)
                throw new Error("Password did not match");
            
            const token = jwt.sign({user}, "SEGREDO", { expiresIn: '1h' });
            //await this.userRepository.login(loginUserDTO);

            user.token = token;
            return user;
        }catch(err){
            throw err;
        }
    }

}