import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center h-[40px]">
      <input
        className=" p-[10px] w-[60%] h-[40px] border-[1px] border-gray-600 rounded-md"
        type="text"
        placeholder="Search Beer"
      />
      <Link to={`/item/random`}>
        <CiSearch
          className=" cursor-pointer p-[10px] m-[10px] h-[40px] border-[1px] border-gray-600 rounded-full bg-cyan-600"
          size={40}
        />
      </Link>
    </div>
  );
};

export default SearchBar;
