"use client";
import Image from "next/image";
import FreshStart from "./FreshStart";
import Overview from "./Overview";
import { useState, useContext } from "react";
import { StateProvider } from "./StateProvider";
import Scrapyard from "./Locations/Scrapyard";
import Forge from "./Locations/Forge";
import Workshop from "./Locations/Workshop";
import Factory from "./Locations/Factory";
import { GameContext } from "./StateProvider";

export default function Home() {
  const { milestones } = useContext(GameContext);

  const [screen, setScreen] = useState(
    milestones.early.pastStart === true ? "overview" : "freshStart"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {screen === "freshStart" ? <FreshStart setScreen={setScreen} /> : <></>}
      {screen === "overview" ? <Overview setScreen={setScreen} /> : <></>}
      {screen === "scrapyard" ? <Scrapyard setScreen={setScreen} /> : <></>}
      {screen === "forge" ? <Forge setScreen={setScreen} /> : <></>}
      {screen === "workshop" ? <Workshop setScreen={setScreen} /> : <></>}
      {screen === "factory" ? <Factory setScreen={setScreen} /> : <></>}
      {/* <FreshStart /> */}
    </main>
  );
}
