import React from "react";
import Property from "./Property";

import { usePropertyContext } from "../context/PropertyContext";

import { Link } from "react-router-dom";

import { ImSpinner2 } from "react-icons/im";
const PropertiesList = () => {
  const { houses, loading,  } = usePropertyContext();
  return <div></div>;
};

export default PropertiesList;
