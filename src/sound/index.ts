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
};

Sounds.click.preload = 'auto';
Sounds.smellsBad.preload = 'auto';
Sounds.smellsGood.preload = 'auto';

export type Sounds = keyof typeof Sounds;

export default function playSound(sound: Sounds) {
  Sounds[sound].play();
}
