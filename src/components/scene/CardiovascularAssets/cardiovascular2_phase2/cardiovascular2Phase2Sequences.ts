const req = require.context('./', false, /cardiovascular2_phase2_\d+\.png$/);

const cardioVascular2Phase2Frames = req
  .keys()
  .sort() // ensures frames are in order
  .map(req) as string[];

export default cardioVascular2Phase2Frames;
