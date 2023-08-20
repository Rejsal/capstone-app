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
        <h3>Order a delivery</h3>
      </div>
    </div>
  );
};

export default ProductCard;
