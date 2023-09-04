import { CreateUserDTO } from './../../dtos/CreateUserDTO';
import { prisma } from "../../../../prisma/client";
import { User } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';

export class CreateUserUseCase {
static execute: any;
  async execute ({ name, email }: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;

  }
}
