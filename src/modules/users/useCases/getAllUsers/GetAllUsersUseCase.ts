import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany({
        include: {
          movie_rent: {
            select: {
              movie: {
                select: {
                  title: true,
                },
              },
            },
          },
        },
      });

      return users;
    } catch (error) {
      // Trate erros aqui, por exemplo, registre-os ou retorne uma resposta de erro apropriada
      throw new Error("Unable to fetch users: " + error.message);
    }
  }
}
