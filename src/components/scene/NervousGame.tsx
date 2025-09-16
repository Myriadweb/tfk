import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { ReactComponent as BG } from './NervousAssets/bg.svg';
import LeftHemisphere from './NervousAssets/LeftHemisphere/base';
import RightHemisphere from './NervousAssets/RightHemisphere/base';
import FrontView from './NervousAssets/FrontView/base';
import { useGameContext } from '../../state/game';
import { Trans, useTranslation } from 'react-i18next';
import NervousBlueBox from './NervousBlueBox';
import {screenScale} from "../../utils/scaling";

// Importing all the SVGs in a folder
const reqSvgsLeftHemi = require.context(
  './NervousAssets/LeftHemisphere',
  false,
  /\.(svg|png)$/
);
// Creating an object with image name for key and image path as value
const leftHemisphereImgs: Record<string, string> = reqSvgsLeftHemi
  .keys()
  .reduce((images, path) => {
    const pathToName = path.match(/[a-z]+/gi)[0];
    images[pathToName] = reqSvgsLeftHemi(path);
    return images;
  }, {});

// Importing all the SVGs in a folder
const reqSvgsRightHemi = require.context(
  './NervousAssets/RightHemisphere',
  false,
  /\.(svg|png)$/
);
// Creating an object with image name for key and image path as value
const rightHemisphereImgs: Record<string, string> = reqSvgsRightHemi
  .keys()
  .reduce((images, path) => {
    const pathToName = path.match(/[a-z]+/gi)[0];
    images[pathToName] = reqSvgsRightHemi(path);
    return images;
  }, {});

// Importing all the SVGs in a folder
const reqSvgsFront = require.context(
  './NervousAssets/FrontView',
  false,
  /\.(svg|png)$/
);
// Creating an object with image name for key and image path as value
const frontImgs: Record<string, string> = reqSvgsFront
  .keys()
  .reduce((images, path) => {
    const pathToName = path.match(/[a-z]+/gi)[0];
    images[pathToName] = reqSvgsFront(path);
    return images;
  }, {});

export type Highlight =
  | 'leftHemisphere'
  | 'frontalLobe'
  | 'parietalLobe'
  | 'occipitalLobe'
  | 'cerebellum'
  | 'temporalLobe'
  | 'brainStem'
  | 'leftHemisphereSmall'
  | 'rightHemisphereSmall'
  | 'rightHemisphere'
  | 'frontView';

const hemisphereConfig = {
  0: 'leftHemisphere',
  1: 'frontView',
  2: 'rightHemisphere',
};

