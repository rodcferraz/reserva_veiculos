import { DeleteRentedCarDTO } from "../dto/rentedCar/deleteRentedCarDTO";
import { RentedCar } from "../models/rented_car";
import { IRentedCarRepository } from "./interfaces/IRentedCarRepository";

export class RentedCarRepository implements IRentedCarRepository{
    getAll(): Promise<RentedCar[]> {
        throw new Error("Method not implemented.");
    }
    delete(deleteRentedCarDTO: DeleteRentedCarDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}