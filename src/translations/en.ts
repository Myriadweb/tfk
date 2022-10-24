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
          description: 'Plugging your nose can keep bad smells out.',
        },
        badSight: {
          title: 'OUCH! HERE’S A TIP…',
          description:
            'Wearing sunglasses outside protects your eyes from bright light.',
        },
        badSound: {
          title: 'OUCH! HERE’S A TIP…',
          description:
            'Wearing earplugs keeps loud noises from hurting your ears.',
        },
        badTouch: {
          title: 'OUCH! HERE’S A TIP…',
          description:
            'An oven mitt can protect your nerves when you need to touch something extra hot or cold.',
        },
        badVestibular: {
          title: 'WHOA! HERE’S A TIP…',
          description:
            "If you're playing games where you might get dizzy or lose your balance, protect your body with a helmet or pads.",
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
            'Twelve pairs of ribs form a cage that protects your heart, lungs, and other organs.',
        },
        vertebrae: {
          title: 'Spine',
          description:
            'Your spine is a stack of bones called vertebrae, with flexible joints that move when you bend and twist.',
        },
        'carpals&metacarpals': {
          title: 'Hands',
          description:
            'Your hand and wrist have 27 bones. You can find most of them – the phalanges – just looking at your fingers. Others – the carpals and metacarpals – you can only see in an x-ray.',
        },
        scapula: {
          title: 'SCAPULA',
          description:
            'Your arm bones hang down from each scapula, or shoulder blade.',
        },
        clavicle: {
          title: 'Clavicles',
          description:
            'The clavicles are sometimes called "collar bones", because they sit right beneath the collar of your shirt.',
        },
        pelvis: {
          title: 'PELVIS',
          description:
            'Your hip bones have round "sockets" where they form a joint with your thigh that can move in any direction.',
        },
        femur: {
          title: 'FEMUR',
          description:
            "The femur, or thighbone, is the largest bone in the body. Pound for pound, it's even stronger than concrete!",
        },
        'fibule&tibia': {
          title: 'Tibia & Fibula',
          description:
            'Your shin is actually two bones – the large tibia on the inside, and the smaller fibula on the outside.',
        },
        humerus: {
          title: 'HUMERUS',
          description:
            'Your largest arm bone has different joints at each end so you can bend your elbow like a hinge and spin your arm around at your shoulder.',
        },
        'radius&ulna': {
          title: 'RADIUS & ULNA',
          description:
            'The two bones in your forearm actually cross when you flip your palm upwards or downwards. Can you feel them move?',
        },
        'tarsals&metatarsals': {
          title: 'Feet',
          description:
            'Your foot and ankle are made up of 26 different bones, called tarsals, metatarsals, and phalanges.',
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
        '2-text':
          'THE RIGHT SIDE OF YOUR HEART SENDS BLOOD TO GET\nFRESH OXYGEN FROM THE AIR YOU BREATHE IN.',
        '3-text':
          'THE RIGHT SIDE OF YOUR HEART SENDS BLOOD TO GET\nFRESH OXYGEN FROM THE AIR YOU BREATHE IN.',
        '4-text':
          'THE LEFT SIDE OF THE HEART SENDS BLOOD OUT TO\nTHE REST OF THE BODY.',
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
        rightHemisphereSec: '<strong>right hemisphere</strong> view',
        leftHemisphereSec: '<strong>left hemisphere</strong> view',
        frontViewSec: '<strong>front-facing</strong> view',
        rightHemisphere: {
          title: 'right hemisphere',
          text: "THE RIGHT HALF OF YOUR BRAIN PLAYS AN IMPORTANT\nROLE IN CREATIVITY, HELPING YOU OUT WHEN YOU'RE\nMAKING MUSIC OR ART .",
        },
        leftHemisphere: {
          title: 'left hemisphere',
          text: 'The left half of your brain is in charge of\nlogic. It helps you with tasks like\ncalculating, reasoning, and speech.',
        },
        frontView: {
          title: 'Left & Right Hemisphere',
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
          "If food in your stomach isn't digesting properly, it can make you vomit. This patient is feeling good – keep digesting!",
        '8-blueBox': '',
        '10-blueBox':
          "If you're feeling sick, your body may turn waste into diarrhea. When you're healthy, your waste will be normal. ",
        '11-blueBox': '',
      },
      navbar: {
        continue: 'CONTINUE',
        dissolving: 'DISSOLVING...',
        goodJob: 'GOOD JOB!',
        finish: 'FINISH',
        '0-text':
          'Choose a piece of food to follow it\nthrough the digestive system.',
        '1-text':
          'Digestion starts in the mouth.\nTap the button to chew your food.',
        '2-text':
          'Digestion starts in the mouth.\nTap the button to chew your food.',
        '3-text':
          'Digestion starts in the mouth.\nTap the button to chew your food.',
        '4-text':
          'Digestion starts in the mouth.\nTap the button to chew your food.',
        '5-text':
          'Food travels down the esophagus on the way to\nthe stomach. Tap the button to swallow.',
        '8-text':
          'The stomach breaks food down into small bits your body can absorb. Use the slider to dissolve the food.',
        '11-text':
          'The small intestine absorbs nutrients from your food. Use the slider to guide the food through.',
        '13-text':
          'The large intestine absorbs more nutrients and forms waste. Use the slider to guide the food through.',
        '15-text':
          'Once your body takes nutrition from the food, the rest is waste. Tap below to send it out of the body.',
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
        '13-buttonText': 'ALL DONE!',
        '14-mainText': 'GREAT JOB!',
        '14-subText':
          'The surgical procedure was a success.\nChoose a reward for the patient!',
        '14-buttonText': 'CONTINUE',
        '15-subText':
          'You finished the surgery\nTap below to learn more about <br /><strong>the cardiovascular1 system.</strong>',
        '15-back': 'Return to \nProcedures ',
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
          'You finished the X-ray! Tap below\nto learn more about <br /><strong>the skeletal system</strong>',
        '6-back': 'Return to \nProcedures',
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
          "The sticky dots are in place.\nNext, we'll connect the sticky dots to the machine.",
        '2-buttonText': 'CONTINUE',
        '3-mainText': 'CONNECT THE LEADS',
        '3-subText':
          'Tap the buttons to attach the "rainbow hair" to the sticky dots.',
        '4-mainText': 'Great Job!',
        '4-subText': 'The EEG machine is connected and ready to go.',
        '4-buttonText': 'Continue',
        '5-mainText': 'Put on the EEG Cap',
        '5-subText':
          'Place a cap over the rainbow hair\nto finish getting ready.',
        '6-mainText': 'ALL READY!',
        '6-subText':
          'Press the button to start the EEG\nmachine and get your results.',
        '6-buttonText': 'Continue',
        '7-mainText': 'PRINTING...',
        '7-subText':
          'The EEG machine is working and\nprinting out the results.',
        '8-mainText': 'ALL DONE!',
        '8-subText':
          'THE EEG TEST IS FINISHED\nCHOOSE A REWARD FOR THE PATIENT!',
        '8-buttonText': 'FINISH',
        '9-mainText': 'Great Job',
        '9-subText':
          'The EEG test is finished.\n Choose a reward for the patient!',
        '9-buttonText': 'Continue',
        '10-subText':
          'You finished the EEG!\nTap below to learn more about <br /><strong>the nervous system</strong>',
        '10-back': 'Return to \nProcedures',
      },
    },
    [Paths.Wellness]: {
      header: {
        title: 'WELLNESS',
      },
      scene: {
        text: "Even when you're feeling\nwell, regular check-ups\nare an important part of\nmaking sure your body\nstays healthy.",
        label: 'WELLNESS',
        buttonText: 'Check vital signs',
      },
      navbar: {
        '0-mainText': 'MEASURE TEMPERATURE',
        '0-subText': "Tap the thermometer to take the patient's temperature.",
        '1-mainText': ' ',
        '1-subText': ' ',
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
        '7-mainText': ' ',
        '7-subText': ' ',
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
        '11-mainText': ' ',
        '11-subText':
          'You finished the wellness check!\nTap below to learn more about <br /><strong>the cardiovascular system</strong>',
        '11-back': 'Return to \nProcedures',
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
          'You finished the MRI!\nTap below to learn more about <br /><strong>the muscular system</strong>',
        '6-back': 'Return to \nProcedures',
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
          'You inserted the IV!\nTap below to learn more about <br /><strong>the cardiovascular system</strong>',
        '11-back': 'Return to \nProcedures',
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
