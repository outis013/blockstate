import React, { createContext, useContext, useEffect, useState } from "react";
import { housesData } from "../data";

export const PropertyContext = createContext();

const PropertyContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [property, setProperty] = useState("Any Property");
  const [properties, setProperties] = useState([]);
  const [prices, setPrices] = useState([]);
  const [price, setPrice] = useState("Any Range");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Any Country");
  const [loading, setLoading] = useState(false);

  //Add all countries

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);

    let uniqueCountries = ["Any Location"];
    allCountries.filter(
      (country) =>
        !uniqueCountries.includes(country) && uniqueCountries.push(country)
    );

    //set countries to uniqueCountries

    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);

    let uniqueProperties = ["Any Type"];
    allProperties.filter(
      (property) =>
        !uniqueProperties.includes(property) && uniqueProperties.push(property)
    );

    //set properties to uniqueProperties

    setProperties(uniqueProperties);
  }, []);

  useEffect(() => {
    const allPrices = houses.map((house) => house.price);

    let uniquePrices = ["Any Price"];
    allPrices.filter(
      (price) => !uniquePrices.includes(price) && uniquePrices.push(price)
    );

    //set prices to uniquePrices

    setPrices(uniquePrices);
  }, []);

  const handleClick = () => {};

  return (
    <PropertyContext.Provider
      value={{
        houses,
        setHouses,
        properties,
        setPrice,
        setProperties,
        prices,
        property,
        setProperty,
        setPrices,
        price,
        loading,
        setLoading,
        country,
        setCountries,
        countries,
        setCountry,
        handleClick,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => useContext(PropertyContext);

export default PropertyContextProvider;
