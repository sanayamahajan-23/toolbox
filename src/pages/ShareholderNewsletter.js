import React from 'react';
import Header from '../components/Header';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { VideoProvider } from '../contexts/VideoContext';
const ShareholderNewsletter = () => {
  const archiveVideos = [
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

  return (
    <VideoProvider>
    <Header />
    <Banner />
    <main>
      <Carousel />
      <VideoGallery year="2023" videos={archiveVideos} />
      <VideoGallery year="2022" videos={archiveVideos} />
    </main>
    <Footer />
  </VideoProvider>
  );
};

export default ShareholderNewsletter;
