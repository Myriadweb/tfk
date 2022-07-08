import { PathKeys, Paths } from '../types/Paths';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

type ReturnPath = [PathKeys, PathKeys?]

export const usePathFromLocation = (
  location: string
): ReturnPath => {
  if (location === '/') {
    return ['Home'];
  }

  const locationArray = location.split('/');
  const locationLast = locationArray[locationArray.length - 1];
  const path = locationLast.charAt(0).toUpperCase() + locationLast.slice(1);

  if (!Paths[path]) {
    throw new Error(`Path ${path} does not exist`);
  }

  const result: ReturnPath = [path as PathKeys];

  if (locationArray.length > 1) {
    const parentPath = locationArray[locationArray.length - 2];
    result.push(
      (parentPath.charAt(0).toUpperCase() + parentPath.slice(1)) as PathKeys
    );
  }

  return result;
};

export const useHeaderTranslation = (
  path: Paths
): [(word: string) => string, string?] => {
  const location = useLocation();
  const { t } = useTranslation('translation');

  const newT = (word: string) => t(`${path}.header.${word}`);

  if ([Paths.Home, Paths.MainMenu].includes(path)) {
    return [newT];
  }

  return [newT, t(`common.header.${location.pathname.split('/')[1]}`)];
};

export const useNavBarTranslation = (path: Paths) => {
  const { t } = useTranslation('translation');

  return (word: string) => t(`${path}.navbar.${word}`);
};
