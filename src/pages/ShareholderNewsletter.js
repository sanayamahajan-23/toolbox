import React, { useRef } from 'react';
import Header from '../components/Header';
import VideoGallery from '../components/VideoGallery';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Downloadables from '../components/Downloadables';
import { VideoProvider } from '../contexts/VideoContext';

const ShareholderNewsletter = () => {
  const resourcesRef = useRef(null);

  const scrollToResources = () => {
    if (resourcesRef.current) {
      resourcesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const driversAndMotivationVideos =  [
    {
      elementId: 'kAz6cJcn09qD1Jgm',
      id: '0wOnwsqXC6RV0FoL',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/0wOnwsqXC6RV0FoL/img/thumbnail/1-66da39c63091e.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/0wOnwsqXC6RV0FoL/img/thumbnail/1-66da39c63091e.png'
      }
    },
    {
      elementId: 'j7sWliFucdhZv3Xy',
      id: '2sIyj_xlFb8w54YF',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/2sIyj_xlFb8w54YF/img/thumbnail/2-66da39f0446b0.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/2sIyj_xlFb8w54YF/img/thumbnail/2-66da39f0446b0.png'
      }
    },
    {
      elementId: 'IO6ACYKP3TTMa4bb',
      id: 'Bvv8jLnaQeZjB5_m',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Bvv8jLnaQeZjB5_m/img/thumbnail/3-66da3a148380c.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Bvv8jLnaQeZjB5_m/img/thumbnail/3-66da3a148380c.png'
      }
    },
    {
      elementId: 'jGEB9lNWfERa5Ieu',
      id: 'pSwJFG2gHtWa7jL6',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/pSwJFG2gHtWa7jL6/img/thumbnail/4-66da3a4f7d5e4.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/pSwJFG2gHtWa7jL6/img/thumbnail/4-66da3a4f7d5e4.png'
      }
    },
    {
      elementId: 'hz7j0odFA7GSyPtT',
      id: 'a3bxQBBKb4FMv_Fu',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/a3bxQBBKb4FMv_Fu/img/thumbnail/5-66da3a323ee13.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/a3bxQBBKb4FMv_Fu/img/thumbnail/5-66da3a323ee13.png'
      }
    },
    {
      elementId: 'AdBdjMQm_9jFFCUF',
      id: 'fUbMwlEqocX1w_sH',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/6-66da3a85a2a36.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/fUbMwlEqocX1w_sH/img/thumbnail/6-66da3a85a2a36.png'
      }
    },
    {
      elementId: 'SDMq_E4dL3ar1pdB',
      id: 'Hej4abl63pXlLaZ8',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Hej4abl63pXlLaZ8/img/thumbnail/7-66da3aa43eea2.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Hej4abl63pXlLaZ8/img/thumbnail/7-66da3aa43eea2.png'
      }
    },
    {
      elementId: '8fN1jKigicrQ0085',
      id: 'CP9eE7SJRCEuZVF2',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/CP9eE7SJRCEuZVF2/img/thumbnail/8-66da402952df9.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/CP9eE7SJRCEuZVF2/img/thumbnail/8-66da402952df9.png'
      }
    },
    {
      elementId: 'wysiQ9FSzMBBklbV',
      id: 'csyDQD81c59pjEdd',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/csyDQD81c59pjEdd/img/thumbnail/9-66da4001b532a.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/csyDQD81c59pjEdd/img/thumbnail/9-66da4001b532a.png'
      }
    },
    {
      elementId: 'wysiQ9FSzMBBklbV',
      id: 'BGwbjuKTdY1zIm2Z',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/BGwbjuKTdY1zIm2Z/img/thumbnail/FINALTHUMBNAIL-66da4e69a915e.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/BGwbjuKTdY1zIm2Z/img/thumbnail/FINALTHUMBNAIL-66da4e69a915e.png'
      }
    },
    {
      elementId: '53reyMw14s_hdQ5v',
      id: 'Iu9yAD9Zcla9y_ef',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Iu9yAD9Zcla9y_ef/img/thumbnail/10-66da3af7bd630.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Iu9yAD9Zcla9y_ef/img/thumbnail/10-66da3af7bd630.png'
      }
    }
  ].filter(Boolean);

  const planForSuccessVideos = [
    {
      elementId: '0PNwAmovrV_wRl8_',
      id: 'IQZf4q0eB8o4eMgo',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/IQZf4q0eB8o4eMgo/img/thumbnail/11-66da3bb447fd0.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/IQZf4q0eB8o4eMgo/img/thumbnail/11-66da3bb447fd0.png'
      }
    },
    {
      elementId: 'pAPgqhyDsRB_Mfpd',
      id: 'M2Q79mOC7k_aE8H4',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/M2Q79mOC7k_aE8H4/img/thumbnail/12-66da3bd784633.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/M2Q79mOC7k_aE8H4/img/thumbnail/12-66da3bd784633.png'
      }
    },
    {
      elementId: '7KQMqPEqjRH7cv68',
      id: 'Lo6JVutr6twpUDuN',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Lo6JVutr6twpUDuN/img/thumbnail/13-66da3bf5685f9.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Lo6JVutr6twpUDuN/img/thumbnail/13-66da3bf5685f9.png'
      }
    },
    {
      elementId: 'vnGxWoyMyFyyAqfv',
      id: 'e2FbEoxv6fUeHxHG',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/e2FbEoxv6fUeHxHG/img/thumbnail/14-66da3c1b558c0.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/e2FbEoxv6fUeHxHG/img/thumbnail/14-66da3c1b558c0.png'
      }
    }
  ].filter(Boolean);

  const dailyWorkVideos =  [
    {
      elementId: 'SfhxD0PE17ke8bHD',
      id: '5AwMZ2hVvD7OHynH',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/5AwMZ2hVvD7OHynH/img/thumbnail/15-66da3d2b1a09f.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/5AwMZ2hVvD7OHynH/img/thumbnail/15-66da3d2b1a09f.png'
      }
    },
    {
      elementId: 'HZpLrsyuUHZUUmQg',
      id: '0giZ2R44lYw_jkCz',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/0giZ2R44lYw_jkCz/img/thumbnail/16-66da3d574651d.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/0giZ2R44lYw_jkCz/img/thumbnail/16-66da3d574651d.png'
      }
    },
    {
      elementId: 'PgmDfstHpyaTspxD',
      id: '5eVB43sq28iYVbWz',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/5eVB43sq28iYVbWz/img/thumbnail/17-66da3d7ac0d0b.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/5eVB43sq28iYVbWz/img/thumbnail/17-66da3d7ac0d0b.png'
      }
    },
    {
      elementId: 'xsRwFQQHDPFLlnLX',
      id: 'UXegj44DaTMepNLi',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/UXegj44DaTMepNLi/img/thumbnail/18-66da3e493cee1.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/UXegj44DaTMepNLi/img/thumbnail/18-66da3e493cee1.png'
      }
    },
    {
      elementId: 'pM5_IFRv6ybT9Evu',
      id: 'Q3jcEKdURuRgP_RM',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/Q3jcEKdURuRgP_RM/img/thumbnail/19-66da3e6d42d3f.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/Q3jcEKdURuRgP_RM/img/thumbnail/19-66da3e6d42d3f.png'
      }
    },
    {
      elementId: '8JnBq8joSI5oXRQC',
      id: '11DTX1t7yeqaokyX',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/11DTX1t7yeqaokyX/img/thumbnail/20-66da3ebbb4fde.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/11DTX1t7yeqaokyX/img/thumbnail/20-66da3ebbb4fde.png'
      }
    },
    {
      elementId: 'KgkGRGWTh3dZqEXj',
      id: '9GwpRaqVvlMNq71E',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/9GwpRaqVvlMNq71E/img/thumbnail/21-66da3f2120b63.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/9GwpRaqVvlMNq71E/img/thumbnail/21-66da3f2120b63.png'
      }
    },
    {
      elementId: 'w4Eswbhi8TU4Tz_H',
      id: '4PO3cgAxwABssHyK',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/4PO3cgAxwABssHyK/img/thumbnail/22-66da3f38aa696.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/4PO3cgAxwABssHyK/img/thumbnail/22-66da3f38aa696.png'
      }
    },
    {
      elementId: 'p4LO4SWHqsEpnQV1',
      id: 'FaMQxI8ucLRxvhFQ',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/FaMQxI8ucLRxvhFQ/img/thumbnail/23-66da3f4f798b7.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/FaMQxI8ucLRxvhFQ/img/thumbnail/23-66da3f4f798b7.png'
      }
    },
    {
      elementId: 'yhKAq5ImcOOhRIan',
      id: 'xuExG4VgQnp2scPS',
      thumbnailUrl: {
        desktop: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/24-66da3f65b9ca9.png',
        mobile: 'https://fast.vidalytics.com/video/0kHi6Jq0/xuExG4VgQnp2scPS/img/thumbnail/24-66da3f65b9ca9.png'
      }
    }
  ].filter(Boolean);
  const allVideos = [...driversAndMotivationVideos, ...planForSuccessVideos, ...dailyWorkVideos];
  const CarouselVideos = allVideos.map(video => ({
    elementId: video.elementId,
    thumbnailUrl: video.thumbnailUrl
  }));
  return (

    <VideoProvider>
      <Header />
     
        <main>
        <Banner onScrollToResources={scrollToResources} />
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
            <Downloadables ref={resourcesRef}/>
        </main>
      
      <Footer />
    </VideoProvider>
  );
};

export default ShareholderNewsletter;
