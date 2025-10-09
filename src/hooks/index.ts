import { PathKeys, Paths } from '../types/Paths';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import { VALID_LOCATIONS } from '../utils/locationLoader';

type ReturnPath = [PathKeys, PathKeys?];

export const usePathFromLocation = (location: string): ReturnPath => {
  const params = useParams<{ location?: string }>();

  // If we're at root, return Home
  if (location === '/') {
    return ['Home'];
  }

  // Split the location path
  let locationArray = location.split('/').filter(Boolean); // Remove empty strings

  // If first segment is a location (childlifezone, atlanta, etc.), remove it
  if (locationArray.length > 0 && params.location) {
    const firstSegment = locationArray[0].toLowerCase();
    if (VALID_LOCATIONS.includes(firstSegment as any)) {
      locationArray = locationArray.slice(1); // Remove location segment
    }
  }

  // If no path segments left after removing location, return Home
  if (locationArray.length === 0) {
    return ['Home'];
  }

  // Get the last segment as the current path
  const locationLast = locationArray[locationArray.length - 1];
  const path = locationLast.charAt(0).toUpperCase() + locationLast.slice(1);

  if (!Paths[path]) {
    throw new Error(`Path ${path} does not exist`);
  }

  const result: ReturnPath = [path as PathKeys];

  // Get parent path if it exists
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
  const params = useParams<{ location?: string }>();
  const { t } = useTranslation('translation');

  const newT = (word: string) => t(`${path}.header.${word}`);

  if ([Paths.Home, Paths.MainMenu].includes(path)) {
    return [newT];
  }

  // Filter out location prefix from pathname
  let pathname = location.pathname;
  if (params.location) {
    pathname = pathname.replace(`/${params.location}`, '');
  }

  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments.length > 0 ? pathSegments[0] : '';

  return [newT, t(`common.header.${firstSegment}`)];
};

export const useNavBarTranslation = (path: Paths) => {
  const { t } = useTranslation('translation');

  return (word: string) => t(`${path}.navbar.${word}`);
};

export { useLocationNavigate, useLocationPath } from './useLocationNavigate';
