import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../StateProvider";

const Workshop = ({ setScreen }) => {
  const { functionObj, milestones } = useContext(GameContext);

  const [scrapVisual, setScrapVisual] = useState(0);
  return (
    <div>
      <div className="">
        <pre>
          <div className="flex flex-row">
            <pre>
              {/* left motor */}
              <div> /$%8\</div>
              <div>
                {" "}
                (@{"}"}-{"<"}|_)
              </div>
              <div> (%&@)(@&%)</div>
              <div> \# \| *|\_</div>
              <div> /_&\|‾‾\_\</div>
            </pre>
            <pre>
              {/* left presser */}
              <div>      |‾‾|‾|</div>
              <div>  ____|__|_|</div>
              <div>
                {" "}
                {"<"}______{">"}_8_{">"}
              </div>
              <div>      |  | |</div>
              <div>      |__|_|</div>
            </pre>
            <pre>  </pre>
            <pre>
              {/* right presser */}
              <div> |‾|‾‾| </div>
              <div> |_|__|___</div>
              <div>
                {"<"}_8_{"<"}_____{">"}
              </div>
              <div> | |  |</div>
              <div> |_|__|</div>
            </pre>
            <pre>
              {/* right motor */}
              <div> /8%$\</div>
              <div>
                {" "}
                (_|{">"}-{"{"}@)
              </div>
              <div> (%&@)(@&%)</div>
              <div>_/|* |/ #/</div>
              <div>/_/‾‾|/&_\</div>
            </pre>
          </div>
        </pre>

        <div className="flex flex-col justify-between bg-black">
          <div className="flex-grow flex justify-center items-center p-1">
            <div>
              fill with{" "}
              <span>
                <Button
                  className="border-gray-100 border px-1"
                  onClick={() => functionObj.scrap.manual(setScrapVisual)}
                >
                  metal
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

      {/* maybe no bar and just a tick rate as parts fall down from the press */}
      {/* <div className="w-16 h-48 mx-auto mt-4">
          <div className="w-full h-full px-6 border-gray-100 border">
            <div
              style={{ height: `${scrapVisual}%`, backgroundColor: "blue" }}
            ></div>
          </div>
        </div> */}

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

export default Workshop;
