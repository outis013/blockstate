import React, { useContext } from "react";

import PropertiesDropdown from "./PropertiesDropdown";
import PriceRangeDropwown from "./PriceRangeDropdown";
import CountriesDropdown from "./CountriesDropdown";

//Icons import

import { RiSearch2Line } from "react-icons/ri";
import { usePropertyContext } from "../context/PropertyContext";

const Search = () => {
  const { handleClick } = usePropertyContext();
  return (
    <div className="px-[30px] bg-white lg:bg-transparent lg:backdrop-blur z-0 rounded-lg py-6 my-4 max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between gap-4  lg:gap-x-3 relative lg:-top-4 lg:shadow-lg lg:items-center ">
      <CountriesDropdown />
      <PropertiesDropdown />
      <PriceRangeDropwown />

      <button
        onClick={() => handleClick()}
        className="bg-indigo-500 hover:border-indigo-700 border-[1px]  hover:bg-white transition hover:text-indigo-700 w-full  md:max-w-[80px] h-16 rounded-lg flex items-center justify-center  text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
