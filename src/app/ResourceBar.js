import React, { useContext } from "react";
import { GameContext } from "./StateProvider";

const ResourceBar = () => {
  const { scrap, metal, parts, automatons, functionObj } =
    useContext(GameContext);
  return (
    <div className="border-1 w-full border-gray-100 border flex flex-row justify-around">
      <button
        className="mx-2 border border-white text-xs"
        onClick={() => functionObj.files.printSave()}
      >
        PRT
      </button>
      <div className="mx-2 text-xs">{scrap} SCRAP</div>
      <div className="mx-2">{metal} MTL</div>
      <div className="mx-2">{parts} PRT</div>
      <div className="mx-2">{automatons} AMT</div>
      <button
        className="mx-2 border border-white text-xs"
        onClick={() => functionObj.files.save()}
      >
        COG
      </button>
      <button
        className="mx-2 border border-white text-xs"
        onClick={() => functionObj.files.delete()}
      >
        DEL
      </button>
    </div>
  );
};

export default ResourceBar;
