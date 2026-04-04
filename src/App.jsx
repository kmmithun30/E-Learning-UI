import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import CourseViewer from './pages/CourseViewer';
import Browse from './pages/Browse';
import MyCourses from './pages/MyCourses';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course/:courseId" element={<CourseViewer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
