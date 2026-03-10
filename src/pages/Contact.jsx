import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData(e.target);
    formDataObj.append("access_key", "ee0116da-f25a-4543-9b61-bb6bd02e10b2");
    // Add metadata for better email organization
    formDataObj.append("from_name", formData.name);
    formDataObj.append("subject", `New Inquiry - ${formData.service || 'General'}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", service: "", timeline: "", details: "" });
    } else {
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="container">
          <div className="contact-title">CONTACT US</div>

          <form onSubmit={handleSubmit}>
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
                    <option value="sourcing">
                      Global Sourcing & Machinery Import
                    </option>
                    <option value="strategic">Strategic Foundation</option>
                    <option value="financial">Financial Engineering</option>
                    <option value="growth">Growth & Export Facilitation</option>
                    <option value="regulatory">
                      Regulatory & Legal Compliance
                    </option>
                    <option value="others">
                      others
                    </option>
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
              <button type="submit" className="btn-submit">
                Send
              </button>
              {result && <p style={{ marginTop: '10px', color: result.includes('success') ? 'green' : 'red' }}>{result}</p>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
