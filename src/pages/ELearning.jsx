import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ELearning() {
  // Calculate countdown to a target date (e.g., 30 days from now for demo)
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 23,
    minutes: 58,
    seconds: 53,
  });

  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="elearning-page">
      <div className="elearning-hero">
        <div className="elearning-content">
          {/* Coming Soon Badge */}
          <span className="coming-soon-badge">Coming Soon</span>

          {/* Title */}
          <h1 className="elearning-title">
            Crafting the
            <br />
            <span className="gradient-text">future of digital.</span>
          </h1>

          {/* Subtitle */}
          <p className="elearning-subtitle">
            We're building something extraordinary. A new standard
            <br />
            for elegance and performance is on the horizon.
          </p>

          {/* Countdown Timer */}
          <div className="countdown-container1">
            <div className="countdown-container">
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="countdown-label">Days</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="countdown-label">Hours</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="countdown-label">Minutes</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </div>
          {/* Email Signup */}
          <div className="notify-section">
            <p className="notify-label">Get notified when we launch</p>
            <form className="notify-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="notify-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="notify-btn">
                <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </button>
            </form>
            <p className="notify-disclaimer">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
