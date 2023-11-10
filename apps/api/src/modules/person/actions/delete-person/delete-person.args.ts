import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@ArgsType()
export class DeletePersonArgs {
  @Field()
  @IsString()
  @IsNotEmpty()
  declare id: string;
}
