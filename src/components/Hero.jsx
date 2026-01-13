import React from 'react'

function CTAs() {
  return (
    <div className="ctas">
      <a className="btn btn-primary" href="#">Explore Our Work</a>
      <a className="btn btn-secondary" href="#">Partner With SMERA</a>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h2 className="kicker">SMERA Advancing Pakistan’s SMEs Through Research & Innovation</h2>
        <p className="lead">A Research & Development–led SME Enablement Center transforming traditional enterprises into efficient, technology-driven, and scalable businesses.</p>
        <CTAs />
      </div>

      <div className="hero-right">
        <div className="image-wrap">
          <img src="/src/assets/hero.svg" alt="factory" className="hero-image" />
          <a className="circle-cta" href="#">
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
