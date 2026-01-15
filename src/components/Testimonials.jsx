import React, { useState, useEffect, useRef } from "react";
import sliderbg from "../assets/sliderbg.jpg";
import ellipse from "../assets/ellipse.png";
import vectorQuote from "../assets/slidercomma.png";
import vector from "../assets/Vector.png";

const testimonials = [
  {
    id: 1,
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: 5.0,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
  {
    id: 2,
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: 5.0,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
  {
    id: 3,
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: 5.0,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
  {
    id: 4,
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: 5.0,
    text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="star filled">
          ★
        </span>
      ))}
      <span className="rating-num">{rating.toFixed(1)}</span>
    </div>
  );
}

function Testimonials() {
  const visibleCards = 3;

  // For seamless looping we clone slides on both ends
  const totalReal = testimonials.length;
  const slides = [
    ...testimonials.slice(-visibleCards),
    ...testimonials,
    ...testimonials.slice(0, visibleCards),
  ];

  // start at the first real slide index within the cloned array
  const startIndex = visibleCards;
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const [cardWidthPx, setCardWidthPx] = useState(0);
  const [gapPx, setGapPx] = useState(24);

  const [sliderWidth, setSliderWidth] = useState(0);

  // measure slider and compute card width (60% of viewport)
  useEffect(() => {
    const measure = () => {
      if (!sliderRef.current) return;
      const w = sliderRef.current.clientWidth;
      setSliderWidth(w);
      // Use the slider's measuring width to determine layout mode
      // If slider is narrow (e.g. < 768px), we assume mobile/tablet view
      const isSmall = w <= 768;
      const cw = isSmall ? w - 15 : Math.round(w * 0.6);
      setCardWidthPx(cw);
      setGapPx(isSmall ? 0 : 24);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Auto-play: advance every 4 seconds when not paused
  // Auto-play: advance every 4 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const tick = () => setCurrentIndex((prev) => prev + 1);
    const id = setInterval(tick, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  // When we slide into cloned area, reset to the corresponding real slide without animation
  const handleTransitionEnd = () => {
    const firstRealIndex = startIndex;
    const lastRealIndex = startIndex + totalReal - 1;

    if (currentIndex > lastRealIndex) {
      // jumped into right clones -> reset to first real
      setIsTransitionEnabled(false);
      setCurrentIndex(firstRealIndex);
    } else if (currentIndex < firstRealIndex) {
      // jumped into left clones -> reset to last real
      setIsTransitionEnabled(false);
      setCurrentIndex(lastRealIndex);
    }
  };

  // Re-enable transition after we programmatically snapped index
  useEffect(() => {
    if (!isTransitionEnabled) {
      // force reflow then re-enable transition
      const id = setTimeout(() => setIsTransitionEnabled(true), 50);
      return () => clearTimeout(id);
    }
  }, [isTransitionEnabled]);

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${sliderbg})` }}
    >
      <div className="container">
        <h2 className="testimonials-title">
          Testimonials That
          <sup className="title-sup">
            <img src={vector} alt="checkmark" />
          </sup>
          <br />
          Speak to <span className="accent-text">Our Results</span>
        </h2>

        <div
          className="testimonials-slider"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ overflow: "hidden" }}
        >
          <div
            className="testimonials-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: (() => {
                if (!cardWidthPx) return "translateX(0px)";
                const cardFull = cardWidthPx + gapPx;
                const cardPos = currentIndex * cardFull;
                const offset = (sliderWidth - cardWidthPx) / 2;
                const tx = Math.round(cardPos - offset);
                return `translateX(-${tx}px)`;
              })(),
              transition: isTransitionEnabled ? "transform 0.4s ease" : "none",
            }}
          >
            {slides.map((item, idx) => (
              <div
                className={`testimonial-card ${idx === currentIndex ? "active" : ""}`}
                key={`${item.id}-${idx}`}
                style={{ width: cardWidthPx ? `${cardWidthPx}px` : undefined }}
              >
                <img src={vectorQuote} alt="quote" className="quote-icon" />
                <div className="card-header">
                  <img src={ellipse} alt={item.name} className="profile-img" />
                  <div className="profile-info">
                    <h4 className="profile-name">{item.name}</h4>
                    <p className="profile-role">{item.role}</p>
                  </div>
                </div>
                <StarRating rating={item.rating} />
                <p className="testimonial-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button
            className="slider-btn prev"
            onClick={prevSlide}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="slider-btn next"
            onClick={nextSlide}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
