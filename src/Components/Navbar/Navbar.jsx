import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncCategory,
  getAllCategories,
} from "../../Redux/CategorySlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const category = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategory());
  }, [dispatch]);
  return (
    <div className="w-full" id="headers">
      <ul className="flex items-center justify-center gap-8">
        {category.slice(0, 9).map((cat, index) => (
          <li key={index} className=" capitalize">
            <Link to={`category/${cat}`} className=" font-normal">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
