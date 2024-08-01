import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import { LOGO_URL } from "../utils/constants";
import { FaCartShopping } from "react-icons/fa6";

export const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  const Onlinestatus = useOnlinestatus();

  const { loggedinuser } = useContext(Usercontext);
  console.log(loggedinuser);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex xs:flex-row justify-between items-center px-4 md:px-20 shadow-lg mb-8 bg-white">
      <div className="w-16 sm:w-24 mb-2 sm:mb-0">
        <img src={LOGO_URL} alt="Logo" className="h-full w-full" />
      </div>
      <div className="flex xs:flex-row items-center gap-4 md:gap-10">
        <ul className="flex xs:flex-row items-center gap-2 sm:gap-4 md:gap-10 text-sm sm:text-base md:text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cart" className="font-bold flex items-center gap-1 sm:gap-2">
              <FaCartShopping />
              {cartItems.length}
            </Link>
          </li>
        </ul>
        <button
          className="mt-2 p-1 sm:p-2 rounded-md md:mt-0 border-none font-bold text-sm sm:text-base md:text-xl text-white bg-orange-500"
          onClick={() => {
            setloginbtn(loginbtn === "Login" ? "Logout" : "Login");
          }}
        >
          {loginbtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
