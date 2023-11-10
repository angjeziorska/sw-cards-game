import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { AddPersonResolver } from "./actions/add-person/add-person.resolver";
import { AddPersonService } from "./actions/add-person/add-person.service";
import { DeletePersonResolver } from "./actions/delete-person/delete-person.resolver";
import { DeletePersonService } from "./actions/delete-person/delete-person.service";
import { UpdatePersonResolver } from "./actions/update-person/update-person.resolver";
import { UpdatePersonService } from "./actions/update-person/update-person.service";
import { PersonResolver } from "./person.resolver";

@Module({
  imports: [PrismaModule],
  providers: [
    PersonResolver,
    AddPersonService,
    AddPersonResolver,
    UpdatePersonService,
    UpdatePersonResolver,
    DeletePersonService,
    DeletePersonResolver,
  ],
})
export class PersonModule {}
