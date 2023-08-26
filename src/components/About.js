import RestaurantFood from "../assets/restauranfood.jpg";
import Restaurant from "../assets/restaurant.jpg";
import RestaurantChef from "../assets/restaurantchef.jpg";
import GreekSalad from "../assets/greeksalad.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">Little Lemon</h1>
        <h3 className="about-subtitle">Chicago</h3>
        <p className="about-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <div className="about-side">
        <div className="about-img-item">
          <img className="about-img" src={RestaurantFood} alt="Hero" />
        </div>
        <div className="about-img-item">
          <img className="about-img" src={Restaurant} alt="Hero" />
        </div>
        <div className="about-img-item">
          <img className="about-img" src={RestaurantChef} alt="Hero" />
        </div>
        <div className="about-img-item">
          <img className="about-img" src={GreekSalad} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default About;
