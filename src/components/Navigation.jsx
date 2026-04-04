import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BookOpen, LayoutDashboard, Compass, Star, Settings, MessageSquare, GraduationCap } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <aside className="sidebar">
      <Link to="/" className="brand">
        <div className="brand-icon">
          <GraduationCap size={24} />
        </div>
        <span className="brand-name">TechLearn</span>
      </Link>

      <div className="nav-section">
        <div className="nav-section-title">Menu</div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/browse" className="nav-link">
            <Compass size={20} />
            <span>Browse</span>
          </NavLink>
          <NavLink to="/my-courses" className="nav-link">
            <BookOpen size={20} />
            <span>My Courses</span>
          </NavLink>
        </nav>
      </div>

      <div className="nav-section">
        <div className="nav-section-title">Your Learning</div>
        <nav className="nav-links">
          <NavLink to="/favorites" className="nav-link">
            <Star size={20} />
            <span>Favorites</span>
          </NavLink>
          <NavLink to="/messages" className="nav-link">
            <MessageSquare size={20} />
            <span>Messages</span>
          </NavLink>
        </nav>
      </div>

      <Link to="/profile" className="user-profile" style={{textDecoration: 'none'}}>
        <div className="avatar">PW</div>
        <div className="user-info">
          <span className="user-name">Peter Walker</span>
          <span className="user-role">Senior Software Architect</span>
        </div>
        <div className="ml-auto">
          <Settings size={18} color="var(--text-secondary)" />
        </div>
      </Link>
    </aside>
  );
};

export default Navigation;
