import React from "react";
import colors from "../public/colors.json";
import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import Link from "next/link";

const NailCard = ({ heading }) => {
  const [customClass, setCustomClass] = useState("");
  const [nailColor, setNailColor] = useState("");
  const [display, setDisplay] = useState(false);
  const [urlLink, setUrlLink] = useState("");

  const handleClick = (e) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCustomClass(
      `bg-[${randomColor.hex}] rounded-full flex items-center justify-center p-5 h-80 w-80 z-[10] my-80`
    );
    setNailColor(randomColor.nail_color);
    setUrlLink(randomColor.url);
  };

  const handleShow = (e) => {
    setDisplay(!display);
  };

  const removeRandomize = (e) => {
    setCustomClass("");
    setNailColor("");
  };

  return (
    <>
      <div className="flex items-initial justify-left h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* create a darker overlay over photo */}

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" />
        <div className="p-5 text-white z-[2]">
          <h2 className="text-5xl font-bold pb-5">{heading}</h2>
          <h4 className="text font-bold pb-5">
            Click color name to visit product page
          </h4>
          <button className="p-4 m-2 border" onClick={handleClick}>
            Randomize
          </button>
          <button className="p-4 m-2 border" onClick={removeRandomize}>
            Remove randomizer
          </button>
          <button className="p-4 m-2 border" onClick={handleShow}>
            View all options
          </button>
        </div>
        <div className={customClass}>
          <Link href={urlLink} target="_blank" passHref>
            <p className=" text-white text-5xl z-[2] text-center my-3">
              {nailColor}
            </p>
          </Link>
        </div>

        <div className="z-[10] flex justify-left p-2">
          {display && <ColorDisplay />}
        </div>
      </div>
    </>
  );
};

export default NailCard;
