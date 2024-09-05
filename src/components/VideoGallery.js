import React, { useRef, useState, useEffect } from 'react';
import '../styles/videogallery.css';
import { useVideoContext } from '../contexts/VideoContext';

const VideoGallery = ({ heading, videos, offset }) => {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const { setCurrentVideoIndex, setCurrentVideoId } = useVideoContext();

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const slider = sliderRef?.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        if (slider) {
          slider.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleVideoClick = (index, id) => {
    // Set the selected video index and ID
    setCurrentVideoIndex(index + offset);
    setCurrentVideoId(id);
    
    // Scroll the page to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This ensures the scrolling is smooth
    });
  };

  return (
    <div className="video-gallery">
      <h2>{heading}</h2>
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
              onClick={() => handleVideoClick(index, video.elementId)}
            >
              <img
                src={video?.thumbnailUrl?.desktop}
                alt={`Video thumbnail ${index + 1}`}
                width="100%"
                height="auto"
              />
              <div className="play-button">&#9658;</div>
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
