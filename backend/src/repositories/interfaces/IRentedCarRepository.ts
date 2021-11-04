import { DeleteRentedCarDTO } from "../../dto/rentedCar/deleteRentedCarDTO";
import { RentedCar } from "../../models/rented_car";

export interface IRentedCarRepository{
    getAll() : Promise<RentedCar[]>;
    delete(deleteRentedCarDTO: DeleteRentedCarDTO): Promise<void>;
}