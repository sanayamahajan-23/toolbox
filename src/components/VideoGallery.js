
import React, { useRef, useState, useEffect } from 'react';
import '../styles/videogallery.css';
import { useVideoContext } from '../contexts/VideoContext';

const VideoGallery = ({ year, videos }) => {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const { setCurrentVideoIndex } = useVideoContext();

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="video-gallery">
      <h2>{year}</h2>
      <div className="video-gallery-container">
        {showLeftButton && (
          <button className="carousel-button left" onClick={() => scroll('left')}>
            &lt;
          </button>
        )}
        <div className="video-gallery-slider" ref={sliderRef}>
          {videos.map((video, index) => (
            <div
              key={index}
              className="video-gallery-item"
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={`/assets/thumbnail${index + 1}.png`}
                alt={video.title}
                className="video-gallery-thumbnail"
              />
                
              <div className="video-gallery-info">
                <div className="video-gallery-card">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
              <div className="video-gallery-play-button">
                <span>&#9658;</span>
              </div>
            </div>
          ))}
        </div>
        {showRightButton && (
          <button className="carousel-button right" onClick={() => scroll('right')}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
