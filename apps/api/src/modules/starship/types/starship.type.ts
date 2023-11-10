import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StarshipType {
  @Field()
  declare id: string;

  @Field()
  declare crew: number;

  @Field()
  declare name: string;

  @Field()
  declare passengers: number;
}
