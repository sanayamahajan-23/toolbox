import React from 'react';
import '../styles/banner.css';

const Banner = () => {
  const bannerStyle = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29292E',
    borderTop: '4px solid #E4723C',  
    color: '#E0E0E0',
    overflow: 'hidden',
    paddingTop: '120px', 
  };

  const contentStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px', 
    fontWeight: 'bold',
    color: '#FFFFFF',
  };

  const subtitleStyle = {
    fontSize: '20px', 
    color: '#e4723c',
    margin: 0,
  };

  const ctaContainerStyle = {
    backgroundColor: '#E4723C', 
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
  };

  const ctaStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderRadius: '12px',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  };

  const journalImageStyle = {
    height: '50px',
    marginRight: '10px',
  };

  const ctaTextStyle = {
    color: '#000', 
    fontSize: '14px',
    textAlign: 'left',
  };

  const ctaLinkStyle = {
    color: '#000', 
    textDecoration: 'none',
    fontWeight: 'normal',
  };

  return (
    <section style={bannerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>90 Day Target Setting Strategy Course</h1>
        <p style={subtitleStyle}>
          a Step by Step System to<br />
          <strong>IDENTIFY</strong> and <strong>CRUSH</strong> <br />
          your next 90 day targets
        </p>
      </div>
      <div style={ctaContainerStyle}>
        <div style={ctaStyle}>
          <img src="/assets/journal.png" alt="Journal" style={journalImageStyle} />
          <span style={ctaTextStyle}>
            Don't have a journal yet? <br />
            <a href="/order" style={ctaLinkStyle}>Go order one <strong>here</strong></a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
