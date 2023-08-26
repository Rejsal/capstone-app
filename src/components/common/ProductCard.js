import Basket from "../../assets/order.svg";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt="Product" />
      <div className="product-content">
        <div className="product-first-section">
          <h3 className="product-title">{title}</h3>
          <h3 className="product-price">$ {price}</h3>
        </div>
        <p className="product-description">{description}</p>
        <div className="product-order">
          <img className="product-order-img" src={Basket} alt="Product Order" />
          <h3 className="product-order-title">Order a delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
