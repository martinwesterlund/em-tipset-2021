import React from 'react';

const LoadingElement = ({text}) => {
    return (
        <div className="w-full h-56 flex flex-col justify-center items-center">
            <img
              className="w-12 animate-bounce"
              src="/images/football.svg"
              alt=""
            />
            <span className="text-white mt-8">{text}</span>
          </div>
    );
}

export default LoadingElement;
