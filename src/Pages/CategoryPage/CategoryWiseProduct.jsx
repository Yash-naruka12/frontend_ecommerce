import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts, productStatus } from "../../Redux/ProductSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@mui/material";
import { STATUS } from "../../Helper/Status";
import Loader from "../../Helper/Loader";

const CategoryWiseProduct = () => {
  const { category } = useParams();
  const products = useSelector(getAllProducts);

  const settings = {
    slidesToShow: 4.3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true, // Enable center mode
    centerPadding: "60px", // Adjust the padding as needed
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px", // Adjust the padding for screens between 1080px and 768px
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px", // Adjust the padding for screens between 768px and 480px
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px", // Adjust the padding for screens below 480px
        },
      },
    ],
  };

  const getCategoryProduct = products.filter(
    (cat) => cat.category === category
  );

  const status = useSelector(productStatus);

  return (
    <div className=" p-16 bg-[#d3d3d3]">
      {status === STATUS.PENDING ? (
        <Loader />
      ) : (
        <Slider {...settings} className="mx-auto max-w-6xl">
          {getCategoryProduct.map((data) => (
            <div
              key={data.id}
              className="w-full h-full py-5 flex justify-center items-center"
            >
              <div className="relative pl-1 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <div className="w-56 min-h-[400px] pb-2 bg-white rounded-xl shadow-xl z-10">
                  <div className="relative">
                    <img
                      src={data.images[0]}
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
                      <div className="flex justify-between item-center">
                        <div>
                          <p className="text-gray-600 font-bold text-xs md:text-sm ml-1 flex items-center">
                            <span className="text-gray-500 font-normal">
                              <Rating value={data.rating} />
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
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CategoryWiseProduct;
