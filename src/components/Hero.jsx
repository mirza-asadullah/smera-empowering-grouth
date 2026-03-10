import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/machines/image1.png";
import image2 from "../assets/machines/image2.png";
import image3 from "../assets/machines/image3.png";
import leftArrow from "../assets/arrow/left.svg";
import rightArrow from "../assets/arrow/right.svg";
import ourworkbg from "../assets/ourworkbg.png";
import arrow from "../assets/arrow.png";

const SLIDES = [
  {
    id: 1,
    title: "Pipe Bend Machine",
    description: "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: image3,
  },
  {
    id: 2,
    title: "PVC Profile Extrusion Line",
    description: "Plastic PVC Profile Extrusion Extruder Making Machine Production Line To Make Wall Panel, Cladding, Fence, Window And Door Profile",
    image: image1,
  },
  {
    id: 3,
    title: "Double Filament Line",
    description: "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: image2,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next"); // 'next' or 'prev'
  const navigate = useNavigate();

  const nextSlide = React.useCallback(() => {
    setDirection("next");
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[current];

  return (
    <div className="hero-slider-wrapper">
      <section className="hero-slider-section">
        <div className="machine-slider-container custom-slider-height">
          <button className="slider-nav-btn left" onClick={prevSlide}>
            &lt;
          </button>

          <div className={`slider-content-area ${direction}`}>
            <div className="slider-text-content" key={`text-${slide.id}`}>
              <h1 className="slider-main-title">{slide.title}</h1>
              <p className="slider-sub-text">{slide.description}</p>
              <button
                className="btn-ask-price"
                onClick={() => navigate("/contact")}
              >
                Ask for price
              </button>
            </div>
            <div className="slider-image-content" key={`img-${slide.id}`}>
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>

          <button className="slider-nav-btn right" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </section>

      {/* Hero tagline bar retained from existing Hero */}
      <div className="hero-tagline">
        <div className="container tagline-inner flex flex-col">
          <div className="flex justify-center mb-4">
            <span className="tagline-icon">
              <img src={arrow} alt="" className="tagline-arrow" />
            </span>
          </div>
          <div>
            <p className="tagline-text">
              Driving SME modernization through applied research, localized
              technology, and real-world execution. We turn innovation into
              scalable, revenue-generating business solutions for Pakistan’s
              industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

