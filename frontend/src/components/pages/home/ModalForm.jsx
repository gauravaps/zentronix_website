// src/components/ModalForm.jsx
import React, { useEffect } from "react";
import "./Modal.css";
import { IoClose } from "react-icons/io5";
  
const ModalForm = ({ isOpen, onClose, children }) => { 
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseDown={(e) => {
      // close only when clicking on overlay, not inside modal content
      if (e.target.classList.contains("modal-overlay")) onClose?.();
    }}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-label="Contact form">
        <button className="modal-close" onClick={onClose} aria-label="Close form">
          <IoClose size={20} />
        </button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
