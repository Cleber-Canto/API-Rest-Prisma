import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from "express";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;

        const createUserUseCase = new CreateUserUseCase(); // Crie uma instância da classe

        try {
            const result = await createUserUseCase.execute({ name, email }); // Chame a função execute da instância
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message }); // Lide com possíveis erros aqui
        }
    }
}
