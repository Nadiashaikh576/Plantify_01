import React from "react";
import "./Contact.css"; // Import custom CSS file

export default function Contact() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1>Login to Your Garden!</h1>
          <p>
            Login to your plant profile and discover a world of green possibilities.
          </p>
        </div>
        <div className="card">
          <form className="card-body">
            <div className="form-control">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <div className="form-control">
              <button type="submit" className="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
