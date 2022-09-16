import * as React from 'react';
import { CSSProperties } from 'react';
import { Highlight } from './nervousGame';
import { useTranslation } from 'react-i18next';

type Icons =
  | 'art'
  | 'balance'
  | 'breathing'
  | 'color'
  | 'communication'
  | 'coordination'
  | 'creativity'
  | 'decisions'
  | 'depthPerception'
  | 'digestion'
  | 'emotions'
  | 'hearing'
  | 'heartRate'
  | 'language'
  | 'logic'
  | 'memory'
  | 'muscleControl'
  | 'music'
  | 'reading'
  | 'reasoning'
  | 'sight'
  | 'sleeping'
  | 'smell'
  | 'speechBubble'
  | 'speechRecognition'
  | 'taste'
  | 'touch';

const IconsConfig: Record<Highlight, Icons[]> = {
  leftHemisphere: ['speechBubble', 'reasoning', 'logic'],
  frontalLobe: ['memory', 'communication', 'decisions', 'emotions'],
  parietalLobe: ['sight', 'taste', 'touch', 'smell', 'hearing'],
  occipitalLobe: ['reading', 'depthPerception', 'color'],
  cerebellum: ['balance', 'muscleControl', 'coordination'],
  temporalLobe: ['speechBubble', 'speechRecognition', 'language'],
  brainStem: ['breathing', 'heartRate', 'digestion', 'sleeping'],
  rightHemisphereSmall: ['music', 'creativity', 'art'],
  leftHemisphereSmall: ['speechBubble', 'reasoning', 'logic'],
  rightHemisphere: ['music', 'creativity', 'art'],
  frontView: [],
};

// Importing all the SVGs in a folder
const reqSvgs = require.context('./NervousAssets/Popup', false, /\.svg$/);
// Creating an object with image name for key and image path as value
const svgs: Record<Icons, string> = reqSvgs.keys().reduce((images, path) => {
  const pathToName = path.match(/[a-z]+/gi)[0];
  images[pathToName] = reqSvgs(path);
  return images;
}, {} as Record<Icons, string>);

export default function NervousBlueBox({
  style,
  highlight,
}: {
  style: CSSProperties;
  highlight: Highlight;
}) {
  const { t } = useTranslation('translation');

  if (!highlight) return null;

  if (highlight === 'frontView') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          ...style,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            marginRight: 82,
          }}
        >
          <span
            style={{
              height: 71,
              background: '#30619C',
              border: '3px solid #FFF',
              borderBottom: 'none',
              padding: '13px 25px 24px',
              boxSizing: 'border-box',
              fontFamily: 'LemonMilk',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            {t(`nervous.scene.rightHemisphereSmall`)}
          </span>
          <div
            style={{
              display: 'flex',
              width: 450,
              height: 178,
              background: '#103159',
              border: '3px solid #FFF',
              borderRadius: 18,
              borderTopLeftRadius: 0,
              justifyContent: 'space-around',
            }}
          >
            {IconsConfig.rightHemisphereSmall.map((icon) => (
              <div
                key={icon}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#FFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                <img src={svgs[icon]} />
                <span style={{ marginTop: 14 }}>
                  {t(`nervous.scene.${icon}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
          }}
        >
          <span
            style={{
              height: 71,
              background: '#30619C',
              border: '3px solid #FFF',
              borderBottom: 'none',
              padding: '13px 25px 24px',
              boxSizing: 'border-box',
              fontFamily: 'LemonMilk',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            {t(`nervous.scene.leftHemisphereSmall`)}
          </span>
          <div
            style={{
              display: 'flex',
              width: 450,
              height: 178,
              background: '#103159',
              border: '3px solid #FFF',
              borderRadius: 18,
              borderTopLeftRadius: 0,
              justifyContent: 'space-around',
            }}
          >
            {IconsConfig.leftHemisphereSmall.map((icon) => (
              <div
                key={icon}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#FFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                <img src={svgs[icon]} />
                <span style={{ marginTop: 14 }}>
                  {t(`nervous.scene.${icon}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        ...style,
      }}
    >
      <span
        style={{
          height: 71,
          background: '#30619C',
          border: '3px solid #FFF',
          borderBottom: 'none',
          padding: '13px 25px 24px',
          boxSizing: 'border-box',
          fontFamily: 'LemonMilk',
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        {t(`nervous.scene.${highlight}`)}
      </span>
      <div
        style={{
          display: 'flex',
          width: 768,
          height: 178,
          background: '#103159',
          border: '3px solid #FFF',
          borderRadius: 18,
          borderTopLeftRadius: 0,
          justifyContent: 'space-around',
        }}
      >
        {IconsConfig[highlight].map((icon) => (
          <div
            key={icon}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FFF',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            <img src={svgs[icon]} />
            <span style={{ marginTop: 14 }}>{t(`nervous.scene.${icon}`)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
