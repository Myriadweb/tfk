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
        selectPath: 'CHOOSE A SENSE, THEN CHOOSE\nAN OBJECT TO SEE ITS EFFECT.',
        selectPathVestibular:
          'CHOOSE A SENSE, THEN CHOOSE\nAN OPTION TO SEE ITS EFFECT.',
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
        badVestibular: {
          title: 'WHOA! HERE’S A TIP…',
          description:
            'SPINNING AROUND CAN MAKE YOU DIZZY, BUT WEARING\nA HELMET AND PADS CAN PROTECT YOU IF YOU FALL.',
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
        wrist: 'CARPALS',
        hand: 'METACARPALS',
        femur: 'FEMUR',
        tibia: 'TIBIA',
        ankles: 'TARSALS',
        feet: 'METATARSALS',
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
        done: {
          description:
            'You finished the skeleton! All your bones\nwork together to support your body,\nprotect your organs, and help you move.',
        },
        greatjob: 'GREAT JOB!',
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
        contracting: 'CONTRACTING...',
      },
      navbar: {
        chooseMuscle:
          'CHOOSE A PART OF THE BODY TO SEE HOW YOUR MUSCLES WORK TOGETHER.',
        arm: 'ARM',
        armDescription:
          'EACH MUSCLE CAN ONLY PULL IN ONE DIRECTION, SO THEY\nNEED TO WORK TOGETHER. WHEN YOU BEND YOUR ELBOW,\nYOUR BICEPS PULL YOUR ARM UP. WHEN YOU STRAIGHTEN\nIT, THE TRICEPS PULL BACK DOWN.',
        leg: 'LEG',
        legDescription:
          'WHEN YOU BEND YOUR KNEE, YOUR HAMSTRINGS DO THE\nPULLING. WHEN YOU STRAIGHTEN YOUR LEG, THE\nQUADRICEPS PULL IN THE OPPOSITE DIRECTION.',
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
      navbar: {
        '0-text':
          'YOUR BLOOD CARRIES FRESH OXYGEN (AND A WHOLE LOT MORE!) TO\nEVERY PART OF YOUR BODY, TAP THE BUTTON TO TAKE A DEEP BREATH',
        '3-text':
          'THE RIGHT SIDE OF YOUR HEART SENDS BLOOD TO GET\nFRESH OXYGEN FROM THE AIR YOU BREATHE IN.',
        '4-text':
          'THE RIGHT SIDE OF YOUR HEART SENDS BLOOD TO GET\nFRESH OXYGEN FROM THE AIR YOU BREATHE IN.',
        '5-text':
          'THE LEFT SIDE OF THE HEART SENDS BLOOD OUT TO\nTHE REST OF THE BODY.',
        '5-buttonText': 'TRIGGER HEARTBEAT',
        '6-text':
          'BLOOD TRAVELS THROUGH YOUR ARTERIES TO DELIVER OXYGEN, NUTRIENTS,\nAND EVEN MEDICINE AND MESSAGES TO EVERY PART OF YOUR BODY.',
        '7-text':
          'BLOOD TRAVELS THROUGH YOUR ARTERIES TO DELIVER OXYGEN, NUTRIENTS,\nAND EVEN MEDICINE AND MESSAGES TO EVERY PART OF YOUR BODY.',
        '8-text':
          'BLOOD TRAVELS THROUGH YOUR ARTERIES TO DELIVER OXYGEN, NUTRIENTS,\nAND EVEN MEDICINE AND MESSAGES TO EVERY PART OF YOUR BODY.',
        '9-text':
          'BLOOD MAKES ITS WAY BACK TO THE HEART THROUGH\nYOUR VEINS, WHERE THE CYCLE STARTS AGAIN.',
        '10-text':
          'BLOOD MAKES ITS WAY BACK TO THE HEART THROUGH\nYOUR VEINS, WHERE THE CYCLE STARTS AGAIN.',
        '11-boldText': 'GOOD JOB!',
        continue: 'CONTINUE',
        finish: 'FINISH',
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
        brainStem: 'BRAIN STEM',
        spinalCord: 'SPINAL CORD',
        touchText: 'Tap a part of the brain to learn more.',
        art: 'art',
        balance: 'balance',
        breathing: 'breathing',
        color: 'color',
        communication: 'communication',
        coordination: 'coordination',
        creativity: 'creativity',
        decisions: 'decisions',
        depthPerception: 'depth perception',
        digestion: 'digestion',
        emotions: 'emotions',
        hearing: 'hearing',
        heartRate: 'heart rate',
        language: 'language',
        logic: 'logic',
        memory: 'memory',
        muscleControl: 'muscle control',
        music: 'music',
        reading: 'reading',
        reasoning: 'reasoning',
        sight: 'sight',
        sleeping: 'sleeping',
        smell: 'smell',
        speechBubble: 'speech',
        speechRecognition: 'speech recognition',
        taste: 'taste',
        touch: 'touch',
        leftHemisphere: 'left hemisphere',
        frontalLobe: 'frontal lobe',
        parietalLobe: 'parietal lobe',
        occipitalLobe: 'occipital lobe',
        temporalLobe: 'temporal lobe',
        rightHemisphereSmall: 'right hemisphere',
        leftHemisphereSmall: 'left hemisphere',
        rightHemisphere: 'right hemisphere',
      },
      navbar: {
        rightHemisphereSec: 'right hemisphere',
        leftHemisphereSec: 'left hemisphere',
        frontViewSec: 'front-facing',
        rightHemisphere: {
          title: 'right hemisphere',
          text: "THE RIGHT HALF OF YOUR BRAIN PLAYS AN IMPORTANT\nROLE IN CREATIVITY, HELPING YOU OUT WHEN YOU'RE\nMAKING MUSIC OR ART .",
        },
        leftHemisphere: {
          title: 'left hemisphere',
          text: 'The left half of your brain is in charge of\nlogic. It helps you with tasks like\ncalculating, reasoning, and speech.',
        },
        frontView: {
          title: 'hemispheres',
          text: 'THE BRAIN IS DIVIDED INTO TWO CONNECTED\nSECTIONS, CALLED HEMISPHERES. THE LEFT AND\nRIGHT SIDES CONTROL DIFFERENT FUNCTIONS.',
        },
        frontalLobe: {
          title: 'frontal lobe',
          text: 'The frontal lobe helps you solve problems, plan\nyour actions, and control your emotions.',
        },
        parietalLobe: {
          title: 'parietal lobe',
          text: "The parietal lobe gives meaning to the information\nyou receive through your senses. It's especially\nimportant for feeling touch, temperature, and pain.",
        },
        occipitalLobe: {
          title: 'occipital lobe',
          text: 'Your occipital lobe is in charge of vision. It helps\nyou recognize shapes and colors and process\nthe information your eyes send to the brain.',
        },
        temporalLobe: {
          title: 'temporal lobe',
          text: 'The temporal lobe is important for forming\nmemories and recognizing the people\nand things you know.',
        },
        brainStem: {
          title: 'brain stem',
          text: 'YOUR BRAIN STEM CONTROLS THINGS YOUR BODY\nDOES AUTOMATICALLY, LIKE BREATHING,\nHEARTBEAT, BLOOD PRESSURE, AND SWALLOWING.',
        },
        cerebellum: {
          title: 'cerebellum',
          text: 'Your cerebellum gives you control over\nyour movements, and helps you keep your\nbalance while you run, walk, or play.',
        },
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
        '7-blueBox':
          "If your <strong>stomach</strong> doesn't\n agree with the food, vomiting\nis a stopgap that the body\nuses to keep you safe.",
        '8-blueBox':
          "If your <strong>stomach</strong> doesn't\n agree with the food, vomiting\nis a stopgap that the body\nuses to keep you safe.",
        '10-blueBox':
          'IF THE <strong>SMALL INTESTINE</strong> FINDS THAT\nTHE FOOD DOES NOT AGREE WITH IT,\nIT WILL TRY TO PROTECT YOU BY\nEXPELLING IT AS DIARRHEA.',
        '11-blueBox':
          'IF THE <strong>SMALL INTESTINE</strong> FINDS THAT\nTHE FOOD DOES NOT AGREE WITH IT,\nIT WILL TRY TO PROTECT YOU BY\nEXPELLING IT AS DIARRHEA.',
      },
      navbar: {
        continue: 'CONTINUE',
        dissolving: 'DISSOLVING...',
        goodJob: 'GOOD JOB!',
        finish: 'FINISH',
        '0-text':
          'Choose a piece of food to follow it\nthrough the digestive system.',
        '1-text':
          'Digestion starts in the mouth.\nTap the button to <strong>chew</strong> your food.',
        '2-text':
          'Digestion starts in the mouth.\nTap the button to <strong>chew</strong> your food.',
        '3-text':
          'Digestion starts in the mouth.\nTap the button to <strong>chew</strong> your food.',
        '4-text':
          'Digestion starts in the mouth.\nTap the button to <strong>chew</strong> your food.',
        '5-text':
          'Food travels down the esophagus on the way to\nthe stomach. Tap the button to <strong>swallow</strong>.',
        '8-text':
          'Slide below to help <strong>stomach</strong> acid\ndissolve your food',
        '11-text':
          'HELP GUIDE THE FOOD THROUGH THE\n<strong>SMALL INTESTINE</strong>',
        '13-text':
          'HELP GUIDE THE FOOD THROUGH THE\n<strong>LARGE INTESTINE</strong>',
        '15-text':
          'TAP BELOW TO ALLOW THE FOOD TO LEAVE\nTHE BODY AS <strong>WASTE</strong>',
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
        text: 'There are a few\nimportant steps\nto get patients\nready for surgery.',
        label: 'SURGICAL PREP',
        buttonText: 'BEGIN PREP',
      },
      navbar: {
        '0-mainText': 'PREP THE PATIENT FOR SURGERY',
        '0-subText': 'Help get the patient ready for their surgery.',
        '0-buttonText': 'CONTINUE',
        '1-mainText': 'CHECK BLOOD PRESSURE',
        '1-subText': "Drag the blood pressure cuff\nto the patient's arm.",
        '2-mainText': 'PUMP IT UP',
        '2-subText':
          'Keep tapping the button to pump up\nthe blood pressure cuff',
        '3-mainText': 'GREAT JOB!',
        '3-subText':
          "You took the patient's blood pressure.\nTouch to continue.",
        '3-buttonText': 'CONTINUE',
        '4-mainText': 'INSERT THE IV',
        '4-subText':
          'Drag the IV to the veins\nto attach a special bendy straw\nthat delivers fluids.',
        '5-mainText': 'GREAT JOB!',
        '5-subText': 'The bendy straw is in place.',
        '5-buttonText': 'CONTINUE',
        '6-mainText': 'ADD A BANDAGE',
        '6-subText': 'Place the bandage over the bendy straw.',
        '7-mainText': 'GREAT JOB!',
        '7-subText':
          "The IV is in place. Next, we'll help\nthe patient fall asleep for their surgery.",
        '7-buttonText': 'CONTINUE',
        '9-mainText': 'PUT ON THE MASK',
        '9-subText': "Tap the button to put on the patient's mask.",
        '10-mainText': 'TURN ON ANESTHESIA',
        '10-subText': 'Use the slider to start air flowing through the mask.',
        '11-mainText': 'GREAT JOB!',
        '11-subText': 'The patient is now ready for their surgery.',
        '11-buttonText': 'CONTINUE',
        '13-mainText': 'GREAT JOB!',
        '13-subText': 'YOUR PATIENT IS OUT OF SURGERY',
        '13-buttonText': 'FINISH',
        '14-mainText': 'GREAT JOB!',
        '14-subText':
          'The surgical procedure was a success.\nChoose a reward for the patient!',
        '14-buttonText': 'CONTINUE',
        '15-subText':
          'You finished the surgery\nTap below to learn more about\n<strong>the cardiovascular1 system</strong>',
        '15-back': 'BACK TO\nPROCEDURES',
      },
    },
    [Paths.XRay]: {
      header: {
        title: 'X-RAY',
      },
      scene: {
        text: 'An x-ray machine takes\npictures that help\ndoctors see through your\nbody to find injuries.',
        label: 'X-RAY',
        buttonText: 'TAKE AN X-RAY',
        brokenBoneLabel: 'BROKEN BONE',
        brokenBoneText:
          'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR .',
      },
      navbar: {
        '0-mainText': 'FIND THE INJURY',
        '0-subText':
          "Find where the patient is hurting. When you've\nfound it, touch the area to continue.",
        '1-mainText': 'GREAT JOB!',
        '1-subText':
          "You found the injury. Now, let's take an\nx-ray picture of the patient's arm.",
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'TAKE AN X-RAY',
        '2-subText':
          "Start the x-ray machine to take\na picture of the patient's injury",
        '2-buttonText': 'START',
        '4-mainText': 'BROKEN BONE',
        '4-subText':
          "DOCTORS CAN PUT A CAST ON THE PATIENT'S ARM\nTO HOLD THE BONE STILL WHILE IT HEALS.",
        '4-buttonText': 'FINISH',
        '5-mainText': 'ALL DONE!',
        '5-subText':
          'Doctors treated the injury with a cast.\nChoose a reward for the patient!',
        '5-buttonText': 'CONTINUE',
        '6-subText':
          'You finished the X-ray! Tap below\nto learn more about\n<strong>the skeletal system</strong>',
        '6-back': 'BACK TO\nPROCEDURES',
      },
    },
    [Paths.Eeg]: {
      header: {
        title: 'EEG',
      },
      scene: {
        text: "An EEG is a test to\nrecord your brain's\nelectrical activity,\nor brain waves, while\nyou're in the hospital.",
        label: 'EEG',
        buttonText: 'TAKE AN EEG',
      },
      navbar: {
        '0-mainText': 'TAKE AN EEG',
        '0-subText': 'The patient is ready for their EEG.',
        '0-buttonText': 'CONTINUE',
        '1-mainText': 'Place the Sticky Dots',
        '1-subText': "Tap the button to add sticky dots to the patient's head.",
        '2-mainText': 'Great Job!',
        '2-subText':
          "The sticky dots are in place. Next, we'll connect the sticky dots to the machine.",
        '2-buttonText': 'CONTINUE',
        '3-mainText': 'CONNECT THE LEADS',
        '3-subText':
          'Tap the buttons to attach the "rainbow hair" to the sticky dots.',
        '4-mainText': 'Great Job!',
        '4-subText': 'The EEG machine is connected and ready to go.',
        '4-buttonText': 'Continue',
        '5-mainText': 'Put on the EEG Cap',
        '5-subText':
          'Place a cap over the rainbow hair to finish getting ready.',
        '6-mainText': 'ALL READY!',
        '6-subText':
          'Press the button to start the EEG machine and get your results.',
        '6-buttonText': 'Continue',
        '7-mainText': 'PRINTING...',
        '7-subText': 'The EEG machine is working and printing out the results.',
        '7-buttonText': 'Continue',
        '8-mainText': 'Great Job',
        '8-subText':
          'The EEG test is finished. Choose a reward for the patient!',
        '8-buttonText': 'Continue',
        '9-subText': 'You finished the EEG!\nTap below to learn more about',
        '9-boldText': 'THE NERVOUS SYSTEM',
        '9-back': 'BACK TO\nPROCEDURES',
      },
    },
    [Paths.Wellness]: {
      header: {
        title: 'WELLNESS',
      },
      scene: {
        text: "Even when you're feeling\nwell, regular check-ups\nare an important part of\nmaking sure your body\nstays healthy.",
        label: 'WELLNESS',
        buttonText: 'CHECK VITALS',
      },
      navbar: {
        '0-mainText': 'MEASURE TEMPERATURE',
        '0-subText': "Tap the thermometer to take the patient's temperature.",
        '2-mainText': 'GREAT JOB!',
        '2-subText':
          "The patient's temperature looks normal. Touch to continue.",
        '2-buttonText': 'CONTINUE',
        '3-mainText': 'CHECK BLOOD PRESSURE',
        '3-subText': "Drag the blood pressure cuff to the patient's arm.",
        '4-mainText': 'PUMP IT UP',
        '4-subText':
          'Keep tapping the button to pump up\nthe blood pressure cuff',
        '5-mainText': 'GREAT JOB!',
        '5-subText':
          "You took the patient's blood pressure.\nTouch to continue.",
        '5-buttonText': 'CONTINUE',
        '6-mainText': 'MEASURE PULSE AND BLOOD OXYGEN',
        '6-subText': "Put the clip on the patient's finger.",
        '8-mainText': 'GREAT JOB!',
        '8-subText': "You tested the patient's pulse and blood oxygen.",
        '8-buttonText': 'CONTINUE',
        '9-mainText': 'STAY ACTIVE',
        '9-subText':
          'You finished all the tests. Now pick an\nactivity to help the patient stay active and healthy.',
        '9-buttonText': 'FINISH',
        '10-mainText': 'ALL DONE!',
        '10-subText':
          'You finished all the tests. Now pick an activity\nto help the patient stay active and healthy.',
        '10-buttonText': 'CONTINUE',
        '11-subText':
          'You finished the wellness check!\nTap below to learn more about\n<strong>the cardiovascular system</strong>',
        '11-back': 'BACK TO\nPROCEDURES',
      },
    },
    [Paths.Mri]: {
      header: {
        title: 'MRI',
      },
      scene: {
        text: 'An MRI machine uses\nsuper strong magnets\nto take pictures of\nyour brain, muscles,\nor internal organs.',
        label: 'MRI',
        buttonText: 'TAKE AN MRI',
      },
      navbar: {
        nap: 'NAP',
        vr: 'VR',
        music: 'MUSIC',
        '0-mainText': 'HELP THE PATIENT RELAX',
        '1-mainText': 'ALL READY!',
        '1-subText': 'The patient is comfortable and ready for their MRI.',
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'TAKE AN MRI',
        '2-subText':
          "Start the MRI machine to take a\npicture of the patient's injury.",
        '2-buttonText': 'START',
        '3-mainText': ' ',
        '3-subText': ' ',
        '4-mainText': 'MRI RESULTS',
        '4-subText': "You found an injury in the patient's shoulder muscles.",
        '4-buttonText': 'FINISH',
        '5-mainText': 'ALL DONE!',
        '5-subText':
          'Now that they found the injury, doctors can help\nto treat it. Choose a reward for the patient.',
        '5-buttonText': 'CONTINUE',
        '6-subText':
          'You finished the MRI!\nTap below to learn more about\n<strong>the muscular system</strong>',
        '6-back': 'BACK TO\nPROCEDURES',
      },
    },
    [Paths.Iv]: {
      header: {
        title: 'IV',
      },
      scene: {
        text: 'An IV is a tube that helps\ndeliver medicine or hydrate\n your body when patients\nare sick or need a test.',
        label: 'IV',
        buttonText: 'INSERT IV',
      },
      navbar: {
        tablet: 'TABLET',
        bubbles: 'BUBBLES',
        music: 'MUSIC',
        '0-mainText': 'HELP THE PATIENT RELAX',
        '1-mainText': 'ALL READY!',
        '1-subText': 'The patient is comfortable and ready for their IV.',
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'PLACE A TOURNIQUET',
        '2-subText':
          "A band around the patient's arm helps to\nfind their veins.",
        '3-mainText': 'GREAT JOB!',
        '3-subText': 'The patient is ready for the next step.',
        '3-buttonText': 'CONTINUE',
        '4-mainText': 'CLEAN THE AREA',
        '4-subText':
          "Drag the swab to the patient's arm to make sure it's clean.",
        '5-mainText': 'GREAT JOB!',
        '5-subText': "The patient's arm is clean and ready.",
        '5-buttonText': 'CONTINUE',
        '6-mainText': 'INSERT THE IV',
        '6-subText':
          'Drag the IV to the veins to attach a special\nbendy straw that delivers fluids.',
        '7-mainText': 'GREAT JOB!',
        '7-subText': 'The bendy straw is in place.',
        '7-buttonText': 'CONTINUE',
        '8-mainText': 'ADD A BANDAGE',
        '8-subText': 'Place the bandage over the bendy straw.',
        '9-mainText': 'ALL DONE!',
        '9-subText': 'The IV is in place. Choose a reward for the patient.',
        '9-buttonText': 'FINISH',
        '10-mainText': 'ALL DONE!',
        '10-subText': 'The IV is in place. Choose a reward for the patient.',
        '10-buttonText': 'CONTINUE',
        '11-subText':
          'You inserted the IV!\nTap below to learn more about\n<strong>the cardiovascular system</strong>',
        '11-back': 'BACK TO\nPROCEDURES',
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
        bodySystems: 'BODY\nSYSTEMS',
        procedures: 'PROCEDURES',
        en: 'ENG',
        es: 'ESP',
      },
    },
  },
};

export default en;
