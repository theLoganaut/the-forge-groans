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
import ResourceBar from "./ResourceBar";
import DialogBox from "./DialogBox";

export default function Home() {
  const { milestones } = useContext(GameContext);

  //for game start
  // const [screen, setScreen] = useState(
  //   milestones.early.pastStart === true ? "overview" : "freshStart"
  // );

  //for testing
  const [screen, setScreen] = useState("freshStart");

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="">
      <ResourceBar />
      <DialogBox />
      </div>
      
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
