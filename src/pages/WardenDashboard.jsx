import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WardenDashboard.css";

function WardenDashboard() {
  const navigate = useNavigate();

  // Logged-in warden
  const warden =
    JSON.parse(localStorage.getItem("wardenInfo")) ||
    { username: "Warden" };

  // Dummy stats
  const totalStudents = 45;
  const totalRooms = 15;

  // Leave data
  const leaves =
    JSON.parse(localStorage.getItem("leaveRequests")) ||
    [];

  const pendingLeaves = leaves.filter(
    (l) => l.status === "Pending"
  ).length;

  const logout = () => {
    localStorage.removeItem("wardenInfo");
    navigate("/");
  };

  return (
    <div className="warden-dashboard">

      {/* HEADER */}
      <div className="dashboard-header">

        <h2>
          Welcome {warden.username} 👋
        </h2>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      {/* STATS */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>{totalStudents}</h3>
          <p>Total Students</p>
        </div>

        <div className="stat-card">
          <h3>{totalRooms}</h3>
          <p>Total Rooms</p>
        </div>

        <div className="stat-card">
          <h3>{pendingLeaves}</h3>
          <p>Pending Leaves</p>
        </div>

      </div>

      {/* ACTIONS */}
      <div className="actions-container">

        <div
          className="action-card"
          onClick={() =>
            navigate("/attendance")
          }
        >
          <h3>📋 Attendance</h3>
          <p>
            Mark and view hostel attendance
          </p>
        </div>

        <div
          className="action-card"
          onClick={() =>
            navigate(
              "/warden/leave-requests"
            )
          }
        >
          <h3>📝 Leave Management</h3>
          <p>
            Approve or reject leave requests
          </p>
        </div>

      </div>
    </div>
  );
}

export default WardenDashboard;