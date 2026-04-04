import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, CheckCircle, Clock } from 'lucide-react';
import './CourseViewer.css';

const CourseViewer = () => {
  const { courseId } = useParams();
  
  // Fake data for demonstration
  const course = {
    title: 'Advanced React Patterns & Performance',
    instructor: 'Sarah Drasner',
    progress: 30, // 3 out of 10 done
    description: 'Master advanced architectural patterns to build scalable and performant modern React applications. We will dive deep into React internals, memoization strategies, custom hooks, and state management at scale.'
  };

  const lessons = [
    { id: 1, title: 'Course Introduction', duration: '5:30', completed: true, videoId: 'w7ejDZ8SWv8' },
    { id: 2, title: 'Understanding the Render Cycle', duration: '15:45', completed: true, videoId: 'pQce-AIvB0s' },
    { id: 3, title: 'Memoization in Depth (useMemo & useCallback)', duration: '22:10', completed: true, videoId: 'j942wKiXFu8' },
    { id: 4, title: 'Custom Hooks Architecture', duration: '18:20', completed: false, active: true, videoId: '8pDqJVdNa44' },
    { id: 5, title: 'Context API Performance Gotchas', duration: '25:00', completed: false, videoId: '35lXWvCuM8o' },
    { id: 6, title: 'State Machines in React', duration: '19:45', completed: false, videoId: 'bMknfKXIFA8' },
    { id: 7, title: 'Code Splitting and Lazy Loading', duration: '14:30', completed: false, videoId: 'Ke90Tje7VS0' },
  ];

  const [activeLesson, setActiveLesson] = useState(4);
  const currentLesson = lessons.find(l => l.id === activeLesson) || lessons[0];

  return (
    <div className="flex-col w-full h-full">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Dashboard
      </Link>
      
      <div className="course-viewer-container">
        
        <div className="video-section">
          {/* Main Video Player */}
          <div className="video-player-wrapper">
            <iframe 
              src={`https://www.youtube.com/embed/${currentLesson.videoId}?autoplay=1&showinfo=0&controls=1`} 
              title="Course Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <div className="course-meta">
            <h1 className="course-title-large">{course.title}</h1>
            
            <div className="instructor-info">
              <div className="instructor-avatar">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>Instructor</p>
                <p style={{fontWeight: '600'}}>{course.instructor}</p>
              </div>
            </div>

            <div className="course-description">
              <h3>About this course</h3>
              <p className="mt-2">{course.description}</p>
            </div>
          </div>
        </div>

        {/* Syllabus Sidebar */}
        <div className="syllabus-sidebar">
          <div className="syllabus-header">
            <h3>Course Content</h3>
            <div className="syllabus-progress">
              <div className="progress-container flex-1">
                <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span>3 / 10 Completed</span>
            </div>
          </div>

          <div className="lesson-list">
            {lessons.map(lesson => (
              <div 
                key={lesson.id} 
                className={`lesson-item ${lesson.active || activeLesson === lesson.id ? 'active' : ''} ${lesson.completed ? 'completed' : ''}`}
                onClick={() => setActiveLesson(lesson.id)}
              >
                <div className="lesson-icon">
                  {lesson.completed ? <CheckCircle size={20} /> : <PlayCircle size={20} />}
                </div>
                <div className="lesson-details">
                  <div className="lesson-title">{lesson.id}. {lesson.title}</div>
                  <div className="lesson-duration">
                    <Clock size={12} /> {lesson.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseViewer;
