import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/student.css";

function RoomStudents() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  // Dummy students per room
  const studentsByRoom = {
    101: ["Ananya", "Diya", "Megha"],
    102: ["Aishwarya", "Nisha", "Kavya"],
    103: ["Pooja", "Riya", "Sneha"],
    104: ["Keerthana", "Ishita", "Navya"],
    105: ["Shreya", "Anjali", "Bhavya"],
    201: ["Hana", "Ridha", "Ashlin"],
    202: ["Aliya", "Anna", "Lia"],
    203: ["Selena", "Fathima", "Sara"],
    204: ["Neha", "Namitha", "Taniya"],
    205: ["Emilin", "Ann", "Asha"],
    301: ["Mariya", "Leela", "Lima"],
    302: ["Ray", "Emily", "Sandra"],
    303: ["Lakshmi", "Zera", "Isa"],
    304: ["Elsa", "Cindy", "Candy"],
    305: ["Isha", "Kavi", "Nisita"],

  };

  const students = studentsByRoom[roomId] || [];

  const [attendance, setAttendance] = useState({});

  // Mark attendance
  const markAttendance = (name, status) => {
    setAttendance((prev) => ({
      ...prev,
      [name]: status,
    }));
  };

  // Save + Link to student side
  const handleDone = () => {
    const today = new Date().toLocaleDateString();

    const records = students.map((name) => ({
      name,
      status: attendance[name] || "Absent",
      room: roomId,
      floor: Math.floor(roomId / 100),
      date: today,
    }));

    const oldData =
      JSON.parse(localStorage.getItem("attendanceRecords")) || [];

    localStorage.setItem(
      "attendanceRecords",
      JSON.stringify([...oldData, ...records])
    );

    alert("Attendance Saved ✅");
    navigate("/warden-dashboard");
  };

  return (
    <div className="room-page">
      <h2>Room {roomId} — Mark Attendance</h2>

      <div className="students-container">
        {students.map((name) => (
          <div key={name} className="student-card">
            <h3>{name}</h3>

            <div className="btn-group">
              <button
                className={
                  attendance[name] === "Present" ? "active-present" : ""
                }
                onClick={() => markAttendance(name, "Present")}
              >
                Present
              </button>

              <button
                className={
                  attendance[name] === "Absent" ? "active-absent" : ""
                }
                onClick={() => markAttendance(name, "Absent")}
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="done-btn" onClick={handleDone}>
        Done ✓
      </button>
    </div>
  );
}

export default RoomStudents;