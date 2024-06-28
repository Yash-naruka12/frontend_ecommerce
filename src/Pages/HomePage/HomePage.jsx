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
  const products = useSelector(getAllProducts);
  const ProductStatus = useSelector(productStatus);

  useEffect(() => {
    dispatch(fetchAsyncProduct(50));
  }, [dispatch]);

  // Group products by category
  const groupedCategories = {
    fragrances: filterProductsByCategory("fragrances"),
    groceries: filterProductsByCategory("groceries"),
    "home-decoration": filterProductsByCategory("home-decoration"),
    furniture: filterProductsByCategory("furniture"),
  };

  function filterProductsByCategory(category) {
    return products.filter((product) => product.category === category);
  }

  const renderCategorySlider = (categoryName, categoryProducts) => (
    <div className="categoryProducts mt-5">
      <div className="mt-[40px]">
        <h3
          className="bg-white uppercase py-3 px-11 font-medium text-[20px] rounded-md shadow-md"
          style={{ borderLeft: "5px solid orange" }}
        >
          {categoryName}
        </h3>
      </div>
      <div className="gap-2 mt-5">
        <Slider {...settings}>
          {categoryProducts.map((item) => (
            <div key={item.id}>
              <CategoryPage data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

  // Slider settings
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="headerWrapper">
        <HomePageSlider />
      </div>

      <div className="bg-[#d2d2d2] p-10">
        <div className="product-heading mx-auto p-5 md:p-10">
          <h5
            className="uppercase bg-white py-3 px-10 rounded-md font-medium text-[20px]"
            style={{ borderLeft: "3px solid red" }}
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

        {Object.entries(groupedCategories).map(
          ([categoryName, categoryProducts]) =>
            renderCategorySlider(categoryName, categoryProducts)
        )}
      </div>
    </div>
  );
};

export default HomePage;
