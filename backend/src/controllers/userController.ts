import {Request, Response} from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/user";
import { LoginUserDTO } from "../dto/user/loginUserDTO";
import { SaveUserDTO } from "../dto/user/saveUserDTO";
import { IUserService } from "../services/interfaces/IUserService";

export class UserController{
    constructor(
        private userService: IUserService
    ){}

    async register(req: Request, res: Response) : Promise<Response>{
        try{
            let saveUsuarioDTO: SaveUserDTO = {name: req.body.name, password: req.body.password};
            await this.userService.save(saveUsuarioDTO);
            return res.json("User created");
        }catch(err){
            return res.json(`Error: ${err}`);
        }
    }

    async login(req: Request, res: Response) : Promise<Response>{
        const loginUserDTO : LoginUserDTO = {name: req.body.name, password: req.body.password};
        const userToken: User = await this.userService.login(loginUserDTO);
        return res.json(userToken.token);
    }
}