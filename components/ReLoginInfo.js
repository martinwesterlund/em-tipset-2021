import React from "react";
import Link from "next/link";

const ReLoginInfo = () => {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center ">
      Du måste vara inloggad för att kunna se den här sidan.{" "}
      <Link href="/">
        <h1 className="bg-em-green-default w-40 rounded mt-2 md:mt-4 p-3 text-white cursor-pointer">
          Logga in
        </h1>
      </Link>
    </div>
  );
};

export default ReLoginInfo;
