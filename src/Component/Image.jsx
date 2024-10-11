import "../Styling/Image.css";
import myImage1 from "../Asset/StockCake-Sleek Running Shoe_1726834819.jpg";
const Image = () => {
  return (
    <div className="image-gallery">
      <div className="motto">
        <h1>Find Your Sole Mate -</h1>
        <p>Shoes Designed for Every Occasion</p>
      </div>
      <div className="image-container">
        <img src={myImage1} alt="shoe" />
      </div>
    </div>
  );
};

export default Image;
