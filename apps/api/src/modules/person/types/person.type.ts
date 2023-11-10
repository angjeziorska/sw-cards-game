import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PersonType {
  @Field()
  declare id: string;

  @Field()
  declare height: number;

  @Field()
  declare name: string;

  @Field()
  declare mass: number;
}
