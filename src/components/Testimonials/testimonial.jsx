import React from "react";
import TestimonialItems from "../../services/testItems";
import "./testimonials.css";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial section">
      <span className="section_subtitle">My clients say</span>
      <h2 className="section_title">Testimonial</h2>
      <div className="testimonial_container container">
        <Slider {...settings}>
          {TestimonialItems.map((item, index) => {
            return (
              <div className="testimonial_card" key={index}>
                <img src={item.img} alt="" className="testimonial_img" />
                <h3 className="testimonial_name">{item.name}</h3>
                <p className="testimonial_description">{item.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
