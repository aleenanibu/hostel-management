import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/studentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Dummy Login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.studentId === "S101" &&
      formData.password === "123456"
    ) {
      localStorage.setItem(
        "studentInfo",
        JSON.stringify({ id: "S101", name: "Ananya" })
      );

      navigate("/student/dashboard");
    } else {
      setLoginError("Invalid Student ID or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Student Login</h2>

        {loginError && <p className="error">{loginError}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="back" onClick={() => navigate("/")}>
          ← Back to Home
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
