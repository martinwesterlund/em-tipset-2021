import React from "react";

const Medal = ({ value }) => {
  let style = {};
  switch (value) {
    case 1:
      style = {
        border: "border-yellow-400",
        bgFirst: "bg-yellow-300",
        bgSecond: "bg-gold",
        text: "text-white",
        size: "w-16 h-16 text-3xl",
        position: "md:relative left-4 sm:left-32 md:left-0"
      };
      break;
    case 2:
      style = {
        border: "border-gray-300",
        bgFirst: "bg-gray-100",
        bgSecond: " bg-gray-200",
        text: "text-gray-400",
        size: "w-12 h-12 text-xl",
        position: "md:relative left-4 sm:left-32 md:left-0"
      };
      break;
    case 3:
      style = {
        border: "border-yellow-600",
        bgFirst: "bg-yellow-500",
        bgSecond: "bg-yellow-600",
        text: "text-yellow-300",
        size: "w-12 h-12 text-xl",
        position: "md:relative left-4 sm:left-32 md:left-0"
      };
      break;
    default:
      style = {
        border: "border-gray-600",
        bgFirst: "bg-gray-200",
        bgSecond: "bg-yellow-600",
        text: "text-gray-400",
        size: "w-12 h-12 text-xl",
        position: "left-4 sm:left-32 lg:left-64"
      };
  }

  return (
    // <div
    //   className={`rounded-full ${style.size} border-4  ${style.border} flex justify-center items-center overflow-hidden`}
    // >
    //   <div className="transform -rotate-45 p-2 w-full h-full -translate-x-full -translate-y-1/2">
    //     <div className={`${style.bgFirst} w-[200%] h-[200%]`}></div>
    //     <div className={`${style.bgSecond} w-[200%] h-[200%]`}></div>
    //   </div>
    //   <div className={`absolute ${style.text} transform translate-y-px`}>
    //     {value}
    //   </div>
    // </div>
    <div
      className={`absolute ${style.position} w-10 h-10 mr-8 md:mr-0 ${style.bgFirst} ${style.border} border-2 rounded-full flex justify-center items-center`}
    >
      <h1 className="transform translate-y-px">{value}</h1>
    </div>
  );
};

export default Medal;
