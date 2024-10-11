import "../Styling/CartTab.css";

import { useSelector } from "react-redux";
import CartList from "./CartList";
function CartTab() {
  const carts = useSelector((store) => store.cart.cartItems);

  return (
    <div className="container-list">
      <h1 className="shopping-cart">Shopping Cart</h1>
      <div className="cart-items">
        {carts.map((cart, key) => (
          <CartList list={cart} key={key} />
        ))}
      </div>
      <div className="control-button">
        <button className="control">CHECKOUT</button>
      </div>
    </div>
  );
}
export default CartTab;
