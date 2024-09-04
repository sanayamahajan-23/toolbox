import React from 'react';
import Header from '../components/Header';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { VideoProvider } from '../contexts/VideoContext';

const ShareholderNewsletter = () => {

  const CarouselVideos = [
    {elementId: 'kAz6cJcn09qD1Jgm'},
    {elementId: 'j7sWliFucdhZv3Xy'},
    {elementId: 'IO6ACYKP3TTMa4bb'},
    {elementId: 'jGEB9lNWfERa5Ieu'},
    {elementId: 'hz7j0odFA7GSyPtT'},
    {elementId: 'AdBdjMQm_9jFFCUF'},
    {elementId: 'E4dL3ar1pdB'},
    {elementId: '8fN1jKigicrQ0085'},
    {elementId: 'SeoVHM8KImajOku4'},
    {elementId: '53reyMw14s_hdQ5v'},
    {elementId: '0PNwAmovrV_wRl8_'},
    {elementId: 'pAPgqhyDsRB_Mfpd'},
    {elementId: '7KQMqPEqjRH7cv68'},
    {elementId: 'vnGxWoyMyFyyAqfv'},
    {elementId: 'SfhxD0PE17ke8bHD'},
    {elementId: 'HZpLrsyuUHZUUmQg'},
    {elementId: 'PgmDfstHpyaTspxD'},
    {elementId: 'xsRwFQQHDPFLlnLX'},
    {elementId: 'IFRv6ybT9Evu'},
    {elementId: '8JnBq8joSI5oXRQC'},
    {elementId: 'KgkGRGWTh3dZqEXj'},
    {elementId: 'w4Eswbhi8TU4Tz_H'},
    {elementId: 'p4LO4SWHqsEpnQV1'},
    {elementId: 'yhKAq5ImcOOhRIan'},
  ]


  const driversAndMotivationVideos = [
    { elementId: 'AdBdjMQm_9jFFCUF', id: 'fUbMwlEqocX1w_sH', thumbnailUrl:{
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/blob-66d5f868176f4.jpg',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
    } },
    {elementId: 'p4LO4SWHqsEpnQV1', id: 'FaMQxI8ucLRxvhFQ', thumbnailUrl:{
      desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg',
      mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
  }}
  ].filter(Boolean);

  const planForSuccessVideos = [
    { elementId: 'AdBdjMQm_9jFFCUF', id: 'fUbMwlEqocX1w_sH', thumbnailUrl:{
      desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/blob-66d5f868176f4.jpg',
      mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
  } },
  {elementId: 'p4LO4SWHqsEpnQV1', id: 'FaMQxI8ucLRxvhFQ', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
}}
  ].filter(Boolean);

  const dailyWorkVideos = [
    { elementId: 'AdBdjMQm_9jFFCUF', id: 'fUbMwlEqocX1w_sH', thumbnailUrl:{
      desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/blob-66d5f868176f4.jpg',
      mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
  } },
  {elementId: 'p4LO4SWHqsEpnQV1', id: 'FaMQxI8ucLRxvhFQ', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
}}
  ].filter(Boolean);

  return (

    <VideoProvider>
      <Header />
      <Banner />
        <main>
          <Carousel videos={CarouselVideos} />
          <VideoGallery
            heading="Phase 1: Drivers and Motivation"
            videos={driversAndMotivationVideos}
            offset={driversAndMotivationVideos.length}
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
