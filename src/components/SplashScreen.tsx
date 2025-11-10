import * as React from 'react';
import { Paths } from '../types/Paths';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { getLocationFolder } from '../utils/locationLoader';
import { useLocationPath } from '../hooks';
import { isDesktopApp } from '../utils/platform';
import { LOCATION } from '../config';

function getLocationAnimation() {
  const hash = window.location.hash;
  const parts = hash.replace(/^#\/?/, '').split('/');
  const locationParam = parts[0]?.toLowerCase();
  const Location = isDesktopApp()
    ? LOCATION
    : getLocationFolder(locationParam as any);

  let locationAnimation: any;

  try {
    switch (Location) {
      case 'Atlanta':
        locationAnimation = require('../animations/Atlanta/splashVideo.mp4');
        break;
      case 'Phoenix':
        locationAnimation = require('../animations/Phoenix/splashVideo.mp4');
        break;
      case 'Richmond':
        locationAnimation = require('../animations/Richmond/splashVideo.mp4');
        break;
      case 'ChildLifeZone':
        locationAnimation = require('../animations/ChildLifeZone/splashVideo.mp4');
        break;
      case 'Riley':
        locationAnimation = require('../animations/Riley/splashVideo.mp4');
        break;
      case 'StLouis':
        locationAnimation = require('../animations/StLouis/splashVideo.mp4');
        break;
      case 'Dimaggio':
        locationAnimation = require('../animations/Dimaggio/splashVideo.mp4');
        break;
      default:
        locationAnimation = require('../animations/Dimaggio/splashVideo.mp4');
    }
  } catch (e) {
    console.error('Error loading animation:', e);
    locationAnimation = require('../animations/Dimaggio/splashVideo.mp4');
  }
  return locationAnimation;
}

export default function SplashScreen() {
  const navigate = useNavigate();
  const locationAnimation = getLocationAnimation();
  const buildPath = useLocationPath();
  console.log('Location Animation:', locationAnimation);
  return (
    <div
      className='App'
      style={{
        zIndex: 100,
      }}
      onClick={() => navigate(buildPath(Paths.Home))}
    >
      <ReactPlayer
        playing
        loop
        url={locationAnimation}
        width='100%'
        height='auto'
      />
    </div>
  );
}
