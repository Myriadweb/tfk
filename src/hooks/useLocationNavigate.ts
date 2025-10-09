// src/hooks/useLocationNavigate.ts
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Custom hook that wraps React Router's navigate to automatically
 * include the location prefix (e.g., /childlifezone) in navigation paths
 *
 * Usage: Replace `useNavigate()` with `useLocationNavigate()`
 *
 * Example:
 *   const navigate = useLocationNavigate();
 *   navigate('/bodySystems/sensory'); // automatically becomes /childlifezone/bodySystems/sensory
 */
export function useLocationNavigate() {
  const navigate = useNavigate();
  const params = useParams<{ location?: string }>();

  const locationPrefix = params.location ? `/${params.location}` : '';

  return (path: string | number, options?: any) => {
    // If it's a number (going back), just use it directly
    if (typeof path === 'number') {
      return navigate(path);
    }

    // If path already starts with location prefix, don't add it again
    if (locationPrefix && path.startsWith(locationPrefix)) {
      return navigate(path, options);
    }

    // Add location prefix to the path
    const fullPath = path.startsWith('/')
      ? `${locationPrefix}${path}`
      : `${locationPrefix}/${path}`;

    return navigate(fullPath, options);
  };
}

/**
 * Helper function to build paths with location prefix for use in Link components
 *
 * Usage in components:
 *   const buildPath = useLocationPath();
 *   <Link to={buildPath('/bodySystems/sensory')}>...</Link>
 */
export function useLocationPath() {
  const params = useParams<{ location?: string }>();
  const locationPrefix = params.location ?? '';

  return (path: string, addSlash = true) => {
    const addedSlash = addSlash ? '/' : '';
    // If path already starts with location prefix, don't add it again
    if (locationPrefix && path.startsWith(locationPrefix)) {
      return path;
    }

    return path.startsWith('/')
      ? `${addedSlash}${locationPrefix}${path}`
      : `${addedSlash}${locationPrefix}/${path}`;
  };
}
