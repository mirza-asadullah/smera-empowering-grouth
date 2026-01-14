import React, { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeline: '',
        details: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission here
    }

    return (
        <div className="contact-page">
            <section className="contact-section">
                <div className="container">
                    <h1 className="contact-title">CONTACT US</h1>

                    <form  onSubmit={handleSubmit}>
                        <div className="form-grid">
                            {/* Left Column */}
                            <div className="form-column">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="timeline"
                                        placeholder="Timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="form-column">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="form-select"
                                        required
                                    >
                                        <option value="">Service Of Interest</option>
                                        <option value="sourcing">Global Sourcing & Machinery Import</option>
                                        <option value="strategic">Strategic Foundation</option>
                                        <option value="financial">Financial Engineering</option>
                                        <option value="growth">Growth & Export Facilitation</option>
                                        <option value="regulatory">Regulatory & Legal Compliance</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="details"
                                        placeholder="Details..."
                                        value={formData.details}
                                        onChange={handleChange}
                                        className="form-textarea"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="btn-submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
