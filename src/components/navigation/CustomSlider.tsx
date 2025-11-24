import ReactSlider from 'react-slider';
import SliderButton from './SurgicalPrepAssets/sliderButton.svg';
import * as React from 'react';
import { CSSProperties, useEffect, useRef } from 'react';

const StyledTrack = (props: { index: number; value: any }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      background: props.index === 0 ? '#E8EFF8' : '#76BBE0',
      borderRadius: 7,
      width: `${props.index === 0 ? 130 : props.value}%`,
      height: 26,
    }}
  />
);

export const CustomSlider = ({
   width,
   height,
   callback,
  }: {
  width: number;
  height: number;
  callback: (...args: any) => void;
}) => {
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div
      style={{
        width,
        height,
        transform: 'translateX(-15%)',
      }}
    >
      <ReactSlider
        onChange={(value) => {
          if (isMountedRef.current) {
            callback(value);
          }
        }}
        renderThumb={({ style, ...rest }: { style?: CSSProperties }) => (
          <div {...rest} style={{ ...style, outline: 'none', top: -30 }}>
            <img src={SliderButton} style={{ left: -3, position: 'absolute' }} />
          </div>
        )}
        renderTrack={(props, state) => (
          <StyledTrack index={state.index} value={state.value} {...props} />
        )}
      />
    </div>
  );
};
