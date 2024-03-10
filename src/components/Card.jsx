import React, { useState } from "react";

const Card = ({ item }) => {
  const { name, image_url, description } = item;
  const [hover, setHover] = useState(false);

  const truncate = (size) => {
    const str =
      description.length <= size
        ? description
        : description.slice(0, size) + "...";
    return str;
  };

  return (
    <div className=" bg-[#A5DD9B] rounded-lg relative shadow-lg w-[90vw] h-[100vw] sm:w-[250px] sm:h-[250px] m-[10px]">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-col  w-[100%] h-[100%] items-center border-[1px] rounded-lg border-gray-500"
      >
        <img className="p-[5px] h-[90%] " src={image_url} alt={name} />
        <div className=" bg-[#C5EBAA] w-full border-t border-t-gray-600 text-center overflow-hidden">
          <h1 className="text-white overflow-hidden">{name}</h1>
        </div>
        {hover && (
          <div className="top-0 absolute w-[100%] h-[100%] text-center ">
            <div className="flex p-[5px] items-center justify-center w-[100%] h-[100%] text-center backdrop-blur-[3px]  rounded-lg overflow-hidden ">
              <p className="text-yellow-300 font-[600] text-[14px]  ">
                {truncate(100)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
