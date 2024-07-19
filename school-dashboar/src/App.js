import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import HeroUnit from './components/HeroUnit';
import Statics from './components/Statics';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <Statics/>
        <Dashboard />
      </div>
      
    </div>
  );
}

export default App;
