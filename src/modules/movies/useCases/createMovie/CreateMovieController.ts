import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    try {
      const { title, duration, release_date } = req.body;

      const createMovieUseCase = new CreateMovieUseCase();

      const result = await createMovieUseCase.execute({
        title,
        duration,
        release_date,
      });

      return res.status(201).json(result);
    } catch (error) {
      // Lide com possíveis erros aqui
      return res.status(400).json({ error: error.message });
    }
  }
}
