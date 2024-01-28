import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProduct,
  getAllProducts,
  productStatus,
} from "../../Redux/ProductSlice";
import { STATUS } from "../../Helper/Status";
import Loader from "../../Helper/Loader";
import ProductList from "../../Components/ProductList/ProductList";
import HomePageSlider from "../HomePageSlider/HomePageSlider";
import CategoryPage from "../CategoryPage/CategoryPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePage = () => {
  const dispatch = useDispatch();
  const ProductStatus = useSelector(productStatus);

  const settings = {
    slidesToShow: 5,
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

  useEffect(() => {
    dispatch(fetchAsyncProduct(50));
  }, [dispatch]);
  const products = useSelector(getAllProducts);

  const category_1 = products.filter((cat) => {
    return cat.category === "smartphones";
  });
  const category_2 = products.filter((cat) => {
    return cat.category === "laptops";
  });
  const category_3 = products.filter((cat) => {
    return cat.category === "fragrances";
  });
  const category_4 = products.filter((cat) => {
    return cat.category === "skincare";
  });
  const category_5 = products.filter((cat) => {
    return cat.category === "groceries";
  });
  const category_6 = products.filter((cat) => {
    return cat.category === "home-decoration";
  });
  const category_7 = products.filter((cat) => {
    return cat.category === "furniture";
  });
  const category_8 = products.filter((cat) => {
    return cat.category === "tops";
  });
  const category_9 = products.filter((cat) => {
    return cat.category === "womens-dresses";
  });
  const category_10 = products.filter((cat) => {
    return cat.category === "womens-shoes";
  });

  return (
    <div className="w-full">
      <div className="headerWrapper">
        <HomePageSlider />
      </div>

      <div className="bg-[#d2d2d2] p-10">
        <div className="product-heading mx-auto p-5 md:p-10">
          <h5
            className="uppercase bg-white py-3 px-10 rounded-md font-medium text-[20px]"
            style={{
              borderLeft: "3px solid red",
            }}
          >
            Our Latest Products
          </h5>
        </div>

        {ProductStatus === STATUS.PENDING ? (
          <Loader />
        ) : (
          <div className="w-full">
            <ProductList products={products} />
          </div>
        )}

        <div className="categoryProducts mt-10">
          <div className="mt-[80px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              SmartPhones
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_1.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              Laptops
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_2.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              Fragrances
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_3.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              Skincare
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_4.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              Groceries
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_5.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              home-decoration
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_6.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              furniture
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_7.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              tops
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_8.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              womens-dresses
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_9.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="categoryProducts mt-5">
          <div className="mt-[40px]">
            <h3
              className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
              style={{
                borderLeft: "5px solid orange",
              }}
            >
              womens-shoes
            </h3>
          </div>
          <div className="gap-2 mt-5">
            <Slider {...settings}>
              {category_10.map((item) => (
                <div key={item.id}>
                  <CategoryPage data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
