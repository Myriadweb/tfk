const req = require.context('./', false, /digestive1_\d+\.png$/);

const digestiveFrames = req
  .keys()
  .sort() // ensures frames are in order
  .map(req) as string[];

export default digestiveFrames;
