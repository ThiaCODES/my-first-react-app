import "../Styling/Header.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {
  const carts = useSelector((store) => store.cart.cartItems);
  console.log(carts);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    let total = 0;
    carts.forEach((cart) => (total += cart.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = (e) => {
    setDropDown(!dropDown);
  };
  const closeDropDown = (e) => {
    setDropDown(false);
  };
  return (
    <nav>
      <div className="brand-name">
        <h1>Thiamy Shoes</h1>
        <div className="icons">
          <FiMenu className="dropdown" onClick={toggleDropDown} />
          <Link to="/CartTab" className="cart-listing">
            <BsCart4 className="shoppingcart" />
            <span>{totalQuantity}</span>
          </Link>
        </div>
      </div>

      <div className={`links ${dropDown ? "show" : ""}`}>
        <h1 className="close" onClick={closeDropDown}>
          {" "}
          X
        </h1>
        <Link to="/Product" onClick={closeDropDown}>
          SHOP
        </Link>
        <div className="cartcontainer">
          {" "}
          <Link to="/CartTab" onClick={closeDropDown} className="carting">
            CART <BsCart4 className="shoppingcart" />
            <span>{totalQuantity}</span>
          </Link>
        </div>

        <Link to="/Checkout" onClick={closeDropDown}>
          CHECKOUT
        </Link>
      </div>
    </nav>
  );
};
export default Header;
