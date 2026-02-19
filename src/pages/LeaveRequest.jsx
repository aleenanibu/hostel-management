import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/studentDashboard.css";

function StudentDashboard() {
  const navigate = useNavigate();

  const student =
    JSON.parse(localStorage.getItem("studentInfo")) || {
      name: "Student",
      room: "101",
      floor: "1",
    };

  // 🔹 Get Leave Data
  const allLeaves =
    JSON.parse(localStorage.getItem("leaveRequests")) ||
    [];

  const myLeaves = allLeaves.filter(
    (l) => l.name === student.name
  );

  const pending = myLeaves.filter(
    (l) => l.status === "Pending"
  ).length;

  const approved = myLeaves.filter(
    (l) => l.status === "Approved"
  ).length;

  const rejected = myLeaves.filter(
    (l) => l.status === "Rejected"
  ).length;

  // Navigation
  const goToAttendance = () => {
    navigate("/student/attendance");
  };

  const goToLeaveRequest = () => {
    navigate("/student/leave");
  };

  const logout = () => {
    localStorage.removeItem("studentInfo");
    navigate("/");
  };

  return (
    <div className="student-dashboard">
      
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Student Dashboard</h1>
        </div>

        <div className="header-right">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn" onClick={logout}>
            🚪
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        
        {/* Welcome */}
        <div className="welcome-section">
          <h2>Welcome {student.name} 👋</h2>
          <p className="student-details">
            Room {student.room} • Floor {student.floor}
          </p>
        </div>

        <div className="dashboard-grid">
          
          {/* Attendance Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Attendance</h3>
            </div>

            <div className="attendance-stats">
              <div className="stat-item">
                <div className="stat-value present">
                  --
                </div>
                <div className="stat-label">
                  Overall Attendance
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button
                className="card-action-btn primary"
                onClick={goToAttendance}
              >
                View Attendance
              </button>
            </div>
          </div>

          {/* Leave Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Leave Requests</h3>
            </div>

            {/* 🔹 Dynamic Leave Stats */}
            <div className="leave-stats">

              <div className="leave-stat-item pending">
                <div className="stat-number">
                  {pending}
                </div>
                <div className="stat-name">
                  Pending
                </div>
              </div>

              <div className="leave-stat-item approved">
                <div className="stat-number">
                  {approved}
                </div>
                <div className="stat-name">
                  Approved
                </div>
              </div>

              <div className="leave-stat-item rejected">
                <div className="stat-number">
                  {rejected}
                </div>
                <div className="stat-name">
                  Rejected
                </div>
              </div>

            </div>

            {/* Latest Status */}
            {myLeaves.length > 0 && (
              <p style={{ marginTop: "10px" }}>
                Latest Status:{" "}
                <strong>
                  {
                    myLeaves[
                      myLeaves.length - 1
                    ].status
                  }
                </strong>
              </p>
            )}

            <div className="card-actions">
              <button
                className="card-action-btn primary"
                onClick={goToLeaveRequest}
              >
                Request Leave
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;