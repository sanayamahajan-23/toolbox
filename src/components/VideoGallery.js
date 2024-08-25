import React, { useRef, useState, useEffect } from 'react';
import '../styles/videogallery.css';
import { useVideoContext } from '../contexts/VideoContext';

const VideoGallery = ({ heading, videos }) => {
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
        behavior: 'smooth',
      });
    }
  };

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index); // Set the current video index for the carousel
  };

  const getThumbnailUrl = (videoUrl) => {
    const videoId = videoUrl.split('/').pop(); // Extract the ID from the video URL
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Generate the thumbnail URL
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
              onClick={() => handleVideoClick(index)} // Set the current video index on click
            >
              {/* Display the YouTube video thumbnail */}
              <img
                src={getThumbnailUrl(video)}
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
