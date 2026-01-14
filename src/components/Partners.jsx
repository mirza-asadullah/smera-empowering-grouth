import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="containerp">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-subtitle">
          Our skilled developers are trained on multiple stacks to bring you the
          best product & services.
        </p>
        <div className="partners-logos">
          <div className="partner-logo">
            <img src={s1} alt="LinkedIn" />
          </div>
          <div className="partner-logo">
            <img src={s2} alt="Amazon" />
          </div>
          <div className="partner-logo">
            <img src={s3} alt="TripAdvisor" />
          </div>
          <div className="partner-logo">
            <img src={s4} alt="Microsoft" />
          </div>
          <div className="partner-logo">
            <img src={s1} alt="LinkedIn" />
          </div>
          <div className="partner-logo">
            <img src={s2} alt="Amazon" />
          </div>
          <div className="partner-logo">
            <img src={s3} alt="TripAdvisor" />
          </div>
          <div className="partner-logo">
            <img src={s4} alt="Microsoft" />
          </div>
        </div>
      </div>
    </section>
  );
}
