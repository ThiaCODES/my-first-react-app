import { Link } from "react-router-dom";
import "../Styling/ProductCard.css";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useEffect } from "react";
const ProductCard = ({ data }) => {
  //disintegrating the props
  //use selector to get state of the cart
  const cart = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const { title, img, category, prevPrice, newPrice, slug } = data;
  //get dispatch function
  const dispatch = useDispatch();
  //handle addtocart function to increase the cart item when clicked
  const handleAddToCart = () => {
    dispatch(addToCart({ slug, quantity: 1 }));
  };

  return (
    <div className="Productcard">
      <Link to={slug}>
        <img src={img} alt={title} />
      </Link>
      <h3>{title}</h3>
      <p>{category}</p>
      <span className="price">
        <p className="old-price">{prevPrice}</p>
        <p className="new-price">${newPrice}.00</p>
      </span>
      <button onClick={handleAddToCart} className="btn">
        <BsCart4 />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
