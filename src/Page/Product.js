import "../Styling/Product.css";
import ProductCard from "../Component/ProductCard";
import CartTab from "../Component/CartTab";
import data from "../Db/data";
const Product = () => {
  return (
    <div className="list-products">
      <div className="product-list">
        <div className="product-container">
          {data.map((product, key) => (
            <ProductCard key={product.slug} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
