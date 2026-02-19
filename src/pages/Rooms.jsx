import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/rooms.css";

function Rooms() {
  const { floor } = useParams();
  const navigate = useNavigate();

  // Rooms per floor
  const roomsByFloor = {
    1: [101, 102, 103, 104, 105],
    2: [201, 202, 203, 204, 205],
    3: [301, 302, 303, 304, 305],
  };

  const rooms = roomsByFloor[floor] || [];

  // Get attendance records
  const records =
    JSON.parse(localStorage.getItem("attendanceRecords")) || [];

  // Function → Calculate attendance %
  const getAttendanceRate = (roomId) => {
    const roomRecords = records.filter(
      (r) => r.room == roomId
    );

    if (roomRecords.length === 0) return 0;

    const presentCount = roomRecords.filter(
      (r) => r.status === "Present"
    ).length;

    return Math.round(
      (presentCount / roomRecords.length) * 100
    );
  };

  // Function → Decide color
  const getColorClass = (rate) => {
    if (rate >= 75) return "room-green";
    if (rate >= 40) return "room-yellow";
    return "room-red";
  };

  return (
    <div className="rooms-page">
      <h2>Floor {floor} — Select Room</h2>

      <div className="rooms-container">
        {rooms.map((room) => {
          const rate = getAttendanceRate(room);

          return (
            <div
              key={room}
              className={`room-circle ${getColorClass(rate)}`}
              onClick={() => navigate(`/room/${room}`)}
            >
              <h3>{room}</h3>
              <p>{rate}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rooms;