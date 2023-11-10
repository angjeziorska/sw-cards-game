import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { BaseResponseType } from "../../../../models/base-response-type";
import { AddPersonArgs } from "./add-person.args";
import { AddPersonService } from "./add-person.service";

@Resolver()
export class AddPersonResolver {
  constructor(private readonly addPersonService: AddPersonService) {}

  @Mutation(() => BaseResponseType, {
    name: "addPerson",
  })
  async create(@Args() args: AddPersonArgs) {
    return this.addPersonService.execute(args);
  }
}
