import React, { useEffect, useRef } from 'react';
import '../styles/carousel.css';
import { useVideoContext } from '../contexts/VideoContext';

const Carousel = ({ videos }) => {
  const { currentVideoIndex, setCurrentVideoIndex } = useVideoContext();
  const activeVideoRef = useRef(null);

  useEffect(() => {
    if (activeVideoRef.current) {
      activeVideoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentVideoIndex]);

  const goToNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToPrevious = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const getClassNames = (index) => {
    if (index === currentVideoIndex) return 'active';
    if ((index + 1) % videos.length === currentVideoIndex) return 'next';
    if ((index - 1 + videos.length) % videos.length === currentVideoIndex) return 'previous';
    return 'hidden';
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={goToPrevious}>
        &lt;
      </button>
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div
            key={index}
            className={`carousel-video-container ${getClassNames(index)}`}
            ref={index === currentVideoIndex ? activeVideoRef : null}
          >
            <iframe
              className="carousel-video"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}
      <button className="carousel-button right" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
