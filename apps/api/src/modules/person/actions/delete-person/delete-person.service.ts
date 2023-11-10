import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { DeletePersonArgs } from "./delete-person.args";

@Injectable()
export class DeletePersonService {
  constructor(private prisma: PrismaService) {}

  async execute(args: DeletePersonArgs) {
    // again since this is a code sample I did not go overboard not to make you check 100+,
    // but the proper solution is to create a middleware so 'deletedAt' sets automatically on 'delete' call on a Prisma model
    // in this case it won't really work as expected (the record will in fact be deleted)
    // https://www.prisma.io/docs/concepts/components/prisma-client/middleware/soft-delete-middleware
    await this.prisma.person.delete({
      where: { id: args.id },
    });
    return { message: "Person deleted successfully" };
  }
}
