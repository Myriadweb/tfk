import * as React from 'react';
import { Paths } from '../types/Paths';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Animation from '../animations/splashVideo.mp4';

export default function SplashScreen() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        zIndex: 100,
      }}
      onClick={() => navigate(Paths.Home)}
    >
      <ReactPlayer playing loop url={Animation} width='100%' height='100%' />
    </div>
  );
}
