import React from "react";
import colors from "../public/colors.json";
import Link from "next/link";

function ColorDisplay() {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-8 rounded-full  ...">
        {colors.map((color, index) => (
          <div
            className={`bg-[${color.hex}] col-span-1 flex items-center justify-center rounded-full h-20 w-20 p-1 m-1 overflow-hidden max-w-20`}
            key={index}
          >
            <Link href={color.url} alt="link to buy" target="_blank" passHref>
              <p className="text-white text-s text-center ">
                {color.nail_color}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorDisplay;
