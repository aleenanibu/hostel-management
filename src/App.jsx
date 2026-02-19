import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WardenLogin from "./pages/WardenLogin";
import WardenDashboard from "./pages/WardenDashboard";
import Attendance from "./pages/Attendance";
import Rooms from "./pages/Rooms";
import RoomStudents from "./pages/RoomStudents";

import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";
import StudentAttendance from "./pages/StudentAttendance";
import LeaveRequest from "./pages/LeaveRequest";

import WardenLeaveRequest from "./pages/WardenLeaveRequest"; // ⭐ ADD THIS

function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Warden */}
        <Route path="/warden-login" element={<WardenLogin />} />
        <Route path="/warden-dashboard" element={<WardenDashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/rooms/:floor" element={<Rooms />} />
        <Route path="/room/:roomId" element={<RoomStudents />} />
        <Route
          path="/warden/leave-requests"
          element={<WardenLeaveRequest />}
        />

        {/* Student */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/leave" element={<LeaveRequest />} />

      </Routes>
    </Router>
  );
}

export default App;