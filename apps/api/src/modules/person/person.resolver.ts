import { NotFoundException } from "@nestjs/common";
import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";
import { PersonType } from "./types/person.type";

@Resolver(() => PersonType)
export class PersonResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => PersonType, { name: "person" })
  async get(@Args("id", { type: () => Int }) id: string) {
    const person = await this.prisma.person.findUnique({
      where: { id, deletedAt: null },
    });

    // for better UX it could just return a message
    if (!person) {
      throw new NotFoundException(`Person ${id} does not exist.`);
    }
    return {
      id: person.id,
      height: person.height,
      name: person.name,
      mass: person.mass,
    };
  }
}
