import { PathKeys, Paths } from '../types/Paths';
import { useTranslation } from 'react-i18next';

export const usePathFromLocation = (location: string): PathKeys => {
  if (location === '/') {
    return 'Home';
  }

  const lowerCasePath = location.split('/')[1];
  const path = lowerCasePath.charAt(0).toUpperCase() + lowerCasePath.slice(1);

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

export const useHeaderTranslation = (path: Paths) => {
  const t = useCustomTranslation(path);

  return (word: string) => t(`header.${word}`);
};

export const useNavBarTranslation = (path: Paths) => {
  const t = useCustomTranslation(path);

  return (word: string) => t(`navbar.${word}`);
};
