export enum Paths {
  Home = '/',
  MainMenu = 'mainMenu',
  BodySystems = 'bodySystems',
  Procedures = 'procedures',
  Sensory = 'sensory',
}

export type PathKeys = keyof typeof Paths;
