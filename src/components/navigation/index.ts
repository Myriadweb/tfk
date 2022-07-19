import MainMenu from './MainMenu';
import BodySystems from './BodySystems';
import { Paths } from '../../types/Paths';
import Sensory from './Sensory';
import Procedures from './Procedures';

export default {
  [Paths.MainMenu]: MainMenu,
  [Paths.BodySystems]: BodySystems,
  [Paths.Sensory]: Sensory,
  [Paths.Procedures]: Procedures,
};
