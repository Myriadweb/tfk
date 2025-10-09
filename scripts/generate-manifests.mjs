// scripts/generate-manifests.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// For ES modules, we need to recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locations = ['atlanta', 'phoenix', 'richmond', 'childlifezone', 'riley', 'stlouis', 'dimaggio'];

// Read the base manifest
const baseManifestPath = path.join(__dirname, '../public/manifest.json');
const baseManifest = JSON.parse(fs.readFileSync(baseManifestPath, 'utf8'));

// Read package.json to get homepage (for production path)
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Extract the path from homepage
let basePath = '';
if (packageJson.homepage) {
    try {
        // If it's a full URL, parse it
        const url = new URL(packageJson.homepage);
        basePath = url.pathname; // Gets "/tfk"
    } catch (e) {
        // If it's a relative path like "./" or ".", treat as no base path
        if (packageJson.homepage !== '.' && packageJson.homepage !== './') {
            basePath = packageJson.homepage;
        }
    }
}

// Remove trailing slash if present
if (basePath.endsWith('/')) {
    basePath = basePath.slice(0, -1);
}

// Create build/manifests directory if it doesn't exist
const manifestsDir = path.join(__dirname, '../build/manifests');
if (!fs.existsSync(manifestsDir)) {
    fs.mkdirSync(manifestsDir, { recursive: true });
}

// Generate a manifest for each location
locations.forEach(location => {
    const manifest = {
        ...baseManifest,
        start_url: `${basePath}/#/${location}`, // e.g., "/tfk/#/childlifezone" or "/#/childlifezone"
        scope: basePath || '/', // e.g., "/tfk" or "/"
        name: `${baseManifest.name} - ${location.charAt(0).toUpperCase() + location.slice(1)}`,
    };

    const outputPath = path.join(manifestsDir, `${location}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

    console.log(`✓ Generated manifest for ${location} with start_url: ${manifest.start_url}`);
});

console.log(`\nGenerated ${locations.length} location-specific manifests in build/manifests/`);
console.log(`Base path used: "${basePath}" (from homepage: "${packageJson.homepage || 'not set'}")`);
