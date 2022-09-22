const Sounds = {
  click: new Audio('sounds/General_Click.mp3'),
  bandage: new Audio('sounds/Bandage.mp3'),
  completeProcedure: new Audio('sounds/Complete_Procedure.mp3'),
  completeStep: new Audio('sounds/Complete_Step.mp3'),
  cardiovascularNormalHeartbeat: new Audio(
    'sounds/Cardiovascular_Normal_Heartbeat.mp3'
  ),
  cardiovascularSlowHeartbeat: new Audio(
    'sounds/Cardiovascular_Slow_Heartbeat.mp3'
  ),
  digestionChewing: new Audio('sounds/Digestion_Chewing.mp3'),
  digestionStomachGurgle: new Audio('sounds/Digestion_Stomach_Gurgle.mp3'),
  digestionSwallow: new Audio('sounds/Digestion_Swallow.mp3'),
  eEGAttachElectrodes: new Audio('sounds/EEG_Attach_Electrodes.mp3'),
  eEGMachine: new Audio('sounds/EEG_Machine.mp3'),
  eEGSock: new Audio('sounds/EEG_Sock.mp3'),
  eEGTabs: new Audio('sounds/EEG_Tabs.mp3'),
  generalSelect: new Audio('sounds/General_Select.mp3'),
  generalSuccess_1: new Audio('sounds/General_Success_1.mp3'),
  generalSuccess_2: new Audio('sounds/General_Success_2.mp3'),
  hearingMusic: new Audio('sounds/Hearing_Music.mp3'),
  hearingSiren: new Audio('sounds/Hearing_Siren.mp3'),
  iVBubbles: new Audio('sounds/IV_Bubbles.mp3'),
  iVHeadphones: new Audio('sounds/IV_Headphones.mp3'),
  iVTablet: new Audio('sounds/IV_Tablet.mp3'),
  iVTourniquetNeedle: new Audio('sounds/IV_Tourniquet_Needle.mp3'),
  mRIHeadphones: new Audio('sounds/MRI_Headphones.mp3'),
  mRIMachine: new Audio('sounds/MRI_Machine.mp3'),
  mRIPickADistraction: new Audio('sounds/MRI_Pick_a_Distraction.mp3'),
  mRISnoring: new Audio('sounds/MRI_Snoring.mp3'),
  mRIVR: new Audio('sounds/MRI_VR.mp3'),
  muscularAscending: new Audio('sounds/Muscular_Ascending.mp3'),
  muscularDescending: new Audio('sounds/Muscular_Descending.mp3'),
  negativeAlert: new Audio('sounds/Negative_Alert.mp3'),
  nervousBrainSectionSelection: new Audio('sounds/Nervous_Brain_Section_Selection.mp3'),
  nervousBrainTurn: new Audio('sounds/Nervous_Brain_Turn.mp3'),
  positiveAlert: new Audio('sounds/Positive_Alert.mp3'),
  proprioceptionFeather: new Audio('sounds/Proprioception_Feather.mp3'),
  proprioceptionHeavy: new Audio('sounds/Proprioception_Heavy.mp3'),
  sightHot: new Audio('sounds/Sight_Hot.mp3'),
  sightMoon: new Audio('sounds/Sight_Moon.mp3'),
  skeletalBoneRightPosition: new Audio('sounds/Skeletal_Bone_Right_Position.mp3'),
  skeletalBoneWrongPosition: new Audio('sounds/Skeletal_Bone_Wrong_Position.mp3'),
  smellBad: new Audio('sounds/Smell_Bad.mp3'),
  smellGood: new Audio('sounds/Smell_Good.mp3'),
  smellsBad: new Audio('sounds/Smells_Bad.mp3'),
  smellsGood: new Audio('sounds/Smells_Good.mp3'),
  surgicalPrepAirRelease: new Audio('sounds/Surgical_Prep_Air_Release.mp3'),
  surgicalPrepBloodPressure: new Audio('sounds/Surgical_Prep_Blood_Pressure.mp3'),
  surgicalPrepBloodTourniquet: new Audio('sounds/Surgical_Prep_Tourniquet.mp3'),
  tasteGood: new Audio('sounds/Taste_Good.mp3'),
  tasteHot: new Audio('sounds/Taste_Hot.mp3'),
  touchGood: new Audio('sounds/Touch_Good.mp3'),
  touchOuch: new Audio('sounds/Touch_Ouch.mp3'),
  vestibularJump: new Audio('sounds/Vestibular_Jump.mp3'),
  vestibularSpin: new Audio('sounds/Vestibular_Spin.mp3'),
  wellnessHeartMonitor: new Audio('sounds/Wellness_Heart_Monitor.mp3'),
  xRay: new Audio('sounds/XRay.mp3'),
  xRay_Machine: new Audio('sounds/XRay_Machine.mp3'),
  xRay_Red_Spot: new Audio('sounds/XRay_Red_Spot.mp3'),
};

Sounds.click.preload = 'auto';
Sounds.smellsBad.preload = 'auto';
Sounds.smellsGood.preload = 'auto';

export type Sounds = keyof typeof Sounds;

export default function playSound(sound: Sounds) {
  Sounds[sound].play();
}
