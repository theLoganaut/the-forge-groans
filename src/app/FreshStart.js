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

  return (
    <div className="border-gray-100 border">
      <ResourceBar />
      <DialogBox />
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
                    onClick={() => functionObj.scrap.manual()}
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

            {/* <div className="flex-grow flex justify-center items-center p-1">
              <div>
                upgrade{" "}
                <span>
                  <Button className="border-gray-100 border px-1">pick</Button>
                </span>
              </div>
            </div> */}
          </div>
          <FadeIn isHidden={milestones.early.tenScrap}>
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
                    <Button
                      className="border-gray-100 border px-1 mr-1"
                      onClick={() => functionObj.forge.load()}
                    >
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
