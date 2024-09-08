// App.js
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <MainContent />
        <Routes>
          <Route path="/login" element={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
