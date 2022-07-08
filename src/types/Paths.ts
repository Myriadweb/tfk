export enum Paths {
  Home = '/',
  MainMenu = 'mainMenu',
  BodySystems = 'bodySystems',
  Procedures = 'procedures',
  Sensory = 'sensory',
  Skeletal = 'skeletal',
  Muscular = 'muscular',
  Nervous = 'nervous',
  Digestive = 'digestive',
  Cardiovascular = 'cardiovascular',
}

export type PathKeys = keyof typeof Paths;
