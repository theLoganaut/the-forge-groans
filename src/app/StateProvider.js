"use client";
import React from "react";
import useGameState from "./useGameState";

export const GameContext = React.createContext();
export const StateProvider = ({ children }) => {
  const {
    scrap,
    metal,
    parts,
    automatons,
    milestones,
    functionObj,
    forgeLoad,
    scrapLoad,
    messages,
    upgrades,
    setUpgrades,
  } = useGameState();

  return (
    <GameContext.Provider
      value={{
        scrap,
        metal,
        parts,
        automatons,
        forgeLoad,
        milestones,
        functionObj,
        scrapLoad,
        messages,
        upgrades,
        setUpgrades,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
