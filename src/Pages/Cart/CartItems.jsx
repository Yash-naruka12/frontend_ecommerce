import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCart } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateSubtotal = () => {
    return quantity * item.price;
  };

  function handleRemove(productId) {
    dispatch(removeCart(productId));
  }

  return (
    <div key={item.id} className="mb-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className=" float-right">
          <button
            onClick={() => handleRemove(item.id)}
            className=" hover:bg-red-100 p-2 rounded-3xl transition duration-500"
          >
            <MdDelete className=" text-red-600 text-[20px] " />
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-semibold">Product</th>
              <th className="text-left font-semibold">Price</th>
              <th className="text-left font-semibold">Quantity</th>
              <th className="text-left font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 mr-4"
                    src={item.images[0]}
                    alt={item.category}
                  />
                  <span className="font-semibold">{item.category}</span>
                </div>
              </td>
              <td className="py-4">${item.price}</td>
              <td className="py-4">
                <div className="flex items-center">
                  <button
                    className="border rounded-md py-2 px-4 mr-2"
                    onClick={handleDecreaseQuantity}
                  >
                    -
                  </button>
                  <span className="text-center w-8">{quantity}</span>
                  <button
                    className="border rounded-md py-2 px-4 ml-2"
                    onClick={handleIncreaseQuantity}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4">${calculateSubtotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CartItems = () => {
  const cartData = useSelector(getCart) ?? [];
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link
          to={"/"}
          className="flex items-center gap-1 w-24 border px-5 py-2 rounded-md mb-4 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg"
        >
          <IoArrowBack /> Back
        </Link>
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cartData.length === 0 ? (
          <div className="bg-[#d4d4d4] p-5 rounded-md font-medium">
            No Items Added In Cart
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="md:w-3/4">
              {cartData.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
