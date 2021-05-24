import { useState, useEffect } from "react";
import backend from "../data/data";

const ProfileInfo = ({ user }) => {
  const [greeting, setGreeting] = useState();

  const getGreeting = async () => {
    const res = await fetch(`${backend}/greetings`);
    const data = await res.json();
    setGreeting(data[0].greeting);
  };
  useEffect(() => {
    getGreeting();
    return () => {
      setGreeting('');
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative justify-center items-center">
      {/* <div>INFOBAR</div> */}
      <div className="w-full absolute top-4 flex bg-em-green-light justify-center items-center rounded overflow-hidden">
        <div className="h-full absolute left-0 bg-black z-10 flex items-center">
          <span className="p-2 text-white text-xs md:text-base ">INFO</span>
        </div>
        {greeting && (
          <marquee
            className="ml-1 text-xs md:text-base p-2 italic w-full h-full"
            direction="left"
          >
            {greeting}
          </marquee>
        )}
      </div>
      <div className="flex flex-row justify-center items-center overflow-hidden mt-16 lg:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-em-green-default opacity-50 h-8 w-8 md:h-16 md:w-16 mr-2 md:mr-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex flex-col justify-center items-start">
          <div className="text-xs md:text-lg border-b border-em-green-light w-full">
            {user.first_name} {user.last_name}
          </div>
          <div className="text-gray-400 text-xs md:text-lg">{user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
