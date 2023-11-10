import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../prisma/prisma.service";
import { AddPersonService } from "./add-person.service";
import { AddPersonArgs } from "./add-person.args";

const prismaServiceMock = {
  person: {
    create: jest.fn(),
  },
};

describe("AddPersonService", () => {
  let addPersonService: AddPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddPersonService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    addPersonService = module.get<AddPersonService>(AddPersonService);
  });

  describe("execute", () => {
    it("should add a person and return success message", async () => {
      // Mock the AddPersonArgs
      const mockAddPersonArgs: AddPersonArgs = {
        name: "John Doe",
        height: 175,
        mass: 70,
      };

      prismaServiceMock.person.create.mockResolvedValue({});

      const result = await addPersonService.execute(mockAddPersonArgs);

      expect(prismaServiceMock.person.create).toHaveBeenCalledWith({
        data: { ...mockAddPersonArgs },
      });

      expect(result).toEqual({ message: "Person added successfully" });
    });
  });
});
