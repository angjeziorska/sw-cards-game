import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma/prisma.service";
import { PersonResolver } from "./person.resolver";

const prismaServiceMock = {
  person: {
    count: jest.fn(),
    findMany: jest.fn(),
  },
};

describe("PersonResolver", () => {
  let personResolver: PersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonResolver,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    personResolver = module.get<PersonResolver>(PersonResolver);
  });

  describe("getRandom", () => {
    it("should return a random person", async () => {
      const mockPerson = {
        id: "1",
        height: 175,
        name: "John Doe",
        mass: 70,
      };

      prismaServiceMock.person.count.mockResolvedValue(1);
      prismaServiceMock.person.findMany.mockResolvedValue([mockPerson]);

      const result = await personResolver.getRandom();

      expect(result).toEqual({
        id: mockPerson.id,
        height: mockPerson.height,
        name: mockPerson.name,
        mass: mockPerson.mass,
      });
    });
  });
});
