import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import data from "../Db/data";
import "../Styling/Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const [ProductDetails, setDetails] = useState([]);

  useEffect(() => {
    const details = cartItems
      .map((item) => data.find((product) => product.slug === item.slug))
      .filter((detail) => detail !== undefined);

    setDetails(details);
  }, [cartItems]);
  const [shippingDetail, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingDetails((state) => ({ ...state, [name]: value }));
  };
  const handlePayment = (e) => {
    const { name, value } = e.target;
    if (name === "cvv" && value.length > 3) {
      return;
    }
    setPaymentMethod((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    alert("You have successfully placed your order");
  };
  const totalPrice = ProductDetails.reduce((accumulator, product) => {
    const item = cartItems.find((item) => item.slug === product.slug);
    return accumulator + product.newPrice * item.quantity;
  }, 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Log the total price to verify
  console.log(totalPrice);

  return (
    <div className="checkout-container">
      <h2 className="heading">Checkout Summary</h2>
      <form onSubmit={handleSubmit}>
        <div className="checkout-form">
          <div className="details">
            <h3>Shipping Information</h3>
            <input
              className="input-details"
              type="text"
              name="name"
              placeholder="Name"
              value={shippingDetail.name}
              onChange={handleShipping}
              required
            />
            <input
              className="input-details"
              type="text"
              name="address"
              placeholder="Address"
              value={shippingDetail.address}
              onChange={handleShipping}
              required
            />
            <input
              className="input-details"
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetail.city}
              onChange={handleShipping}
              required
            />
            <input
              className="input-details"
              type="number"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingDetail.postalCode}
              onChange={handleShipping}
              required
            />
            <input
              className="input-details"
              type="text"
              name="country"
              placeholder="Country"
              value={shippingDetail.country}
              onChange={handleShipping}
              required
            />
          </div>

          <div className="payment">
            <h3>Payment Information</h3>
            <input
              className="input-details"
              type="number"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentMethod.cardNumber}
              onChange={handlePayment}
              required
            />
            <input
              className="input-details"
              type="month"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={paymentMethod.expiryDate}
              onChange={handlePayment}
              required
            />
            <input
              className="input-details"
              type="number"
              name="cvv"
              min="100"
              max="999"
              placeholder="CVV"
              value={paymentMethod.cvv}
              onChange={handlePayment}
              required
            />
          </div>
          <div className="order">
            <h3>Order Summary</h3>
            <ul>
              {ProductDetails.map((product) => {
                const item = cartItems.find(
                  (item) => item.slug === product.slug
                );
                return (
                  <li key={product.id}>
                    {product.title} - {item.quantity} x ${product.newPrice} = $
                    {(product.newPrice * item.quantity).toFixed(2)}
                  </li>
                );
              })}
            </ul>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button type="submit" className="orderbtn">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
