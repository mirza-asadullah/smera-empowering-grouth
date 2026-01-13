import React from 'react'
import skill1 from '../assets/skill1.png'


export default function SmeraAcademy() {
    return (
        <section className="academy-section">
            <div className="container academy-inner">
                <div className="academy-content">
                    <span className="academy-badge">
                        <span className="badge-dot"></span> SME E-Learning Portal
                    </span>

                    <h2 className="academy-title">
                        Master Business Skills with <span className="accent-text">SMERA Academy</span>
                    </h2>

                    <p className="academy-desc">
                        Unlock your potential with our comprehensive e-learning platform designed specifically for SME owners and professionals. Access world-class resources, expert-led courses, and a community of innovators.
                    </p>

                    <div className="academy-features">
                        <div className="feature-row">
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Industry-led curriculum designed for SMEs</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Live mentorship from business experts</span>
                            </div>
                        </div>
                        <div className="feature-row">
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Practical, hands-on project based learning</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Recognized certification upon completion</span>
                            </div>
                        </div>
                    </div>

                    <div className="academy-actions">
                        <a href="#" className="btn btn-primary">Enroll Now →</a>
                        <a href="#" className="btn btn-outline">View Course Catalog</a>
                    </div>

                    <div className="academy-stats">
                        <div className="stat-box">
                            <span className="stat-val">50+</span>
                            <span className="stat-key">Courses</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-val">2k+</span>
                            <span className="stat-key">Students</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-val">4.9</span>
                            <span className="stat-key">Rating</span>
                        </div>
                    </div>
                </div>

                <div className="academy-image-col">
                    <div className="academy-img-wrapper">
                        
                        <img src={skill1} alt="Students learning" className="academy-main-img" />
 
                    </div>
                </div>
            </div>
        </section>
    )
}
