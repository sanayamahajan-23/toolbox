import React from 'react';
import '../styles/banner.css';

const Banner = () => {
  const bannerStyle = {
    position: 'relative',
    height: '40vh', 
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29292E',
    borderBottom: '4px solid #cbb598',
    color: '#E0E0E0',
    padding: '20px',
    paddingTop: '100px', 
    overflow: 'hidden',
  };
  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#FFFFFF',
   
  };

  const subtitleStyle = {
    fontSize: '25px',
    color: '#cbb598',
    margin: 0,
  };

  return (
    <section style={bannerStyle}>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h1 style={titleStyle}>90 Day Target Setting Strategy Course</h1>
        <p style={subtitleStyle}>a Step by Step System to<br></br>
       <strong>IDENTIFY</strong> and <strong>CRUSH</strong> <br></br>your next 90 day targets</p>
      </div>
    </section>
  );
};

export default Banner;
