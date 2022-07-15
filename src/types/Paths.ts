export enum Paths {
  Home = '/',
  MainMenu = 'mainMenu',
  BodySystems = 'bodySystems',
  Procedures = 'procedures',
  Sensory = 'sensory',
  Skeletal = 'skeletal',
  Game = 'game',
  Muscular = 'muscular',
  Nervous = 'nervous',
  Digestive = 'digestive',
  Cardiovascular = 'cardiovascular',
  Smell = 'smell',
  Hearing = 'hearing',
  Proprioception = 'proprioception',
  Sight = 'sight',
  Taste = 'taste',
  Touch = 'touch',
  Vestibular = 'vestibular',
}

export type PathKeys = keyof typeof Paths;
