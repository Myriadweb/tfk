import { Paths } from '../types/Paths';
import { useTranslation } from 'react-i18next';

export const usePathFromLocation = (location: string) => {
  if (location === '/') {
    return Paths.Home;
  }

  const lowerCasePath = location.split('/')[1];
  const path = lowerCasePath.charAt(0).toUpperCase() + lowerCasePath.slice(1);

  if (!Paths[path]) {
    throw new Error(`Path ${path} does not exist`);
  }

  return path;
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
