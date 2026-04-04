import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import './Dashboard.css';

const myCourses = [
  { id: 'advanced-react', title: 'Advanced React Patterns & Performance', category: 'Development', author: 'Sarah Drasner', progress: 75, duration: '4h 30m', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'ui-animation', title: 'Mastering UI Micro-interactions', category: 'Design', author: 'Gary Simon', progress: 32, duration: '2h 15m', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const MyCourses = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header mb-6">
        <div className="welcome-text">
          <h1>My Courses</h1>
          <p>Resume where you left off</p>
        </div>
      </div>
      
      <div className="courses-grid">
        {myCourses.map(course => (
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

export default MyCourses;
