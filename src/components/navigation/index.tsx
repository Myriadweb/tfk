import MainMenu from './MainMenu';
import BodySystems from './BodySystems';
import { Paths } from '../../types/Paths';
import Sensory from './Sensory';
import Procedures from './Procedures';
import XRay from './XRay';
import SkeletalNav from './SkeletalNav';
import Mri from './Mri';
import Eeg from './Eeg';
import Wellness from './Wellness';
import Iv from './Iv';
import SurgicalPrep from './SurgicalPrep';
import Muscular from './Muscular';
import Nervous from './Nervous';
import Cardiovascular from './Cardiovascular';
import Digestive from './Digestive';

export default {
  [Paths.MainMenu]: MainMenu,
  [Paths.BodySystems]: BodySystems,
  [Paths.Sensory]: Sensory,
  [Paths.Procedures]: Procedures,
  [Paths.XRay]: XRay,
  [Paths.Skeletal]: SkeletalNav,
  [Paths.Mri]: Mri,
  [Paths.Eeg]: Eeg,
  [Paths.Wellness]: Wellness,
  [Paths.Iv]: Iv,
  [Paths.SurgicalPrep]: SurgicalPrep,
  [Paths.Muscular]: Muscular,
  [Paths.Digestive]: Digestive,
  [Paths.Nervous]: Nervous,
  [Paths.Cardiovascular]: () => null,
  [Paths.Nervous]: () => null,
  [Paths.Cardiovascular]: Cardiovascular,
};
