// project/src/components/scene/VestibularAssets/vestibularSequences.ts
const req = require.context('./', false, /vestibular1_\d+\.png$/);

const tornadoFrames = req
  .keys()
  .sort() // ensures frames are in order
  .map(req) as string[];

export default tornadoFrames;
