import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentvideoId, setCurrentVideoId] = useState(null)

  return (
    <VideoContext.Provider value={{ currentVideoIndex, currentvideoId, setCurrentVideoIndex, setCurrentVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};
