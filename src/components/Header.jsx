import React from "react";

//import link

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b sticky top-0 left-0 bg-white bg-opacity-80 z-10">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-6">
          <Link to="" className="hover:text-indigo-700 transition">
            Join
          </Link>
          <Link
            className="hover:bg-indigo-700 bg-indigo-600 text-white px-4 py-1 rounded-lg transition"
            to=""
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
