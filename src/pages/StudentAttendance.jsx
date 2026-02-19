import React from "react";

function StudentAttendance() {
  const student =
    JSON.parse(localStorage.getItem("studentInfo")) || {
      name: "Ananya",
    };

  const records =
    JSON.parse(localStorage.getItem("attendanceRecords")) ||
    [];

  const myRecords = records.filter(
    (r) => r.name === student.name
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>{student.name}'s Attendance</h2>

      {myRecords.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Room</th>
              <th>Floor</th>
            </tr>
          </thead>

          <tbody>
            {myRecords.map((rec, i) => (
              <tr key={i}>
                <td>{rec.date}</td>

                <td
                  style={{
                    color:
                      rec.status === "Present"
                        ? "green"
                        : "red",
                    fontWeight: "bold",
                  }}
                >
                  {rec.status}
                </td>

                <td>{rec.room}</td>
                <td>{rec.floor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentAttendance;