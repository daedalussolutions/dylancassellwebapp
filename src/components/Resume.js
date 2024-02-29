import React from 'react';
import resume from '../assets/utils/Resume.pdf'
import logo from '../assets/images/logo-white.png'

const Resume = () => {
  function openResume() {
    window.open(resume);
  };

  return (
      
    <div className='resume-container'onClick={openResume}>
        <div className='resume-button-text'>
          <h2>Click to view my CV</h2>
        </div>
        <div className='resume-button-logo'>
          <img src={logo} className="logo" alt='logo'></img>
        </div>
      </div>
  );
};

export default Resume;