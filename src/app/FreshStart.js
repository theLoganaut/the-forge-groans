"use client";
import React, { useContext, useState, useEffect } from "react";
import ResourceBar from "./ResourceBar";
import DialogBox from "./DialogBox";
import { Button } from "react-bootstrap";
import { GameContext } from "./StateProvider";
import FadeIn from "./Animations/FadeIn";
import UpgradeButton from "./UpgradeButton";

const FreshStart = ({ setScreen }) => {
  const { functionObj, milestones, forgeLoad, scrapLoad, upgrades } =
    useContext(GameContext);

  const [forgeBarDrop, setForgeBarDrop] = useState(0)

  const [scrapClick, setScrapClick] = useState(false)
  const [scrapDisabled, setScrapDisabled] = useState(false);

  const [loadClick, setLoadClick] = useState(false)
  const [loadDisabled, setLoadDisabled] = useState(false);

  const scrapButton = () => {

    const randomIndex = Math.floor(Math.random() * 4)
    const options = ['Your pick rings through the yard', 'The scrap aches with each strike...', '', ''];

    functionObj.setNewMessage(options[randomIndex])

    setScrapDisabled(true)
    setScrapClick(true);
    setTimeout(() => {
      setScrapClick(false);
    }, 50); // Reset the button after 5 seconds
    setTimeout(() => {
      setScrapDisabled(false)
    }, 5000);
    functionObj.scrap.manual()
  }

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
  }, [forgeLoad]);
  

  return (
    <div className="p-8">
      {/* <ResourceBar />
      <DialogBox /> */}
      <div className="flex flex-row">
        <div>
          <pre>
            {" "}
            <div className="pl-6">(%‾|\_.,/#\_.,#(‾*),</div>
            <div className="pl-10">,(_)%\.,,(_)%\.,$#.,</div>
            <div className="pl-2">,;\_|@#&lsquo;\ (‾*)_.%#$.,</div>
            <div className="pl-4">,|\_/‾_%#\,_%\_ ,(_)%\., </div>
            <div className="pl-2">/#$#)., ,(_)%\.,,\/#\ </div>
            {/* <div className="pl-8">(‾)#*&(%‾|\_.,#/#%&@\_</div> */}
          </pre>{" "}
          <div className="flex flex-col justify-between bg-black">
            <div className="flex-grow flex justify-center items-center p-1">
              <div>
                mine{" "}
                <span>
                  <Button
                    disabled={scrapDisabled}
                    className={`${
                      scrapClick
                        ? "bg-white transition-none"
                        : "bg-black text-white transition-colors duration-[6000ms] ease-in-out"
                    } px-1 border border-gray-100`}
                    onClick={() => scrapButton()}
                    // onClick={() => scrapManual()}
                  >
                    scrap
                  </Button>
                </span>
              </div>
            </div>
            <UpgradeButton
              nextPath={Object.entries(upgrades.scrap.pickamount)}
              location={"scrap"}
              upgrade={"pickamount"}
            />
          </div>
          <FadeIn isHidden={milestones.early.tenScrap}>
            <pre>
              {" "}
              <div className="pl-6">(____)(___)</div>
              <div className="pl-12">(__)(__)</div>
              <div className="pl-20">(__ )</div>
              <div className="pl-6">_______(‾)______</div>
              <div className="pl-2">,_/__/‾‾‾~{ forgeBarDrop === 1 ? "[]" : "  "}~ ~ ‾\_\_</div>
              <div className="pl-2">|_.|\~_~_{forgeBarDrop === 2 ? " []" : " ~ "}~ ~_~_/|_|</div>
              <div className="pl-2">|,_|_`|_|~ ~{forgeBarDrop === 3 ? "[]" : " ~"} |_|_|._|</div>
              <div className="pl-2">|_&lsquo;|_|._|_{forgeBarDrop === 4 ? "[]" : " ~"}~__|_|._|_|</div>
              <div className="pl-2">|._|&lsquo;_|_&lsquo;|_|{forgeBarDrop === 5 ? "[]" : "_"}.|_|`_|,_|</div>
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
          </FadeIn>
        </div>
        <div className="flex flex-col mx-auto justify-between mb-12">
          <div className="mt-4 w-6 h-48 border-gray-100 border">
            <div
              style={{
                height: `${(scrapLoad / 5) * 100}%`,
                backgroundColor: "white",
              }}
            ></div>
          </div>
          <div className="mx-auto mt-4">
            <FadeIn isHidden={milestones.early.tenScrap}>
              <div className="w-6 h-48 border-white border">
                <div
                  style={{ height: `${forgeLoad}%`, backgroundColor: "white" }}
                ></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      {/* <div
        className="flex justify-center items-center"
        style={{
          visibility: milestones.early.tenMetal != true ? "hidden" : "none",
        }}
      > */}
      <FadeIn isHidden={milestones.early.tenMetal}>
        <Button
          className="flex sm w-3/4 border border-gray-100 m-2 justify-center"
          onClick={() => setScreen("overview")}
        >
          {" "}
          base overview{" "}
        </Button>
      </FadeIn>

      {/* </div> */}
    </div>
  );
};

export default FreshStart;
