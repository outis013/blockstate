import React, { useState, useEffect } from "react";

import {
  RiMoneyDollarCircleLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

//headlessui trying for first time

import { Menu } from "@headlessui/react";

//import house context

import { usePropertyContext } from "../context/PropertyContext";
import { v4 } from "uuid";

const PropertyDropdown = () => {
  const { price, setPrice, prices } = usePropertyContext();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!open)}
        className="dropdown-btn text-left w-full"
      >
        <RiMoneyDollarCircleLine className="dropdown-icon-primary" />
        <div>
          <div className="text[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]"> </div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices &&
          prices.map((price) => {
            return (
              <Menu.Item
                onClick={() => setPrice(price)}
                className="cursor-pointer hover:text-indigo-700 transition"
                as="li"
                key={v4()}
              >
                {price}
              </Menu.Item>
            );
          })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
