import React from "react";
import Property from "./Property";
import { usePropertyContext } from "../context/PropertyContext";
const PropertiesList = () => {
  const { houses } = usePropertyContext();
  return <div></div>;
};

export default PropertiesList;
