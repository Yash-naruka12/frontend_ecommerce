import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { getCart } from "../../Redux/CartSlice";
const linkItems = [
  "Fragrances",
  "Groceries",
  "Home-Decoration",
  "Furniture",
  "Laptops",
];
const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const cartItem = useSelector(getCart);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set header to fixed position after scrolling 400px
      setHeaderFixed(scrollPosition > 400);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav
      className={`py-3 ${
        isHeaderFixed ? "fixed top-0 left-0 w-full bg-white shadow-md" : ""
      }`}
      id="header"
      style={{
        zIndex: 10000,
      }}
    >
      <div className="px-3 md:px-6 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-5">
          <a href="/" className="text-lg me-5 hidden lg:block">
            <span className=" font-bold">Easy</span>
            <span>Shop</span>
            <span>.</span>
          </a>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="border rounded-md py-[6px] px-4 font-medium hover:bg-[#9935fd] hover:text-white transition duration-500"
          >
            Search
          </button>
        </div>

        <button
          className="text-black font-medium rounded-lg text-sm px-5 py-2.5 mb-2 lg:hidden ml-auto"
          type="button"
          onClick={toggleDrawer}
        >
          <CgMenuLeft className="text-[20px] md:text-[30px]" />
        </button>

        <div id="headers">
          <ul className="hidden lg:flex items-center space-x-4 font-semibold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <span className="border-r-2 h-8"></span>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <span className="border-r-2 h-8"></span>
            <li>
              <Link to={"/seller"}>Become Seller</Link>
            </li>
            <span className="border-r-2 h-8"></span>
            <li>
              <Link to={"/user/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/cart"} className="relative flex items-center gap-2">
                Cart <IoMdCart className="text-[30px]" />
                <span className="absolute right-[-5px] bg-black text-white h-5 w-5 flex items-center justify-center rounded-3xl top-[-10px]">
                  {cartItem.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        className="fixed top-0 left-0 h-screen p-4 overflow-y-auto transition-transform bg-[#e1e1e1] w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-left-label"
        id="side-drawer"
      >
        <h5
          id="drawer-left-label"
          className="inline-flex items-center mb-4 text-[20px] font-semibold text-gray-500 dark:text-gray-400"
        >
          <span className="font-bold">Easy</span>
          <span>Shop</span>
          <span className=" text-orange-600 tex-[20px]">.</span>
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-left-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoClose className="text-[30px]" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="px-6 text-center">
          {linkItems.map((cat, index) => (
            <p key={index} className="mb-2">
              <Link
                to={`category/${cat}`}
                className=" capitalize font-semibold"
              >
                {cat}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <hr className="mt-3 mb-3 hidden lg:block" />
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
