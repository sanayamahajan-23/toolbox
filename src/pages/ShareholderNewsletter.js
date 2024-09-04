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
    {elementId: 'SDMq_E4dL3ar1pdB'},
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
    {elementId: 'pM5_IFRv6ybT9Evu'},
    {elementId: '8JnBq8joSI5oXRQC'},
    {elementId: 'KgkGRGWTh3dZqEXj'},
    {elementId: 'w4Eswbhi8TU4Tz_H'},
    {elementId: 'p4LO4SWHqsEpnQV1'},
    {elementId: 'yhKAq5ImcOOhRIan'},
  ]


  const driversAndMotivationVideos = [
    { 
      elementId: 'kAz6cJcn09qD1Jgm', id: '0wOnwsqXC6RV0FoL',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/0wOnwsqXC6RV0FoL/img/thumbnail/blob-66d341fa15769.jpg',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/0wOnwsqXC6RV0FoL/img/thumbnail/blob-66d341fa15769.jpg'
      }
   },
    {
      elementId: 'j7sWliFucdhZv3Xy', id: '2sIyj_xlFb8w54YF', thumbnailUrl:{
      desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/2sIyj_xlFb8w54YF/148721/145086__FFMPEG/thumb/thumbnail-5_0.jpg',
      mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/2sIyj_xlFb8w54YF/148721/145086__FFMPEG/thumb/thumbnail-5_0.jpg'
    }},
  {
    elementId: 'IO6ACYKP3TTMa4bb', id: 'Bvv8jLnaQeZjB5_m', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Bvv8jLnaQeZjB5_m/img/thumbnail/blob-66d5f95a9174f.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Bvv8jLnaQeZjB5_m/img/thumbnail/blob-66d5f95a9174f.jpg'
  }},
  {
    elementId: 'jGEB9lNWfERa5Ieu', id: 'pSwJFG2gHtWa7jL6', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/pSwJFG2gHtWa7jL6/img/thumbnail/blob-66d5f905d9e59.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/pSwJFG2gHtWa7jL6/img/thumbnail/blob-66d5f905d9e59.jpg'
  }},
  {
    elementId: 'hz7j0odFA7GSyPtT', id: 'a3bxQBBKb4FMv_Fu', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/a3bxQBBKb4FMv_Fu/img/thumbnail/blob-66d5f8bae238a.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/a3bxQBBKb4FMv_Fu/img/thumbnail/blob-66d5f8bae238a.jpg'
  }},
  {
    elementId: 'AdBdjMQm_9jFFCUF', id: 'a3bxQBBKb4FMv_Fu', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/blob-66d5f868176f4.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/blob-66d5f868176f4.jpg'
  }},
  {
    elementId: 'SDMq_E4dL3ar1pdB', id: 'Hej4abl63pXlLaZ8', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Hej4abl63pXlLaZ8/img/thumbnail/blob-66d5f81744ef8.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Hej4abl63pXlLaZ8/img/thumbnail/blob-66d5f81744ef8.jpg'
  }},
  {
    elementId: '8fN1jKigicrQ0085', id: 'CP9eE7SJRCEuZVF2', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/CP9eE7SJRCEuZVF2/img/thumbnail/blob-66d5f7ca3c34b.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/CP9eE7SJRCEuZVF2/img/thumbnail/blob-66d5f7ca3c34b.jpg'
  }},
  {
    elementId: 'wysiQ9FSzMBBklbV', id: 'csyDQD81c59pjEdd', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/csyDQD81c59pjEdd/img/thumbnail/blob-66d5f77055c10.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/csyDQD81c59pjEdd/img/thumbnail/blob-66d5f77055c10.jpg'
  }},
  {
    elementId: 'wysiQ9FSzMBBklbV', id: 'BGwbjuKTdY1zIm2Z', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/csyDQD81c59pjEdd/img/thumbnail/blob-66d5f77055c10.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/csyDQD81c59pjEdd/img/thumbnail/blob-66d5f77055c10.jpg'
  }},
  {
    elementId: '53reyMw14s_hdQ5v', id: 'Iu9yAD9Zcla9y_ef', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Iu9yAD9Zcla9y_ef/img/thumbnail/blob-66d5f6bea9f24.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Iu9yAD9Zcla9y_ef/img/thumbnail/blob-66d5f6bea9f24.jpg'
  }}

].filter(Boolean);

  const planForSuccessVideos = [
    { elementId: '0PNwAmovrV_wRl8_', id: 'IQZf4q0eB8o4eMgo', thumbnailUrl:{
      desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/IQZf4q0eB8o4eMgo/img/thumbnail/blob-66d5f664bf06b.jpg',
      mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/IQZf4q0eB8o4eMgo/img/thumbnail/blob-66d5f664bf06b.jpg'
  } },
  {elementId: 'pAPgqhyDsRB_Mfpd', id: 'M2Q79mOC7k_aE8H4', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/M2Q79mOC7k_aE8H4/img/thumbnail/blob-66d5f5e51cba3.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/M2Q79mOC7k_aE8H4/img/thumbnail/blob-66d5f5e51cba3.jpg'
  }},
  {elementId: '7KQMqPEqjRH7cv68', id: 'FaMQxI8ucLRxvhFQ', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Lo6JVutr6twpUDuN/img/thumbnail/blob-66d5f5a3d98a0.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Lo6JVutr6twpUDuN/img/thumbnail/blob-66d5f5a3d98a0.jpg'
  }},
{elementId: 'e2FbEoxv6fUeHxHG', id: 'FaMQxI8ucLRxvhFQ', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/e2FbEoxv6fUeHxHG/img/thumbnail/blob-66d5f52dae410.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/e2FbEoxv6fUeHxHG/img/thumbnail/blob-66d5f52dae410.jpg'
}},

  ].filter(Boolean);

  const dailyWorkVideos = [
    { elementId: 'SfhxD0PE17ke8bHD', id: '5AwMZ2hVvD7OHynH', thumbnailUrl:{
      desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/5AwMZ2hVvD7OHynH/img/thumbnail/blob-66d5f4bb72998.jpg',
      mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/5AwMZ2hVvD7OHynH/img/thumbnail/blob-66d5f4bb72998.jpg'
  } },
  {elementId: 'HZpLrsyuUHZUUmQg', id: '0giZ2R44lYw_jkCz', thumbnailUrl:{
    desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/0giZ2R44lYw_jkCz/img/thumbnail/blob-66d5f46c5c453.jpg',
    mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/0giZ2R44lYw_jkCz/img/thumbnail/blob-66d5f46c5c453.jpg'
}},
{ elementId: 'PgmDfstHpyaTspxD', id: '5eVB43sq28iYVbWz', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/5eVB43sq28iYVbWz/148737/145102__FFMPEG/thumb/thumbnail-5_0.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/5eVB43sq28iYVbWz/148737/145102__FFMPEG/thumb/thumbnail-5_0.jpg'
} },
{ elementId: 'xsRwFQQHDPFLlnLX', id: 'UXegj44DaTMepNLi', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/UXegj44DaTMepNLi/img/thumbnail/blob-66d5f3d76d88a.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/UXegj44DaTMepNLi/img/thumbnail/blob-66d5f3d76d88a.jpg'
} },
{ elementId: 'pM5_IFRv6ybT9Evu', id: 'Q3jcEKdURuRgP_RM', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Q3jcEKdURuRgP_RM/img/thumbnail/blob-66d5f38341cd4.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Q3jcEKdURuRgP_RM/img/thumbnail/blob-66d5f38341cd4.jpg'
} },
{ elementId: '8JnBq8joSI5oXRQC', id: '11DTX1t7yeqaokyX', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/11DTX1t7yeqaokyX/148740/145105__FFMPEG/thumb/thumbnail-5_0.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/11DTX1t7yeqaokyX/148740/145105__FFMPEG/thumb/thumbnail-5_0.jpg'
} },
{ elementId: 'KgkGRGWTh3dZqEXj', id: '9GwpRaqVvlMNq71E', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/9GwpRaqVvlMNq71E/148741/145106__FFMPEG/thumb/thumbnail-5_0.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/9GwpRaqVvlMNq71E/148741/145106__FFMPEG/thumb/thumbnail-5_0.jpg'
} },
{ elementId: 'w4Eswbhi8TU4Tz_H', id: '4PO3cgAxwABssHyK', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/4PO3cgAxwABssHyK/148742/145107__FFMPEG/thumb/thumbnail-5_0.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/4PO3cgAxwABssHyK/148742/145107__FFMPEG/thumb/thumbnail-5_0.jpg'
} },
{ elementId: 'p4LO4SWHqsEpnQV1', id: 'FaMQxI8ucLRxvhFQ', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/FaMQxI8ucLRxvhFQ/148743/145108__FFMPEG/thumb/thumbnail-5_0.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/FaMQxI8ucLRxvhFQ/148743/145108__FFMPEG/thumb/thumbnail-5_0.jpg'
} },
{ elementId: 'yhKAq5ImcOOhRIan', id: 'xuExG4VgQnp2scPS', thumbnailUrl:{
  desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg',
  mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/blob-66d5f24ba71a7.jpg'
} }
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
