import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { UpdatePersonArgs } from "./update-person.args";

@Injectable()
export class UpdatePersonService {
  constructor(private prisma: PrismaService) {}

  async execute(args: UpdatePersonArgs) {
    // since this is a code sample I omitted a check which would verify if the user exists
    // normally it would go here along with a meaningful response
    await this.prisma.person.update({
      where: { id: args.id },
      data: { ...args },
    });
    return { message: "Person updated successfully" };
  }
}
