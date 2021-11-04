import { DeleteRentedCarDTO } from "../dto/rentedCar/deleteRentedCarDTO";
import { RentedCar } from "../models/rented_car";
import { IRentedCarService } from "./interfaces/IRentedCarService";

export class RentedCarService implements IRentedCarService{
    getAll(): Promise<RentedCar[]> {
        throw new Error("Method not implemented.");
    }
    delete(deleteRentedCarDTO: DeleteRentedCarDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}