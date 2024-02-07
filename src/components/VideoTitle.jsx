import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-1/3 mt-64 ms-14 absolute text-white">
      <h1 className="text-white text-6xl font-bold">{title}</h1>
      <p className="text-xl mt-2">{overview}</p>
      <div className="flex items-center mt-5 gap-5">
        <button className="bg-white text-black py-4 px-8 text-2xl font-medium rounded-lg">
          Play
        </button>
        <button className="text-white rounded-lg py-4 px-8 text-2xl font-medium bg-gray-500 opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
