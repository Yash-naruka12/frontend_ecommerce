import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CategoryPage = ({ data }) => {
  return (
    <div>
      <Link to={`/category/product/${data.id}`}>
        <div className="w-full h-full py-5 flex justify-center items-center">
          <div className="relative pl-1 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
            <div className="w-56 min-h-[400px] pb-2 bg-white rounded-xl shadow-xl z-10">
              <div className="relative">
                <img
                  src={data.images[0]} // Assuming images is an array and always has at least one element
                  className="w-full h-[200px] object-cover rounded-t-xl"
                  alt="product"
                />
                <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
                  Recommended
                </div>
              </div>
              <div className="px-2 py-1">
                <div className="text-sm md:text-base font-bold pr-2">
                  {data.title}
                </div>
                <div className="flex py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 font-bold text-xs md:text-sm ml-1 flex items-center">
                        <span className="text-gray-500 font-normal">
                          {data.rating && <Rating value={data.rating} />}{" "}
                          {/* Conditionally render Rating if data.rating is defined */}
                        </span>
                        ({data.rating})
                      </p>
                    </div>
                  </div>
                </div>
                <p className="pb-1 md:pb-2 text-xs md:text-sm text-gray-500">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryPage;
