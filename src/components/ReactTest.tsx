import React from 'react';

export function ReactTest() {
  const [x, setX] = React.useState(540);

  return (
    <>
      {[0, 1].map((i) => (
        <img
          key={i}
          src={`/Child_${i + 1}.png`}
          style={{
            position: 'absolute',
            left: x + 1080 * i,
            top: 635,
            transform: 'translate(-50%,-50%)',
          }}
        />
      ))}
      <img
        src='/left_arrow.png'
        style={{
          position: 'absolute',
          left: 70,
          top: 635,
          transform: 'translate(-50%,-50%)',
        }}
      />
      <img
        src='/right_arrow.png'
        style={{
          position: 'absolute',
          left: 1010,
          top: 635,
          transform: 'translate(-50%,-50%)',
        }}
      />
    </>
  );
}
