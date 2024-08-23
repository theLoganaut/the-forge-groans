import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "./StateProvider";

const UpgradeButton = ({ nextPath, location, upgrade }) => {
  const { functionObj, upgrades } = useContext(GameContext);

  const [swapCost, setSwapCost] = useState(true);

  const [current, setCurrent] = useState(nextPath[0][1]);

  const [clicked, setClicked] = useState(false);

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

  const handleClick = () => {
    //move current button funct and add animation changer with a set timeout that changes it back
    console.log("test")
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
    functionObj.doUpgrade(
      current,
      location,
      upgrade,
    );
  };

  return (
    <div
      className={
        finished ? "animate-opacity-out flex-grow flex justify-center items-center p-1" : "flex-grow flex justify-center items-center p-1"
      }
    >
      <div>
        {current.pre}
        <span>
          <div className="relative inline-block group w-max">
            {swapCost ? (
              <Button
              disabled={finished}
                className={`border-gray-100 border px-1 ${
                  clicked ? `bg-white animate-fade-out` : ``
                }`}
                onClick={() => handleClick()}
              >
                {current.button}
              </Button>
            ) : (
              <Button
              disabled={finished}
                className={`border-gray-100 border px-1 ${
                  clicked ? `bg-white animate-fade-out` : ``
                }`}
                onClick={() => handleClick()}
              >
                {current.cost} {current.resource}
              </Button>
            )}

            <Button
              className={`border-gray-100 border px-1`}
              onClick={() => setSwapCost((prev) => !prev)}
            >
              ?
            </Button>
          </div>
        </span>
        {current.post}
      </div>
    </div>
  );
};

export default UpgradeButton;
