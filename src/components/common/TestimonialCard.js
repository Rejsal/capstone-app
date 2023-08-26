const TestimonialCard = ({ image, text, customer }) => {
  return (
    <figure class="testimonial-card">
      <img className="testimonial-img" src={image} alt="Testimonial" />
      <blockquote class="testimonial-text">{text}</blockquote>
      <p class="testimonial-name">&mdash; {customer}</p>
    </figure>
  );
};

export default TestimonialCard;
