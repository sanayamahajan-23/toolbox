import React from 'react';
import Header from '../components/Header';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { VideoProvider } from '../contexts/VideoContext';

const ShareholderNewsletter = () => {
  const driversAndMotivationVideos = [
    process.env.REACT_APP_DM_VIDEO_1,
    process.env.REACT_APP_DM_VIDEO_2,
    process.env.REACT_APP_DM_VIDEO_3,
    process.env.REACT_APP_DM_VIDEO_4,
    process.env.REACT_APP_DM_VIDEO_5,
    process.env.REACT_APP_DM_VIDEO_6,
    process.env.REACT_APP_DM_VIDEO_7,
    process.env.REACT_APP_DM_VIDEO_8,
    process.env.REACT_APP_DM_VIDEO_9,
    process.env.REACT_APP_DM_VIDEO_10,
  ].filter(Boolean);

  const planForSuccessVideos = [
    process.env.REACT_APP_PFS_VIDEO_1,
    process.env.REACT_APP_PFS_VIDEO_2,
    process.env.REACT_APP_PFS_VIDEO_3,
    process.env.REACT_APP_PFS_VIDEO_4,
    process.env.REACT_APP_PFS_VIDEO_5,
    process.env.REACT_APP_PFS_VIDEO_6,
    process.env.REACT_APP_PFS_VIDEO_7,
    process.env.REACT_APP_PFS_VIDEO_8,
  ].filter(Boolean);

  const dailyWorkVideos = [
    process.env.REACT_APP_TDW_VIDEO_1,
    process.env.REACT_APP_TDW_VIDEO_2,
    process.env.REACT_APP_TDW_VIDEO_3,
    process.env.REACT_APP_TDW_VIDEO_4,
    process.env.REACT_APP_TDW_VIDEO_5,
    process.env.REACT_APP_TDW_VIDEO_6,
  ].filter(Boolean);

  const allVideos = [
    ...driversAndMotivationVideos,
    ...planForSuccessVideos,
    ...dailyWorkVideos,
  ];

  return (
    <VideoProvider>
      <Header />
      <Banner />
      <main>
        <Carousel videos={allVideos} />
        <VideoGallery heading="Phase 1: Drivers and Motivation" videos={driversAndMotivationVideos} />
        <VideoGallery heading="Phase 2: Plan for Success" videos={planForSuccessVideos} />
        <VideoGallery heading="Phase 3: The Daily Work" videos={dailyWorkVideos} />
      </main>
      <Footer />
    </VideoProvider>
  );
};

export default ShareholderNewsletter;
