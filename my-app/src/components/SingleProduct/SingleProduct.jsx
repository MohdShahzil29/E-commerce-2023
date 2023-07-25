import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const [quanity, setQuantity] = useState(1);
  const {handelCarttoAdd} = useContext(Context);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const products = data.data[0].attributes;
  return (
    <div className="single-page-content">
      <div className="layout">
        <div className="page-content">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                products.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="pro-name">{products.title}</span>
            <span className="pro-price">&#8377;{products.price}</span>
            <span className="pro-disc">{products.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-btn">
                <span onClick={decrement}>-</span>
                <span>{quanity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add-to-cart-btn" onClick={()=> {
                handelCarttoAdd( data.data[0], quanity)
                setQuantity(1);
              }}>
                <FaCartPlus size={20} />  
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Categroy:{" "}
                <span>{products.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icon">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          prodcutId={id}
          categoryId={products.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
