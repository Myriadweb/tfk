import { Translation } from '../types/Translation';
import { Paths } from '../types/Paths';

const en: Translation = {
  // each language will have a resource file with translations
  translation: {
    // here we will have a series of objects
    // the keys will be the locations (based on react router)
    [Paths.MainMenu]: {
      // here we will have 3 optional keys (header, scene and navbar)
      header: {
        // here go all the key-value pairs with the strings we need in the header
        title: 'MEET A PATIENT',
      },
      scene: {
        // here go all the key-value pairs with the strings we need in the scene
      },
      navbar: {
        // here go all the key-value pairs with the strings we need in the navbar
        selectPath: 'SELECT A PATH TO EXPLORE',
        bodySystemButton: 'BODY SYSTEMS',
        proceduresButton: 'PROCEDURES',
      },
    },
    [Paths.Sensory]: {
      header: {
        title: 'SENSORY',
      },
      scene: {
        hearing: 'HEARING',
        sight: 'SIGHT',
        proprioception: 'PROPRIOCEPTION',
        touch: 'TOUCH',
        vestibular: 'VESTIBULAR',
        taste: 'TASTE',
        smell: 'SMELL',
      },
      navbar: {
        selectPath: 'CHOOSE A SENSE, THEN DRAG\nAN OBJECT TO SEE ITS EFFECT.',
        smell: 'smell',
        hearing: 'hearing',
        proprioception: 'proprioception',
        sight: 'sight',
        taste: 'taste',
        touch: 'touch',
        vestibular: 'vestibular',
      },
    },
    [Paths.Skeletal]: {
      header: {
        title: 'SKELETAL',
      },
      scene: {
        skull: 'SKULL',
        mandible: 'MANDIBLE',
        clavicle: 'CLAVICLE',
        scapula: 'SCAPULA',
        ribs: 'RIBS',
        pelvis: 'PELVIS',
        wrist: 'WRIST',
        hand: 'HAND',
        femur: 'FEMUR',
        tibia: 'TIBIA',
        ankles: 'ANKLES',
        feet: 'FEET',
        sternum: 'STERNUM',
        vertebrae: 'VERTEBRAE',
        humerus: 'HUMERUS',
        radius: 'RADIUS',
        ulna: 'ULNA',
        patella: 'PATELLA',
        fibula: 'FIBULA',
      },
    },
    [Paths.Muscular]: {
      header: {
        title: 'MUSCULAR',
      },
      scene: {
        latissimus: 'LATISSIMUS\nDORSI',
        pectorals: 'PECTORALS',
        abs: 'ABDOMINAL\nMUSCLES',
        quadriceps: 'QUADRICEPS',
        hamstrings: 'HAMSTRINGS',
        deltoids: 'DELTOIDS',
        biceps: 'BICEPS',
        triceps: 'TRICEPS',
        gluteus: 'GLUTEUS\nMAXIMUS',
        calves: 'CALVES',
      },
    },
    [Paths.Cardiovascular]: {
      header: {
        title: 'CARDIOVASCULAR',
      },
      scene: {
        heart: 'HEART',
        lungs: 'LUNGS',
        arteries: 'ARTERIES',
        veins: 'VEINS',
      },
    },
    [Paths.Nervous]: {
      header: {
        title: 'NERVOUS',
      },
      scene: {
        brain: 'BRAIN',
        cerebellum: 'CEREBELLUM',
        nerves: 'NERVES',
        brainStem: 'BRAIN\nSTEM',
        spinalCord: 'SPINAL\nCORD',
      },
    },
    [Paths.Digestive]: {
      header: {
        title: 'DIGESTIVE',
      },
      scene: {
        stomach: 'STOMACH',
        esophagus: 'ESOPHAGUS',
        largeIntestine: 'LARGE\nINTESTINE',
        smallIntestine: 'SMALL\nINTESTINE',
        liver: 'LIVER',
        gallbladder: 'GALLBLADDER',
        appendix: 'APPENDIX',
        rectum: 'RECTUM',
        mouth: 'MOUTH',
        anus: 'ANUS',
      },
    },
    [Paths.BodySystems]: {
      navbar: {
        selectPath: 'CHOOSE A BODY SYSTEM TO EXPLORE',
        sensory: 'SENSORY',
        skeletal: 'SKELETAL',
        digestive: 'DIGESTIVE',
        nervous: 'NERVOUS',
        cardiovascular: 'CARDIOVASCULAR',
        muscular: 'MUSCULAR',
      },
    },
    [Paths.Smell]: {
      header: {
        title: 'SMELL',
      },
    },
    [Paths.Procedures]: {
      navbar: {
        selectPath: 'CHOOSE A HOSPITAL PROCEDURE TO COMPLETE',
        surgicalPrep: 'SURGICAL PREP',
        xRay: 'X-RAY',
        eeg: 'EEG',
        wellness: 'WELLNESS',
        mri: 'MRI',
        iv: 'IV',
      },
    },
    [Paths.SurgicalPrep]: {
      header: {
        title: 'SURGICAL PREP',
      },
    },
    [Paths.XRay]: {
      header: {
        title: 'X-RAY',
      },
    },
    [Paths.Eeg]: {
      header: {
        title: 'EEG',
      },
    },
    [Paths.Wellness]: {
      header: {
        title: 'WELLNESS',
      },
    },
    [Paths.Mri]: {
      header: {
        title: 'MRI',
      },
    },
    [Paths.Iv]: {
      header: {
        title: 'IV',
      },
    },
    common: {
      header: {
        bodySystems: 'BODY SYSTEMS',
        procedures: 'PROCEDURES',
      },
      scene: {
        play: 'PLAY',
        explore: 'EXPLORE',
      },
      navbar: {
        exit: 'EXIT',
        bodySystems: 'BODY SYSTEMS',
        en: 'ENG',
        es: 'ESP',
      },
    },
  },
};

export default en;
