import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../prisma/prisma.service";
import { DeletePersonService } from "./delete-person.service";
import { DeletePersonArgs } from "./delete-person.args";

const prismaServiceMock = {
  person: {
    delete: jest.fn(),
  },
};

describe("DeletePersonService", () => {
  let deletePersonService: DeletePersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeletePersonService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    deletePersonService = module.get<DeletePersonService>(DeletePersonService);
  });

  describe("execute", () => {
    it("should delete a person and return success message", async () => {
      const mockDeletePersonArgs: DeletePersonArgs = {
        id: "1",
      };

      prismaServiceMock.person.delete.mockResolvedValue({});

      const result = await deletePersonService.execute(mockDeletePersonArgs);

      expect(prismaServiceMock.person.delete).toHaveBeenCalledWith({
        where: { id: mockDeletePersonArgs.id },
      });

      expect(result).toEqual({ message: "Person deleted successfully" });
    });
  });
});
