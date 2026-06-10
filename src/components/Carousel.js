import React, { useEffect, useRef, useState } from 'react';
import '../styles/carousel.css';
import { useVideoContext } from '../contexts/VideoContext';

const Carousel = ({ videos }) => {
  const { currentVideoIndex, setCurrentVideoIndex, currentvideoId, setCurrentVideoId } = useVideoContext();
  const [isFirstVideo, setFirstVideo] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [embedReady, setEmbedReady] = useState(false);
  const activeVideoRef = useRef(null);
  const embedTimeoutRef = useRef(null);

  useEffect(() => {
    if (!currentvideoId) {
      setCurrentVideoId(videos[0].elementId);
    }

    videos.forEach((video) => {
      if (video.elementId === currentvideoId) {
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
            // eslint-disable-next-line no-unused-vars
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
                  if (s.readyState === "loaded" || s.readyState === "complete") {
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
      }
    });
  }, [videos, currentvideoId, setCurrentVideoId]);

  // Hide embed spinner after a reasonable load window
  useEffect(() => {
    setEmbedReady(false);
    if (embedTimeoutRef.current) clearTimeout(embedTimeoutRef.current);
    embedTimeoutRef.current = setTimeout(() => {
      setEmbedReady(true);
    }, 3500);
    return () => {
      if (embedTimeoutRef.current) clearTimeout(embedTimeoutRef.current);
    };
  }, [currentvideoId]);

  useEffect(() => {
    const activeVideoElement = activeVideoRef.current;
    if (activeVideoElement) {
      const videoElement = activeVideoElement.querySelector('video');
      if (videoElement) {
        videoElement.play();
      }
    }

    return () => {
      if (activeVideoElement) {
        const videoElement = activeVideoElement.querySelector('video');
        if (videoElement) {
          videoElement.pause();
        }
      }
    };
  }, [currentVideoIndex]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const goToNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    if (currentVideoIndex === videos.length - 1) {
      setCurrentVideoId(videos[0].elementId);
    } else {
      setCurrentVideoId(videos[currentVideoIndex + 1].elementId);
    }
    if (currentVideoIndex + 1 === 0) {
      setFirstVideo(true);
    } else {
      setFirstVideo(false);
    }
  };

  const goToPrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    let index = currentVideoIndex;
    if (currentVideoIndex === 0) {
      index = videos.length - 1;
    } else {
      index = currentVideoIndex - 1;
    }
    setCurrentVideoId(videos[index].elementId);
    if (currentVideoIndex - 1 === 0) {
      setFirstVideo(true);
    } else {
      setFirstVideo(false);
    }
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
            {video.elementId === currentvideoId && (
              <div style={{ width: '100%', aspectRatio: '16 / 9', background: '#1a1a1a', position: 'relative' }}>
                <div id={video.elementId} style={{ position: 'absolute', inset: 0 }}></div>
                {!embedReady && (
                  <div className="video-loading-spinner">
                    <div className="spinner"></div>
                  </div>
                )}
              </div>
            )}
            {/* Optional placeholder for the side videos */}
            {video.elementId !== currentvideoId && (
              <div className="thumbnail-container">
                {!loadedImages[index] && <div className="skeleton-box" />}
                <img
                  src={video?.thumbnailUrl?.desktop}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail"
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  style={{
                    pointerEvents: 'none',
                    opacity: loadedImages[index] ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </div>
            )}
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
