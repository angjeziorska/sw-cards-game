import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { BaseResponseType } from "../../../../models/base-response-type";
import { DeletePersonArgs } from "./delete-person.args";
import { DeletePersonService } from "./delete-person.service";

@Resolver()
export class DeletePersonResolver {
  constructor(private readonly deletePersonService: DeletePersonService) {}

  @Mutation(() => BaseResponseType, {
    name: "deletePerson",
  })
  async create(@Args() args: DeletePersonArgs) {
    return this.deletePersonService.execute(args);
  }
}
