import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { LoginUserType } from 'src/types/loginUserType';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  name: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  async login(): Promise<void>{
    await this.userService.login({name: this.name, password: this.password} as LoginUserType)
  }
}
