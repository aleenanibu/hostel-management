import React from "react";
import { useNavigate } from "react-router-dom"
import "../styles/attendance.css";

function Attendance() {
  const navigate = useNavigate();

  // Floors list
  const floors = [1, 2, 3];

  // Get attendance records
  const records =
    JSON.parse(localStorage.getItem("attendanceRecords")) || [];

  // Function → Calculate attendance % for floor
  const getFloorAttendance = (floor) => {
    const floorRecords = records.filter(
      (r) => Number(r.floor) === floor
    );

    if (floorRecords.length === 0) return 0;

    const presentCount = floorRecords.filter(
      (r) => r.status === "Present"
    ).length;

    return Math.round(
      (presentCount / floorRecords.length) * 100
    );
  };

  // Function → Color by %
  const getColorClass = (percent) => {
    if (percent >= 90) return "floor-green";
    if (percent >= 70) return "floor-yellow";
    return "floor-red";
  };

  return (
    <div className="attendance-page">
      <h1>Hello Warden 👋</h1>
      <p>Select Floor</p>

      <div className="floor-container">
        {floors.map((floor) => {
          const percent = getFloorAttendance(floor);

          return (
            <div
              key={floor}
              className={`floor-card ${getColorClass(
                percent
              )}`}
              onClick={() =>
                navigate(`/rooms/${floor}`)
              }
            >
              <h2>Floor {floor}</h2>
              <p>{percent}% Attendance</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Attendance;