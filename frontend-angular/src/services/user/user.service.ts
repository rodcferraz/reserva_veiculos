import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { CreateUserType } from 'src/types/createUserType';
import { LoginUserType } from 'src/types/loginUserType';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  api = "http://localhost:3000"

  async register(user: CreateUserType ): Promise<string>{
    // if (user.password != user.repeatPassword)
    //   this.error = "Senhas diferentes"

    return await axios.post(`${this.api}/user/register`, user) as string;
  }

  async login(user: LoginUserType ): Promise<void>{
    const token : AxiosResponse<string>=  await axios.post(`${this.api}/user/login`, user);
    localStorage.setItem("token", token.data);
  }
}


