import React from 'react';
import Card from './Card';
import './Dashboard.css';

const Dashboard = () => {
  const cards = [
    { icon: 'fas fa-user-check', title: 'Attendance' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Classes' },
    { icon: 'fas fa-pencil-alt', title: 'Exams' },
    { icon: 'fas fa-user-graduate', title: 'Students' },
    { icon: 'fas fa-chalkboard', title: 'Teachers' },
    { icon: 'fas fa-cog', title: 'Settings' }
  ];

  return (
    <div className="dashboard">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-2" key={index}>
            <Card icon={card.icon} title={card.title} />
          </div>
        
        ))}
      </div>
    </div>
    
  );
}

export default Dashboard;
