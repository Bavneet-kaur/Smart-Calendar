"use client";

import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-row -space-x-px h-screen items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-lime-300 animate-ping"></div>
            <div className="w-5 h-5 rounded-full bg-lime-300 animate-pulse"></div>
            <div className="w-5 h-5 rounded-full bg-lime-300 animate-ping [animation-delay:-.3s]"></div>
            <div className="w-5 h-5 rounded-full bg-lime-400 animate-pulse [animation-delay:-.3s]"></div>
            <div className="w-5 h-5 rounded-full bg-lime-300 animate-ping [animation-delay:-.5s]"></div>
            <div className="w-5 h-5 rounded-full bg-lime-400 animate-pulse [animation-delay:-.5s]"></div>
        </div>

    );
};

export default Loader;
