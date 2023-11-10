import { Test, TestingModule } from "@nestjs/testing";
import { GameResolver } from "./game.resolver";
import { PrismaService } from "../prisma/prisma.service";
import { GameType } from "./types/game.type";

describe("GameResolver", () => {
  let gameResolver: GameResolver;

  const mockPerson = {
    id: 1,
    height: 180,
    name: "John Doe",
    mass: 70,
  };

  const mockStarship = {
    id: 2,
    crew: 5,
    name: "Starship-1",
    passengers: 10,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GameResolver,
        {
          provide: PrismaService,
          useValue: {
            person: {
              count: jest.fn().mockResolvedValue(10),
              findMany: jest.fn().mockResolvedValue([mockPerson]),
            },
            starship: {
              count: jest.fn().mockResolvedValue(10),
              findMany: jest.fn().mockResolvedValue([mockStarship]),
            },
          },
        },
      ],
    }).compile();

    gameResolver = module.get<GameResolver>(GameResolver);
  });

  describe("getCards", () => {
    it("should return a GameType object with person and starship properties", async () => {
      const result: GameType = await gameResolver.getCards();

      expect(result).toEqual({
        person: {
          id: mockPerson.id,
          height: mockPerson.height,
          name: mockPerson.name,
          mass: mockPerson.mass,
        },
        starship: {
          id: mockStarship.id,
          crew: mockStarship.crew,
          name: mockStarship.name,
          passengers: mockStarship.passengers,
        },
      });
    });
  });
});
