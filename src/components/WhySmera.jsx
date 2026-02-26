import React from "react";
import whysmera from "../assets/whysmera.png";

export default function WhySmera() {
  return (
    <section className="why-smera-section">
      <div className="container">
        <div className="why-smera-card">
          {/* Decorative shapes */}
          <div className="deco-shape deco-top-right"> </div>
          <div className="deco-shape deco-bottom-right"></div>

          <div className="why-smera-inner">
            <div className="why-smera-image">
              <img src={whysmera} alt="Why SMERA" className="person-img" />
            </div>

            <div className="why-smera-content">
              <h2 className="why-smera-title">
                Why <span className="accent-text">SMERA</span>?
              </h2>
              <p className="why-smera-desc">
                SMERA is a forward-thinking R&D-driven SME Enablement Center
                dedicated to empowering small and medium enterprises with
                cutting-edge solutions. We bridge the gap between traditional
                business practices and modern innovation — enabling digital
                transformation, operational efficiency, and sustainable growth
                for enterprises ready to scale.
              </p>

              <div className="why-smera-stats">
                <div className="stat-item">
                  <span className="stat-number">450+</span>
                  <span className="stat-label">Project Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">350+</span>
                  <span className="stat-label">Products we have</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
