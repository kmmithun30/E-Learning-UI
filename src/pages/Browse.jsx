import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, PlayCircle } from 'lucide-react';
import './Dashboard.css';

const allCourses = [
  { id: 'advanced-react', title: 'Advanced React Patterns & Performance', category: 'Development', author: 'Sarah Drasner', progress: 0, duration: '4h 30m', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'ui-animation', title: 'Mastering UI Micro-interactions', category: 'Design', author: 'Gary Simon', progress: 0, duration: '2h 15m', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'backend-node', title: 'Node.js Architecture Scaling', category: 'Engineering', author: 'Maximilian Schwarzmüller', progress: 0, duration: '6h 45m', image: '/nodejs_cover.png' },
  { id: 'python-data', title: 'Data Science with Python', category: 'Data', author: 'Jose Portilla', progress: 0, duration: '12h 10m', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 'aws-cloud', title: 'AWS Cloud Solutions Architect', category: 'Cloud', author: 'Stephane Maarek', progress: 0, duration: '8h 20m', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const Browse = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header mb-6">
        <div className="welcome-text">
          <h1>Browse Courses</h1>
          <p>Discover new topics and expand your skillset.</p>
        </div>
      </div>
      
      <div className="flex gap-4 mb-8">
        <div className="flex-1" style={{position: 'relative'}}>
            <Search style={{position: 'absolute', top: '10px', left: '12px', color: 'var(--text-secondary)'}} size={20} />
            <input 
                type="text" 
                placeholder="Search for courses, skills, or instructors..." 
                style={{
                  width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', 
                  borderRadius: '12px', border: '1px solid var(--surface-border)', 
                  background: 'var(--surface)', color: 'var(--text-primary)'
                }} 
            />
        </div>
        <button className="btn btn-secondary">
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="courses-grid">
        {allCourses.map(course => (
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
              
              <div className="course-footer mt-4">
                <button className="btn btn-primary w-full justify-center">View Course</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Browse;
