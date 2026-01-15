import React from "react";
import whatsappIcon from "../assets/whattsapp.png";

export default function WhatsAppButton() {
  const handleClick = () => {
    // Opens WhatsApp - you can customize this with your phone number
    window.open("https://wa.me/", "_blank");
  };

  return (
    <button
      className="whatsapp-float-btn"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </button>
  );
}
