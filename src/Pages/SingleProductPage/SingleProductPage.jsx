import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncSingleProduct,
  getAllProducts,
  singleProductStatus,
  singleProducts,
} from "../../Redux/ProductSlice";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Loader from "../../Helper/Loader";
import { STATUS } from "../../Helper/Status";
import { TiMinus } from "react-icons/ti";
import { HiPlus } from "react-icons/hi";
import { addCart } from "../../Redux/CartSlice";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(singleProducts);
  const productStatus = useSelector(singleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const availableStock = singleProduct.stock;
  const discountPrice = Math.floor(
    singleProduct.price -
      singleProduct.price * (singleProduct.discountPercentage / 100)
  );
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(fetchAsyncSingleProduct(id));
  }, [dispatch, id]);

  const productImage =
    singleProduct.images && singleProduct.images.length > 0
      ? singleProduct.images[0]
      : null;
  const ratingValue =
    singleProduct.rating !== undefined ? singleProduct.rating : null;

  // Filter products based on the category
  let filterProducts = products.filter(
    (product) => product.category === singleProduct.category
  );

  // Function to handle quantity increment
  const incrementQuantity = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  // Function to handle quantity decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = (cartData) => {
    dispatch(addCart(cartData));
  };

  return (
    <>
      {productStatus === STATUS.PENDING ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[300px] md:h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={productImage}
                    alt="product"
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                    <button
                      onClick={() => handleAdd(singleProduct)}
                      className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold uppercase text-gray-800 dark:text-white mb-2">
                  {singleProduct.category}
                </h2>
                <p className="text-gray-600 capitalize dark:text-gray-300 text-sm mb-4">
                  {singleProduct.title}
                </p>
                <div className="flex flex-col md:flex-row">
                  <div className="mr-4 md:mr-8 mb-4 md:mb-0">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-gray-600 ms-2 dark:text-gray-300">
                      ₹{singleProduct.price}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Availability:
                    </span>
                    <span className="text-gray-600 ms-2 dark:text-gray-300">
                      {singleProduct.stock}
                    </span>
                  </div>
                </div>

                <div className="discount mb-4">
                  {isNaN(discountPrice) ? (
                    <span className="text-sm">Discount not available</span>
                  ) : (
                    <span className="line-through text-sm">
                      ₹{discountPrice}
                    </span>
                  )}
                </div>

                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {singleProduct.description}
                  </p>
                </div>
                <div className="ratings mt-5 mb-3">
                  <Rating value={ratingValue} />
                </div>

                <div className="flex items-center">
                  <span>Quantity:</span>
                  <div className="border ms-5 w-20 md:w-40 flex justify-between items-center">
                    <button
                      onClick={decrementQuantity}
                      className="border bg-orange-500 w-5 h-5 md:h-10 md:w-10 hover:bg-orange-600 transition-all duration-200 hover:shadow-md"
                    >
                      <TiMinus className="mx-auto" />
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="border bg-orange-500 w-5 h-5 md:h-10 md:w-10  hover:bg-orange-600 transition-all duration-200 hover:shadow-md"
                    >
                      <HiPlus className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="bg-gray-100">
              <div className="product-heading mx-auto p-0 m-0">
                <h3
                  className="bg-white py-3 px-10 m-0 rounded-md font-medium text-[20px] mt-5 shadow-md md:mt-10"
                  style={{
                    borderLeft: "3px solid orange",
                  }}
                >
                  Related Products
                </h3>
              </div>

              <div className="similiarCard flex flex-wrap justify-center gap-5 w-full">
                {filterProducts.map((item, index) => (
                  <div
                    className="mt-8"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                    }}
                    key={index}
                  >
                    <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                      <a href="/">
                        <img
                          className="rounded-t-lg p-8 w-full h-60 object-cover"
                          src={item.images[0]}
                          alt="product"
                        />
                      </a>
                      <div className="px-5 pb-5">
                        <a href="/">
                          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                            {item.title}
                          </h3>
                        </a>
                        <div className="flex items-center">
                          <Rating value={item.rating} />
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            {item.rating}
                          </span>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => handleAdd(item)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductPage;
