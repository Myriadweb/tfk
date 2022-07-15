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
    [Paths.Sensory]: {
      header: {
        title: 'SENSORIAL',
      },
      scene: {
        hearing: 'OÍDO',
        sight: 'VISTA',
        proprioception: 'PROPRIOCEPCIÓN',
        touch: 'TACTO',
        vestibular: 'VESTIBULAR',
        taste: 'GUSTO',
        smell: 'OLFATO',
      },
      navbar: {
        selectPath: 'CHOOSE A SENSE, THEN DRAG\nAN OBJECT TO SEE ITS EFFECT.',
        hearing: 'OÍDO',
        sight: 'VISTA',
        proprioception: 'PROPRIOCEPCIÓN',
        touch: 'TACTO',
        vestibular: 'VESTIBULAR',
        taste: 'GUSTO',
        smell: 'OLFATO',
      },
    },
    [Paths.Skeletal]: {
      header: {
        title: 'ESQUELÉTICO',
      },
      scene: {
        skull: 'CRÁNEO',
        mandible: 'MANDÍBULA',
        clavicle: 'CLAVÍCULA',
        scapula: 'ESCÁPULA',
        ribs: 'COSTILLAS',
        pelvis: 'PELVIS',
        wrist: 'MUÑECA',
        hand: 'MANO',
        femur: 'FÉMUR',
        tibia: 'TIBIA',
        ankles: 'TOBILLOS',
        feet: 'PIES',
        sternum: 'ESTERNÓN',
        vertebrae: 'VÉRTEBRAS',
        humerus: 'HÚMERO',
        radius: 'RADIO',
        ulna: 'CÚBITO',
        patella: 'RÓTULA',
        fibula: 'PERONÉ',
      },
    },
    [Paths.Muscular]: {
      header: {
        title: 'MUSCULAR',
      },
      scene: {
        latissimus: 'LATISSIMUS\nDORSI',
        pectorals: 'PECTORALES',
        abs: 'RECTO\nABDOMINAL',
        quadriceps: 'CUÁDRICEPS',
        hamstrings: 'ISQUIOTIBIALES',
        deltoids: 'DELTOIDES',
        biceps: 'BÍCEPS',
        triceps: 'TRÍCEPS',
        gluteus: 'GLUTÉO\nMAYOR',
        calves: 'PANTORILLAS',
      },
    },
    [Paths.Cardiovascular]: {
      header: {
        title: 'CARDIOVASCULAR',
      },
      scene: {
        heart: 'CORAZÓN',
        lungs: 'PULMONES',
        arteries: 'ARTERIAS',
        veins: 'VENAS',
      },
    },
    [Paths.Nervous]: {
      header: {
        title: 'NERVIOSO',
      },
      scene: {
        brain: 'CEREBRO',
        cerebellum: 'CEREBELO',
        nerves: 'NERVIOS',
        brainStem: 'TRONCO\nENCEFÁLICO',
        spinalCord: 'MÉDULA\nESPINAL',
      },
    },
    [Paths.Digestive]: {
      header: {
        title: 'DIGESTIVO',
      },
      scene: {
        stomach: 'ESTÓMAGO',
        esophagus: 'ESÓFAGO',
        largeIntestine: 'INTESTINO\nGRUESO',
        smallIntestine: 'INTESTINO\nDELGADO',
        liver: 'HIGADO',
        gallbladder: 'VESÍCULA BILIAR',
        appendix: 'APPENDIX',
        rectum: 'RECTO',
        mouth: 'BOCA',
        anus: 'ANO',
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
        es: 'ESP',
      },
    },
  },
};

export default es;
