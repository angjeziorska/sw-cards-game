import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { GameResolver } from "./game.resolver";

@Module({
  imports: [PrismaModule],
  providers: [GameResolver],
})
export class GameModule {}
