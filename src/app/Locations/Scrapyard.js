import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../StateProvider";

const Scrapyard = ({ setScreen }) => {
  const { functionObj, milestones } = useContext(GameContext);

  const [scrapVisual, setScrapVisual] = useState(0);
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
                    className="border-gray-100 border px-1"
                    onClick={() => functionObj.scrap.manual(setScrapVisual)}
                  >
                    scrap
                  </Button>
                </span>
              </div>
            </div>
            <div className="flex-grow flex justify-center items-center p-1">
              <div>
                upgrade{" "}
                <span>
                  <Button className="border-gray-100 border px-1">pick</Button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-16 h-48 mx-auto mt-4">
          <div className="w-full h-full px-6 border-gray-100 border">
            <div
              style={{ height: `${scrapVisual}%`, backgroundColor: "blue" }}
            ></div>
          </div>
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
