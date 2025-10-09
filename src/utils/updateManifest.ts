// src/utils/updateManifest.ts

/**
 * Updates the manifest link to point to the location-specific manifest
 * Call this once when the app loads
 */
export function updateManifestStartUrl() {
  // Get current hash (e.g., "#/childlifezone/mainMenu")
  const hash = window.location.hash;

  // Extract just the location part (e.g., "childlifezone")
  const parts = hash.replace(/^#\/?/, '').split('/');
  const location = parts[0];

  // Don't update if no location specified
  if (!location) return;

  // Point to the pre-generated location-specific manifest
  const manifestPath = process.env.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}/manifests/${location}.json`
    : `/manifests/${location}.json`;

  // Remove existing manifest link
  const existingLink = document.querySelector('link[rel="manifest"]');
  if (existingLink) {
    existingLink.remove();
  }

  // Add new manifest link pointing to location-specific manifest
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = manifestPath;
  document.head.appendChild(link);

  console.log(`Manifest link updated to: ${manifestPath}`);
}
