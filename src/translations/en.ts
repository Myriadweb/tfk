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
        continueButton: 'CONTINUE',
        smell: 'smell',
        hearing: 'hearing',
        proprioception: 'proprioception',
        sight: 'sight',
        taste: 'taste',
        touch: 'touch',
        vestibular: 'vestibular',
        badSmell: {
          title: "GROSS! HERE'S A TIP...",
          description:
            'BLOCKING YOUR NOSE WHEN THERE’S A BAD\nSMELL AROUND CAN MAKE IT DISAPPEAR.',
        },
        badSight: {
          title: 'OUCH! HERE’S A TIP…',
          description:
            'Wearing SUNGLASSES OUTSIDE CAN HELP\nPROTECT YOUR EYES FROM BRIGHT LIGHT.',
        },
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
      navbar: {
        selectPath: 'DRAG THE BONES TO THE\nBODY TO COMPLETE THE SKELETON.',
        skull: {
          title: 'SKULL',
          description:
            "The skull is actually many bones connected\nby joints that don't move. It has an\nimportant job -- protecting your brain!.",
        },
        ribs: {
          title: 'RIBS',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        vertebrae: {
          title: 'VERTEBRAE',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        'carpals&metacarpals': {
          title: 'CARPALS & METACARPALS',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        scapula: {
          title: 'SCAPULA',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        clavicle: {
          title: 'CLAVICLE',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        pelvis: {
          title: 'PELVIS',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        femur: {
          title: 'FEMUR',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        'fibule&tibia': {
          title: 'FIBULE & TIBIA',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        humerus: {
          title: 'HUMERUS',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        'radius&ulna': {
          title: 'RADIUS & ULNA',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
        'tarsals&metatarsals': {
          title: 'TARSALS & METATARSALS',
          description:
            'LOREM IPSUM DOLOR SIT AMET,\nCONSECTETUR ADIPISCING ELIT,\nSED DO EIUSMOD TEMPOR',
        },
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
    [Paths.Sight]: {
      header: {
        title: 'SIGHT',
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
      scene: {
        text: 'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR',
        label: 'SURGICAL PREP',
        buttonText: 'BEGIN PREP',
      },
    },
    [Paths.XRay]: {
      header: {
        title: 'X-RAY',
      },
      scene: {
        text: 'An X-ray machine\ntakes pictures that\ncan see through your\nbody to find injuries.',
        label: 'X-RAY',
        buttonText: 'TAKE AN X-RAY',
        brokenBoneLabel: 'BROKEN BONE',
        brokenBoneText:
          'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR .',
      },
      navbar: {
        '0-mainText': 'LOCATE THE INJURY',
        '0-subText':
          'WHEN YOU’VE FOUND THE AFFECTED AREA,\nTOUCH IT TO CONTINUE.',
        '1-mainText': 'GREAT JOB!',
        '1-subText':
          'YOU’VE LOCATED THE INJURY. NOW IT’S TIME\nTO TAKE AN X-RAY IMAGE OF THE AREA',
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'X-RAY MACHINE',
        '2-subText': 'PRESS THE START BUTTON TO\nTAKE AN IMAGE OF THE AREA.',
        '2-buttonText': 'START',
        '3-mainText': 'X-RAY MACHINE',
        '3-subText': 'PROCESSING...',
        '4-mainText': 'GREAT JOB!',
        '4-subText':
          'YOU’VE DISCOVERED THAT A BROKEN BONE\nWAS THE CAUSE OF THE INJURY.',
        '4-buttonText': 'FINISH',
        '5-mainText': 'GREAT JOB!',
        '5-subText':
          'YOU’VE SUCCESSFULLY TREATED THE INJURY!\nNOW CHOOSE YOUR PATIENT’S REWARD.',
        '5-buttonText': 'CONTINUE',
        '6-subText': 'YOU’VE DONE AN x-RAY!\nTAP BELOW TO LEARN MORE ABOUT',
        '6-boldText': 'THE SKELETAL SYSTEM',
        '6-back': 'BACK TO\nPROCEDURES',
      },
    },
    [Paths.Eeg]: {
      header: {
        title: 'EEG',
      },
      scene: {
        text: 'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR',
        label: 'EEG',
        buttonText: 'TAKE AN EEG',
      },
    },
    [Paths.Wellness]: {
      header: {
        title: 'WELLNESS',
      },
      scene: {
        text: 'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR',
        label: 'WELLNESS',
        buttonText: 'CHECK VITALS',
      },
    },
    [Paths.Mri]: {
      header: {
        title: 'MRI',
      },
      scene: {
        text: 'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR',
        label: 'MRI',
        buttonText: 'TAKE AN MRI',
      },
    },
    [Paths.Iv]: {
      header: {
        title: 'IV',
      },
      scene: {
        text: 'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR',
        label: 'IV',
        buttonText: 'INSERT IV',
      },
    },
    [Paths.Game]: {},
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
        procedures: 'PROCEDURES',
        en: 'ENG',
        es: 'ESP',
      },
    },
  },
};

export default en;
