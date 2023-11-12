import { Query, Resolver } from "@nestjs/graphql";
import { getRandom } from "../../utils/get-random";
import { PrismaService } from "../prisma/prisma.service";
import { GameType } from "./types/game.type";

@Resolver(() => GameType)
export class GameResolver {
  constructor(private prisma: PrismaService) {}

  /*
    Technically this goes against DRY principle,
    but realistically implementing strategy pattern not to repeat
    so few lines is like shooting an ant with a rocket launcher

    It would make perfect sense if there was a 3rd type of a card to pull
  */
  @Query(() => GameType, { name: "cards" })
  async getCards() {
    const personCount = await this.prisma.person.count();
    const starshipCount = await this.prisma.starship.count();

    const personSkip = getRandom(personCount);
    const starshipSkip = getRandom(starshipCount);

    const [person] = await this.prisma.person.findMany({
      skip: personSkip,
      take: 1,
      where: { deletedAt: null },
    });

    const [starship] = await this.prisma.starship.findMany({
      skip: starshipSkip,
      take: 1,
      where: { deletedAt: null },
    });

    return {
      person: {
        id: person.id,
        height: person.height,
        name: person.name,
        mass: person.mass,
      },
      starship: {
        id: starship.id,
        crew: starship.crew,
        name: starship.name,
        passengers: starship.passengers,
      },
    };
  }
}
