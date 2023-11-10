import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundException } from "@nestjs/common";
import { PersonResolver } from "./person.resolver";
import { PrismaService } from "../prisma/prisma.service";
import { PersonType } from "./types/person.type";

describe("PersonResolver", () => {
  let personResolver: PersonResolver;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonResolver,
        {
          provide: PrismaService,
          useValue: {
            person: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    personResolver = module.get<PersonResolver>(PersonResolver);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe("get", () => {
    it("should return a PersonType object when a valid ID is provided", async () => {
      const mockPerson = {
        id: 1,
        height: 180,
        name: "John Doe",
        mass: 70,
      };

      (prismaService.person.findUnique as jest.Mock).mockResolvedValue(
        mockPerson
      );

      const result: PersonType = await personResolver.get("1");

      expect(result).toEqual({
        id: mockPerson.id,
        height: mockPerson.height,
        name: mockPerson.name,
        mass: mockPerson.mass,
      });
    });

    it("should throw a NotFoundException when an invalid ID is provided", async () => {
      (prismaService.person.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(personResolver.get("invalidId")).rejects.toThrow(
        NotFoundException
      );
    });
  });
});
