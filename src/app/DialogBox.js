import React, { useState, useContext, useRef } from "react";
import { GameContext } from "./StateProvider";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const DialogBox = () => {
  const listRef = useRef(null);
  const { messages } = useContext(GameContext);
  return (
    <div className="w-full flex border">
      <div className="relative w-full">
        <div className="bottom-0 p-2 rounded-tl-lg shadow-lg w-full max-h-48 overflow-y-auto">
          <div className="space-y-1 w-full" ref={listRef}>
            <TransitionGroup>
              {messages.map((element, index) => (
                <CSSTransition key={index} timeout={1000} classNames="slide">
                  <div
                    className={`bg-black my-1 rounded text-sm`}
                    style={{
                      opacity: (index + 1) / messages.length,
                      color: "white",
                    }}
                  >
                    {element}
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
