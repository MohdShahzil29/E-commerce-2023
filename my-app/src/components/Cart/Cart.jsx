import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
const Cart = ({ setShowCard }) => {
  const { cartItem, cartSubTotal } = useContext(Context);
  return (
    <div className="card-panel">
      <div className="opactiy-cart"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span
            className="close-btn"
            onClick={() => {
              setShowCard(false);
            }}
          >
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

      {!cartItem?.length && <div className="empty-card">
        <BsCartX />
        <span>No products in the card</span>
        <button className="exp-btn">Explore</button>
      </div>}

        {!!cartItem?.length && <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal</span>
              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="cheakout-btn">Cheakout</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Cart;
