import React from 'react';
import { Mail, MapPin, Briefcase, Award, GraduationCap } from 'lucide-react';

const Profile = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header mb-8">
        <div className="welcome-text">
          <h1>Professional Profile</h1>
          <p>Manage your account and professional details</p>
        </div>
      </div>

      <div className="flex gap-6" style={{flexWrap: 'wrap'}}>
        {/* Left Column - User Info */}
        <div className="glass-panel" style={{flex: '1', minWidth: '300px'}}>
            <div className="flex-col items-center text-center">
                <div style={{
                    width: '120px', height: '120px', borderRadius: '50%', 
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem',
                    boxShadow: '0 10px 25px rgba(128, 0, 0, 0.3)'
                }}>
                    PW
                </div>
                <h2>Peter Walker</h2>
                <h3 style={{color: 'var(--primary)', marginTop: '0.5rem', fontWeight: '600'}}>Senior Software Architect</h3>
                
                <div className="mt-6 flex-col items-start w-full gap-4" style={{textAlign: 'left'}}>
                    <div className="flex items-center gap-3" style={{color: 'var(--text-secondary)'}}>
                        <Briefcase size={20} />
                        <span>TechCorp International</span>
                    </div>
                    <div className="flex items-center gap-3" style={{color: 'var(--text-secondary)'}}>
                        <MapPin size={20} />
                        <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-3" style={{color: 'var(--text-secondary)'}}>
                        <Mail size={20} />
                        <span>peter.walker@techcorp.com</span>
                    </div>
                </div>

                <div className="w-full mt-8 pt-6" style={{borderTop: '1px solid var(--surface-border)'}}>
                    <button className="btn btn-primary w-full justify-center">Edit Profile</button>
                    <button className="btn btn-secondary w-full justify-center mt-3">Settings</button>
                </div>
            </div>
        </div>

        {/* Right Column - Stats & Badges */}
        <div style={{flex: '2', minWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div className="glass-panel">
                <h3 className="mb-4">Professional Summary</h3>
                <p>
                    A highly accomplished Senior Software Architect with over 12 years of experience in designing scalable, highly available cloud-native infrastructure and leading advanced React & Node.js application teams. Dedicated to continuous learning and mentoring the next generation of engineers through TechLearn.
                </p>
            </div>

            <div className="glass-panel">
                <h3 className="mb-4">Certifications & Achievements</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4" style={{background: 'var(--surface-active)', borderRadius: '12px'}}>
                        <Award size={32} color="var(--primary)" />
                        <div>
                            <h4 style={{fontWeight: '600'}}>AWS Certified Solutions Architect – Professional</h4>
                            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem'}}>Earned inside TechLearn Platform • 2024</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4" style={{background: 'var(--surface-active)', borderRadius: '12px'}}>
                        <GraduationCap size={32} color="var(--primary)" />
                        <div>
                            <h4 style={{fontWeight: '600'}}>Advanced React Engineering Masterclass</h4>
                            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem'}}>Completed with Top Honors • 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="glass-panel flex-1 text-center">
                    <h2 style={{color: 'var(--primary)', fontSize: '2.5rem'}}>34</h2>
                    <p style={{fontWeight: '500'}}>Courses Completed</p>
                </div>
                <div className="glass-panel flex-1 text-center">
                    <h2 style={{color: 'var(--primary)', fontSize: '2.5rem'}}>99%</h2>
                    <p style={{fontWeight: '500'}}>Average Score</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
