import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  // YouTube video options (you can customize these)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // You can pass additional parameters here, such as autoplay, mute, etc.
    },
  };

  const videoId = 'l0k3ZfJ336Q';

  return (
    <div className="flex justify-center items-center h-[50%]">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
