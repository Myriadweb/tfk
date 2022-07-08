import { Paths } from '../types/Paths';
import NavBarComponents from '../components/navigation';

type Props = {
  path: Paths;
  prefix: Paths;
};

type ReturnComponent = ({ path, prefix }: Props) => JSX.Element;

export const getNavbarComponent = (path: Paths) => {
  return NavBarComponents[path] as ReturnComponent;
};
