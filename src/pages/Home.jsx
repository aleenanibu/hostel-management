import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* LEFT SIDE CONTENT */}
      <div className="home-left">
        <h1>Never let time tell you to stop</h1>
        <p>
          Explore the limitless world of education
        </p>

        {/* Feature Highlights */}
        <div className="features">
          <p>✔ Real-time Attendance</p>
          <p>✔ Leave Approval System</p>
          <p>✔ Student Dashboard</p>
        </div>
      </div>

      {/* RIGHT SIDE LOGIN PANEL */}
      <div className="home-right">

        <div className="login-card">
          
          <img
            src="/sset-logo.png"
            alt="College Logo"
            className="logo"
          />

          <h2>Hostel Attendance Portal</h2>

          <p className="portal-desc">
            Smart hostel management system for
            attendance & leave tracking.
          </p>

          {/* Buttons */}
          <button
            className="login-btn"
            onClick={() =>
              navigate("/warden-login")
            }
          >
            👩‍💼 Warden Login
          </button>

          <button
            className="login-btn"
            onClick={() =>
              navigate("/student-login")
            }
          >
            🎓 Student Login
          </button>

        </div>

        {/* Footer */}
        <footer>
          © 2026 Hostel Attendance System
        </footer>

      </div>
    </div>
  );
}

export default Home;