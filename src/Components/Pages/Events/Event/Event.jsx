import React from "react";

const Event = ({ eventItem }) => {
  const { name, image } = eventItem || {};

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-purple-500",
  ];
  const bgColors = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="shadow-2xl h-[320px] cursor-pointer relative overflow-hidden rounded-xl">
      <img src={image} className="w-full h-full" alt={name} />
      <div
        className={`${bgColors} hover:bg-blue-900 flex flex-col justify-center items-center p-5  duration-500 bottom-0 absolute h-16 w-full text-white text-center`}
      >
        <h2 className="text-2xl  ">
          {" "}
          {name.length >= 20 ? name.slice(0, 20) + "..." : name}
        </h2>
      </div>
    </div>
  );
};

export default Event;
