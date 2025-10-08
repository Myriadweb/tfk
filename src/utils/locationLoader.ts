// utils/locationLoader.ts
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

// Map URL-friendly names to actual folder names
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
  if (
    locationParam &&
    VALID_LOCATIONS.includes(locationParam as LocationName)
  ) {
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
 */
export async function loadLocationAssets(location: LocationName) {
  const folderName = getLocationFolder(location);

  try {
    // Dynamic import of the location's index file
    const assets = await import(`../assets/ChildrenAssets/${folderName}`);
    return assets;
  } catch (error) {
    console.error(`Failed to load assets for location: ${location}`, error);
    // Fallback to default location
    const defaultAssets = await import(
      `../assets/ChildrenAssets/${getLocationFolder(DEFAULT_LOCATION)}`
    );
    return defaultAssets;
  }
}
