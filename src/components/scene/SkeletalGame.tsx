import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { ReactComponent as EmptyBody } from './SkeletalAssets/BodyBase.svg';
import { ReactComponent as CarpalsMetacarpals } from './SkeletalAssets/Carpals&Metacarpals.svg';
import { ReactComponent as Clavicle } from './SkeletalAssets/Clavicle.svg';
import { ReactComponent as Femur } from './SkeletalAssets/Femur.svg';
import { ReactComponent as FibuleTibia } from './SkeletalAssets/Fibula&Tibia.svg';
import { ReactComponent as Humerus } from './SkeletalAssets/Humerus.svg';
import { ReactComponent as Pelvis } from './SkeletalAssets/Pelvis.svg';
import { ReactComponent as RadiusUlna } from './SkeletalAssets/Radius&Ulna.svg';
import { ReactComponent as Ribs } from './SkeletalAssets/Ribs.svg';
import { ReactComponent as Scapula } from './SkeletalAssets/Scapula.svg';
import SkullIMG from './SkeletalAssets/Skull.png';
import { ReactComponent as TarsalsMetatarsals } from './SkeletalAssets/Tarsals&Metatarsals.svg';
import { ReactComponent as Vertebrae } from './SkeletalAssets/Vertebrae.svg';

import Draggable from 'react-draggable';
import playSound from '../../sound';
import { Dispatch, SetStateAction } from 'react';
import { useProcedureContext } from '../../state/procedure';

type Props = {
  ImageComponent: React.FC<React.SVGProps<SVGSVGElement>> | string;
  x: number;
  y: number;
  specular?: boolean;
  value: string;
  leaving: boolean;
  isLast: boolean;
  setPlacedNumber: Dispatch<SetStateAction<number>>;
};

// get random between two numbers
const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const DraggableImage = ({
  ImageComponent,
  x,
  y,
  specular,
  value,
  leaving,
  isLast,
  setPlacedNumber,
}: Props) => {
  const [preAnimationPosition, setPosition] = React.useState<{
    x: number;
    y: number;
  }>(null);
  const [, setProcedureState] = useProcedureContext();
  const [placed, setPlaced] = React.useState(false);
  const randomX = React.useRef(getRandom(100, 980));
  const randomY = React.useRef(getRandom(100, 1170));
  if (randomX.current > 900 && randomY.current > 900) {
    randomY.current = 850;
  }
  const imageRef = React.useRef<HTMLDivElement>(null);
  const [style, styleAPI] = useSpring(() => ({
    from: { left: x, top: y },
    to: { left: randomX.current, top: randomY.current },
    delay: 300,
  }));

  if (leaving && !placed) {
    if (preAnimationPosition) {
      styleAPI.start({
        left: x - preAnimationPosition.x,
        top: y - preAnimationPosition.y,
      });
    } else {
      styleAPI.start({
        to: { left: x, top: y },
        config: {
          duration: 500,
        },
      });
    }
  }

  React.useEffect(() => {
    if (placed) {
      setPlacedNumber((placedNumber) => placedNumber + 1);
    } else {
      setPlacedNumber((placedNumber) => placedNumber - 1);
    }
  }, [placed, setPlacedNumber]);

  const track = (_e: MouseEvent, data: any) => {
    const newX = Math.floor(randomX.current + data.x);
    const newY = Math.floor(randomY.current + data.y);

    setPosition({ x: data.x, y: data.y });
    if (newX < x + 70 && newX > x - 70 && newY > y - 70 && newY < y + 70) {
      playSound(isLast ? 'completeProcedure' : 'positiveAlert');
      styleAPI.start({
        left: x - data.x,
        top: y - data.y,
      });
      setPlaced(true);
      setProcedureState({ step: 0, value });
    } else {
      if (placed) {
        setPlaced(false);
      }
    }
  };

  return (
    <Draggable
      bounds='parent'
      onDrag={track}
      disabled={placed}
      position={preAnimationPosition || null}
    >
      <animated.div
        ref={imageRef}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          ...style,
        }}
      >
        {typeof ImageComponent === 'string' ? (
          <img src={ImageComponent} />
        ) : (
          <ImageComponent
            style={{ transform: specular ? 'scaleX(-1)' : null }}
          />
        )}
      </animated.div>
    </Draggable>
  );
};

export default function SkeletalGame() {
  const [placedNumber, setPlacedNumber] = React.useState(0);
  const [, setProcedureState] = useProcedureContext();
  const navigate = useNavigate();
  const location = useLocation();
  const leaving = !location.search;
  const isLast = placedNumber === 0;

  if (!location.search) {
    setTimeout(() => {
      navigate(`/${Paths.BodySystems}/${Paths.Skeletal}`);
      setProcedureState({ step: 0, value: '' });
    }, 1000);
  }

  return (
    <>
      <EmptyBody
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
        }}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Vertebrae}
        x={525}
        y={572}
        leaving={leaving}
        value={'vertebrae'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={SkullIMG}
        x={439}
        y={346}
        leaving={leaving}
        value={'skull'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={CarpalsMetacarpals}
        x={674}
        y={825}
        leaving={leaving}
        value={'carpals&metacarpals'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={CarpalsMetacarpals}
        x={348}
        y={825}
        specular
        leaving={leaving}
        value={'carpals&metacarpals'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Scapula}
        x={590}
        y={626}
        leaving={leaving}
        value={'scapula'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Scapula}
        x={418}
        y={626}
        specular
        leaving={leaving}
        value={'scapula'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Ribs}
        x={456}
        y={612}
        leaving={leaving}
        value={'ribs'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Clavicle}
        x={420}
        y={624}
        leaving={leaving}
        value={'clavicle'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Pelvis}
        x={457}
        y={820}
        leaving={leaving}
        value={'pelvis'}
      />

      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Femur}
        x={585}
        y={869}
        leaving={leaving}
        value={'femur'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Femur}
        x={446}
        y={869}
        specular
        leaving={leaving}
        value={'femur'}
      />

      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={FibuleTibia}
        x={597}
        y={1019}
        leaving={leaving}
        value={'fibule&tibia'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={FibuleTibia}
        x={446}
        y={1019}
        specular
        leaving={leaving}
        value={'fibule&tibia'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Humerus}
        x={633}
        y={635}
        leaving={leaving}
        value={'humerus'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={Humerus}
        x={381}
        y={635}
        specular
        leaving={leaving}
        value={'humerus'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={RadiusUlna}
        x={678}
        y={747}
        leaving={leaving}
        value={'radius&ulna'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={RadiusUlna}
        x={369}
        y={747}
        specular
        leaving={leaving}
        value={'radius&ulna'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={TarsalsMetatarsals}
        x={600}
        y={1167}
        leaving={leaving}
        value={'tarsals&metatarsals'}
      />
      <DraggableImage
        setPlacedNumber={setPlacedNumber}
        isLast={isLast}
        ImageComponent={TarsalsMetatarsals}
        x={400}
        y={1167}
        specular
        leaving={leaving}
        value={'tarsals&metatarsals'}
      />
    </>
  );
}
