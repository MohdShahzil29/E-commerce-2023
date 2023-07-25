import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
  const {cartCount} = useContext(Context)
  const [scrolled, setScrolled] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handelScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={()=>navigate('/')}>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <div onClick={()=> navigate("/")} className="center">MSM STORE</div>
          <div className="right">
            <TbSearch
               onClick={() => 
                setShowSearch(true)
              }
            />
            <AiOutlineHeart />
            <span
              className="cart-icon"
              onClick={() => {
                setShowCard(true);
              }}
            >
              <CgShoppingCart />
              {!! cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCard && <Cart setShowCard={setShowCard} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
