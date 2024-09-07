import React from 'react';
import '../styles/banner.css';

const Banner = ({ onScrollToResources }) => {
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
    fontFamily: "'Rubik', sans-serif"
  };

  const contentStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px', 
    fontWeight: '500',
    color: '#FFFFFF',
  };

  const subtitleStyle = {
    fontSize: '25px', 
    color: '#cfb692',
    margin: 0,
  };

  const ctaContainerStyle = {
    backgroundColor: '#b24525', 
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
    fontFamily: "'Rubik', sans-serif",
  };

  const ctaStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderRadius: '20px',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    width: '250px', 
    justifyContent: 'center',
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

  const secondButtonStyle = {
    ...ctaStyle,
    marginLeft: '10px',  
    textAlign: 'center',
  };

  const secondCtaTextStyle = {
    color: '#b24525',
    fontSize: '14px',
    textAlign: 'center', 
    fontWeight : 'bold'
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
            <a href="https://go.shortenthegap.com/order-page1725647264316" target="__blank" style={ctaLinkStyle}>Go order one <strong>here</strong></a>
          </span>
        </div>
        <div style={secondButtonStyle} onClick={onScrollToResources}>
          <span style={secondCtaTextStyle}>
            <a href="#" style={{ color: '#b24525', textDecoration: 'none' }}>
              <strong>DOWNLOAD</strong><br />your free resources
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
