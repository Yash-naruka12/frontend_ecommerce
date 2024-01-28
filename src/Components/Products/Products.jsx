import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Products = ({ data }) => {
  const discountPrice = Math.floor(
    data.price - data.price * (data.discountPercentage / 100)
  );

  return (
    <Link to={`product/${data.id}`} className="text-gray-900">
      <div className="group relative z-[1] border-gray-100/30 flex w-[280px] flex-col self-center overflow-hidden rounded-lg border bg-[#fff] shadow-md">
        <a className="relative flex h-60 overflow-hidden rounded-xl" href="/">
          <img
            className="absolute top-0 right-0 h-full w-full object-cover"
            style={{
              zIndex: "1",
            }}
            src={data.images[0]}
            alt="product"
          />
          <img
            className="absolute top-0 right-0 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-96"
            src={data.images[1]}
            alt="product"
          />
          <svg
            className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
            />
          </svg>
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {Math.floor(data.discountPercentage)}%
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="/">
            <h6 className="text-xl tracking-tight text-black">{data.title}</h6>
          </a>
          <div className="mt-2 mb-2 flex items-center justify-between">
            <p>
              <span className="text-xl font-bold text-black">
                ₹{data.price}
              </span>
              <span className="text-sm text-black line-through ms-3">
                ₹{discountPrice}
              </span>
            </p>
          </div>
          <div>
            <span className="flex items-center">
              {[...Array(5)].map((star, index) => (
                <span key={index}>
                  {index + 1 <= Math.floor(data.rating) ? (
                    <BsStarFill className="text-yellow-500" />
                  ) : index + 0.5 === Math.floor(data.rating) ? (
                    <BsStarHalf className="text-yellow-500" />
                  ) : (
                    <BsStar className="text-yellow-500" />
                  )}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
