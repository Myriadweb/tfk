import * as React from 'react';
import { Paths } from '../types/Paths';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Location = process.env.REACT_APP_LOCATION;
let Animation: any;

try {
  switch (Location) {
    case 'Atlanta':
      require('../animations/Atlanta/splashVideo.mp4');
      break;
    case 'Phoenix':
      require('../animations/Phoenix/splashVideo.mp4');
      break;
    case 'Richmond':
      require('../animations/Richmond/splashVideo.mp4');
      break;
    case 'ChildLifeZone':
      require('../animations/ChildLifeZone/splashVideo.mp4');
      break;
    case 'Riley':
      require('../animations/Riley/splashVideo.mp4');
      break;
    case 'StLouis':
      require('../animations/StLouis/splashVideo.mp4');
      break;
    case 'Dimaggio':
      require('../animations/Dimaggio/splashVideo.mp4');
      break;
    default:
      require('../animations/Dimaggio/splashVideo.mp4');
  }
} catch (e) {
  console.error('Error loading animation:', e);
  require('../animations/Dimaggio/splashVideo.mp4');
}

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
      <ReactPlayer playing loop url={Animation} width='100vw' height='auto' />
    </div>
  );
}
