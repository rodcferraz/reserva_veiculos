import { UserService } from "../services/userService";
import { UserRepository } from "../repositories/userRepository";
import { UserController } from "../controllers/userController";

let userRepository = new UserRepository();
let userService = new UserService(userRepository);
let userController = new UserController(userService);

export {userService, userController};
