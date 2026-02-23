import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

export default function Partners() {
  const logos = [s1, s2, s3, s4];
  // repeat logos three times to ensure content width exceeds container and loops seamlessly
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="partners-section">
      <div className="containerp">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-subtitle">
          Our skilled developers are trained on multiple stacks to bring you the
          best product & services.
        </p>
        <div className="partners-logos-wrap">
          <div className="partners-logos">
            {items.map((src, i) => (
              <div className="partner-logo" key={`${i}-${src}`}>
                <img src={src} alt={`partner-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
