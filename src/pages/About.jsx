import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import about4 from '../assets/about4.png'
import about5 from '../assets/about5.png'
import about6 from '../assets/about6.png'
import mission1 from '../assets/mission1.png'
import mission2 from '../assets/mission2.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'

export default function About() {
    return (
        <div className="about-page">
            {/* About SMERA Section */}
            <section className="about-hero-section">
                <div className="container about-hero-inner">
                    <div className="about-left">
                        <div className="about-title">About SMERA</div>
                        <div className="about-images">
                            <img src={about1} alt="Factory" className="about-img about-img-1" />
                            <img src={about2} alt="Analytics" className="about-img about-img-2" />
                        </div>
                    </div>
                    <div className="about-right">
                        <p className="about-desc">
                            SMERA is a Research & Development-driven SME advancement center established through a strategic collaboration between Winvest and Empire Lifestyle.We research, test, localize, and deploy modern SME solutions that enhance productivity, reduce operational costs, and enable sustainable industrial growth across Pakistan.By combining applied research with on-ground implementation, SMERA bridges the gap between theory and execution, helping SMEs transition from labor-intensive models to technology-enabled, future-ready enterprises.
                        </p>
                        <div className="about-stats-grid">
                            <div className="about-stat-item">
                                <img src={about3} alt="Clients" className="stat-icon" />
                                <div className="stat-content">
                                    <h4>Clients & Partners</h4>
                                    <p>Growing network of SME partners and stakeholders</p>
                                </div>
                            </div>
                            <div className="about-stat-item">
                                <img src={about4} alt="Cities" className="stat-icon" />
                                <div className="stat-content">
                                    <h4>Cities Covered</h4>
                                    <p>Initial rollout with expansion underway</p>
                                </div>
                            </div>
                            <div className="about-stat-item">
                                <img src={about5} alt="Team" className="stat-icon" />
                                <div className="stat-content">
                                    <h4>Team Members</h4>
                                    <p>Multidisciplinary research and execution team</p>
                                </div>
                            </div>
                            <div className="about-stat-item">
                                <img src={about6} alt="Projects" className="stat-icon" />
                                <div className="stat-content">
                                    <h4>Projects & Pilots</h4>
                                    <p>Research-backed pilot and implementation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="container">
                    <div className="mission-vision-card">
                        <h2 className="mission-vision-title">Mission & Vision</h2>
                        <div className="mission-vision-grid">
                            <div className="mv-card">
                                <div className="mv-icon">
                                    <img src={mission1} alt="Mission" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>We empower businesses with smart, innovative solutions.Through learning, technology, and global collaboration, we deliver lasting value and help clients succeed.</p>
                            </div>
                            <div className="mv-card">
                                <div className="mv-icon">
                                    <img src={mission2} alt="Vision" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>To be a trusted global tech leader, transforming industries through innovation and empowering teams to create lasting impact. We aim to set new standards by uniting people, ideas, and technology for a smarter future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Partners Section */}

                        <Partners/>
                       <div style={{backgroundColor:'black', border:'1px solid black', padding:'50px 0px 0px 0px',}}> <Testimonials /></div>
        </div>
    )
}
