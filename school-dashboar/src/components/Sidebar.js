import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Student Management</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <a href="#dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a>
        </li>
        <li>
          <a href="#attendance"><i className="fas fa-user-check"></i> Attendance</a>
        </li>
        <li>
          <a href="#classes"><i className="fas fa-chalkboard-teacher"></i> Classes</a>
        </li>
        <li>
          <a href="#exams"><i className="fas fa-pencil-alt"></i> Exams</a>
        </li>
        <li>
          <a href="#students"><i className="fas fa-user-graduate"></i> Students</a>
        </li>
        <li>
          <a href="#teachers"><i className="fas fa-chalkboard"></i> Teachers</a>
        </li>
        <li>
          <a href="#settings"><i className="fas fa-cog"></i> Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
