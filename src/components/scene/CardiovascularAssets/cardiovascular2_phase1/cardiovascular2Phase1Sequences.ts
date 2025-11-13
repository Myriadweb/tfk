const req = require.context('./', false, /cardiovascular2_phase1_\d+\.png$/);

const cardioVascular2Phase1Frames = req
  .keys()
  .sort() // ensures frames are in order
  .map(req) as string[];

export default cardioVascular2Phase1Frames;
