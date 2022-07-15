import { Translation } from '../types/Translation';
import { Paths } from '../types/Paths';

const es: Translation = {
  // each language will have a resource file with translations
  translation: {
    // here we will have a series of objects
    // the keys will be the locations (based on react router)
    [Paths.MainMenu]: {
      // here we will have 3 optional keys (header, scene and navbar)
      header: {
        // here go all the key-value pairs with the strings we need in the header
        title: 'CONOCER A UN/A PACIENTE',
      },
      scene: {
        // here go all the key-value pairs with the strings we need in the scene
      },
      navbar: {
        // here go all the key-value pairs with the strings we need in the navbar
        selectPath: 'SELECT A PATH TO EXPLORE',
        bodySystemButton: 'SISTEMAS\nCORPORALES',
        proceduresButton: 'PROCEDIMIENTOS',
      },
    },
    [Paths.BodySystems]: {
      navbar: {
        selectPath: 'EXPLORA UN SISTEMA CORPORAL',
        sensory: 'SENSORIAL',
        skeletal: 'ESQUELÉTICO',
        digestive: 'DIGESTIVO',
        nervous: 'NERVIOSO',
        cardiovascular: 'CARDIOVASCULAR',
        muscular: 'MUSCULAR',
      },
    },
    common: {
      header: {
        bodySystems: 'SISTEMAS CORPORALES',
        procedures: 'PROCEDIMIENTOS',
      },
      scene: {
        play: 'JUGAR',
        explore: 'EXPLORAR',
      },
      navbar: {
        exit: 'SALIR',
        bodySystems: 'SISTEMAS CORPORALES',
        en: 'ENG',
        es: 'ESP'
      },
    },
  },
};

export default es;
