import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@ArgsType()
export class UpdatePersonArgs {
  @Field()
  @IsString()
  @IsNotEmpty()
  declare id: string;

  @Field({ nullable: true })
  @IsNumber()
  declare height?: number;

  @Field({ nullable: true })
  @IsString()
  declare name?: string;

  @Field({ nullable: true })
  @IsNumber()
  declare mass?: number;
}
