import React, { useEffect } from 'react';
import '../styles/carousel.css';
import { useVideoContext } from '../contexts/VideoContext';

const Carousel = () => {
  const { currentVideoIndex, setCurrentVideoIndex } = useVideoContext();
  const videos = [
    { src: '/assets/video1.mp4', title: 'Video 1', description: 'Video description' },
    { src: '/assets/video2.mp4', title: 'Video 2', description: 'Video description' },
    { src: '/assets/video3.mp4', title: 'Video 3', description: 'Video description' },
    { src: '/assets/video4.mp4', title: 'Video 4', description: 'Video description' },
    { src: '/assets/video5.mp4', title: 'Video 5', description: 'Video description' },
    { src: '/assets/video6.mp4', title: 'Video 6', description: 'Video description' },
    { src: '/assets/video7.mp4', title: 'Video 7', description: 'Video description' },
    { src: '/assets/video8.mp4', title: 'Video 8', description: 'Video description' },
    { src: '/assets/video9.mp4', title: 'Video 9', description: 'Video description' },
    { src: '/assets/video10.mp4', title: 'Video 10', description: 'Video description' },
    { src: '/assets/video11.mp4', title: 'Video 11', description: 'Video description' },

  ];

  useEffect(() => {
    // Update video index if needed
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
      {videos.map((video, index) => (
        <div
          key={index}
          className={`carousel-video-container ${getClassNames(index)}`}
        >
          <video
            className="carousel-video"
            src={video.src}
            controls
            autoPlay={index === currentVideoIndex}
          />
        </div>
      ))}
      <button className="carousel-button right" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
