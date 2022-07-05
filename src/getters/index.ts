import { Paths } from '../types/Paths';
import NavBarComponents from '../components/navigation';

type Props = {
  path: Paths;
};

type ReturnComponent = ({ path }: Props) => JSX.Element;

export const getNavbarComponent = (path: Paths) => {
  console.debug(path);

  return NavBarComponents[path] as ReturnComponent;
};
