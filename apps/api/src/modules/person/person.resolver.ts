import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";
import { PersonType } from "./types/person.type";

@Resolver(() => PersonType)
export class PersonResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => PersonType, { name: "randomPerson" })
  async getRandom() {
    const itemCount = await this.prisma.person.count();
    const skip = Math.max(0, Math.floor(Math.random() * itemCount) - 1);

    const [person] = await this.prisma.person.findMany({
      skip,
      take: 1,
      where: { deletedAt: null },
    });
    return {
      id: person.id,
      height: person.height,
      name: person.name,
      mass: person.mass,
    };
  }
}
