import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { AddPersonArgs } from "./add-person.args";

@Injectable()
export class AddPersonService {
  constructor(private prisma: PrismaService) {}

  async execute(args: AddPersonArgs) {
    await this.prisma.person.create({
      data: { ...args },
    });
    return { message: "Person added successfully" };
  }
}
