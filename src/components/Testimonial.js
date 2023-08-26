import Customer1 from "../assets/customer-1.jpg";
import Customer2 from "../assets/customer-2.jpg";
import Customer3 from "../assets/customer-3.jpg";
import Customer4 from "../assets/customer-4.jpg";
import TestimonialCard from "./common/TestimonialCard";

const DATA = [
  {
    id: 1,
    image: Customer1,
    customer: "Hannah",
    text: "Great dish! Delicious. Want to try again. Recommended to every one.",
  },
  {
    id: 2,
    image: Customer2,
    customer: "John",
    text: "Great dish! Delicious. Want to try again. Recommended to every one.",
  },
  {
    id: 3,
    image: Customer3,
    customer: "Catherine",
    text: "Great dish! Delicious. Want to try again. Recommended to every one.",
  },
  {
    id: 4,
    image: Customer4,
    customer: "Tom",
    text: "Great dish! Delicious. Want to try again. Recommended to every one.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h1 className="testimonial-title">Testimonials</h1>
      {DATA.map((v) => (
        <TestimonialCard key={v.id} {...v} />
      ))}
    </section>
  );
};

export default Testimonial;
