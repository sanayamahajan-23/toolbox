import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <VideoContext.Provider value={{ currentVideoIndex, setCurrentVideoIndex }}>
      {children}
    </VideoContext.Provider>
  );
};
