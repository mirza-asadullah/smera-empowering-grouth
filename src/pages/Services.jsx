import React from "react";
import service from "../assets/service.png";
import ctaBg from "../assets/servicebg.png";
import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";
import ss5 from "../assets/ss5.png";
import sr1 from "../assets/sr1.png";
import sr2 from "../assets/sr2.png";
import sr3 from "../assets/sr3.png";
import sr4 from "../assets/sr4.png";
import sr5 from "../assets/sr5.png";
import ss from "../assets/ss.png";
import ssbg from "../assets/ssbg.png";
import { usePopup } from "../components/ComingSoonPopup";

export default function Services() {
  const { openPopup } = usePopup();

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container services-hero-inner">
          <div className="services-hero-left">
            <span className="services-badge">SERVICES OVERVIEW</span>
            <h1 className="services-hero-title">
              Empowering the <span className="accent-text">Backbone</span> of
              Pakistan's Economy
            </h1>
            <p className="services-hero-desc">
              Bridging your hard-earned experience with modern tools, technology, 
              and execution to help your business thrive.
            </p>
            <button className="btn-services-explore" onClick={openPopup}>
              Explore Services →
            </button>
          </div>
          <div className="services-hero-right">
            <img src={service} alt="Services" className="services-hero-img" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="services-mission">
        <div className="container">
          <div className="mission-labels">
            {" "}
            <span className="mission-label">OUR MISSION</span>
          </div>
          <h2 className="mission-title">From Vision to </h2>{" "}
          <h2 className="mission-title">
            <div className="accent-text">Execution</div>
          </h2>
          <p className="mission-desc">
            You know your business inside and out and at SMERA, our goal is simple: 
            we want to help you make it even better. We deeply respect the sweat, 
            hard work, and years of experience you've poured into your company. 
            Think of us as your personal support team. We're here to blend your 
            traditional practices with modern tools, digital upgrades, and practical, 
            no-nonsense advice that makes your daily operations smoother and prepares 
            your business for its next big step.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services-section">
        <div className="container">
          <h2 className="core-services-title">Core Services</h2>
          <div className="core-services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">
                <img src={sr1} alt="Global Sourcing" />
              </div>
              <span className="service-category">Global Sourcing</span>
              <h3>Global Sourcing & Machinery Import</h3>
              <p className="service-tagline">Getting the best tech, without the headache.</p>
              <ul className="service-features">
                <li>Finding the right international suppliers</li>
                <li>Managing LC and bank paperwork</li>
                <li>Customs clearance & direct delivery</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">
                <img src={sr2} alt="Strategic Foundation" />
              </div>
              <span className="service-category">Strategic Foundation</span>
              <h3>Strategic Foundation</h3>
              <p className="service-tagline">Test your ideas before you spend your money.</p>
              <ul className="service-features">
                <li>Honest market-specific checks</li>
                <li>Bank-ready business plans</li>
                <li>Spotting risks before they cost you</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">
                <img src={sr3} alt="Financial Engineering" />
              </div>
              <span className="service-category">Funding & Finance</span>
              <h3>Financial Engineering</h3>
              <p className="service-tagline">Securing the capital you need to grow.</p>
              <ul className="service-features">
                <li>SME loan facilitation</li>
                <li>Getting ready for outside investors</li>
                <li>Simple, audit-ready accounting setups</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">
                <img src={sr4} alt="Growth & Export" />
              </div>
              <span className="service-category">Growth & Export</span>
              <h3>Growth & Export Facilitation</h3>
              <p className="service-tagline">Taking your local products to the global market.</p>
              <ul className="service-features">
                <li>Step-by-step export guidance</li>
                <li>Insights into international buyers</li>
                <li>World-class digital upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
      
      {/* Success Roadmap */}
      <section
        className="roadmap-section"
      >
        <div className="container roadmap-inner">
          <div className="roadmap-left">
            <img src={ss} alt="Roadmap" className="roadmap-image" />
          </div>
          <div className="roadmap-right">
            <div className="roadmap-step">
              <div className="step-number"></div>
              <div className="step-content">
                <div
                  className="step-number"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>01 &nbsp; &nbsp;</div> <h3>Discovery</h3>
                </div>
                <p>We analyze your current business health or new idea.</p>
              </div>
              <div className="step-icon">
                <img src={ss1} alt="Discovery" />
              </div>
            </div>

            <div className="roadmap-step">
              <div className="step-number"></div>
              <div className="step-content">
                <div
                  className="step-number"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>02 &nbsp; &nbsp;</div> <h3>Strategy</h3>
                </div>
                <p>
                  We build a roadmap tailored to your specific budget and goals.
                </p>
              </div>
              <div className="step-icon">
                <img src={ss2} alt="Strategy" />
              </div>
            </div>

            <div className="roadmap-step">
              <div className="step-number"> </div>
              <div className="step-content">
                <div
                  className="step-number"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>03 &nbsp; &nbsp;</div> <h3>Resource Acquisition</h3>
                </div>
                <p>
                  We help you get the machinery, funds, and licenses required.
                </p>
              </div>
              <div className="step-icon">
                <img src={ss3} alt="Resource Acquisition" />
              </div>
            </div>

            <div className="roadmap-step">
              <div className="step-number"></div>
              <div className="step-content">
                <div
                  className="step-number"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>04 &nbsp; &nbsp;</div> <h3>Implementation</h3>
                </div>
                <p>We work alongside you to set up operations.</p>
              </div>
              <div className="step-icon">
                <img src={ss4} alt="Implementation" />
              </div>
            </div>

            <div className="roadmap-step">
              <div className="step-number"> </div>
              <div className="step-content">
                <div
                  className="step-number"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>05 &nbsp; &nbsp;</div> <h3>Scaling</h3>
                </div>
                <p>Continuous support to expand your market share.</p>
              </div>
              <div className="step-icon">
                <img src={ss5} alt="Scaling" />
              </div>
            </div>

            <button className="btn-start-journey" onClick={openPopup}>
              Start Your Journey →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Scale Your Business?</h2>
            <p className="cta-desc">
              Don't navigate the complex business landscape alone. Let SMERA be
              your guide to industrial and commercial success.
            </p>
            <div className="cta-buttons">
              <button className="btn-get-started" onClick={openPopup}>
                Get Started
              </button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}