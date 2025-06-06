import React from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: "Diana",
    rating: 5,
    text: "Adorei o ambiente e os sabores! Me senti em casa.",
    getImageSrc: () => require("../images/Diana.jpeg"),
  },
  {
    name: "Kaio",
    rating: 4,
    text: "Um lugarzinho aconchegante com autêntico sabor italiano. Voltarei sempre!",
    getImageSrc: () => require("../images/Kaio.jpg"),
  },
  {
    name: "Fogaca",
    rating: 5,
    text: "A sobremesa de limão é imperdível! O atendimento também foi fantástico.",
    getImageSrc: () => require("../images/Fogaca.jpg"),
  },
  {
    name: "peterson",
    rating: 4,
    text: "Ingredientes frescos e apresentação impecável. Recomendo muito.!",
    getImageSrc: () => require("../images/peterson.jpg"),
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h1>Testemunhos</h1>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <Testimonial
            key={t.name}
            name={t.name}
            rating={t.rating}
            text={t.text}
            imageSrc={t.getImageSrc()}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
