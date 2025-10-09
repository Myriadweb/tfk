// src/utils/locationLoader.ts
export type LocationName =
  | 'atlanta'
  | 'phoenix'
  | 'richmond'
  | 'childlifezone'
  | 'riley'
  | 'stlouis'
  | 'dimaggio';

export const VALID_LOCATIONS: LocationName[] = [
  'atlanta',
  'phoenix',
  'richmond',
  'childlifezone',
  'riley',
  'stlouis',
  'dimaggio',
];

export const DEFAULT_LOCATION: LocationName = 'dimaggio';

// Map URL-friendly names to actual folder names (matching your structure)
const LOCATION_FOLDER_MAP: Record<LocationName, string> = {
  atlanta: 'Atlanta',
  phoenix: 'Phoenix',
  richmond: 'Richmond',
  childlifezone: 'ChildLifeZone',
  riley: 'Riley',
  stlouis: 'StLouis',
  dimaggio: 'Dimaggio',
};

/**
 * Extract location from URL hash
 * Examples:
 *   /#/childlifezone -> 'childlifezone'
 *   /#/childlifezone/some-route -> 'childlifezone'
 *   /#/ -> null (use default)
 */
export function getLocationFromURL(): LocationName {
  const hash = window.location.hash;

  // Remove leading # and split by /
  const parts = hash.replace(/^#\/?/, '').split('/');

  // First part should be the location
  const locationParam = parts[0]?.toLowerCase();

  // Validate location
  if (locationParam && VALID_LOCATIONS.includes(locationParam as LocationName)) {
    return locationParam as LocationName;
  }

  return DEFAULT_LOCATION;
}

/**
 * Get the actual folder name for a location
 */
export function getLocationFolder(location: LocationName): string {
  return LOCATION_FOLDER_MAP[location];
}

/**
 * Dynamically import location assets
 * This matches your actual folder structure: src/components/scene/ChildrenAssets/{Location}/index.ts
 */
export async function loadLocationAssets(location: LocationName) {
  const folderName = getLocationFolder(location);

  try {
    // Dynamic import - Webpack will code-split this automatically
    const assets = await import(`../components/scene/ChildrenAssets/${folderName}/index.ts`);
    return assets;
  } catch (error) {
    console.error(`Failed to load assets for location: ${location}`, error);
    // Fallback to default location
    const defaultFolder = getLocationFolder(DEFAULT_LOCATION);
    const defaultAssets = await import(`../components/scene/ChildrenAssets/${defaultFolder}/index.ts`);
    return defaultAssets;
  }
}
