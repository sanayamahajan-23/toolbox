
import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <VideoContext.Provider value={{ currentVideoIndex, setCurrentVideoIndex }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
