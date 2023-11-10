import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@ArgsType()
export class AddPersonArgs {
  @Field()
  @IsNumber()
  declare height: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  declare name: string;

  @Field()
  @IsNumber()
  declare mass: number;
}
