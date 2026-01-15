import React, { useState, createContext, useContext } from "react";
import popupIcon from "../assets/popupicon.png";
import comingSoonIcon from "../assets/comingsoonicon.png";

// Create context for popup state
const PopupContext = createContext();

export function usePopup() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
      <ComingSoonPopup isOpen={isOpen} onClose={closePopup} />
    </PopupContext.Provider>
  );
}

export default function ComingSoonPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just close the popup for now - no actual submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup-close-btn"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>
        <div className="popup-content1">
          <h2 className="popup-title">
            Coming Soon
            <img src={comingSoonIcon} alt="" className="popup-title-icon" />
          </h2>

          <p className="popup-description">
            We're working hard to bring you this feature. Join our waitlist to
            get notified when we launch!
          </p>
        </div>
      </div>
    </div>
  );
}
