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
      {["person", "starship"].map((key, i) => (
        <Box flex={0.5} p={4} key={key}>
          <Typography>
            Player {i + 1}: {score[key]}
          </Typography>
          <GameCard
            name={drawnCards[key].name}
            value={drawnCards[key][winningAttributes[key]].toString()}
          />
        </Box>
      ))}
    </Box>
  ) : null;
}
