import React from "react";
import { Link } from "react-router-dom";
const linkItems = [
  "Fragrances",
  "Groceries",
  "Home-Decoration",
  "Furniture",
  "Laptops",
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-20 font-bold">
        {linkItems.map((item, index) => (
          <li key={index}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
