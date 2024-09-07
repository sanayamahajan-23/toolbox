import React, { useEffect, useRef, useState } from 'react';
import '../styles/carousel.css';
import { useVideoContext } from '../contexts/VideoContext';

const Carousel = ({ videos }) => {

  const { currentVideoIndex, setCurrentVideoIndex, currentvideoId, setCurrentVideoId } = useVideoContext();
  const [isFirstVideo, setFirstVideo] = useState(true);

  const activeVideoRef = useRef(null);

  useEffect(() => {
    if (!currentvideoId) {
      setCurrentVideoId(videos[0].elementId);
    }

    videos.forEach((video) => {
      (function (v, i, d, a, l, y, t, c, s) {
        y = "_" + d.toLowerCase();
        c = d + "L";
        if (!v[d]) {
          v[d] = {};
        }
        if (!v[c]) {
          v[c] = {};
        }
        if (!v[y]) {
          v[y] = {};
        }
        var vl = "Loader",
          vli = v[y][vl],
          vsl = v[c][vl + "Script"],
          vlf = v[c][vl + "Loaded"],
          ve = "Embed";
        if (!vsl) {
          vsl = function (u, cb) {
            if (t) {
              cb();
              return;
            }
            s = i.createElement("script");
            s.type = "text/javascript";
            s.async = 1;
            s.src = u;
            if (s.readyState) {
              s.onreadystatechange = function () {
                if (
                  s.readyState === "loaded" ||
                  s.readyState == "complete"
                ) {
                  s.onreadystatechange = null;
                  vlf = 1;
                  cb();
                }
              };
            } else {
              s.onload = function () {
                vlf = 1;
                cb();
              };
            }
            i.getElementsByTagName("head")[0].appendChild(s);
          };
        }
        vsl(l + "loader.min.js", function () {
          if (!vli) {
            const vlc = v[c][vl];
            vli = new vlc();
          }
          vli.loadScript(l + "player.min.js", function () {
            const vec = v[d][ve];
            t = new vec();
            t.run(a);
          });
        });
      })(
        window,
        document,
        "Vidalytics",
        video.elementId,
        "https://fast.vidalytics.com/embeds/0kHi6Jq0/" + video.elementId + "/"
      );
    });
  }, [videos]);

  const stopVideoPlayback = () => {
    if (activeVideoRef.current) {
      const videoElement = activeVideoRef.current.querySelector('video');
      if (videoElement) {
        videoElement.pause();
      }
    }
  };

  const goToNext = () => {
    stopVideoPlayback();
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    if (currentVideoIndex === videos.length - 1) {
      setCurrentVideoId(videos[0].elementId);
    } else {
      setCurrentVideoId(videos[currentVideoIndex + 1].elementId);
    }
    setFirstVideo(currentVideoIndex + 1 === 0);
  };

  const goToPrevious = () => {
    stopVideoPlayback();
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    const newIndex = currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
    setCurrentVideoId(videos[newIndex].elementId);
    setFirstVideo(newIndex === 0);
  };

  const getClassNames = (index, elementId) => {
    if (elementId === currentvideoId) return 'active';
    if ((index + 1) % videos.length === currentVideoIndex) return 'next';
    if ((index - 1 + videos.length) % videos.length === currentVideoIndex) return 'previous';
    return 'hidden';
  };

  return (
    <div className="carousel">
      {!isFirstVideo && (
        <button className="carousel-button left" onClick={goToPrevious}>
          &lt;
        </button>
      )}
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div
            key={index}
            className={`carousel-video-container ${getClassNames(index, video.elementId)}`}
            ref={video.elementId === currentvideoId ? activeVideoRef : null}
          >
            <div
              id={video.elementId}
              style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
            ></div>
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

