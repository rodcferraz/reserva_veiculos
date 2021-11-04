import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';

const routes: Routes = [
  {path: "create-user", component: CreateUserComponent},
  {path: "login-user", component: LoginUserComponent},
  {path: "car", component: CarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
