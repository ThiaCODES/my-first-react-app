import "../Styling/ProductDetails.css";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";
import { AiFillStar } from "react-icons/ai";
import data from "../Db/data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cartItems);
  console.log(cart);
  // to find product base on slug
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  useEffect(() => {
    const findDetails = data.find((item) => item.slug === slug);
    if (findDetails) {
      setDetails(findDetails);
    } else {
      window.location.url = "/";
    }
  }, [slug]);
  const itemQuantity = (cart) => {
    return cart.find((item) => item.slug === slug)?.quantity || 0;
  };

  //add to cart function
  const handleAddToCart = () => {
    //dispatching action with product details and quantity of items
    if (details) {
      const { title, img, category, prevPrice, newPrice } = details;
      dispatch(addToCart({ slug, quantity: quantity }));
    } else {
      <div>No Description Found</div>;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //remove from quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  //function to increase quantity
  const removeQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  return (
    <div className="container">
      {details ? (
        <div className="shoe-details">
          <div className="shoe-image">
            <img src={details.img} alt={details.title} className="shoe" />
            <h1>{details.title}</h1>
            <div className="btn-container">
              <div className="quantity-control">
                <button onClick={removeQuantity} className="reduce">
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={increaseQuantity} className="increase">
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button onClick={handleAddToCart} className="add">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="text">
            <h2>PRODUCT DETAILS</h2>

            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Price:</strong>
                  </td>
                  <td>${details.newPrice}.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>Company:</strong>
                  </td>
                  <td>{details.company}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Color:</strong>
                  </td>
                  <td>{details.color}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Category:</strong>
                  </td>
                  <td>{details.category}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Fabric type:</strong>
                  </td>
                  <td>100% Leather</td>
                </tr>
                <tr>
                  <td>
                    <strong>Machine Wash:</strong>
                  </td>
                  <td>Machine Wash</td>
                </tr>
                <tr>
                  <td>
                    <strong>Origin:</strong>
                  </td>
                  <td>Imported</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sole material:</strong>
                  </td>
                  <td>Rubber</td>
                </tr>
                <tr>
                  <td>
                    <strong>Description:</strong>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ducimus nostrum illum voluptatibus numquam similique ullam
                    cupiditate. Eius ab fugit inventore numquam animi quae
                    commodi velit. Quibusdam expedita quidem quis.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default ProductDetails;
