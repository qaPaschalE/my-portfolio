import React from "react";
// 1. Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Placeholder data for the quotes
const quotesData = [
  {
    text: "Paschal is a detail-oriented and highly skilled QA Engineer. His dedication to quality and his ability to build automation frameworks from the ground up are truly impressive.",
    author: "John Doe",
    title: "Senior Developer, Tech Corp",
  },
  {
    text: "Working with Paschal was a pleasure. He takes quality seriously and was critical in helping us solve complex problems for our business clients. A true team player.",
    author: "Jane Smith",
    title: "Product Manager, Innovate Inc.",
  },
  {
    text: "His expertise in test automation and CI/CD pipelines significantly improved our development lifecycle. I would highly recommend him for any team.",
    author: "Sam Wilson",
    title: "DevOps Lead, Future Systems",
  },
];

const Quotes: React.FC = () => {
  return (
    // We will use the 'about' section's ID so the navbar highlights correctly
    <section className="quotes-section section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Recommendations</h2>
          </div>
          <div className="col-12">
            <Swiper
              // 2. Configure Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="quotes-slider"
            >
              {/* 3. Map over your data to create a slide for each quote */}
              {quotesData.map((quote, index) => (
                <SwiperSlide key={index}>
                  <div className="quote-card">
                    <p className="quote-text">"{quote.text}"</p>
                    <p className="quote-author">
                      - {quote.author}, {quote.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}

              {/* 4. Custom Navigation Arrows */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
