"use client";
import { useGameContext } from "../shared/providers/game-context";
import { Typography, Box } from "@mui/joy";
import { GameCard } from "./game-card";

export function GamePlayers() {
  const { drawnCards, winningAttributes, score } = useGameContext();

  return drawnCards ? (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      width="100%"
      justifyContent="space-between"
    >
      <Box flex={0.5} p={4}>
        <Typography>Player 1: {score.person}</Typography>
        <GameCard
          name={drawnCards.person.name}
          value={drawnCards.person[winningAttributes.person].toString()}
        />
      </Box>
      <Box flex={0.5} p={4}>
        <Typography>Player 2: {score.starship}</Typography>
        <GameCard
          name={drawnCards.starship.name}
          value={drawnCards.starship[winningAttributes.starship].toString()}
        />
      </Box>
    </Box>
  ) : null;
}
