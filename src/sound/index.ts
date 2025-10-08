const audioContext = new (window.AudioContext ||
  (window as any).webkitAudioContext)();
const audioBuffers: { [key: string]: AudioBuffer } = {};
const loadingPromises: { [key: string]: Promise<AudioBuffer> } = {};

const soundPaths = {
  click: 'sounds/General_Click.mp3',
  bandage: 'sounds/Bandage.mp3',
  completeProcedure: 'sounds/Complete_Procedure.mp3',
  completeStep: 'sounds/Complete_Step.mp3',
  cardiovascularNormalHeartbeat: 'sounds/Cardiovascular_Normal_Heartbeat.mp3',
  cardiovascularSlowHeartbeat: 'sounds/Cardiovascular_Slow_Heartbeat.mp3',
  digestionChewing: 'sounds/Digestion_Chewing.mp3',
  digestionStomachGurgle: 'sounds/Digestion_Stomach_Gurgle.mp3',
  digestionSwallow: 'sounds/Digestion_Swallow.mp3',
  eEGAttachElectrodes: 'sounds/EEG_Attach_Electrodes_Single.mp3',
  eEGMachine: 'sounds/EEG_Machine.mp3',
  eEGSock: 'sounds/EEG_Sock.mp3',
  eEGTabs: 'sounds/EEG_Tabs_Single.mp3',
  generalSelect: 'sounds/General_Select.mp3',
  generalSuccess_1: 'sounds/General_Success_1.mp3',
  generalSuccess_2: 'sounds/General_Success_2.mp3',
  hearingMusic: 'sounds/Hearing_Music.mp3',
  hearingSiren: 'sounds/Hearing_Siren.mp3',
  iVBubbles: 'sounds/IV_Bubbles.mp3',
  iVHeadphones: 'sounds/IV_Headphones.mp3',
  iVTablet: 'sounds/IV_Tablet.mp3',
  ivNeedle: 'sounds/IV_Needle.mp3',
  iVTourniquet: 'sounds/IV_Tourniquet.mp3',
  iVTourniquetNeedle: 'sounds/IV_Tourniquet_Needle.mp3',
  mRIHeadphones: 'sounds/MRI_Headphones.mp3',
  mRIMachine: 'sounds/MRI_Machine.mp3',
  mRIPickADistraction: 'sounds/MRI_Pick_a_Distraction.mp3',
  mRISnoring: 'sounds/MRI_Snoring.mp3',
  mRIVR: 'sounds/MRI_VR.mp3',
  mainScreenSwoosh: 'sounds/Main_Screen_Swoosh.mp3',
  muscularAscending: 'sounds/Muscular_Ascending.mp3',
  muscularDescending: 'sounds/Muscular_Descending.mp3',
  negativeAlert: 'sounds/Negative_Alert.mp3',
  nervousBrainSectionSelection: 'sounds/Nervous_Brain_Section_Selection.mp3',
  nervousBrainTurn: 'sounds/Nervous_Brain_Turn.mp3',
  positiveAlert: 'sounds/Positive_Alert.mp3',
  proprioceptionFeather: 'sounds/Proprioception_Feather.mp3',
  proprioceptionHeavy: 'sounds/Proprioception_Heavy.mp3',
  sightHot: 'sounds/Sight_Hot.mp3',
  sightMoon: 'sounds/Sight_Moon.mp3',
  skeletalBoneRightPosition: 'sounds/Skeletal_Bone_Right_Position.mp3',
  skeletalBoneWrongPosition: 'sounds/Skeletal_Bone_Wrong_Position.mp3',
  smellBad: 'sounds/Smell_Bad.mp3',
  smellGood: 'sounds/Smell_Good.mp3',
  smellsBad: 'sounds/Smells_Bad.mp3',
  smellsGood: 'sounds/Smells_Good.mp3',
  surgicalPrepAirRelease: 'sounds/Surgical_Prep_Air_Release.mp3',
  surgicalPrepBloodPressure: 'sounds/Surgical_Prep_Blood_Pressure.mp3',
  surgicalPrepBloodPressurePumpAndRelease:
    'sounds/Surgical_Prep_Blood_Pressure_Pump_and_Release.mp3',
  surgicalPrepBloodPressureSinglePump:
    'sounds/Surgical_Prep_Blood_Pressure_Single_Pump.mp3',
  surgicalPrepBloodTourniquet: 'sounds/Surgical_Prep_Tourniquet.mp3',
  tasteGood: 'sounds/Taste_Good.mp3',
  tasteHot: 'sounds/Taste_Hot.mp3',
  touchGood: 'sounds/Touch_Good.mp3',
  touchOuch: 'sounds/Touch_Ouch.mp3',
  vestibularJump: 'sounds/Vestibular_Jump.mp3',
  vestibularSpin: 'sounds/Vestibular_Spin.mp3',
  wellnessBloodPressure: 'sounds/Wellness_Blood_Pressure.mp3',
  wellnessHeartMonitor: 'sounds/Wellness_Heart_Monitor.mp3',
  xRay: 'sounds/Xray.mp3',
  xRay_Machine: 'sounds/XRay_Machine.mp3',
  xRay_Red_Spot: 'sounds/XRay_Red_Spot.mp3',
};

export type Sounds = keyof typeof soundPaths;

// Load audio file and decode it
async function loadSound(sound: Sounds): Promise<AudioBuffer> {
  // Return cached buffer if already loaded
  if (audioBuffers[sound]) {
    return audioBuffers[sound];
  }

  // Return existing loading promise if already loading
  if (loadingPromises[sound]) {
    return loadingPromises[sound];
  }

  // Start loading
  const loadPromise = (async () => {
    try {
      // Handle different environments
      const isElectron = window.require && window.require('electron');
      const baseUrl = isElectron ? '.' : (process.env.PUBLIC_URL || '');
      const url = `${baseUrl}/${soundPaths[sound]}`;

      console.log(`📥 Loading ${sound} from ${url}`);

      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      audioBuffers[sound] = audioBuffer;
      console.log(`✅ Loaded ${sound}`);

      return audioBuffer;
    } catch (error) {
      console.error(`❌ Error loading ${sound}:`, error);
      throw error;
    }
  })();

  loadingPromises[sound] = loadPromise;
  return loadPromise;
}

export function unlockAudio(): void {
  // Just resume the audio context
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

// Preload specific sounds
export async function preloadSounds(sounds: Sounds[]): Promise<void> {
  console.log(`📦 Preloading ${sounds.length} sounds...`);
  try {
    await Promise.all(sounds.map((sound) => loadSound(sound)));
    console.log('✅ All sounds preloaded');
  } catch (error) {
    console.error('❌ Error preloading sounds:', error);
  }
}

// Preload all sounds
export async function preloadAllSounds(): Promise<void> {
  const allSounds = Object.keys(soundPaths) as Sounds[];
  await preloadSounds(allSounds);
}

// Play sound using Web Audio API
export default async function playSound(sound: Sounds): Promise<void> {
  console.log(`🔊 [${new Date().toLocaleTimeString()}] Playing: ${sound}`);

  try {
    // Resume audio context if suspended
    if (audioContext.state === 'suspended') {
      console.log('⏸️ Resuming audio context...');
      await audioContext.resume();
    }

    // Load sound if not already loaded
    const buffer = await loadSound(sound);

    // Create source node
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);

    // Play
    source.start(0);
    console.log(`✅ Playing ${sound}`);
  } catch (error) {
    console.error(`❌ Error playing ${sound}:`, error);
  }
}
