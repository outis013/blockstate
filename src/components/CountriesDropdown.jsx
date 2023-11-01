import React, { useState } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

//headlessui trying for first time

import { Menu } from "@headlessui/react";

//import house context

import { usePropertyContext } from "../context/PropertyContext";
import { v4 } from "uuid";

const CountriesDropdown = () => {
  const { country, setCountry, countries } = usePropertyContext();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown-btn text-left w-full"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="text[15px] font-medium leading-tight">{country}</div>
        <div className="text-[13px]"> </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries &&
          countries.map((country) => {
            return (
              <Menu.Item
                onClick={() => setCountry(country)}
                className="cursor-pointer hover:text-indigo-700 transition"
                as="li"
                key={v4()}
              >
                {country}
              </Menu.Item>
            );
          })}
      </Menu.Items>
    </Menu>
  );
};

export default CountriesDropdown;
