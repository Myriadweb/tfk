import * as React from 'react';
import { Paths } from '../types/Paths';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { LOCATION } from "../config";

const Location = LOCATION;
let Animation: string;

try {
  switch (Location) {
    case 'Atlanta':
      Animation = require('../animations/Atlanta/splashVideo.mp4');
      break;
    case 'Phoenix':
      Animation = require('../animations/Phoenix/splashVideo.mp4');
      break;
    case 'Richmond':
      Animation =  require('../animations/Richmond/splashVideo.mp4');
      break;
    case 'ChildLifeZone':
      Animation = require('../animations/ChildLifeZone/splashVideo.mp4');
      break;
    case 'Riley':
      Animation = require('../animations/Riley/splashVideo.mp4');
      break;
    case 'StLouis':
      Animation = require('../animations/StLouis/splashVideo.mp4');
      break;
    case 'Dimaggio':
      Animation = require('../animations/Dimaggio/splashVideo.mp4');
      break;
    default:
      Animation = require('../animations/Dimaggio/splashVideo.mp4');
  }
} catch (e) {
  console.error('Error loading animation:', e);
  Animation = require('../animations/Dimaggio/splashVideo.mp4');
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
