"use client";
import {
  defaultWinningAttributes,
  useGameContext,
} from "../shared/providers/game-context";
import { WinningAttributePicker } from "./winning-attribute-picker";

export function GameSetup() {
  const { setWinningAttributes, drawnCards } = useGameContext();

  return !drawnCards ? (
    <>
      <WinningAttributePicker
        attributeName="Person"
        defaultValue={defaultWinningAttributes.person}
        options={["mass", "height"]}
        handleChange={(v) =>
          setWinningAttributes((prevVal) => ({ ...prevVal, person: v }))
        }
      />
      <WinningAttributePicker
        attributeName="Starship"
        defaultValue={defaultWinningAttributes.starship}
        options={["passengers", "crew"]}
        handleChange={(v) =>
          setWinningAttributes((prevVal) => ({ ...prevVal, starship: v }))
        }
      />
    </>
  ) : null;
}
