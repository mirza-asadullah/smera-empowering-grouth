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
                You know your business inside and out, and at SMERA, we want to help you grow it. Think of us as your personal support team. By blending your hard-earned experience with modern digital upgrades, we give you the tools to stop stressing about daily hiccups and focus on your next big step.
              </p>

              <div className="why-smera-stats">
                <div className="stat-item">
                  <span className="stat-number">80+</span>
                  <span className="stat-label">Project Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">70+</span>
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
