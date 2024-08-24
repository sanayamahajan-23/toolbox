import React from 'react';
import DownArrow from './DownArrow';

const Banner = () => {
  const bannerStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '60px',
    overflow: 'hidden',
    background: 'transparent', 
  };

  const pseudoElementStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('/assets/banner.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(10px)', 
    zIndex: -2, 
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', 
    zIndex: -1, 
  };

  const textStyle = {
    fontSize: '1.5rem',
    lineHeight: '1.8',
    marginBottom: '20px',
  };

  const buttonStyle = {
    marginTop: '30px',
    padding: '15px 30px',
    fontSize: '1.2rem',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent black
    color: '#fff',
    backdropFilter: 'blur(10px)', // Glass-like blur effect
    boxShadow: '0 4px 10px rgba(0, 0,0, 0.2)', // Soft shadow
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };

  return (
    <section style={bannerStyle}>
      <div style={pseudoElementStyle} />
      <div style={overlayStyle} />
      <div style={{ maxWidth: '600px', zIndex: 1, textAlign: 'center' }}>
        <h1 style={{ fontSize: "50px" }}>Lorem Ipsum</h1>
        <p style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus enim nisl, imperdiet quis arcu id, rutrum egestas justo.
          Suspendisse a molestie leo. Integer quis fermentum neque, sed condimentum dolor. Donec justo ipsum, 
          imperdiet quis finibus quis, pulvinar in odio. Donec posuere eget tellus et mattis.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Explore Now
        </button>
      </div>
      <DownArrow />
    </section>
  );
};

export default Banner;
