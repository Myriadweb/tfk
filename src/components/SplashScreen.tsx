import * as React from 'react';
import { Paths } from '../types/Paths';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Location = process.env.REACT_APP_LOCATION;
let Animation: any;
if (Location === 'Atlanta') {
  Animation = require('../animations/Atlanta/splashVideo.mp4');
} else if (Location === 'Dimaggio') {
  Animation = require('../animations/Dimaggio/splashVideo.mp4');
} else if (Location === 'Phoenix') {
  Animation = require('../animations/Phoenix/splashVideo.mp4');
} else if (Location === 'Richmond') {
  Animation = require('../animations/Richmond/splashVideo.mp4');
} else if (Location === 'ChildLifeZone') {
  Animation = require('../animations/ChildLifeZone/splashVideo.mp4');
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
