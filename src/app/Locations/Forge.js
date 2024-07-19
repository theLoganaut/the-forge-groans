import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../StateProvider";

const Forge = ({ setScreen }) => {
  const { functionObj, milestones } = useContext(GameContext);

  const [scrapVisual, setScrapVisual] = useState(0);

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
            <div className="pl-2">,_/__/‾‾‾~~ ~ ~ ‾\_\_</div>
            <div className="pl-2">|_.|\~_~_ ~ ~~ _~_/|_|</div>
            <div className="pl-2">|,_|_`|_|~ ~ ~ |_|_|._|</div>
            <div className="pl-2">|_&lsquo;|_|._|_~~~__|_|._|_|</div>
            <div className="pl-2">|._|&lsquo;_|_&lsquo;|_|_.|_|`_|,_|</div>
            <div className="pl-2">|_`|_.|_|&lsquo;_|,_|_&lsquo;|_|._|</div>
          </pre>{" "}
          <div className="flex flex-col justify-between">
            <div className="flex-grow flex justify-center items-center p-1">
              <div>
                {" "}
                <span>
                  <Button className="border-gray-100 border px-1 mr-1">
                    load
                  </Button>
                </span>
                forge
              </div>
            </div>
            <div className="flex-grow flex justify-center items-center mb-4 p-1">
              <div className="">
                increase{" "}
                <span>
                  <Button className="border-gray-100 border px-1">
                    reserve
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-16 h-48 mx-auto mt-4"
          hidden={!milestones.early.tenScrap}
        >
          <div className="w-full h-full px-6 border-gray-100 border"></div>
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
