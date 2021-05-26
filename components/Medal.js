import React from "react";

const Medal = ({ value }) => {
  let style = {};
  switch (value) {
    case 1:
      style = {
        border: "border-yellow-400",
        bgFirst: "bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 ",
        bgSecond: "bg-gold",
        text: "text-white",
        size: "w-16 h-16 md:h-20 md:w-20 text-xl md:text-3xl",
        position: "left-4 md:absolute md:-top-10 md:left-1/2 transform -translate-x-1/2"
      };
      break;
    case 2:
      style = {
        border: "border-gray-300",
        bgFirst: "bg-gradient-to-tr from-gray-400 via-gray-100 to-gray-400",
        bgSecond: " bg-gray-200",
        text: "text-gray-400",
        size: "w-16 h-16 md:h-20 md:w-20 text-xl md:text-3xl",
        position: "left-4 md:absolute md:-top-10 md:left-1/2 transform -translate-x-1/2"
      };
      break;
    case 3:
      style = {
        border: "border-yellow-600",
        bgFirst: "bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-600",
        bgSecond: "bg-yellow-600",
        text: "text-yellow-300",
        size: "w-16 h-16 md:h-20 md:w-20 text-xl md:text-3xl",
        position: "left-4 md:absolute md:-top-10 md:left-1/2 transform -translate-x-1/2"
      };
      break;
    default:
      style = {
        border: "border-gray-600",
        bgFirst: "bg-gradient-to-tr from-gray-600 via-gray-400 to-gray-600 text-gray-200",
        bgSecond: "bg-yellow-600",
        text: "text-white",
        size: "w-16 h-16 text-xl md:text-3xl",
        position: "left-4 transform -translate-x-1/2"
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
      className={`absolute ${style.position} ${style.size} mr-8 md:mr-0 ${style.bgFirst} ${style.border} border-2 rounded-full flex justify-center items-center`}
    >
      <h1 className="transform translate-y-px">{value}</h1>
    </div>
  );
};

export default Medal;
