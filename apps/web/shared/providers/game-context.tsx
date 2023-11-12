import React, { createContext, useContext, useState } from "react";
import { Game, Score, WinningAttributes } from "../types";
import { getCards } from "../../api/get-cards";

interface GameContextProps {
  drawnCards: Game | null;
  score: Score;
  winningAttributes: WinningAttributes;
  setWinningAttributes: React.Dispatch<React.SetStateAction<WinningAttributes>>;
  drawCards: () => Promise<void>;
  restartGame: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}

export const defaultWinningAttributes = {
  starship: "crew",
  person: "height",
} as const;
const startingScore = { starship: 0, person: 0 } as const;

export function GameProvider({ children }) {
  const [drawnCards, setDrawnCards] = useState<Game | null>(null);
  const [score, setScore] = useState<Score>(startingScore);
  const [winningAttributes, setWinningAttributes] = useState<WinningAttributes>(
    defaultWinningAttributes
  );

  const drawCards = async () => {
    const cards = await getCards();

    const playerScored: keyof Game =
      cards.starship[winningAttributes.starship] >
      cards.person[winningAttributes.person]
        ? "starship"
        : "person";
    setScore((prevScore) => ({
      ...prevScore,
      [playerScored]: prevScore[playerScored] + 1,
    }));

    setDrawnCards(cards);
  };

  const restartGame = () => {
    setDrawnCards(null);
    setScore(startingScore);
    setWinningAttributes(defaultWinningAttributes);
  };

  const value: GameContextProps = {
    drawnCards,
    score,
    winningAttributes,
    setWinningAttributes,
    drawCards,
    restartGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
