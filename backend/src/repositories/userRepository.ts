import { Types } from "mongoose";
import { LoginUserDTO } from "../dto/user/loginUserDTO";
import { IdUserDTO } from "../dto/user/idUserDTO";
import { NameUserDTO } from "../dto/user/nameUserDTO";
import { SaveUserDTO } from "../dto/user/saveUserDTO";
import { User } from "../models/user";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository{
    async findById(idUserDTO: IdUserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findByUser(nameUserDTO: NameUserDTO): Promise<User> {
        const userModel = await User.GetModel();
        return userModel.findOne({name: nameUserDTO.name});
    }
    async save(saveUserDTO: SaveUserDTO): Promise<void> {
        const userModel = await User.GetModel();
        userModel.create({_id: new Types.ObjectId(null), name: saveUserDTO.name, password: saveUserDTO.password});
    }
    async login(loginUserDTO: LoginUserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }
}