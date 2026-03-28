import React from 'react'
import './Success.css'

function Success() {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1>Password Reset Successful!</h1>
        <p>Your password has been successfully reset.</p>
        <p className="info-text">You can now login using the School Management App with your new password.</p>
      </div>
    </div>
  )
}

export default Success
