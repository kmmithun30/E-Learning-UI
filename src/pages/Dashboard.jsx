import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, BookOpen, Trophy, Flame } from 'lucide-react';
import './Dashboard.css';

const courses = [
  {
    id: 'advanced-react',
    title: 'Advanced React Patterns & Performance',
    category: 'Development',
    author: 'Sarah Drasner',
    progress: 75,
    duration: '4h 30m',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ui-animation',
    title: 'Mastering UI Micro-interactions',
    category: 'Design',
    author: 'Gary Simon',
    progress: 32,
    duration: '2h 15m',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'backend-node',
    title: 'Node.js Architecture Scaling',
    category: 'Engineering',
    author: 'Maximilian Schwarzmüller',
    progress: 0,
    duration: '6h 45m',
    image: '/nodejs_cover.png'
  },
  {
    id: 'python-data',
    title: 'Data Science with Python',
    category: 'Data',
    author: 'Jose Portilla',
    progress: 0,
    duration: '12h 10m',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Solutions Architect',
    category: 'Cloud',
    author: 'Stephane Maarek',
    progress: 0,
    duration: '8h 20m',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="welcome-text">
          <h1>Welcome back, Peter</h1>
          <p>You're on a 5-day learning streak! Keep it up. <Flame size={16} color="var(--secondary)" style={{display: 'inline', verticalAlign: 'text-bottom'}} /></p>
        </div>
        <Link to="/course/advanced-react" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          Resume Last Course
        </Link>
      </div>

      <div className="stats-grid">
        <div className="glass-panel stat-card">
          <div className="stat-icon purple">
            <BookOpen size={28} />
          </div>
          <div className="stat-info">
            <h3>12</h3>
            <p>Courses Enrolled</p>
          </div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-icon blue">
            <Clock size={28} />
          </div>
          <div className="stat-info">
            <h3>34h</h3>
            <p>Hours Learned</p>
          </div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-icon pink">
            <Trophy size={28} />
          </div>
          <div className="stat-info">
            <h3>4</h3>
            <p>Certificates Earned</p>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2>Continue Learning</h2>
        <a href="#" className="view-all">View all courses &rarr;</a>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/course/${course.id}`} key={course.id} className="glass-panel course-card">
            <div className="course-image-container" style={{ margin: '-1.5rem -1.5rem 1.5rem -1.5rem' }}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-image-overlay"></div>
              <div className="course-duration">
                <PlayCircle size={14} />
                {course.duration}
              </div>
            </div>
            
            <div className="course-content">
              <span className="course-category">{course.category}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-author">{course.author}</p>
              
              <div className="course-footer">
                <div className="progress-header">
                  <span>{course.progress > 0 ? `${course.progress}% Completed` : 'Not Started'}</span>
                  {course.progress === 100 && <span className="badge">Done</span>}
                </div>
                <div className="progress-container">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
