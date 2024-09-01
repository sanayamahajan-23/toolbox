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

  const videos = [
    { elementId: "vidalytics_embed_kAz6cJcn09qD1Jgm" },
    { elementId: "vidalytics_embed_7NyyCgVAadYvleJe" }
  ];

  // const allVideos = [
  //   ...driversAndMotivationVideos,
  //   ...planForSuccessVideos,
  //   ...dailyWorkVideos,
  // ];

  return (
    <VideoProvider>
      <Header />
      <Banner />
    <main>
    <Carousel videos={videos} />
    <VideoGallery
      heading="Phase 1: Drivers and Motivation"
      videos={driversAndMotivationVideos}
      offset={0}
      />
    <VideoGallery
      heading="Phase 2: Plan for Success"
      videos={planForSuccessVideos}
      offset={driversAndMotivationVideos.length}
      />
    <VideoGallery
      heading="Phase 3: The Daily Work"
      videos={dailyWorkVideos}
      offset={driversAndMotivationVideos.length + planForSuccessVideos.length}
     />
    </main>
      <Footer />
    </VideoProvider>
  );
};

export default ShareholderNewsletter;
