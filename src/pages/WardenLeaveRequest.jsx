import React, { useState, useEffect } from "react";

function WardenLeaveRequest() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("leaveRequests")) ||
      [];
    setLeaves(data);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id
        ? { ...leave, status: newStatus }
        : leave
    );

    setLeaves(updatedLeaves);

    localStorage.setItem(
      "leaveRequests",
      JSON.stringify(updatedLeaves)
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Leave Requests</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student</th>
            <th>Room</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.name}</td>
              <td>{leave.room}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.reason}</td>

              <td>{leave.status}</td>

              <td>
                {leave.status === "Pending" && (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(
                          leave.id,
                          "Approved"
                        )
                      }
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          leave.id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WardenLeaveRequest;