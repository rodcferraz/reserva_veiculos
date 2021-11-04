import { updateCarDTO } from "../../dto/car/updateCarDTO";
import { DeleteCarDTO } from "../../dto/car/deleteCarDTO";
import { SaveCarDTO } from "../../dto/car/saveCarDTO";
import { Car } from "../../models/car";

export interface ICarService{
    getAll() : Promise<Car[]>;
    save(saveCarDTO: SaveCarDTO): Promise<void>;
    delete(deletePatrimonioDTO: DeleteCarDTO): Promise<void>;
    update(UpdatePatrimonioDTO: updateCarDTO): Promise<void>;
}