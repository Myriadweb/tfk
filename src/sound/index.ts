const Sounds = {
  click: new Audio('sounds/General_Click.mp3'),
  bandage: new Audio('sounds/Bandage.mp3'),
  completeProcedure: new Audio('sounds/Complete_Procedure.mp3'),
  completeStep: new Audio('sounds/Complete_Step.mp3'),
  negativeAlert: new Audio('sounds/Negative_Alert.mp3'),
  positiveAlert: new Audio('sounds/Positive_Alert.mp3'),
  smellsBad: new Audio('sounds/Smells_Bad.mp3'),
  smellsGood: new Audio('sounds/Smells_Good.mp3'),
  xRay: new Audio('sounds/XRay.mp3'),
  cardiovascularNormalHeartbeat: new Audio('sounds/Cardiovascular_Normal_Heartbeat.mp3'),
  cardiovascularSlowHeartbeat: new Audio('sounds/Cardiovascular_Slow_Heartbeat.mp3'),
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
};

Sounds.click.preload = 'auto';
Sounds.smellsBad.preload = 'auto';
Sounds.smellsGood.preload = 'auto';

export type Sounds = keyof typeof Sounds;

export default function playSound(sound: Sounds) {
  Sounds[sound].play();
}
