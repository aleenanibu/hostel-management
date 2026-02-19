import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WardenLogin.css";

function WardenLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // 🔐 Multiple Wardens
  const wardens = [
    { username: "warden1", password: "1234" },
    { username: "warden2", password: "5678" },
    { username: "warden3", password: "abcd" },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const found = wardens.find(
      (w) =>
        w.username === form.username &&
        w.password === form.password
    );

    if (found) {
      // Store login session
      localStorage.setItem(
        "wardenInfo",
        JSON.stringify(found)
      );

      navigate("/warden-dashboard");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="warden-login-container">

      <div className="login-card">

        {/* Logo */}
        <img
          src="/sset-logo.png"
          alt="College Logo"
          className="logo"
        />

        <h2>Warden Sign In</h2>
        <p>Sign in to your warden account</p>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <div className="input-group">
            <span>👤</span>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span>🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

        <p className="footer-text">
          Hostel Attendance Management System
        </p>

        <p
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </p>

      </div>
    </div>
  );
}

export default WardenLogin;