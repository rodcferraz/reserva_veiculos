import { DeleteCarDTO } from "../dto/car/deleteCarDTO";
import { SaveCarDTO } from "../dto/car/saveCarDTO";
import { updateCarDTO } from "../dto/car/updateCarDTO";
import { Car } from "../models/car";
import { ICarRepository } from "./interfaces/ICarRepository";

export class CarRepository implements ICarRepository{
    getAll(): Promise<Car[]> {
        throw new Error("Method not implemented.");
    }
    save(saveCarDTO: SaveCarDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(deletePatrimonioDTO: DeleteCarDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(UpdatePatrimonioDTO: updateCarDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}