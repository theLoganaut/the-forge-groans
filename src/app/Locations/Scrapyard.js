import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../StateProvider";
import UpgradeButton from "../UpgradeButton";

const Scrapyard = ({ setScreen }) => {
  const { functionObj, milestones, scrapLoad, upgrades } = useContext(GameContext);

  const [scrapClick, setScrapClick] = useState(false)
  const [scrapDisabled, setScrapDisabled] = useState(false);

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

  return (
    <div>
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
        </div>

        <div className="mt-4 w-6 h-48 border-gray-100 border">
            <div
              style={{
                height: `${(scrapLoad / 5) * 100}%`,
                backgroundColor: "white",
              }}
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

export default Scrapyard;
