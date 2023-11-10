import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../prisma/prisma.service";
import { UpdatePersonService } from "./update-person.service";
import { UpdatePersonArgs } from "./update-person.args";

const prismaServiceMock = {
  person: {
    update: jest.fn(),
  },
};

describe("UpdatePersonService", () => {
  let updatePersonService: UpdatePersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdatePersonService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    updatePersonService = module.get<UpdatePersonService>(UpdatePersonService);
  });

  describe("execute", () => {
    it("should update a person and return success message", async () => {
      const mockUpdatePersonArgs: UpdatePersonArgs = {
        id: "abc",
      };

      prismaServiceMock.person.update.mockResolvedValue({});

      const result = await updatePersonService.execute(mockUpdatePersonArgs);

      expect(prismaServiceMock.person.update).toHaveBeenCalledWith({
        where: { id: mockUpdatePersonArgs.id },
        data: { ...mockUpdatePersonArgs },
      });

      expect(result).toEqual({ message: "Person updated successfully" });
    });
  });
});
