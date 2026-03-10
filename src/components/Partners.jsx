import React from "react";
import image1 from "../assets/companiesAffiliations/image1.png";
import image2 from "../assets/companiesAffiliations/image2.png";
import image3 from "../assets/companiesAffiliations/image3.png";
import image4 from "../assets/companiesAffiliations/image4.png";
import image5 from "../assets/companiesAffiliations/image5.png";
import image6 from "../assets/companiesAffiliations/image6.png";

export default function Partners() {
  const logos = [image1, image2, image3, image4, image5, image6];
  // repeat logos three times to ensure content width exceeds container and loops seamlessly
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="partners-section">
      <div className="containerp">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-subtitle">
          Overseeing A Diverse Group Of Companies With A Commitment To Excellence, Efficiency, And Sustainable Expansion.

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
