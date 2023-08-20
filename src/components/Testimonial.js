import ProductCard from "./common/ProductCard";
import GreekSalad from "../assets/greeksalad.jpg";

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
    image: GreekSalad,
    title: "Greek salad",
    price: 12.99,
    description:
      "This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.",
  },
  {
    id: 3,
    image: GreekSalad,
    title: "Greek salad",
    price: 12.99,
    description:
      "This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.",
  },
  {
    id: 3,
    image: GreekSalad,
    title: "Greek salad",
    price: 12.99,
    description:
      "This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients + a simple Greek salad dressing make it refreshing & delicious.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h1 className="testimonial-title">Testimonials</h1>
      {DATA.map((v) => (
        <ProductCard key={v.id} {...v} />
      ))}
    </section>
  );
};

export default Testimonial;
