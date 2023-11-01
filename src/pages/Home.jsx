import React from "react";

import Banner from "../components/Banner";
import PropertiesList from "../components/PropertiesList";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <PropertiesList />
    </div>
  );
};

export default Home;
