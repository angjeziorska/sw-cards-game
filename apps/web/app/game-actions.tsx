"use client";
import { useGameContext } from "../shared/providers/game-context";
import { Button, Box } from "@mui/joy";

export function GameActions() {
  const { restartGame, drawCards } = useGameContext();

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      my={4}
    >
      <Button onClick={drawCards}>Draw cards</Button>
      <Button onClick={restartGame}>Restart</Button>
    </Box>
  );
}
