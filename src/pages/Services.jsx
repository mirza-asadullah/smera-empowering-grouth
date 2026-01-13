import React from 'react'
import ourwork from '../assets/ourwork.png'

export default function Services() {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container services-hero-inner">
                    <div className="services-hero-left">
                        <span className="services-badge">SERVICES OVERVIEW</span>
                        <h1 className="services-hero-title">
                            Empowering the <span className="accent-text">Backbone</span> of Pakistan's Economy
                        </h1>
                        <p className="services-hero-desc">
                            Bridging entrepreneurial vision with operational reality through tools, technology, and execution.
                        </p>
                        <button className="btn-services-explore">
                            Explore Services →
                        </button>
                    </div>
                    <div className="services-hero-right">
                        <img src={ourwork} alt="Services" className="services-hero-img" />
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="services-mission">
                <div className="container">
                    <span className="mission-label">OUR MISSION</span>
                    <h2 className="mission-title">From Vision to <span className="accent-text">Execution</span></h2>
                    <p className="mission-desc">
                        At SMERA, we bridge the gap between entrepreneurial vision and operational reality. We provide the tools, the technology, and the tactics that Small and Medium Enterprises need to scale sustainably in a competitive global market.
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
                            <div className="service-icon">🌐</div>
                            <h3>Global Sourcing & Machinery Import</h3>
                            <p className="service-tagline">Bring World-Class Technology</p>
                            <ul className="service-features">
                                <li>✓ International supplier identification</li>
                                <li>✓ LC handling, customs clearance</li>
                                <li>✓ End-to-end logistics, delivery</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3>Strategic Foundation</h3>
                            <p className="service-tagline">Validate Before You Invest</p>
                            <ul className="service-features">
                                <li>✓ Market-specific pre-feasibility</li>
                                <li>✓ Bank-ready business plans</li>
                                <li>✓ Risk assessment frameworks</li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="service-card">
                            <div className="service-icon">💰</div>
                            <h3>Financial Engineering</h3>
                            <p className="service-tagline">Bring World-Class Technology</p>
                            <ul className="service-features">
                                <li>✓ SME loan facilitation</li>
                                <li>✓ Equity & VC investment readiness</li>
                                <li>✓ Cloud-based accounting & audit</li>
                            </ul>
                        </div>

                        {/* Service 4 */}
                        <div className="service-card">
                            <div className="service-icon">🌱</div>
                            <h3>Growth & Export Facilitation</h3>
                            <p className="service-tagline">Bring World-Class Technology</p>
                            <ul className="service-features">
                                <li>✓ Export readiness guidance</li>
                                <li>✓ Market intelligence & demand insights</li>
                                <li>✓ Digital transformation</li>
                            </ul>
                        </div>

                        {/* Service 5 */}
                        <div className="service-card">
                            <div className="service-icon">⚖️</div>
                            <h3>Regulatory & Legal Compliance</h3>
                            <p className="service-tagline">Bring World-Class Technology</p>
                            <ul className="service-features">
                                <li>✓ Company Registration (SECP)</li>
                                <li>✓ Taxation services (NTN/tax/FBR)</li>
                                <li>✓ Intellectual Property (Trademarks)</li>
                                <li>✓ Legal protection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose SMERA */}
            <section className="why-choose-section">
                <div className="container">
                    <h2 className="why-choose-title">Why Choose <span className="accent-text">SMERA</span>?</h2>
                    <p className="why-choose-subtitle">The private sector advantage</p>

                    <div className="comparison-table">
                        <div className="table-header">
                            <div className="col-feature">Feature</div>
                            <div className="col-public">Public Sector (SMEDA)</div>
                            <div className="col-smera">SMERA ADVANTAGE</div>
                        </div>

                        <div className="table-row">
                            <div className="col-feature">Speed</div>
                            <div className="col-public">Bureaucratic timelines & delays</div>
                            <div className="col-smera">Fast-track execution</div>
                        </div>

                        <div className="table-row">
                            <div className="col-feature">Personalization</div>
                            <div className="col-public">General solutions</div>
                            <div className="col-smera">Bespoke, tailored solutions</div>
                        </div>

                        <div className="table-row">
                            <div className="col-feature">Follow-through</div>
                            <div className="col-public">Policy-focused implementation</div>
                            <div className="col-smera">Hands-on, result-driven</div>
                        </div>

                        <div className="table-row">
                            <div className="col-feature">Network</div>
                            <div className="col-public">Limited government linkages</div>
                            <div className="col-smera">Global & private trade networks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Roadmap */}
            <section className="roadmap-section">
                <div className="container roadmap-inner">
                    <div className="roadmap-left">
                        <div className="roadmap-circle">
                            <div className="circle-content">
                                <div className="circle-label">Smera</div>
                                <div className="circle-main">Success</div>
                                <div className="circle-sub">Roadmap</div>
                                <div className="circle-dots">• • •</div>
                            </div>
                        </div>
                    </div>
                    <div className="roadmap-right">
                        <div className="roadmap-step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Discovery</h3>
                                <p>We analyze your current business health or new idea.</p>
                            </div>
                            <div className="step-icon">🔍</div>
                        </div>

                        <div className="roadmap-step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Strategy</h3>
                                <p>We build a roadmap tailored to your specific budget and goals.</p>
                            </div>
                            <div className="step-icon">📋</div>
                        </div>

                        <div className="roadmap-step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Resource Acquisition</h3>
                                <p>We help you get the machinery, funds, and licenses required.</p>
                            </div>
                            <div className="step-icon">🛒</div>
                        </div>

                        <div className="roadmap-step">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <h3>Implementation</h3>
                                <p>We work alongside you to set up operations.</p>
                            </div>
                            <div className="step-icon">⚙️</div>
                        </div>

                        <div className="roadmap-step">
                            <div className="step-number">05</div>
                            <div className="step-content">
                                <h3>Scaling</h3>
                                <p>Continuous support to expand your market share.</p>
                            </div>
                            <div className="step-icon">📈</div>
                        </div>

                        <button className="btn-start-journey">Start Your Journey →</button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <h2 className="cta-title">Ready to Scale Your Business?</h2>
                    <p className="cta-desc">
                        Don't navigate the complex business landscape alone. Let SMERA be your guide to industrial and commercial success.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-get-started">Get Started</button>
                        <button className="btn-schedule">Schedule a Consultation</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
