import React from "react";
import ourwork from "../assets/ourwork.png";
import ourworkbg from "../assets/ourworkbg.png";
import arrow from "../assets/arrow.png";

function CTAs() {
  return (
    <div className="ctas">
      <a className="btn btn-primary" href="#">
        Explore Our Work
      </a>
      <a className="btn btn-secondary" href="#">
        Partner With SMERA
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${ourworkbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" hero-grid">
          <div className="hero-left">
            <h2 className="kicker">
              SMERA Advancing Pakistan's SMEs Through Research & Innovation
            </h2>
            <p className="lead">
              A Research & Development–led SME Enablement Center transforming
              traditional enterprises into efficient, technology-driven, and
              scalable businesses.
            </p>
            <CTAs />
          </div>

          <div className="hero-right">
            <div className="image-wrap">
              <img src={ourwork} alt="factory" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom tagline bar */}
      <div className="hero-tagline">
        <div className="container tagline-inner flex flex-col">
          <div>
            <span className="tagline-icon">
              <img src={arrow} alt="" className="tagline-arrow" />
            </span>
          </div>
          <div>
            <p className="tagline-text">
              Driving SME modernization through applied research, localized
              technology, and real-world execution.We turn innovation into
              scalable, revenue-generating business solutions for Pakistan’s
              industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
