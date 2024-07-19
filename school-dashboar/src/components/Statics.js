import React from 'react'
import './Statics.css';

function Statics() {
  return (
    <div className="dashboard-totals">
    <div className="total-card">
      <div className="total-icon">🎓</div>
      {/* <div className="total-number">{totalStudents}</div> */}
      <div className="total-label">Total Students</div>
    </div>
    <div className="total-card">
      <div className="total-icon">👥</div>
      {/* <div className="total-number">{totalEmployees}</div> */}
      <div className="total-label">Total Employees</div>
    </div>
    <div className="total-card">
      <div className="total-icon">📚</div>
      {/* <div className="total-number">{totalSubjects}</div> */}
      <div className="total-label">Total Subjects</div>
    </div>

    <div className="total-card">
      <div className="total-icon">📅</div>
      {/* <div className="total-number">{totalSubjects}</div> */}
      <div className="total-label">Total Holiday</div>
    </div>

    <div className="total-card">
      <div className="total-icon">📜</div>
      {/* <div className="total-number">{totalSubjects}</div> */}
      <div className="total-label">History</div>
    </div>
    
  </div>
  )
}

export default Statics
