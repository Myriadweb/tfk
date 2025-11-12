const path = require('path');
const glob = require('glob');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.plugins = webpackConfig.plugins.filter(
                plugin => {
                    const name = plugin.constructor.name;
                    return name !== 'GenerateSW' &&
                        name !== 'InjectManifest' &&
                        !name.includes('ServiceWorker') &&
                        !name.includes('Workbox');
                }
            );

            // Find all images and sounds in build directory
            const images = glob.sync(path.join(__dirname, 'build/images/**/*.*')).map(file => ({
                url: file.replace(path.join(__dirname, 'build'), '.'),
                revision: null,
            }));
            const sounds = glob.sync(path.join(__dirname, 'build/sounds/**/*.*')).map(file => ({
                url: file.replace(path.join(__dirname, 'build'), '.'),
                revision: null,
            }));

            const version = Date.now(); // or use require('./package.json').version, or a git hash

            webpackConfig.plugins.push(
                new GenerateSW({
                    cacheId: 'tfk-app-v' + version,
                    swDest: 'service-worker.js',
                    clientsClaim: true,
                    skipWaiting: true,
                    maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
                    navigateFallback: '/tfk/index.html',
                    navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
                    exclude: [/\.map$/, /asset-manifest\.json$/, /\.LICENSE\.txt$/],
                    additionalManifestEntries: [...images, ...sounds],
                })
            );

            return webpackConfig;
        },
    },
};
