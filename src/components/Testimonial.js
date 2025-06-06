import React from 'react'
import start from '../images/star.png';


const Testimonial = ({ rating, imageSrc, text, name }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <div className="testimonial-body">
        <img src={imageSrc} alt={name} className="testimonial-image" />
        <p className="testimonial-text">"{text}"</p>
      </div>
      <h3 className="testimonial-name">{name}</h3>
    </div>
  );
};

export default Testimonial;
