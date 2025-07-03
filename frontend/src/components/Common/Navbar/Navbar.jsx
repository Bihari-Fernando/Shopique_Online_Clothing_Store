import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Darkmode from "./Darkmode";
import { CartContext } from "../Cart/CartContext";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/services" },
  { id: 3, name: "Kids Wear", link: "/kids" },
  { id: 4, name: "Mens Wear", link: "/mens" },
  { id: 5, name: "Womens Wear", link: "/womens" },
  { id: 6, name: "Trending Items", link: "/trending" },
];

const Navbar = () => {
  const location = useLocation();
  const { toggleCart } = useContext(CartContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50">
      {/* upper navbar */}
      <div className="bg-primary/40 py-3 sm:py-0">
        <div className="container flex justify-between items-center">
          {/* Hamburger Menu - only on small screens */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setIsDrawerOpen(true)}
          >
            <FaBars />
          </button>

          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10 uppercase" />
            Shopique
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Search - only on larger screens */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <Darkmode />
            {/* SignIn Button */}
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block transition-all duration-200">
                {isLoggedIn ? "Logout" : "Sign In/Login"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* lower navbar - desktop */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className={`inline-block px-4 py-2 duration-200 ${
                  location.pathname === data.link
                    ? "bg-gradient-to-r from-primary to-secondary text-white rounded-sm"
                    : "hover:text-primary"
                }`}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Drawer Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-md z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsDrawerOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col gap-4 p-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                onClick={() => setIsDrawerOpen(false)}
                className={`block px-4 py-2 rounded ${
                  location.pathname === data.link
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
