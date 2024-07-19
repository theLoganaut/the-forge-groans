import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "./StateProvider";

const UpgradeButton = ({ nextPath, location, upgrade }) => {
  const { functionObj, upgrades } = useContext(GameContext);

  const [current, setCurrent] = useState(nextPath[0][1]);

  const [finished, setFinished] = useState(false);

  // after lunch moving the upgrade to the game state so i dont need to import all the setters

  useEffect(() => {
    // for each upgrade in the path
    for (let i = 0; i < nextPath.length; i++) {
      if (!nextPath[i][1].passed) {
        setCurrent(nextPath[i][1]);
        return;
      } else if (nextPath[i][1].passed && i + 1 === nextPath.length) {
        // if all upgrades in that path are true
        setFinished(true);
      }
    }
  }, [nextPath, upgrades]);

  // console.log(finished);
  // it needs to move to the next upgrade when the previous one is true

  return (
    <div
      className={
        finished ? "hidden" : "flex-grow flex justify-center items-center p-1"
      }
    >
      <div>
        {current.pre}
        <span>
          <div className="relative inline-block group">
            <Button
              className="border-gray-100 border px-1 hover:bg-black"
              onClick={() =>
                functionObj.doUpgrade(
                  current.resource,
                  current.cost,
                  location,
                  upgrade,
                  current.sub
                )
              }
            >
              {current.button}
            </Button>
            <div className="absolute top-full w-max left-1/2 transform -translate-x-1/2 mt-1 p-2 bg-gray-800 text-white text-sm opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
              {current.cost} {current.resource}
            </div>
          </div>
        </span>
        {current.post}
      </div>
    </div>
  );
};

export default UpgradeButton;
