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
            'WEARING SUNGLASSES OUTSIDE CAN HELP\nPROTECT YOUR EYES FROM BRIGHT LIGHT.',
        },
        badSound: {
          title: 'OUCH! HERE’S A TIP…',
          description: 'WEARING EAR PLUGS CAN HELP\nMAKE LOUD NOISES SOFTER.',
        },
        badTouch: {
          title: 'OUCH! HERE’S A TIP…',
          description:
            'WEARING AN OVER MITT CAN PROTECT\nYOUR HANDS FROM HOT OBJECTS',
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
    [Paths.Hearing]: {
      header: {
        title: 'HEARING',
      },
    },
    [Paths.Touch]: {
      header: {
        title: 'TOUCH',
      },
    },
    [Paths.Taste]: {
      header: {
        title: 'TASTE',
      },
    },
    [Paths.Proprioception]: {
      header: {
        title: 'PROPRIOCEPTION',
      },
    },
    [Paths.Vestibular]: {
      header: {
        title: 'VESTIBULAR',
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
      navbar: {
        '0-mainText': 'PREP THE PATIENT FOR SURGERY',
        '0-subText': 'FOLLOW THE STEPS TO PREP THE PATIENT\nFOR SURGERY',
        '0-buttonText': 'CONTINUE',
        '1-mainText': 'APPLY THE BP CUFF',
        '1-subText': 'DRAG THE BP CUFF TO THE UPPER ARM\nTO PLACE IT',
        '2-mainText': 'PUMP UP THE BP CUFF',
        '2-subText': 'KEEP TAPPING THE BUTTON TO PUMP UP\nTHE BP CUFF',
        '3-mainText': 'GREAT JOB!',
        '3-subText': "YOU’VE TAKEN YOUR PATIENT'S\nBLOOD PRESSURE",
        '3-buttonText': 'CONTINUE',
        '4-mainText': 'INSERT IV',
        '4-subText': 'INSERT THE IV INTO THE VEIN',
        '5-mainText': 'GOOD JOB!',
        '5-subText': "YOU'VE SUCCESSFULLY INSERTED THE IV",
        '5-buttonText': 'CONTINUE',
        '6-mainText': 'BANDAGE THE AREA',
        '6-subText': 'PLACE THE BANDAGE ON THE AREA',
        '7-mainText': 'GOOD JOB!',
        '7-subText': 'THE BANDAGE IS IN PLACE',
        '7-buttonText': 'CONTINUE',
        '9-mainText': 'APPLY THE ANESTHESIA MASK',
        '9-subText': 'TAP BELOW',
        '10-mainText': 'TURN ON ANESTHESIA',
        '10-subText': 'SLIDE BELOW TO TURN ON THE\nANESTHESIA',
        '11-mainText': 'GOOD JOB!',
        '11-subText': 'THE PATIENT IS NOW READY FOR SURGERY',
        '11-buttonText': 'CONTINUE',
        '13-mainText': 'GREAT JOB!',
        '13-subText': 'YOUR PATIENT IS OUT OF SURGERY',
        '13-buttonText': 'FINISH',
        '14-mainText': 'GREAT JOB!',
        '14-subText': 'YOU FINISHED THE SURGERY',
        '14-buttonText': 'CONTINUE',
        '15-subText':
          'YOU FINISHED THE SURGERY!\nTAP BELOW TO LEARN MORE ABOUT',
        '15-boldText': 'THE CARDIOVASCULAR SYSTEM',
        '15-back': 'BACK TO\nPROCEDURES',
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
      navbar: {
        '0-mainText': 'TAKE AN EEG',
        '0-subText': 'FOLLOW THE STEPS TO TAKE AN EEG',
        '0-buttonText': 'CONTINUE',
        '1-mainText': 'Place the Sticky Dots',
        '1-subText': 'Tap the hotspots on the head to place the sticky dots',
        '2-mainText': 'Good Job',
        '2-subText': "You've placed the sticky dots",
        '2-buttonText': 'CONTINUE',
        '3-mainText': 'Put on the Rainbow Hair',
        '3-subText': 'Tap the hotspots on the head to place the leads',
        '4-mainText': 'Great Job',
        '4-subText': "You've successfully placed the leads",
        '4-buttonText': 'Continue',
        '5-mainText': 'Put on the EEG Cap',
        '5-subText': 'Now place the EEG cap over the leads to finish',
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
      navbar: {
        '0-mainText': 'TAKE THEIR TEMPERATURE',
        '0-subText': 'TAP THE THERMOMETER TO TAKE YOUR\nPATIENTS TEMPERATURE',
        '2-mainText': 'GREAT JOB!',
        '2-subText': "YOU'VE TAKEN YOUR PATIENT'S\nTEMPERATURE",
        '2-buttonText': 'CONTINUE',
        '3-mainText': 'APPLY THE BP CUFF',
        '3-subText': 'DRAG THE BP CUFF TO THE UPPER ARM\nTO PLACE IT',
        '4-mainText': 'PUMP UP THE BP CUFF',
        '4-subText': 'KEEP TAPPING THE BUTTON TO PUMP UP\nTHE BP CUFF',
        '5-mainText': 'GREAT JOB!',
        '5-subText': "YOU’VE TAKEN YOUR PATIENT'S\nBLOOD PRESSURE",
        '5-buttonText': 'CONTINUE',
        '6-mainText': 'PUT ON THE OXIMETER!',
        '6-subText': "DRAG THE OXIMETER TO PLACE IT ON THE\nPATIENT'S FINGER",
        '8-mainText': 'GREAT JOB!',
        '8-subText': 'YOU NOW THE THE PATIENTS OXYGEN\nLEVELS AND PULSE.',
        '8-buttonText': 'CONTINUE',
        '9-mainText': 'GREAT JOB!',
        '9-subText': 'YOU’VE SUCCESSFULLY TAKEN YOUR PATIENTS VITALS.',
        '9-buttonText': 'FINISH',
        '10-mainText': 'GREAT JOB!',
        '10-subText':
          'YOU’VE SUCCESSFULLY TAKEN YOUR PATIENTS VITALS.\nNOW CHOOSE A REWARD TO HELP KEEP YOUR PATIENT STAY ACTIVE.',
        '10-buttonText': 'CONTINUE',
        '11-subText':
          "YOU’VE TAKEN YOUR PATIENT'S VITALS!\nTAP BELOW TO LEARN MORE ABOUT",
        '11-boldText': 'THE CARDIOVASCULAR SYSTEM',
        '11-back': 'BACK TO\nPROCEDURES',
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
      navbar: {
        nap: 'NAP',
        vr: 'VR',
        music: 'MUSIC',
        '0-mainText': 'PICK A DISTRACTION',
        '1-mainText': 'GOOD JOB!',
        '1-subText': 'THE PATIENT IS DISTRACTED',
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'MRI MACHINE',
        '2-subText': 'PRESS THE START BUTTON TO\nTAKE AN IMAGE OF THE AREA.',
        '2-buttonText': 'START',
        '4-mainText': 'GREAT JOB!',
        '4-subText':
          'YOU’VE DISCOVERED THAT A ROTATOR CUFF\nTEAR WAS THE CAUSE OF THE PAIN.',
        '4-buttonText': 'FINISH',
        '5-mainText': 'GREAT JOB!',
        '5-subText':
          'YOU’VE SUCCESSFULLY TREATED THE INJURY!\nNOW CHOOSE YOUR PATIENT’S REWARD.',
        '5-buttonText': 'CONTINUE',
        '6-subText': 'YOU FINISHED THE MRI!\nTAP BELOW TO LEARN MORE ABOUT',
        '6-boldText': 'THE MUSCULAR SYSTEM',
        '6-back': 'BACK TO\nPROCEDURES',
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
      navbar: {
        tablet: 'TABLET',
        bubbles: 'BUBBLES',
        music: 'MUSIC',
        '0-mainText': 'PICK A DISTRACTION',
        '1-mainText': 'GOOD JOB!',
        '1-subText': 'THE PATIENT IS DISTRACTED',
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'PLACE A TOURNIQUET',
        '2-subText': 'DRAG THE TOURNIQUET TO THE UPPER\nARM TO PLACE IT',
        '3-mainText': 'GREAT JOB!',
        '3-subText': 'THE TOURNIQUET IS NOW IN PLACE',
        '3-buttonText': 'CONTINUE',
        '4-mainText': 'CLEAN THE AREA',
        '4-subText':
          'DRAG THE DISINFECTANT TO THE\nHIGHLIGHTED AREA TO APPLY IT',
        '5-mainText': 'GREAT JOB!',
        '5-subText': 'THE AREA HAS BEEN DISINFECTED',
        '5-buttonText': 'CONTINUE',
        '6-mainText': 'INSERT IV',
        '6-subText': 'INSERT THE IV INTO THE VEIN',
        '7-mainText': 'GOOD JOB!',
        '7-subText': "YOU'VE SUCCESSFULLY INSERTED THE IV",
        '7-buttonText': 'CONTINUE',
        '8-mainText': 'BANDAGE THE AREA',
        '8-subText': 'PLACE THE BANDAGE ON THE AREA',
        '9-mainText': 'GOOD JOB!',
        '9-subText': 'THE BANDAGE IS IN PLACE',
        '9-buttonText': 'FINISH',
        '10-mainText': 'GOOD JOB!',
        '10-subText': "YOU'VE SUCCESSFULLY INSERTED AN IV!",
        '10-buttonText': 'CONTINUE',
        '11-subText': 'YOU’VE INSERTED AN IV!\nTAP BELOW TO LEArN MORE ABOUT',
        '11-boldText': 'THE CARDIOVASCULAR SYSTEM',
        '11-back': 'BACK TO\nPROCEDURES',
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
