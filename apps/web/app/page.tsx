"use client";
import React from "react";
import { GameProvider } from "../shared/providers/game-context";
import { GameActions } from "./game-actions";
import { GamePlayers } from "./game-players";
import { GameSetup } from "./game-setup";

export default function Page() {
  return (
    <GameProvider>
      <GameSetup />
      <GameActions />
      <GamePlayers />
    </GameProvider>
  );
}
