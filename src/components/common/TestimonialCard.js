const TestimonialCard = ({ image, text, customer }) => {
  return (
    <figure className="testimonial-card">
      <img className="testimonial-img" src={image} alt="Testimonial" />
      <blockquote className="testimonial-text">{text}</blockquote>
      <p className="testimonial-name">&mdash; {customer}</p>
    </figure>
  );
};

export default TestimonialCard;
