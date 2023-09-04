import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    try {
      const { movieId, userId } = req.body;

      const createMovieRentUseCase = new CreateMovieRentUseCase();

      await createMovieRentUseCase.execute({ movieId, userId });

      return res.status(201).send();
    } catch (error) {
      // Lide com possíveis erros aqui
      return res.status(400).json({ error: error.message });
    }
  }
}