export default function NervousGame() {
  const [
    { value: { isInfoPressed } = { isInfoPressed: false }, step },
    setGameState,
  ] = useGameContext();
  const [baseHighlight, setHighlight] = useState<Highlight | null>(null);
  const location = useLocation();
  const { t } = useTranslation('translation');

  const hemisphere = hemisphereConfig[step];

  const highlight = isInfoPressed ? hemisphere : baseHighlight;

  useEffect(() => {
    setGameState((old) => ({
      ...old,
      value: {
        ...old.value,
        highlight,
      },
    }));
  }, [highlight, setGameState]);

  if (!location.search) {
    setGameState({ step: 0 });
    return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Nervous} />;
  }

  return (
    <>
      <BG style={{ position: 'absolute', left: 0, top: 0 }} />
      {hemisphere === 'leftHemisphere' && (
        <div className='element-container' style={{ transformOrigin: 'top'}}>
          <img
            src={leftHemisphereImgs.backing}
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 528,
              top: 634,
            }}
          />
          <LeftHemisphere
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 540,
              top: 691,
            }}
            setHighlight={setHighlight}
          />
          {highlight === 'leftHemisphere' && (
            <>
              <img
                src={leftHemisphereImgs.hemisphereHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 667,
                }}
              />
              <img
                src={leftHemisphereImgs.hemishphereLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 585,
                }}
              />
            </>
          )}
          {highlight === 'frontalLobe' && (
            <>
              <img
                src={leftHemisphereImgs.frontalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 406,
                  top: 654,
                }}
              />
              <img
                src={leftHemisphereImgs.frontalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  right: 516,
                  top: 581,
                }}
              />
            </>
          )}
          {highlight === 'parietalLobe' && (
            <>
              <img
                src={leftHemisphereImgs.parietalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 635,
                  top: 655,
                }}
              />
              <img
                src={leftHemisphereImgs.parietalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 608,
                  top: 596,
                }}
              />
            </>
          )}
          {highlight === 'occipitalLobe' && (
            <>
              <img
                src={leftHemisphereImgs.occipitalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 741,
                  top: 789,
                }}
              />
              <img
                src={leftHemisphereImgs.occipitalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 660,
                  top: 578,
                }}
              />
            </>
          )}
          {highlight === 'cerebellum' && (
            <>
              <img
                src={leftHemisphereImgs.cerebellumHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 640,
                  top: 961,
                }}
              />
              <img
                src={leftHemisphereImgs.cerebellumLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 594,
                  top: 578,
                }}
              />
            </>
          )}
          {highlight === 'temporalLobe' && (
            <>
              <img
                src={leftHemisphereImgs.temporalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 569,
                  top: 812,
                }}
              />
              <img
                src={leftHemisphereImgs.temporalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 569,
                  top: 582,
                }}
              />
            </>
          )}
          {highlight === 'brainStem' && (
            <>
              <img
                src={leftHemisphereImgs.brainStemHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 564,
                  top: 1001,
                }}
              />
              <img
                src={leftHemisphereImgs.brainStemLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 564,
                  top: 567,
                }}
              />
            </>
          )}
        </div>
      )}
      {hemisphere === 'rightHemisphere' && (
        <div className='element-container' style={{ transformOrigin: 'top'}}>
          <img
            src={rightHemisphereImgs.backing}
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 557,
              top: 634,
            }}
          />
          <RightHemisphere
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 540,
              top: 691,
            }}
            setHighlight={setHighlight}
          />
          {highlight === 'rightHemisphere' && (
            <>
              <img
                src={rightHemisphereImgs.hemisphereHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 667,
                }}
              />
              <img
                src={rightHemisphereImgs.hemishphereLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 585,
                }}
              />
            </>
          )}
          {highlight === 'frontalLobe' && (
            <>
              <img
                src={rightHemisphereImgs.frontalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  right: 87,
                  top: 654,
                }}
              />
              <img
                src={rightHemisphereImgs.frontalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  left: 516,
                  top: 581,
                }}
              />
            </>
          )}
          {highlight === 'parietalLobe' && (
            <>
              <img
                src={rightHemisphereImgs.parietalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 444,
                  top: 655,
                }}
              />
              <img
                src={rightHemisphereImgs.parietalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 483,
                  top: 596,
                }}
              />
            </>
          )}
          {highlight === 'occipitalLobe' && (
            <>
              <img
                src={rightHemisphereImgs.occipitalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 339,
                  top: 789,
                }}
              />
              <img
                src={rightHemisphereImgs.occipitalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 446,
                  top: 578,
                }}
              />
            </>
          )}
          {highlight === 'cerebellum' && (
            <>
              <img
                src={rightHemisphereImgs.cerebellumHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 446,
                  top: 961,
                }}
              />
              <img
                src={rightHemisphereImgs.cerebellumLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 503,
                  top: 578,
                }}
              />
            </>
          )}
          {highlight === 'temporalLobe' && (
            <>
              <img
                src={rightHemisphereImgs.temporalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 511,
                  top: 812,
                }}
              />
              <img
                src={rightHemisphereImgs.temporalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 511,
                  top: 582,
                }}
              />
            </>
          )}
          {highlight === 'brainStem' && (
            <>
              <img
                src={rightHemisphereImgs.brainStemHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 516,
                  top: 1001,
                }}
              />
              <img
                src={rightHemisphereImgs.brainStemLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 531,
                  top: 567,
                }}
              />
            </>
          )}
        </div>
      )}
      {hemisphere === 'frontView' && (
        <div className='element-container' style={{ transformOrigin: 'top'}}>
          <img
            src={frontImgs.backing}
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 540,
              top: 634,
            }}
          />
          <FrontView
            style={{
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: 540,
              top: 691,
            }}
            setHighlight={setHighlight}
          />
          {highlight === 'frontView' && (
            <>
              <img
                src={frontImgs.frontViewHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 658,
                }}
              />
              <img
                src={frontImgs.leftHemisphereLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  right: 223,
                  top: 592,
                }}
              />
              <img
                src={frontImgs.rightHemisphereLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 340,
                  top: 592,
                }}
              />
            </>
          )}
          {highlight === 'frontalLobe' && (
            <>
              <img
                src={frontImgs.frontalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 671,
                }}
              />
              <img
                src={frontImgs.frontalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  left: 516,
                  top: 581,
                }}
              />
            </>
          )}
          {highlight === 'parietalLobe' && (
            <>
              <img
                src={frontImgs.parietalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 760,
                }}
              />
              <img
                src={frontImgs.parietalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 657,
                  top: 596,
                }}
              />
            </>
          )}
          {highlight === 'occipitalLobe' && (
            <>
              <img
                src={frontImgs.occipitalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 789,
                }}
              />
              <img
                src={frontImgs.occipitalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 660,
                  top: 578,
                }}
              />
            </>
          )}
          {highlight === 'cerebellum' && (
            <>
              <img
                src={frontImgs.cerebellumHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 1002,
                }}
              />
              <img
                src={frontImgs.cerebellumLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 576,
                  top: 594,
                }}
              />
            </>
          )}
          {highlight === 'temporalLobe' && (
            <>
              <img
                src={frontImgs.temporalLobeHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 839,
                }}
              />
              <img
                src={frontImgs.temporalLobeLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 619,
                  top: 582,
                }}
              />
            </>
          )}
          {highlight === 'brainStem' && (
            <>
              <img
                src={frontImgs.brainStemHighlight}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 1001,
                }}
              />
              <img
                src={frontImgs.brainStemLeaderLine}
                style={{
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  left: 540,
                  top: 567,
                }}
              />
            </>
          )}
        </div>
      )}
      {highlight && (
        <div
          onClick={() => {
            setHighlight(null);
            setGameState((old) => ({ ...old, value: false }));
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1080,
            height: 1280,
          }}
        />
      )}
      <span
        style={{
          position: 'absolute',
          bottom: 20,
          transform: 'translateX(-50%)',
          left: 540,
          color: 'white',
          fontSize: 20,
        }}
      >
        <Trans i18nKey={t(`nervous.scene.touchText`)} />
      </span>
      <NervousBlueBox
        highlight={highlight}
        style={{
          position: 'absolute',
          top: screenScale.y(359),
          transform: 'scale(71%) translateX(-50%)',
          transformOrigin: 'top',
          left: screenScale.x(540),
        }}
      />
    </>
  );
}
