import "../Styling/Home.css";
import Image from "../Component/Image";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="first-line">
        <h1>Limited Time Offer: 25% Off Every Step You Take!</h1>
      </div>
      <Image />
      <Product />
    </div>
  );
};
export default Home;
