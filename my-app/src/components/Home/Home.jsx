import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchApiData } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
  const { categories, setcategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchApiData("/api/categories?populate=*").then((res) => {
      console.log(res);
      setcategories(res);
    });
  };

  const getProducts = () => {
    fetchApiData("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category category={categories} />
          <Products products={products} headingText="Populor Post" />
        </div>
      </div>
    </div>
  );
};

export default Home;
