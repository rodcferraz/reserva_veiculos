import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

import { nextTick } from "process";
import { userController } from "../implementations/userImplementation";


const server = express();
const router = express.Router();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});

function middleware(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers)
    const token : string = req.headers["authorization"].split(" ")[1];
    
    try{
        jwt.verify(token, "SEGREDO");
        console.log("verificou")
        next();
    }
    catch(error){
        console.log("falhou")
        res.json({data: "Authorization failed"})
    }
}

// server.get("/patrimonios/todos", middleware, async (req, res) => {
//     await patrimonioController.getAll(req, res)
// });

// server.delete("/patrimonios/delete/:id", middleware, async (req, res) => {
//     await patrimonioController.delete(req, res)
// })

// server.put("/patrimonios/update", middleware, async (req, res) => {
//     await patrimonioController.update(req, res)
// })

// server.post("/patrimonios/cadastrar", middleware, async (req, res) => {
//     console.log("chegou")
//     await patrimonioController.save(req, res)
// });


server.post("/user/register", async(req, res) => {
    await userController.register(req, res);
})

server.post("/user/login", async(req, res) => {
    await userController.login(req, res);
})

server.listen(3000, function(){
    console.log("Rodando");
})


