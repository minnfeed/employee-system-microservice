import React from 'react';
import './Card.css';

const Card = ({ icon, text, iconBackgroundColor }) => {
  return (
    <div className="card custom-card">
      <div className="card-body d-flex">
        {/* ICON giữ nguyên */}
        <div
          className="icon-container"
          style={{ backgroundColor: iconBackgroundColor }}
        >
          <div className="card-icon">{icon}</div>
        </div>

        {/* NỘI DUNG */}
        <div className="ms-3 d-flex flex-column align-items-end">
          {/* Phần trên: Bookings & số */}
          <div>
            <span className="text-secondary fw-medium">Bookings</span>
            <h4 className="fw-bold mb-0 text-dark">281</h4>
          </div>
        </div>
      </div>
      <div className="w-100 border-top d-flex justify-content-between">
        <span className="text-muted ms-2">+55% than last week</span>
      </div>
    </div>
  );
};

export default Card;
