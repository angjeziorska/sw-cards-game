import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { BaseResponseType } from "../../../../models/base-response-type";
import { UpdatePersonArgs } from "./update-person.args";
import { UpdatePersonService } from "./update-person.service";

@Resolver()
export class UpdatePersonResolver {
  constructor(private readonly updatePersonService: UpdatePersonService) {}

  @Mutation(() => BaseResponseType, {
    name: "updatePerson",
  })
  async create(@Args() args: UpdatePersonArgs) {
    return this.updatePersonService.execute(args);
  }
}
