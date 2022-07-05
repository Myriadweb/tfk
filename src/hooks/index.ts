import { PathKeys, Paths } from '../types/Paths';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const usePathFromLocation = (location: string): PathKeys => {
  if (location === '/') {
    return 'Home';
  }

  const locationArray = location.split('/');
  const locationLast = locationArray[locationArray.length - 1];
  const path = locationLast.charAt(0).toUpperCase() + locationLast.slice(1);

  if (!Paths[path]) {
    throw new Error(`Path ${path} does not exist`);
  }

  return path as PathKeys;
};

const useCustomTranslation = (path: Paths) => {
  const { t } = useTranslation('translation', {
    keyPrefix: path,
  });

  return t;
};

export const useHeaderTranslation = (path: Paths): [(word: string) => string, string?] => {
  const customT = useCustomTranslation(path);
  const location = useLocation();
  const { t } = useTranslation('translation');

  const newT = (word: string) => customT(`header.${word}`);

  if ([Paths.Home, Paths.MainMenu].includes(path)) {
    return [newT];
  }

  return [newT, t(`common.header.${location.pathname.split('/')[1]}`)];
};

export const useNavBarTranslation = (path: Paths) => {
  const t = useCustomTranslation(path);

  return (word: string) => t(`navbar.${word}`);
};
