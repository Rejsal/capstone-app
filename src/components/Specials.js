import ProductCard from "./common/ProductCard";
import GreekSalad from "../assets/greeksalad.jpg";
import LemonDessert from "../assets/lemondessert.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    id: 1,
    image: GreekSalad,
    title: "Greek salad",
    price: 12.99,
    description:
      "This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.",
  },
  {
    id: 2,
    image: LemonDessert,
    title: "Lemon Dessert",
    price: 10.99,
    description:
      "This easy Lemon Dessert is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.",
  },
  {
    id: 3,
    image: Bruchetta,
    title: "Bruchetta",
    price: 15.99,
    description:
      "This easy Bruchetta is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  return (
    <section className="specials-section">
      <h1 className="specials-title">This weeks specials</h1>
      <button
        onClick={() => {
          navigate("/online-menu");
        }}
        className="specials-btn"
      >
        Online Menu
      </button>
      {DATA.map((v) => (
        <ProductCard key={v.id} {...v} />
      ))}
    </section>
  );
};

export default Specials;
