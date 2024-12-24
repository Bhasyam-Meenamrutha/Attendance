// App.jsx
import React, { useState } from "react";
import "./index.scss";

const App = () => {
  const [attendance, setAttendance] = useState({}); // Store attendance for roll numbers
  const [studentRollNo, setStudentRollNo] = useState("");
  const [facultyRollNo, setFacultyRollNo] = useState("");
  const [status, setStatus] = useState("Present");
  const [studentResult, setStudentResult] = useState("");

  // Faculty marks attendance
  const handleMarkAttendance = () => {
    if (facultyRollNo.trim()) {
      setAttendance((prev) => ({ ...prev, [facultyRollNo]: status }));
      setFacultyRollNo("");
    }
  };

  // Student checks attendance
  const handleCheckAttendance = () => {
    if (attendance.hasOwnProperty(studentRollNo)) {
      setStudentResult(attendance[studentRollNo]);
    } else {
      setStudentResult("Invalid user");
    }
  };

  return (
    <div className="app">
      <h1>Attendance Application</h1>

      {/* Faculty Page */}
      <div className="faculty-section">
        <h2>Faculty Page</h2>
        <input
          type="text"
          placeholder="Enter Roll No."
          value={facultyRollNo}
          onChange={(e) => setFacultyRollNo(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button onClick={handleMarkAttendance}>Mark Attendance</button>
      </div>

      {/* Student Page */}
      <div className="student-section">
        <h2>Student Page</h2>
        <input
          type="text"
          placeholder="Enter Your Roll No."
          value={studentRollNo}
          onChange={(e) => setStudentRollNo(e.target.value)}
        />
        <button onClick={handleCheckAttendance}>Check Attendance</button>
        {studentResult && <p className="result">{studentResult}</p>}
      </div>
    </div>
  );
};

export default App;
