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
        title: 'Conozca al/a la paciente',
      },
      scene: {
        // here go all the key-value pairs with the strings we need in the scene
      },
      navbar: {
        // here go all the key-value pairs with the strings we need in the navbar
        selectPath: 'Seleccione un camino para explorar',
        bodySystemButton: 'Sistemas del cuerpo humano',
        proceduresButton: 'Procedimientos',
      },
    },
    [Paths.Sensory]: {
      header: {
        title: 'Sensorial',
      },
      scene: {
        hearing: 'Oído',
        sight: 'Vista',
        proprioception: 'Propiocepción',
        touch: 'Tacto',
        vestibular: 'Vestibular',
        taste: 'Gusto',
        smell: 'Olfato',
      },
      navbar: {
        selectPath:
          'Elija un sentido, luego elija un objeto <br />para ver su efecto',
        selectPathVestibular:
          'Elija un sentido, luego elija un objeto <br />para ver su efecto',
        continueButton: 'Continuar',
        smell: 'Olfato',
        hearing: 'Audición',
        proprioception: 'Propiocepción',
        sight: 'Vista',
        taste: 'Gusto',
        touch: 'Tacto',
        vestibular: 'Vestibular',
        badSmell: {
          title: '¡Qué asco! Un consejo...',
          description: 'Taparse la nariz puede evitar <br />los malos olores.',
        },
        badSight: {
          title: '¡Ay! Un consejo...',
          description:
            'Usar gafas de sol cuando se está al aire libre protege los ojos de la luz brillante.',
        },
        badSound: {
          title: '¡Ay! Un consejo...',
          description:
            'El uso de tapones evita que los ruidos fuertes dañen sus oídos.',
        },
        badTouch: {
          title: '¡Ay! Un consejo...',
          description:
            'Una manopla para el horno puede proteger sus nervios cuando necesite tocar algo muy caliente o frío.',
        },
        badVestibular: {
          title: '¡Guau! Un consejo...',
          description:
            'Si juega juegos en los que puede marearse o perder el equilibrio, proteja su cuerpo con un casco o protectores.',
        },
      },
    },
    [Paths.Skeletal]: {
      header: {
        title: 'Óseo',
      },
      scene: {
        skull: 'Cráneo',
        mandible: 'Mandíbula',
        clavicle: 'Clavícula',
        scapula: 'Escápula',
        ribs: 'Costillas',
        pelvis: 'Pelvis',
        wrist: 'Carpos',
        hand: 'Metacarpos',
        femur: 'Fémur',
        tibia: 'Tibia',
        ankles: 'Tarsos',
        feet: 'Metatarsos',
        sternum: 'Esternón',
        vertebrae: 'Vértebras',
        humerus: 'Húmero',
        radius: 'Radio',
        ulna: 'Cúbito',
        patella: 'Rotula',
        fibula: 'Peroné',
      },
      navbar: {
        selectPath:
          'Arrastre los huesos al \ncuerpo para completar el esqueleto.',
        skull: {
          title: 'Cráneo',
          description:
            'El cráneo es en realidad muchos huesos conectados por articulaciones que no se mueven. Tiene una función importante, ¡proteger nuestro cerebro!.',
        },
        ribs: {
          title: 'Costillas',
          description:
            'Doce pares de costillas forman un armazón que protege el corazón, los pulmones y otros órganos.',
        },
        vertebrae: {
          title: 'Columna vertebral',
          description:
            'La columna vertebral es un montón de huesos llamados vértebras, con articulaciones flexibles que se mueven cuando usted flexiona y gira.',
        },
        'carpals&metacarpals': {
          title: 'Manos',
          description:
            'La mano y la muñeca tienen 27 huesos. Puede encontrar la mayoría <br />de ellos, las falanges, simplemente mirando sus dedos. Otros, los carpos <br />y metacarpos, solo se pueden ver en una radiografía.',
        },
        scapula: {
          title: 'Escápula',
          description:
            'Los huesos del brazo cuelgan de cada <br />escápula u omóplato.',
        },
        clavicle: {
          title: 'Clavículas',
          description:
            'A las clavículas se las suele llamar "huesos de la base del cuello", porque se sitúan justo debajo del cuello de la camisa.',
        },
        pelvis: {
          title: 'PELVIS',
          description:
            'Los huesos de la cadera tienen unos "huecos" redondos donde forman una articulación con el muslo que puede moverse en cualquier dirección.',
        },
        femur: {
          title: 'Fémur',
          description:
            'El fémur, o hueso del muslo, es el hueso más grande del cuerpo. Libra por libra, es incluso más fuerte que el hormigón.',
        },
        'fibule&tibia': {
          title: 'Tibia y peroné',
          description:
            'La espinilla consta en realidad de dos huesos: <br />la tibia grande en el interior y el peroné <br />más pequeño en el exterior.',
        },
        humerus: {
          title: 'Húmero',
          description:
            'El hueso más grande del brazo tiene diferentes articulaciones <br />en cada extremo para que pueda doblar el codo como <br />una bisagra y girar el brazo en el hombro.',
        },
        'radius&ulna': {
          title: 'Radio y cúbito',
          description:
            'Los dos huesos del antebrazo se cruzan cuando se gira la palma de la mano hacia arriba o hacia abajo. ¿Puede sentir el movimiento?',
        },
        'tarsals&metatarsals': {
          title: 'Pies',
          description:
            'El pie y el tobillo están formados por 26 huesos diferentes, llamados tarsos, metatarsos y falanges.',
        },
        done: {
          description:
            '¡Completó el esqueleto! Todos los huesos trabajan juntos para sostener su cuerpo, proteger sus órganos y ayudarle a moverse.',
        },
        greatjob: '¡Gran trabajo!',
      },
    },
    [Paths.Muscular]: {
      header: {
        title: 'MUSCULAR',
      },
      scene: {
        latissimus: 'Dorsal \nancho',
        pectorals: 'Pectorales',
        abs: 'Músculos \nabdominales',
        quadriceps: 'Cuádriceps',
        hamstrings: 'Isquiotibiales',
        deltoids: 'Deltoides',
        biceps: 'Bíceps',
        triceps: 'Tríceps',
        gluteus: 'Glúteo \nmayor',
        calves: 'Pantorrillas',
        contracting: 'Tensionando...',
      },
      navbar: {
        chooseMuscle:
          'Escoja una parte del cuerpo para ver cómo trabajan sus músculos juntos.',
        arm: 'Brazo',
        armDescription:
          'Cada músculo solo puede tirar en una dirección, por lo que deben trabajar juntos. Al doblar el codo, el bíceps tira del brazo hacia arriba. Al enderezarlo, los tríceps tiran hacia abajo.',
        leg: 'Pierna',
        legDescription:
          'Cuando dobla la rodilla, los isquiotibiales hacen la tracción. Al enderezar la pierna, los cuádriceps tiran en la dirección opuesta.',
      },
    },
    [Paths.Cardiovascular]: {
      header: {
        title: 'Cardiovascular',
      },
      scene: {
        heart: 'Corazón',
        lungs: 'Pulmones',
        arteries: 'Arterias',
        veins: 'Venas',
      },
      navbar: {
        '0-text':
          'La sangre transporta oxígeno fresco (¡y mucho más!) a todas <br />las partes del cuerpo. Pulse el botón para respirar hondo.',
        '2-text':
          'El lado derecho del corazón envía sangre para <br />recibir oxígeno fresco del aire que se respira.',
        '3-text':
          'El lado derecho del corazón envía sangre para <br />recibir oxígeno fresco del aire que se respira.',
        '4-text':
          'El lado izquierdo del corazón envía sangre <br />al resto del cuerpo.',
        '5-text':
          'El lado izquierdo del corazón envía sangre <br />al resto del cuerpo.',
        '5-buttonText': 'latido del corazón',
        '6-text':
          'La sangre recorre las arterias para llevar oxígeno, nutrientes e incluso medicamentos y mensajes a todas las partes del cuerpo.',
        '7-text':
          'La sangre recorre las arterias para llevar oxígeno, nutrientes e incluso medicamentos y mensajes a todas las partes del cuerpo.',
        '8-text':
          'La sangre recorre las arterias para llevar oxígeno, nutrientes e incluso medicamentos y mensajes a todas las partes del cuerpo.',
        '9-text':
          'La sangre vuelve al corazón a través de <br />las venas, donde el ciclo vuelve a comenzar.',
        '10-text':
          'La sangre vuelve al corazón a través de <br />las venas, donde el ciclo vuelve a comenzar.',
        '11-boldText': '¡Buen trabajo!',
        continue: 'Continuar',
        finish: 'finalizar',
      },
    },
    [Paths.Nervous]: {
      header: {
        title: 'NERVOUS',
      },
      scene: {
        brain: 'cerebro',
        cerebellum: 'cerebelo',
        nerves: 'nervios',
        brainStem: 'tronco\nencefálico',
        spinalCord: 'médula espinal',
        touchText:
          'Toque una parte del cerebro <br />para obtener más información.',
        art: 'Arte',
        balance: 'balance',
        breathing: 'Respiración',
        color: 'color',
        communication: 'Comunicación',
        coordination: 'Coordinación',
        creativity: 'Creatividad',
        decisions: 'Decisiones',
        depthPerception: 'Percepción de profundidad',
        digestion: 'Digestión ',
        emotions: 'Emociones',
        hearing: 'Oído',
        heartRate: 'Ritmo cardiáco',
        language: 'Lenguaje',
        logic: 'Lógica',
        memory: 'Memoria',
        muscleControl: 'Control muscular',
        music: 'Musica',
        reading: 'Lectura',
        reasoning: 'Razonamiento',
        sight: 'Vista',
        sleeping: 'Sueño',
        smell: 'Olfato',
        speechBubble: 'Habla',
        speechRecognition: 'Reconocimiento del habla',
        taste: 'Gusto',
        touch: 'Tacto',
        leftHemisphere: 'left hemisphere',
        frontalLobe: 'Lóbulo frontal',
        parietalLobe: 'Lóbulo parietal',
        occipitalLobe: 'Lóbulo occipital',
        temporalLobe: 'temporal lobe',
        rightHemisphereSmall: 'right hemisphere',
        leftHemisphereSmall: 'left hemisphere',
        rightHemisphere: 'right hemisphere',
      },
      navbar: {
        rightHemisphereSec: 'Vista del <strong>hemisferio derecho</strong>',
        leftHemisphereSec: 'Vista del <strong>hemisferio izquierdo</strong>',
        frontViewSec: '<strong>Vista frontal</strong>',
        rightHemisphere: {
          title: 'Hemisferio derecho',
          text: 'La mitad derecha del cerebro desempeña un papel importante en la creatividad, ayudándole cuando hace música o arte.',
        },
        leftHemisphere: {
          title: 'Hemisferio izquierdo',
          text: 'La mitad izquierda de su cerebro se encarga de la lógica. Le ayuda en tareas como el cálculo, el razonamiento y el habla.',
        },
        frontView: {
          title: 'Hemisferio izquierdo y derecho',
          text: 'El cerebro está dividido en dos secciones conectadas, llamadas hemisferios. Los lados izquierdo y derecho controlan diferentes funciones.',
        },
        frontalLobe: {
          title: 'Lóbulo frontal',
          text: 'El lóbulo frontal le ayuda a resolver problemas, planificar sus acciones y controlar sus emociones.',
        },
        parietalLobe: {
          title: 'Lóbulo parietal',
          text: 'El lóbulo parietal da significado a la información que recibe a través de sus sentidos. Es especialmente importante para sentir el tacto, la temperatura y el dolor.',
        },
        occipitalLobe: {
          title: 'Lóbulo occipital',
          text: 'El lóbulo occipital se encarga de la visión. Le ayuda a reconocer formas y colores y a procesar la información que sus ojos envían al cerebro.',
        },
        temporalLobe: {
          title: 'Lóbulo temporal',
          text: 'El lóbulo temporal es importante para la formación de recuerdos y el reconocimiento de las personas y cosas que usted conoce.',
        },
        brainStem: {
          title: 'Tronco encefálico',
          text: 'El tronco encefálico controla cosas que el cuerpo hace automáticamente, como la respiración, los latidos del corazón, la presión arterial y la deglución.',
        },
        cerebellum: {
          title: 'Cerebelo',
          text: 'El cerebelo le da el control de sus movimientos y le ayuda a mantener el equilibrio mientras corre, camina o juega.',
        },
      },
    },
    [Paths.Digestive]: {
      header: {
        title: 'Digestivo',
      },
      scene: {
        stomach: 'Estómago',
        esophagus: 'Esófago',
        largeIntestine: 'Intestino\ngrueso',
        smallIntestine: 'Intestino\ndelgado',
        liver: 'Hígado',
        gallbladder: 'Vesícula',
        appendix: 'Apéndice',
        rectum: 'Recto',
        mouth: 'Boca',
        anus: 'Ano',
        '7-blueBox':
          'Si la comida no se digiere bien, puede provocar el vómito. Este paciente se siente bien, ¡siga digiriendo!',
        '8-blueBox': '',
        '10-blueBox':
          'Si está enfermo, el cuerpo puede <br />convertir el excremento en diarrea. <br />Cuando está sano, el excremento <br />es normal. ',
        '11-blueBox': '',
      },
      navbar: {
        continue: 'Continuar',
        dissolving: 'disolviendo...',
        goodJob: '¡Buen trabajo!',
        finish: 'finalizar',
        '0-text':
          'Elija un trozo de comida para seguirlo a través del aparato digestivo.',
        '1-text':
          'La digestión comienza en la boca. Toque el botón para masticar los alimentos.',
        '2-text':
          'La digestión comienza en la boca. Toque el botón para masticar los alimentos.',
        '3-text':
          'La digestión comienza en la boca. Toque el botón para masticar los alimentos.',
        '4-text':
          'La digestión comienza en la boca. Toque el botón para masticar los alimentos.',
        '5-text':
          'Los alimentos bajan por el esófago hacia al estómago. Toque el botón para tragar.',
        '8-text':
          'El estómago descompone los alimentos en pequeños trozos que el cuerpo puede absorber. Utilice el deslizador para disolver los alimentos.',
        '11-text':
          'El intestino delgado absorbe los nutrientes de los alimentos. Utilice el deslizador para guiar los alimentos.',
        '13-text':
          'El intestino grueso absorbe más nutrientes y forma materia fecal. Utilice el deslizador para guiar los alimentos.',
        '15-text':
          'Una vez que el cuerpo toma la nutrición de los alimentos, el resto es materia fecal. Toque abajo para sacarla del cuerpo.',
      },
    },
    [Paths.BodySystems]: {
      navbar: {
        selectPath: 'Elija un sistema/aparato del cuerpo humano para explorar',
        sensory: 'Sensorial',
        skeletal: 'SKELETAL',
        digestive: 'DIGESTIVE',
        nervous: 'NERVOUS',
        cardiovascular: 'CARDIOVASCULAR',
        muscular: 'MUSCULAR',
      },
    },
    [Paths.Smell]: {
      header: {
        title: 'Olfato',
      },
    },
    [Paths.Sight]: {
      header: {
        title: 'Vista',
      },
    },
    [Paths.Hearing]: {
      header: {
        title: 'Audición',
      },
    },
    [Paths.Touch]: {
      header: {
        title: 'Tacto',
      },
    },
    [Paths.Taste]: {
      header: {
        title: 'Gusto',
      },
    },
    [Paths.Proprioception]: {
      header: {
        title: 'Propiocepción',
      },
    },
    [Paths.Vestibular]: {
      header: {
        title: 'Vestibular',
      },
    },
    [Paths.Procedures]: {
      navbar: {
        selectPath: 'Elija un procedimiento hospitalario para realizar',
        surgicalPrep: 'Cirugía',
        xRay: 'Radiografía',
        eeg: 'EEG',
        wellness: 'Bienestar',
        mri: 'MRI',
        iv: 'Vía intravenosa',
      },
    },
    [Paths.SurgicalPrep]: {
      header: {
        title: 'CIRUGÍA',
      },
      scene: {
        text: 'Hay algunos pasos importantes para preparar a los pacientes para la cirugía.',
        label: 'CIRUGÍA',
        buttonText: 'iniciar',
      },
      navbar: {
        '0-mainText': 'PREPARE AL PACIENTE PARA LA CIRUGÍA',
        '0-subText': 'Ayude al paciente a prepararse para su cirugía.',
        '0-buttonText': 'Continuar',
        '1-mainText': 'CONTROLE LA PRESIÓN ARTERIAL',
        '1-subText':
          'Arrastre el manguito del esfigmomanómetro al brazo del paciente.',
        '2-mainText': 'ÍNFLELO',
        '2-subText':
          'Sigue tocando el botón para inflar el manguito del esfigmomanómetro',
        '3-mainText': '¡GRAN TRABAJO!',
        '3-subText':
          'Tomó la presión arterial del paciente. <br />Toque para continuar.',
        '3-buttonText': 'Continuar',
        '4-mainText': 'INSERTE LA VÍA INTRAVENOSA',
        '4-subText':
          'Arrastre la vía intravenosa hasta las venas para colocar <br />una sonda flexible especial que administra líquidos.',
        '5-mainText': '¡GRAN TRABAJO!',
        '5-subText': 'La sonda flexible está colocada.',
        '5-buttonText': 'Continuar',
        '6-mainText': 'AÑADA UN VENDAJE',
        '6-subText': 'Coloque el vendaje sobre la sonda flexible.',
        '7-mainText': '¡GRAN TRABAJO!',
        '7-subText':
          'La vía intravenosa está colocada. A continuación, ayudaremos <br />al paciente a conciliar el sueño para su cirugía.',
        '7-buttonText': 'Continuar',
        '9-mainText': 'COLOQUE LA MÁSCARA',
        '9-subText': 'Toque el botón para colocar la máscara al paciente.',
        '10-mainText': 'COMIENCE LA ANESTESIA',
        '10-subText':
          'Utilice el deslizador para que empiece a fluir aire a través de la máscara.',
        '11-mainText': '¡GRAN TRABAJO!',
        '11-subText': 'El paciente está listo para su cirugía.',
        '11-buttonText': 'Continuar',
        '13-mainText': '¡GRAN TRABAJO!',
        '13-subText':
          'El procedimiento quirúrgico fue un éxito. Elija una recompensa para el paciente.',
        '13-buttonText': '¡LISTO!',
        '14-mainText': '¡GRAN TRABAJO!',
        '14-subText':
          'El procedimiento quirúrgico fue un éxito. Elija una recompensa para el paciente.',
        '14-buttonText': 'Continuar',
        '15-subText':
          '¡Completó la cirugía! Pulse a continuación para obtener más información sobre <br /><strong>el aparato cardiovascular.</strong>',
        '15-back': 'Regresar a \nprocedimientos',
      },
    },
    [Paths.XRay]: {
      header: {
        title: 'Radiografía',
      },
      scene: {
        text: 'Un equipo de rayos X toma imágenes que ayudan a los médicos a ver dentro de su cuerpo para hallar lesiones',
        label: 'Radiografía',
        buttonText: 'Tome una imágen',
        brokenBoneLabel: 'BROKEN BONE',
        brokenBoneText:
          'LOREM IPSUM DOLOR SIT\nAMET, CONSECTETUR\nADIPISCING ELIT, SED DO\nEIUSMOD TEMPOR .',
      },
      navbar: {
        '0-mainText': 'ENCUENTRE LA LESIÓN',
        '0-subText':
          'Encuentre dónde le duele al paciente. Cuando lo <br />haya encontrado, toque la zona para continuar.',
        '1-mainText': '¡GRAN TRABAJO!',
        '1-subText':
          'Halló la lesión. Ahora, tomemos una <br />radiografía del brazo del paciente.',
        '1-buttonText': 'CONTINUE',
        '2-mainText': 'TOME UNA RADIOGRAFÍA',
        '2-subText':
          'Inicie el equipo de rayos X para tomar <br />una imagen de la lesión del paciente.',
        '2-buttonText': 'iniciar',
        '4-mainText': 'HUESO FRACTURADO',
        '4-subText':
          'Los médicos pueden colocar una escayola en el brazo <br />del paciente para mantener el hueso inmóvil mientras se cura.',
        '4-buttonText': 'finalizar',
        '5-mainText': '¡LISTO!',
        '5-subText':
          'Los médicos trataron la lesión con una escayola. <br />Elija una recompensa para el paciente.',
        '5-buttonText': 'CONTINUE',
        '6-subText':
          '¡Completó la radiografía! <br />Pulse a continuación para obtener más información sobre <br /><strong>el sistema óseo</strong>',
        '6-back': 'Regresar a \nprocedimientos',
      },
    },
    [Paths.Eeg]: {
      header: {
        title: 'EEG',
      },
      scene: {
        text: 'Un EEG registra la actividad eléctrica, u ondas cerebrales, del cerebro mientras está en el hospital.',
        label: 'EEG',
        buttonText: 'TOME UN EEG',
      },
      navbar: {
        '0-mainText': 'TOME UN EEG',
        '0-subText': 'TEl paciente está listo para su electroencefalograma.',
        '0-buttonText': 'Continuar',
        '1-mainText': 'COLOQUE LOS DISCOS ADHESIVOS',
        '1-subText':
          'Toque el botón para colocar los discos adhesivos <br />en el cabeza del paciente.',
        '2-mainText': '¡GRAN TRABAJO!',
        '2-subText':
          'Los discos adhesivos están colocados. A continuación, <br />conectaremos los discos adhesivos al equipo.',
        '2-buttonText': 'Continuar',
        '3-mainText': 'CONECTE LAS DERIVACIONES',
        '3-subText':
          'Toque el botón para conectar el "cabello multicolor" <br />a los discos adhesivos.',
        '4-mainText': '¡GRAN TRABAJO!',
        '4-subText': 'El equipo de EEG está conectado y listo para usarse.',
        '4-buttonText': 'Continuar',
        '5-mainText': 'COLOQUE EL GORRO PARA EEG',
        '5-subText':
          'Coloque un gorro sobre el cabello multicolor <br />para terminar de preparar al paciente.',
        '6-mainText': '¡LISTO!',
        '6-subText':
          'Presione el botón para encender el equipo de EEG y <br />obtener los resultados.',
        '6-buttonText': 'Continuar',
        '7-mainText': 'IMPRIMIENDO...',
        '7-subText':
          'El equipo de EEG está funcionando e imprimiendo los resultados.',
        '8-mainText': 'ALL DONE!',
        '8-subText':
          'La prueba de EEG ha terminado. Elija una recompensa para el paciente.',
        '8-buttonText': 'finalizar',
        '9-mainText': '¡GRAN TRABAJO!',
        '9-subText':
          'La prueba de EEG ha terminado. Elija una recompensa para el paciente.',
        '9-buttonText': 'Continuar',
        '10-subText':
          '¡Completó el electroencefalograma! <br />Pulse a continuación para obtener más información sobre <br /><strong>el sistema nervioso.</strong>',
        '10-back': 'Regresar a \nprocedimientos',
      },
    },
    [Paths.Wellness]: {
      header: {
        title: 'Bienestar',
      },
      scene: {
        text: 'Aún cuando se siente bien, los chequeos de rutina son importantes para asegurar que su cuerpo está sano.',
        label: 'Bienestar',
        buttonText: 'Revise las señales vitales',
      },
      navbar: {
        '0-mainText': 'MIDA LA TEMPERATURA',
        '0-subText':
          'Toque el termómetro para tomar la temperatura del paciente.',
        '1-mainText': ' ',
        '1-subText': ' ',
        '2-mainText': '¡GRAN TRABAJO!',
        '2-subText':
          'La temperatura del paciente parece normal. <br />Toque para continuar.',
        '2-buttonText': 'Continuar',
        '3-mainText': 'CONTROLE LA PRESIÓN ARTERIAL',
        '3-subText':
          'Arrastre el manguito del esfigmomanómetro <br />al brazo del paciente.',
        '4-mainText': 'ÍNFLELO',
        '4-subText':
          'Sigue tocando el botón para inflar el <br />manguito del esfigmomanómetro',
        '5-mainText': '¡GRAN TRABAJO!',
        '5-subText':
          'Tomó la presión arterial del paciente. <br />Toque para continuar.',
        '5-buttonText': 'Continuar',
        '6-mainText': 'MIDA EL PULSO Y EL OXÍGENO EN SANGRE',
        '6-subText': 'Coloque el clip en el dedo del paciente.',
        '7-mainText': ' ',
        '7-subText': ' ',
        '8-mainText': '¡GRAN TRABAJO!',
        '8-subText': 'Midió el pulso y el oxígeno en sangre del paciente.',
        '8-buttonText': 'Continuar',
        '9-mainText': 'MANTÉNGASE ACTIVO',
        '9-subText':
          'You finished all the tests. Now pick an\nactivity to help the patient stay active and healthy.',
        '9-buttonText': 'finalizar',
        '10-mainText': '¡LISTO!',
        '10-subText':
          'Completó todas las pruebas. Ahora elija una actividad para <br />ayudar al paciente a mantenerse activo y saludable.',
        '10-buttonText': 'Continuar',
        '11-mainText': ' ',
        '11-subText':
          '¡Completó el control de bienestar! Pulse a <br />continuación para obtener más información sobre <br /><strong>el aparato cardiovascular.</strong>',
        '11-back': 'Regresar a \nprocedimientos',
      },
    },
    [Paths.Mri]: {
      header: {
        title: 'MRI',
      },
      scene: {
        text: 'Una máquina IRM utiliza imanes superpotentes para tomar imágenes del cerebro, los músculos o los órganos.',
        label: 'MRI',
        buttonText: 'Tome una MRI',
      },
      navbar: {
        nap: 'siesta',
        vr: 'realidad virtual',
        music: 'música',
        '0-mainText': 'AYUDE AL PACIENTE A RELAJARSE',
        '1-mainText': '¡LISTO!',
        '1-subText':
          'El paciente está cómodo y listo para la resonancia magnética.',
        '1-buttonText': 'Continuar',
        '2-mainText': 'Tome una MRI',
        '2-subText':
          'Encienda el equipo de resonancia magnética para <br />tomar una imagen de la lesión del paciente.',
        '2-buttonText': 'iniciar',
        '3-mainText': ' ',
        '3-subText': ' ',
        '4-mainText': 'RESULTADOS DE LA MRI',
        '4-subText':
          'Encontró una lesión en los músculos del hombro del paciente.',
        '4-buttonText': 'finalizar',
        '5-mainText': '¡LISTO!',
        '5-subText':
          'Ahora que han encontrado la lesión, los médicos pueden <br />ayudar a tratarla. Elija una recompensa para el paciente.',
        '5-buttonText': 'Continuar',
        '6-subText':
          '¡Completó la resonancia magnética! <br />Pulse a continuación para obtener más información sobre <br /><strong>el aparato muscular.</strong>',
        '6-back': 'Regresar a \nprocedimientos',
      },
    },
    [Paths.Iv]: {
      header: {
        title: 'VÍA INTRAVENOSA',
      },
      scene: {
        text: 'Un IV administra medicina o hidrata el cuerpo cuando los pacientes están enfermos o necesitan alguna prueba. ',
        label: 'VÍA INTRAVENOSA',
        buttonText: 'Inserte un IV',
      },
      navbar: {
        tablet: 'tableta',
        bubbles: 'burbujas',
        music: 'música',
        '0-mainText': 'AYUDE AL PACIENTE A RELAJARSE',
        '1-mainText': '¡LISTO!',
        '1-subText': 'El paciente está cómodo y listo para la vía intravenosa.',
        '1-buttonText': 'Continuar',
        '2-mainText': 'COLOQUE UN TORNIQUETE',
        '2-subText':
          'Una banda alrededor del brazo del <br />paciente ayuda a encontrar sus venas.',
        '3-mainText': '¡GRAN TRABAJO!',
        '3-subText': 'El paciente está listo para el próximo paso.',
        '3-buttonText': 'Continuar',
        '4-mainText': 'LIMPIE EL ÁREA.',
        '4-subText':
          'Arrastre el hisopo al brazo del paciente <br />para asegurarse de que está limpio.',
        '5-mainText': '¡GRAN TRABAJO!',
        '5-subText': 'El brazo del paciente está limpio y listo.',
        '5-buttonText': 'Continuar',
        '6-mainText': 'INSERTE LA VÍA INTRAVENOSA',
        '6-subText':
          'Arrastre la vía intravenosa hasta las venas para colocar <br />una sonda flexible especial que administra líquidos.',
        '7-mainText': '¡GRAN TRABAJO!',
        '7-subText': 'La sonda flexible está colocada.',
        '7-buttonText': 'Continuar',
        '8-mainText': 'AÑADA UN VENDAJE',
        '8-subText': 'Coloque el vendaje sobre la sonda flexible.',
        '9-mainText': '¡LISTO!',
        '9-subText':
          'La vía intravenosa está colocada. <br />Elija una recompensa para el paciente.',
        '9-buttonText': 'finalizar',
        '10-mainText': '¡LISTO!',
        '10-subText':
          'La vía intravenosa está colocada. <br />Elija una recompensa para el paciente.',
        '10-buttonText': 'CONTINUE',
        '11-subText':
          '¡Insertó la vía intravenosa! <br />Pulse a continuación para obtener más información sobre <br /><strong>el aparato cardiovascular.</strong>',
        '11-back': 'Regresar a \nprocedimientos',
      },
    },
    common: {
      header: {
        bodySystems: 'BODY SYSTEMS',
        procedures: 'Procedimientos',
      },
      scene: {
        play: 'Reproducir',
        explore: 'Explorar',
      },
      navbar: {
        exit: 'Salir',
        bodySystems: 'los sistemas',
        procedures: 'procedimientos',
        en: 'ENG',
        es: 'ESP',
      },
    },
  },
};

export default en;
