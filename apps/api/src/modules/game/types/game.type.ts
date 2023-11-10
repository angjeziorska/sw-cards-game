import { Field, ObjectType } from "@nestjs/graphql";
import { PersonType } from "../../person/types/person.type";
import { StarshipType } from "../../starship/types/starship.type";

@ObjectType()
export class GameType {
  @Field(() => PersonType)
  declare person: PersonType;

  @Field(() => StarshipType)
  declare starship: StarshipType;
}
