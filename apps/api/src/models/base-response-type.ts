import { Field, ObjectType } from "@nestjs/graphql";

// should include information whether the operation was successful and a message
// omitted because it's too time consuming to implement&handle on web in a code sample
@ObjectType()
export class BaseResponseType {
  @Field(() => String, { nullable: true })
  message?: string;
}
