"use client";
import React, { useEffect, useState } from "react";
import forgeWorker from "./forgeWorker";

const useGameState = () => {
  const [scrap, setScrap] = useState(30);
  const [scrapLoad, setScrapLoad] = useState(0);
  const [mining, setMining] = useState(false);
  const [forgeLoad, setForgeLoad] = useState(0);
  const [forgeRunning, setForgeRunning] = useState(false);
  const [metal, setMetal] = useState(30);
  const [parts, setParts] = useState(0);
  const [automatons, setAutomatons] = useState(0);
  const [unloaded, setUnloaded] = useState(true);
  const [devNoSave, setDevNoSave] = useState(true);
  const [messages, setMessages] = useState(["allo", "where", "do i be"]);
  const [newMessage, setNewMessage] = useState("");

  const [milestones, setMilestones] = useState({
    early: {
      firstMine: false,
      tenScrap: false,
      firstLoad: false,
      tenMetal: false,
      pastStart: false,
    },
    scrapyard: {
      pickamount2: false,
      picktick1: false,
      picktick2: false,
      scrapautomaton: false,
    },
    forge: {
      forgetick1: false,
      forgecap2: false,
      forgeautomaton: false,
    },
    overview: {
      firstautomaton: false,
      buildwall: false,
      wallautomaton: false,
      workshop: false,
      factorybutton: false,
      factory: false,
      explore: false,
      hpbar: false,
      waveone: false,
      mechbaybutton: false,
      mechbay: false,
    },
    workshop: {
      partsperpress: false,
      pressspeed2: false,
      metalcap2: false,
      partsperpress2: false,
    },
    factory: {
      increasesize: false,
      weldspeed2: false,
      moresupervisors: false,
      flawratio: false,
    },
    explore: {
      spareparts: false,
      followers: false,
      transporter: false,
      hauler: false,
    },
  });

  // const [upgrades, setUpgrades] = useState({
  //   scrap: {
  //     pickamount: [
  //       {
  //         uName: "pickamount1",
  //         resource: "metal",
  //         amount: 1,
  //         pre: "upgrade",
  //         button: "pick",
  //         post: "",
  //       },
  //       {
  //         uName: "pickamount2",
  //         resource: "metal",
  //         amount: 10,
  //         pre: "upgrade",
  //         button: "pick",
  //         post: "two",
  //       },
  //     ],
  //     tickrate: [
  //       {
  //         uName: "tickrate1",
  //         resource: "metal",
  //         amount: 1,
  //         pre: "faster",
  //         button: "speed",
  //         post: "",
  //       },
  //     ]
  //   },
  //   forge: [],
  // });
  const [upgrades, setUpgrades] = useState({
    scrap: {
      pickamount: {
        first: {
          sub: "first",
          passed: false,
          resource: "metal",
          cost: 1,
          pre: "upgrade",
          button: "pick",
        },
        second: {
          sub: "second",
          passed: false,
          resource: "metal",
          cost: 5,
          pre: "upgrade",
          button: "pick",
          // post: "two",
        },
      },
    },
    forge: {
      loadAmount: {
        first: {
          sub: "first",
          passed: false,
          resource: "metal",
          cost: 10,
          pre: "increase",
          button: "reserve",
        },
        second: {
          sub: "second",
          passed: false,
          resource: "metal",
          cost: 25,
          pre: "increase",
          button: "reserve",
          // post: "two",
        },
      },
    },
    unlocks: {
      workshop: {
        // passed: false,
        resource: "metal",
        cost: 10,
        pre: "",
        button: "changed",
        trigger: () => setMilestones((prev) => {
          const newState = { ...prev };
  
          newState.overview.workshop = !prev.overview.workshop;
          newState.overview.factorybutton = !prev.overview.factorybutton;
  
          return newState;
        })
      },
      factory: {
        // passed: false,
        resource: "metal",
        cost: 10,
        pre: "",
        button: "10 Metal",
        trigger: () => setMilestones((prev) => {
          const newState = { ...prev };
  
          newState.overview.factory = !prev.overview.factory;
  
          return newState;
        })
      },
    },
  });

  //* scrap
  useEffect(() => {
    let miningInt;
    const increaseScrapInterval = () => {
      miningInt = setInterval(() => {
        // setScrapInterval((prev) => prev + 1)
        setScrapLoad((prevScrapLoad) => {
          console.log("scrap", prevScrapLoad);
          if (prevScrapLoad < 5) {
            return prevScrapLoad + 1;
          } else {
            clearInterval(miningInt);
            if (upgrades.scrap.pickamount.second.passed === true) {
              setScrap((scrap) => scrap + 20);
            } else if (upgrades.scrap.pickamount.first.passed === true) {
              setScrap((scrap) => scrap + 10);
            } else {
              setScrap((scrap) => scrap + 5);
            }
            setMining(false);

            return 0;
          }
        });
      }, 1000); // increase every second

      return () => clearInterval(miningInt);
    };
    if (mining === true && scrapLoad === 0) {
      setScrapLoad(1)
      console.log("wtf");
      increaseScrapInterval();
    }
  }, [
    mining,
    scrapLoad,
    upgrades.scrap.pickamount.first.passed,
    upgrades.scrap.pickamount.second.passed,
  ]);

  const loadForge = () => {
    // if the forge load is not at the max
    if (forgeLoad < 50) {
      // find whats left to get to the max
      let remaining = -forgeLoad + 50;
      // give that amount of scrap if you have that much, else give all scrap
      if (scrap > remaining) {
        setForgeLoad(remaining);
        setScrap((scrap) => scrap - remaining);
      } else {
        let temp = scrap;
        setScrap(0);
        setForgeLoad(temp);
      }
    }
  };

  //* Forge

  // Effect to start decreasing forge load when it goes above 5
  useEffect(() => {
    const startDecreasingForgeLoad = () => {
      const intervalId = setInterval(() => {
        setForgeLoad((prevForgeLoad) => {
          if (prevForgeLoad < 5) {
            console.log("decrease", prevForgeLoad);
            clearInterval(intervalId);
            setForgeRunning(false);
            return prevForgeLoad;
          }
          setMetal((metal) => metal + 1);
          return prevForgeLoad - 5;
        });
      }, 5000); // Decrease every 5 seconds

      return () => clearInterval(intervalId);
    };
    if (forgeLoad >= 5 && forgeRunning === false) {
      startDecreasingForgeLoad();
      setForgeRunning(true);
    }
  }, [forgeLoad, forgeRunning]);

  const saveGame = () => {
    const saveFile = JSON.stringify({
      milestones,
      resources: {
        scrap,
        metal,
        parts,
        automatons,
      },
    });
    localStorage.setItem("autosave", saveFile);
  };

  const printSave = () => {
    const saveFile = JSON.parse(localStorage.getItem("autosave"));
    console.log(saveFile);
  };

  const deleteSave = () => {
    localStorage.removeItem("autosave");
  };

  // save on load
  useEffect(() => {
    const saveFile = JSON.parse(localStorage.getItem("autosave"));
    if (saveFile !== undefined && unloaded === true && !devNoSave) {
      setMilestones(saveFile.milestones);
      setScrap(saveFile.resources.scrap);
      setMetal(saveFile.resources.metal);
      setParts(saveFile.resources.parts);
      setAutomatons(saveFile.resources.automatons);
      setUnloaded(false);
    }
  }, [devNoSave, unloaded]);

  //* dialog box

  useEffect(() => {
    //whenever current message changes, update the dialog messages
    // const newElement = {
    //   id: Date.now(),
    //   text: `Element ${lastSevenElements.length + 1}`,
    // };
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, newMessage].slice(-5);
      return updatedMessages;
    });
  }, [newMessage]);

  //* milestone tracker
  useEffect(() => {
    
    if (scrap >= 10 && milestones.early.tenScrap === false) {
      setNewMessage("The forge groans for scrap...");
      setMilestones((prev) => {
        const newState = { ...prev };

        newState.early.tenScrap = !prev.early.tenScrap;

        return newState;
      });
    }
    if (metal >= 2 && milestones.early.tenMetal === false) {
      setMilestones((prev) => {
        const newState = { ...prev };

        newState.early.tenMetal = !prev.early.tenMetal;

        return newState;
      });
    }
  }, [scrap, metal, milestones]);

  // updating any upgrades
  const doUpgrade = (upgradeObj, location, upgrade) => {
    const {resource, cost, sub} = upgradeObj

    const temp = eval(resource);

    if (temp > cost) {
      console.log("allo");
      if (sub) {
        setUpgrades((prev) => {
          const temp = { ...prev };
          temp[location][upgrade][sub].passed = true;
          return temp;
        });
      } else {
        console.log("allo")
        //* no sub means its a milestone upgrade, at least for now
        // setUpgrades((prev) => {
        //   const temp = { ...prev };
        //   temp[location][upgrade].passed = true;
        //   return temp;
        // });
        //trigger unlock

        // temp[location][upgrade].trigger()
        upgradeObj.trigger()
      }
      switch (resource) {
        case "scrap":
          setScrap((prev) => prev - cost);
          break;
        case "metal":
          setMetal((prev) => prev - cost);
          break;
        case "parts":
          setParts((prev) => prev - cost);
          break;
        case "automatons":
          setAutomatons((prev) => prev - cost);
          break;
        default:
          console.log("oopsie failure");
      }
    }
  };

  const functionObj = {
    scrap: {
      manual: () => setMining(true),
    },
    forge: {
      load: loadForge,
    },
    files: {
      save: saveGame,
      printSave: printSave,
      delete: deleteSave,
    },
    doUpgrade,
    setNewMessage,
  };

  return {
    scrap,
    metal,
    parts,
    forgeLoad,
    scrapLoad,
    automatons,
    milestones,
    functionObj,
    messages,
    upgrades,
  };
};

export default useGameState;
