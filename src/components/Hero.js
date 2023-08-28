import RestaurantFood from "../assets/restauranfood.jpg";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h3 className="hero-subtitle">Chicago</h3>
        <p className="hero-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button
          onClick={() => {
            navigate("/reserve");
          }}
          className="hero-button"
        >
          Reserve a table
        </button>
      </div>
      <img className="hero-img" src={RestaurantFood} alt="Hero" />
    </section>
  );
};

export default Hero;
