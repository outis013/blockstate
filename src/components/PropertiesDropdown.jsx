import React, { useState, useEffect } from "react";

import { RiHome2Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

//headlessui trying for first time

import { Menu } from "@headlessui/react";

//import house context

import { usePropertyContext } from "../context/PropertyContext";
import { v4 } from "uuid";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = usePropertyContext();

  console.log(properties);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!open)}
        className="dropdown-btn text-left w-full"
      >
        <RiHome2Line className="dropdown-icon-primary" />
        <div className="text[15px] font-medium leading-tight">{property}</div>
        <div className="text-[13px]"> </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties &&
          properties.map((property) => {
            return (
              <Menu.Item
                onClick={() => setProperty(property)}
                className="cursor-pointer hover:text-indigo-700 transition"
                as="li"
                key={v4()}
              >
                {property}
              </Menu.Item>
            );
          })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
