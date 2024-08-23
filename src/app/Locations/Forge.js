import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../StateProvider";
import UpgradeButton from "../UpgradeButton";

const Forge = ({ setScreen }) => {
  const { functionObj, milestones, forgeLoad, upgrades } = useContext(GameContext);

  const [forgeBarDrop, setForgeBarDrop] = useState(0)

  const [loadClick, setLoadClick] = useState(false)
  const [loadDisabled, setLoadDisabled] = useState(false);

  const loadButton = () => {
    setLoadDisabled(true)
    setLoadClick(true);
    setTimeout(() => {
      setLoadClick(false);
    }, 50); // Reset the button after 5 seconds
    setTimeout(() => {
      setLoadDisabled(false)
    }, 5000);
    functionObj.forge.load()
  }

  useEffect(() => {
    const startForgeAnim = () => {
      const intervalId = setInterval(() => {
        setForgeBarDrop((prev) => {
          if (prev >= 4) {
            clearInterval(intervalId);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    };
    if (forgeLoad >= 5) {
      startForgeAnim();
    }
  }, [forgeLoad])

  return (
    <div>
      <div className="flex flex-row">
        <div>
            <pre>
              {" "}
              <div className="pl-6">(____)(___)</div>
              <div className="pl-12">(__)(__)</div>
              <div className="pl-20">(__ )</div>
              <div className="pl-6">_______(‾)______</div>
              <div className="pl-2">,_/__/‾‾‾~{ forgeBarDrop === 1 ? "[]" : "  "}~ ~ ‾\_\_</div>
              <div className="pl-2">|_.|\~_~_{forgeBarDrop === 2 ? "[]" : " ~ "}~ ~ _~_/|_|</div>
              <div className="pl-2">|,_|_`|_|~ ~{forgeBarDrop === 3 ? "[]" : " ~"} |_|_|._|</div>
              <div className="pl-2">|_&lsquo;|_|._|_{forgeBarDrop === 4 ? "[]" : " ~"}~__|_|._|_|</div>
              <div className="pl-2">|._|_|_&lsquo;|_|{forgeBarDrop === 5 ? "[]" : "__"}.|_|`_|,_|</div>
              <div className="pl-2">|_`|_.|_|&lsquo;_|,_|_&lsquo;|_|._|</div>
            </pre>{" "}
            <div className="flex flex-col justify-between">
              <div className="flex-grow flex justify-center items-center p-1">
                <div>
                  {" "}
                  <span>
                    <Button
                      disabled={loadDisabled}
                      className={`${
                        loadClick
                          ? "bg-white transition-none"
                          : "bg-black text-white transition-colors duration-[1000ms] ease-in-out"
                      } px-1 border border-gray-100`}
                      onClick={() => loadButton()}
                    >
                      load
                    </Button>
                  </span>
                  forge
                </div>
              </div>
              <div className="flex-grow flex justify-center items-center mb-4 p-1">
                
                    <UpgradeButton
              nextPath={Object.entries(upgrades.forge.loadAmount)}
              location={"forge"}
              upgrade={"loadAmount"}
            />
              </div>
            </div>
          
        </div>
        <div className="ml-4 my-auto w-6 h-48 border-gray-100 border">
                <div
                  style={{ height: `${forgeLoad}%`, backgroundColor: "white" }}
                ></div>
              </div>
      </div>
      
      <div className="flex justify-center items-center">
        <Button
          className="flex sm w-3/4 border border-gray-100 m-2 justify-center"
          onClick={() => setScreen("overview")}
        >
          {" "}
          base overview{" "}
        </Button>
      </div>
    </div>
  );
};

export default Forge;
