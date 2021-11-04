import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  cars: Car[] = [];

  ngOnInit(): void {
  }

}

class Car{
  name: string;
  brand: string;
  year: Date;

  constructor(name: string = "", brand: string = "", year: Date = new Date()){
    this.name = name;
    this.brand = brand;
    this.year = year;
  }
}