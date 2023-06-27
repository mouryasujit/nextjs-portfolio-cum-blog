import { ThemeContext } from "@/Context/ThemeContest";
import React, { useContext } from "react";

const Darkmode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <>
      {mode == "dark" ? (
        <div
          className={
            "flex   gap-2 p-1 border-2 border-white rounded-full justify-center  relative cursor-pointer h-max w-max items-center "
          }
          onClick={toggle}
        >
          <span className="ligh text-xl  "> ☀️ </span>
        </div>
      ) : (
        <div
          className={
            "flex   gap-2 p-1 border-2 border-black rounded-full justify-center  relative cursor-pointer h-max w-max items-center "
          }
          onClick={toggle}
        >
          <span className="ligh text-xl  "> 🌙 </span>
        </div>
      )}
    </>
  );
};

export default Darkmode;
