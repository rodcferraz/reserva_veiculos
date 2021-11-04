import { NameUserDTO } from "../../dto/user/nameUserDTO";
import { IdUserDTO } from "../../dto/user/idUserDTO";
import { User } from "../../models/user";
import { SaveUserDTO } from "../../dto/user/saveUserDTO";
import { LoginUserDTO } from "../../dto/user/loginUserDTO";

export interface IUserRepository{
    findById(idUserDTO: IdUserDTO) : Promise<User>;
    findByUser(nameUserDTO: NameUserDTO ) : Promise<User>;
    save(saveUserDTO: SaveUserDTO): Promise<void>;
    login(loginUserDTO: LoginUserDTO) : Promise<User>;
    // update(updateUsuarioDTO: User) : Promise<void>;
    // updateUserToken(userToken: any): Promise<void>;
}