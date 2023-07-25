import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setProducts] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItem.map((items) => (count += items.attributes.quanity));
    setCartCount(count);

    let subTotal = 0;
    cartItem.map(
      (items) => (subTotal += items.attributes.price * items.attributes.quanity)
    );
    setSubTotal(subTotal);
  }, [cartItem]);

  const handelCarttoAdd = (product, quantity) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quanity += quantity;
    } else {
      product.attributes.quanity = quantity;
      items = [...items, product];
    }
    setCartItem(items);
  };
  const handelCarttoRemve = (product) => {
    let items = [...cartItem];
    items = items.filter((p) => p.id !== product.id);
    setCartItem(items);
  };
  const cartHandelPrductQuantity = (type, product) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quanity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quanity === 1) return;
      items[index].attributes.quanity -= 1;
    }
    setCartItem(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setProducts,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        cartSubTotal,
        setSubTotal,
        handelCarttoAdd,
        handelCarttoRemve,
        cartHandelPrductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
