import "../Styling/CartList.css";
import { useState, useEffect } from "react";
import { removeFromQuantity, addToQuantity } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";
import data from "../Db/data";

const CartList = ({ list }) => {
  const { slug, quantity } = list;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const detail = data.filter((item) => item.slug === slug)[0];
    setDetails(detail);
  }, [slug]);
  const dispatch = useDispatch();

  const removeQuantity = () => {
    dispatch(removeFromQuantity({ slug }));
  };
  const increaseQuantity = () => {
    dispatch(addToQuantity({ slug }));
  };
  return (
    <div>
      {details ? (
        <div className="shopping">
          <div className="shopping-details">
            <img
              src={details.img}
              className="shopping-img"
              alt={details.title}
            />
            <h2 className="shopping-text">{details.title}</h2>
          </div>

          <p className="shopping-price">${details.newPrice * quantity}</p>
          <div className="quantity-controlbtn">
            <button onClick={removeQuantity} className="reduce">
              -
            </button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity} className="increase">
              +
            </button>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};
export default CartList;
