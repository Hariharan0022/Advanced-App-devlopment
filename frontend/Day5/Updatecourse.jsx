// Updatecourse.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Updatecourse.css'; // Import the CSS file for styling

const Updatecourse = () => {
  const [courses, setCourses] = useState([
    { id: 1, coursename: 'React Basics', duration: '2 weeks', timings: 'Morning', mode: 'Online', fees: '$99' },
    { id: 2, coursename: 'Node.js Fundamentals', duration: '4 weeks', timings: 'Evening', mode: 'Offline', fees: '$149' },
    // Add more sample courses as needed
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editedCourse, setEditedCourse] = useState({});

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setEditedCourse({ ...course });
  };

  const handleUpdateCourse = () => {
    const updatedCourses = courses.map(course =>
      course.id === editedCourse.id ? { ...editedCourse } : course
    );
    setCourses(updatedCourses);
    setSelectedCourse(null);
  };

  const handleDeleteCourse = (courseId) => {
    const updatedCourses = courses.filter(course => course.id !== courseId);
    setCourses(updatedCourses);
    setSelectedCourse(null);
  };

  const handleCloseEdit = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <div className='bod-up'>
        <h2>View Courses</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Timings</th>
              <th>Mode</th>
              <th>Fees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.coursename}</td>
                <td>{course.duration}</td>
                <td>{course.timings}</td>
                <td>{course.mode}</td>
                <td>{course.fees}</td>
                <td>
                  <button type="button" onClick={() => handleEditCourse(course)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDeleteCourse(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inline Edit Form */}
      {selectedCourse && (
        <div className="edit-overlay">
          <div className="edit-form">
            <h3>Edit Course</h3>
            <label htmlFor="editedCoursename">Course Name:</label>
            <input
              type="text"
              id="editedCoursename"
              value={editedCourse.coursename}
              onChange={(e) => setEditedCourse({ ...editedCourse, coursename: e.target.value })}
            />

            <label htmlFor="editedDuration">Duration:</label>
            <input
              type="text"
              id="editedDuration"
              value={editedCourse.duration}
              onChange={(e) => setEditedCourse({ ...editedCourse, duration: e.target.value })}
            />

            <label htmlFor="editedTimings">Timings:</label>
            <input
              type="text"
              id="editedTimings"
              value={editedCourse.timings}
              onChange={(e) => setEditedCourse({ ...editedCourse, timings: e.target.value })}
            />

            <label htmlFor="editedMode">Mode:</label>
            <select
              id="editedMode"
              value={editedCourse.mode}
              onChange={(e) => setEditedCourse({ ...editedCourse, mode: e.target.value })}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>

            <label htmlFor="editedFees">Fees:</label>
            <input
              type="text"
              id="editedFees"
              value={editedCourse.fees}
              onChange={(e) => setEditedCourse({ ...editedCourse, fees: e.target.value })}
            />

            <button type="button" onClick={handleUpdateCourse}>
              Update
            </button>
            <button type="button" onClick={handleCloseEdit}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updatecourse;
