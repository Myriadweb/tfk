const CACHE_VERSION = 9; // Increment this every deployment
const CACHE_NAME = `tfk-app-v${CACHE_VERSION}`;

console.log('Service Worker version:', CACHE_VERSION);

const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    // Fonts
    './fonts/ChangaOne-Regular.ttf',
    './fonts/LemonMilk.otf',
    './fonts/LemonMilkbold.otf',
    './fonts/LemonMilkbolditalic.otf',
    './fonts/LemonMilklight.otf',
    './fonts/LemonMilklightitalic.otf',
    // All sound files
    './sounds/General_Click.mp3',
    './sounds/Bandage.mp3',
    './sounds/Complete_Procedure.mp3',
    './sounds/Complete_Step.mp3',
    './sounds/Cardiovascular_Normal_Heartbeat.mp3',
    './sounds/Cardiovascular_Slow_Heartbeat.mp3',
    './sounds/Digestion_Chewing.mp3',
    './sounds/Digestion_Stomach_Gurgle.mp3',
    './sounds/Digestion_Swallow.mp3',
    './sounds/EEG_Attach_Electrodes_Single.mp3',
    './sounds/EEG_Machine.mp3',
    './sounds/EEG_Sock.mp3',
    './sounds/EEG_Tabs_Single.mp3',
    './sounds/General_Select.mp3',
    './sounds/General_Success_1.mp3',
    './sounds/General_Success_2.mp3',
    './sounds/Hearing_Music.mp3',
    './sounds/Hearing_Siren.mp3',
    './sounds/IV_Bubbles.mp3',
    './sounds/IV_Headphones.mp3',
    './sounds/IV_Tablet.mp3',
    './sounds/IV_Needle.mp3',
    './sounds/IV_Tourniquet.mp3',
    './sounds/IV_Tourniquet_Needle.mp3',
    './sounds/MRI_Headphones.mp3',
    './sounds/MRI_Machine.mp3',
    './sounds/MRI_Pick_a_Distraction.mp3',
    './sounds/MRI_Snoring.mp3',
    './sounds/MRI_VR.mp3',
    './sounds/Main_Screen_Swoosh.mp3',
    './sounds/Muscular_Ascending.mp3',
    './sounds/Muscular_Descending.mp3',
    './sounds/Negative_Alert.mp3',
    './sounds/Nervous_Brain_Section_Selection.mp3',
    './sounds/Nervous_Brain_Turn.mp3',
    './sounds/Positive_Alert.mp3',
    './sounds/Proprioception_Feather.mp3',
    './sounds/Proprioception_Heavy.mp3',
    './sounds/Sight_Hot.mp3',
    './sounds/Sight_Moon.mp3',
    './sounds/Skeletal_Bone_Right_Position.mp3',
    './sounds/Skeletal_Bone_Wrong_Position.mp3',
    './sounds/Smell_Bad.mp3',
    './sounds/Smell_Good.mp3',
    './sounds/Smells_Bad.mp3',
    './sounds/Smells_Good.mp3',
    './sounds/Surgical_Prep_Air_Release.mp3',
    './sounds/Surgical_Prep_Blood_Pressure.mp3',
    './sounds/Surgical_Prep_Blood_Pressure_Pump_and_Release.mp3',
    './sounds/Surgical_Prep_Blood_Pressure_Single_Pump.mp3',
    './sounds/Surgical_Prep_Tourniquet.mp3',
    './sounds/Taste_Good.mp3',
    './sounds/Taste_Hot.mp3',
    './sounds/Touch_Good.mp3',
    './sounds/Touch_Ouch.mp3',
    './sounds/Vestibular_Jump.mp3',
    './sounds/Vestibular_Spin.mp3',
    './sounds/Wellness_Blood_Pressure.mp3',
    './sounds/Wellness_Heart_Monitor.mp3',
    './sounds/Xray.mp3',
    './sounds/XRay_Machine.mp3',
    './sounds/XRay_Red_Spot.mp3'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    console.log('Installing service worker version:', CACHE_VERSION);

    // Force new service worker to activate immediately
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache:', CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('All files cached successfully');
            })
            .catch((error) => {
                console.error('Cache installation failed:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Activating service worker version:', CACHE_VERSION);

    event.waitUntil(
        // Take control of all pages immediately
        self.clients.claim().then(() => {
            // Then clean up old caches
            return caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            });
        })
    );
});

// Fetch event - network first, then cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Only cache successful full responses (not partial 206 responses)
                if (response.status === 200) {
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }

                return response;
            })
            .catch(() => {
                // If network fails, try cache
                return caches.match(event.request);
            })
    );
});

