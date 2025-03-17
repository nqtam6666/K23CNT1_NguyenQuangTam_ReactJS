import React from 'react';

export default function NqtContact() {
  return (
    <div className="page-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}