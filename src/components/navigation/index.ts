import MainMenu from './MainMenu';
import BodySystems from './BodySystems';
import { Paths } from '../../types/Paths';
import Sensory from './Sensory';
import Procedures from './Procedures';
import XRay from './XRay';

export default {
  [Paths.MainMenu]: MainMenu,
  [Paths.BodySystems]: BodySystems,
  [Paths.Sensory]: Sensory,
  [Paths.Procedures]: Procedures,
  [Paths.XRay]: XRay,
};
