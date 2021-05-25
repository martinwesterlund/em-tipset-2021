import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className="text-white flex flex-col justify-center items-center"><img className="w-12 animate-bounce" src="/images/football.svg" alt=""/><h1 className="mt-4">Laddar...</h1></div>
            
        </div>
    );
}

export default LoadingScreen;
