import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { CreateUserType } from 'src/types/createUserType';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  name: string = "";
  password: string = "";
  repeatPassword: string = "";
  error: string = "";

  ngOnInit(): void {
  }

  async register(): Promise<void>{
    await this.userService.register({name: this.name, password: this.password, repeatPassword: this.repeatPassword} as CreateUserType);
  }

}
