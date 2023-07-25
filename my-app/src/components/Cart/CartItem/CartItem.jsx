import { MdClose } from "react-icons/md";
import proImg from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItem, cartHandelPrductQuantity, handelCarttoRemve } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItem.map((items) => (
        <div key={items.id} className="cart-product">
          <div className="img-container">
            <img src={process.env.REACT_APP_DEV_URL +
                     items.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="pro-details">
            <span className="name">{items.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handelCarttoRemve(items)}
            />
            <div className="quantity-btn">
              <span onClick={() => cartHandelPrductQuantity("dec", items)}>
                -
              </span>
              <span>{items.attributes.quanity}</span>
              <span onClick={() => cartHandelPrductQuantity("inc", items)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{items.attributes.quanity}</span>
              <span>x</span>
              <span className="Price">
                &#8377;{items.attributes.price * items.attributes.quanity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
