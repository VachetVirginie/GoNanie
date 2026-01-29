export type Exercise = {
  id: string
  title: string
  durationSec: number
  instructions: string
  variantSeated: string
  variantStanding: string
}

export type ProgramId =
  | 'mix'
  | 'circulation_assis'
  | 'renfo_doux_assis'
  | 'relaxation_assis'
  | 'respiration'
  | 'mobilite_assis'
  | 'equilibre_assis'
  | 'matin_douceur'
  | 'soir_detente'
  | 'douleur_genoux_assis'
  | 'douleur_poignets_assis'
  | 'douleur_dos_assis'
  | 'douleur_nuque_assis'

export function getSessionByProgram(
  program?: ProgramId | null
): Exercise[] {
  switch (program) {
    case 'douleur_nuque_assis':
      return SESSION_DOULEUR_NUQUE_ASSIS
    case 'douleur_dos_assis':
      return SESSION_DOULEUR_DOS_ASSIS
    case 'douleur_poignets_assis':
      return SESSION_DOULEUR_POIGNETS_ASSIS
    case 'douleur_genoux_assis':
      return SESSION_DOULEUR_GENOUX_ASSIS
    case 'respiration':
      return SESSION_RESPIRATION
    case 'circulation_assis':
      return SESSION_CIRCULATION_ASSIS
    case 'renfo_doux_assis':
      return SESSION_RENFO_DOUX_ASSIS
    case 'relaxation_assis':
      return SESSION_RELAXATION_ASSIS
    case 'mobilite_assis':
      return SESSION_MOBILITE_ASSIS
    case 'equilibre_assis':
      return SESSION_EQUILIBRE_ASSIS
    case 'matin_douceur':
      return SESSION_MATIN_DOUCEUR
    case 'soir_detente':
      return SESSION_SOIR_DETENTE
    case 'mix':
    default:
      return DEFAULT_SESSION_MIX
  }
}

export const SESSION_CIRCULATION_ASSIS: Exercise[] = [
  {
    id: 'feet-pump',
    title: 'Pompage des pieds',
    durationSec: 40,
    instructions: 'Mouvement régulier, respiration naturelle.',
    variantSeated: 'Pieds au sol, montez puis baissez les talons, puis les pointes.',
    variantStanding: ""
  },
  {
    id: 'leg-extension',
    title: 'Extension des jambes',
    durationSec: 40,
    instructions: 'Gardez le dos droit. Ne bloquez pas la respiration.',
    variantSeated: 'Tendez une jambe devant vous, reposez, puis changez.',
    variantStanding: ""
  },
  {
    id: 'hands',
    title: 'Mains et poignets',
    durationSec: 40,
    instructions: 'Mouvements doux, sans crispation.',
    variantSeated: 'Ouvrez et fermez les mains, puis cercles de poignets.',
    variantStanding: ""
  },
  {
  id: 'heel-slide',
  title: 'Glissé du talon',
  durationSec: 40,
  instructions: 'Mouvement lent et contrôlé.',
  variantSeated: 'Glissez un talon vers l’arrière puis revenez. Alternez.',
  variantStanding: ''
},
{
  id: 'arm-pump',
  title: 'Pompage des bras',
  durationSec: 40,
  instructions: 'Coordonnez respiration et mouvement.',
  variantSeated: 'Bras pliés, ouvrez et fermez les poings en rythme.',
  variantStanding: ''
}
]

export const SESSION_RENFO_DOUX_ASSIS: Exercise[] = [
  {
    id: 'knee-lift',
    title: 'Montée de genou',
    durationSec: 40,
    instructions: 'Mouvement lent et contrôlé. Stop si douleur.',
    variantSeated: 'Assis, levez légèrement un genou puis reposez. Alternez.',
    variantStanding: ""
  },
  {
    id: 'arm-raise',
    title: 'Bras',
    durationSec: 40,
    instructions: 'Respirez pendant l’effort.',
    variantSeated: 'Levez les bras devant vous ou sur les côtés, sans dépasser l’épaule.',
    variantStanding: ""
  },
  {
    id: 'core',
    title: 'Gainage assis',
    durationSec: 40,
    instructions: 'Contraction légère, sans bloquer la respiration.',
    variantSeated: 'Rentrez légèrement le ventre comme pour rapprocher le nombril du dos.',
    variantStanding: ""
  },
  {
  id: 'knee-press',
  title: 'Pression des cuisses',
  durationSec: 40,
  instructions: 'Contraction douce, respiration libre.',
  variantSeated: 'Pressez légèrement les cuisses l’une contre l’autre puis relâchez.',
  variantStanding: ''
},
{
  id: 'arm-hold',
  title: 'Maintien des bras',
  durationSec: 45,
  instructions: 'Sans bloquer la respiration.',
  variantSeated: 'Bras tendus devant vous, maintenez quelques secondes.',
  variantStanding: ''
}
]

export const SESSION_RESPIRATION: Exercise[] = [
  {
    id: 'settle',
    title: 'S’installer',
    durationSec: 40,
    instructions: 'Inspire par le nez, expire par la bouche',
    variantSeated: 'Assis bien droit, pieds au sol, épaules relâchées.',
    variantStanding: ""
  },
  {
    id: 'nose-breath',
    title: 'Respiration nasale',
    durationSec: 45,
    instructions: 'Inspirez et expirez par le nez, doucement, sans forcer.',
    variantSeated: 'Posez une main sur le ventre et sentez le mouvement.',
    variantStanding: ""
  },
  {
    id: 'slow-exhale',
    title: 'Expiration longue',
    durationSec: 40,
    instructions: 'Allongez l’expiration. Gardez une respiration fluide et confortable.',
    variantSeated: 'Inspirez 3–4 secondes, expirez 5–6 secondes, sans apnée.',
    variantStanding: ""
  },
  {
  id: 'breath-count',
  title: 'Respiration comptée',
  durationSec: 40,
  instructions: 'Respirez calmement en suivant le rythme.',
  variantSeated: 'Inspirez 3 secondes, expirez 4 secondes.',
  variantStanding: ''
},
{
  id: 'breath-shoulders',
  title: 'Respiration & épaules',
  durationSec: 40,
  instructions: 'Synchronisez souffle et mouvement.',
  variantSeated: 'Inspirez en montant les épaules, expirez en les relâchant.',
  variantStanding: ''
}
]

export const SESSION_RELAXATION_ASSIS: Exercise[] = [
  {
    id: 'slow-breath',
    title: 'Respiration profonde',
    durationSec: 120,
    instructions: 'Allongez progressivement l’expiration.',
    variantSeated: 'Assis confortablement, yeux fermés si possible.',
    variantStanding: ""
  },
  {
    id: 'stretch-arms',
    title: 'Étirements doux',
    durationSec: 40,
    instructions: 'Étirez sans douleur.',
    variantSeated: 'Étirez les bras devant vous puis au-dessus de la tête.',
    variantStanding: ""
  },
  {
    id: 'body-scan',
    title: 'Relâchement',
    durationSec: 40,
    instructions: 'Prenez conscience des zones détendues.',
    variantSeated: 'Relâchez volontairement épaules, mâchoire et mains.',
    variantStanding: ""
  },
  {
  id: 'face-relax',
  title: 'Détente du visage',
  durationSec: 45,
  instructions: 'Respiration calme.',
  variantSeated: 'Relâchez le front, les yeux, la mâchoire.',
  variantStanding: ''
},
{
  id: 'hands-relax',
  title: 'Détente des mains',
  durationSec: 45,
  instructions: 'Sans forcer.',
  variantSeated: 'Serrez légèrement les poings puis relâchez.',
  variantStanding: ''
}
]

export const DEFAULT_SESSION_MIX: Exercise[] = [
  {
    id: 'breathing',
    title: 'Respiration lente',
    durationSec: 40,
    instructions: 'Inspirez par le nez, expirez lentement par la bouche. Respiration calme et régulière.',
    variantSeated: 'Assis bien droit, dos contre le dossier si besoin, pieds au sol, mains sur le ventre.',
    variantStanding: ""
  },
  {
    id: 'neck',
    title: 'Mobilité du cou',
    durationSec: 40,
    instructions: 'Mouvements lents et sans forcer. Arrêtez en cas de gêne.',
    variantSeated: 'Tournez doucement la tête de droite à gauche, puis inclinez légèrement sur les côtés.',
    variantStanding: ""
  },
  {
    id: 'shoulders',
    title: 'Épaules',
    durationSec: 40,
    instructions: 'Respiration fluide pendant les mouvements.',
    variantSeated: 'Montez les épaules vers les oreilles puis relâchez. Cercles d’épaules lents.',
    variantStanding: ""
  },
  {
    id: 'ankles',
    title: 'Chevilles',
    durationSec: 40,
    instructions: 'Mouvements amples mais confortables.',
    variantSeated: 'Une jambe à la fois, dessinez des cercles avec le pied. Alternez.',
    variantStanding: ""
  },
  {
  id: 'torso-rotation',
  title: 'Rotation du buste',
  durationSec: 40,
  instructions: 'Amplitude confortable.',
  variantSeated: 'Tournez doucement le buste à droite puis à gauche.',
  variantStanding: ''
},
{
  id: 'spine-flex',
  title: 'Dos rond / dos droit',
  durationSec: 40,
  instructions: 'Respirez avec le mouvement.',
  variantSeated: 'Arrondissez légèrement le dos puis redressez-vous.',
  variantStanding: ''
}
]

export const SESSION_MOBILITE_ASSIS: Exercise[] = [
  {
    id: 'neck-mobility',
    title: 'Mobilité du cou',
    durationSec: 40,
    instructions: 'Mouvements lents, sans jamais forcer.',
    variantSeated: 'Tournez doucement la tête de droite à gauche, puis inclinez légèrement sur les côtés.',
    variantStanding: ""
  },
  {
    id: 'shoulder-roll',
    title: 'Mobilité des épaules',
    durationSec: 40,
    instructions: 'Respirez calmement pendant le mouvement.',
    variantSeated: 'Faites des cercles lents avec les épaules, vers l’arrière puis vers l’avant.',
    variantStanding: ""
  },
  {
    id: 'ankle-mobility',
    title: 'Mobilité des chevilles',
    durationSec: 40,
    instructions: 'Amplitude confortable.',
    variantSeated: 'Une jambe à la fois, dessinez des cercles avec le pied. Changez de côté.',
    variantStanding: ""
  },
]

export const SESSION_EQUILIBRE_ASSIS: Exercise[] = [
  {
    id: 'weight-shift',
    title: 'Transfert de poids',
    durationSec: 40,
    instructions: 'Mouvement lent et contrôlé.',
    variantSeated: 'Assis bien droit, transférez doucement le poids du corps à droite puis à gauche.',
    variantStanding: ""
  },
  {
    id: 'single-leg-support',
    title: 'Stabilité de la jambe',
    durationSec: 40,
    instructions: 'Stoppez si vous perdez l’équilibre.',
    variantSeated: 'Soulevez légèrement un pied du sol, maintenez quelques secondes, puis changez.',
    variantStanding: ""
  },
  {
    id: 'posture',
    title: 'Posture assise',
    durationSec: 40,
    instructions: 'Respiration naturelle.',
    variantSeated: 'Grandissez-vous comme si un fil tirait le sommet de la tête vers le haut.',
    variantStanding: ""
  },
  {
  id: 'opposite-arm-leg',
  title: 'Coordination croisée',
  durationSec: 40,
  instructions: 'Mouvement lent.',
  variantSeated: 'Levez un pied et le bras opposé, puis changez.',
  variantStanding: ''
},
{
  id: 'heel-lift-hold',
  title: 'Maintien talon',
  durationSec: 40,
  instructions: 'Maintenez sans crispation.',
  variantSeated: 'Soulevez légèrement les talons et maintenez.',
  variantStanding: ''
}
]

export const SESSION_MATIN_DOUCEUR: Exercise[] = [
  {
    id: 'wake-breath',
    title: 'Respiration douce',
    durationSec: 40,
    instructions: 'Respiration calme et régulière.',
    variantSeated: 'Assis au bord de la chaise, pieds bien à plat, mains sur les cuisses.',
    variantStanding: ""
  },
  {
    id: 'arms-wake',
    title: 'Réveil des bras',
    durationSec: 40,
    instructions: 'Ne montez pas au-dessus des épaules.',
    variantSeated: 'Levez doucement les bras devant vous puis reposez.',
    variantStanding: ""
  },
  {
    id: 'feet-wake',
    title: 'Réveil des pieds',
    durationSec: 40,
    instructions: 'Mouvement fluide.',
    variantSeated: 'Montez et baissez les pointes et les talons, tranquillement.',
    variantStanding: ""
  },
  {
  id: 'full-body-wake',
  title: 'Réveil global',
  durationSec: 40,
  instructions: 'Respiration naturelle.',
  variantSeated: 'Étirez bras et jambes en douceur.',
  variantStanding: ''
}
]

export const SESSION_SOIR_DETENTE: Exercise[] = [
  {
    id: 'slow-breathing',
    title: 'Respiration lente',
    durationSec: 40,
    instructions: 'Allongez doucement l’expiration.',
    variantSeated: 'Assis confortablement, épaules relâchées.',
    variantStanding: ""
  },
  {
    id: 'shoulder-release',
    title: 'Relâchement des épaules',
    durationSec: 40,
    instructions: 'Sans forcer.',
    variantSeated: 'Montez les épaules puis laissez-les tomber doucement.',
    variantStanding: ""
  },
  {
    id: 'body-relax',
    title: 'Détente globale',
    durationSec: 40,
    instructions: 'Prenez conscience des zones détendues.',
    variantSeated: 'Relâchez volontairement la mâchoire, les mains et le dos.',
    variantStanding: ""
  },
  {
  id: 'slow-neck',
  title: 'Nuque douce',
  durationSec: 40,
  instructions: 'Très lent.',
  variantSeated: 'Inclinez légèrement la tête d’un côté puis de l’autre.',
  variantStanding: ''
}
]

export const SESSION_DOULEUR_GENOUX_ASSIS: Exercise[] = [
  {
    id: 'knee-awareness',
    title: 'Prise de conscience',
    durationSec: 40,
    instructions: 'Aucun mouvement forcé. Respiration calme.',
    variantSeated:
      'Assis confortablement, observez vos genoux sans bouger. Relâchez les jambes.',
    variantStanding: ''
  },
  {
    id: 'heel-slide',
    title: 'Glissé du talon',
    durationSec: 40,
    instructions: 'Mouvement lent et fluide.',
    variantSeated:
      'Faites glisser doucement un talon vers l’arrière puis revenez. Alternez.',
    variantStanding: ''
  },
  {
    id: 'knee-extension-soft',
    title: 'Extension douce',
    durationSec: 40,
    instructions: 'Ne tendez pas complètement la jambe.',
    variantSeated:
      'Tendez légèrement une jambe puis reposez-la. Changez de côté.',
    variantStanding: ''
  },
  {
    id: 'quad-activation',
    title: 'Activation des cuisses',
    durationSec: 40,
    instructions: 'Contraction légère, sans douleur.',
    variantSeated:
      'Pressez doucement l’arrière du genou contre la chaise puis relâchez.',
    variantStanding: ''
  },
  {
    id: 'ankle-pump-knee',
    title: 'Chevilles & genoux',
    durationSec: 40,
    instructions: 'Favorise la circulation.',
    variantSeated:
      'Pieds au sol, montez et baissez les talons lentement.',
    variantStanding: ''
  },
  {
    id: 'inner-thigh',
    title: 'Stabilité interne',
    durationSec: 40,
    instructions: 'Respirez librement.',
    variantSeated:
      'Pressez légèrement les cuisses l’une contre l’autre puis relâchez.',
    variantStanding: ''
  },
  {
    id: 'knee-relax',
    title: 'Relâchement',
    durationSec: 40,
    instructions: 'Respiration lente.',
    variantSeated:
      'Relâchez complètement les jambes. Laissez les genoux se détendre.',
    variantStanding: ''
  }
]

export const SESSION_DOULEUR_POIGNETS_ASSIS: Exercise[] = [
  {
    id: 'wrist-awareness',
    title: 'Prise de conscience',
    durationSec: 40,
    instructions: 'Aucun mouvement forcé.',
    variantSeated:
      'Assis confortablement, posez les mains sur les cuisses et observez les poignets.',
    variantStanding: ''
  },
  {
    id: 'finger-open-close',
    title: 'Ouverture des doigts',
    durationSec: 40,
    instructions: 'Mouvement lent et fluide.',
    variantSeated:
      'Ouvrez largement les doigts puis refermez-les doucement.',
    variantStanding: ''
  },
  {
    id: 'wrist-circles',
    title: 'Cercles de poignets',
    durationSec: 40,
    instructions: 'Amplitude confortable, sans forcer.',
    variantSeated:
      'Coudes près du corps, dessinez de petits cercles avec les poignets.',
    variantStanding: ''
  },
  {
    id: 'wrist-flex-extend',
    title: 'Flexion douce',
    durationSec: 40,
    instructions: 'Ne cherchez pas l’amplitude maximale.',
    variantSeated:
      'Paumes vers le bas, pliez puis redressez doucement les poignets.',
    variantStanding: ''
  },
  {
    id: 'forearm-relax',
    title: 'Détente des avant-bras',
    durationSec: 40,
    instructions: 'Respiration calme.',
    variantSeated:
      'Secouez très légèrement les mains comme pour les détendre.',
    variantStanding: ''
  },
  {
    id: 'gentle-squeeze',
    title: 'Pression légère',
    durationSec: 40,
    instructions: 'Sans douleur ni crispation.',
    variantSeated:
      'Pressez doucement les mains l’une contre l’autre puis relâchez.',
    variantStanding: ''
  },
  {
    id: 'wrist-relax',
    title: 'Relâchement final',
    durationSec: 40,
    instructions: 'Respiration lente.',
    variantSeated:
      'Posez les mains sur les cuisses, laissez-les se détendre complètement.',
    variantStanding: ''
  }
]

export const SESSION_DOULEUR_DOS_ASSIS: Exercise[] = [
  {
    id: 'back-awareness',
    title: 'Prise de conscience du dos',
    durationSec: 45,
    instructions: 'Respiration calme, sans mouvement.',
    variantSeated:
      'Assis confortablement, sentez le contact du dos avec la chaise.',
    variantStanding: ''
  },
  {
    id: 'spine-mobilization',
    title: 'Dos rond / dos droit',
    durationSec: 40,
    instructions: 'Amplitude confortable.',
    variantSeated:
      'Arrondissez légèrement le dos puis redressez-vous doucement.',
    variantStanding: ''
  },
  {
    id: 'pelvic-tilt',
    title: 'Bascule du bassin',
    durationSec: 40,
    instructions: 'Mouvement lent et contrôlé.',
    variantSeated:
      'Basculez doucement le bassin d’avant en arrière.',
    variantStanding: ''
  },
  {
    id: 'thoracic-opening',
    title: 'Ouverture de la poitrine',
    durationSec: 40,
    instructions: 'Respirez pendant le mouvement.',
    variantSeated:
      'Ouvrez légèrement la poitrine en ramenant les épaules en arrière.',
    variantStanding: ''
  },
  {
    id: 'side-stretch',
    title: 'Étirement latéral',
    durationSec: 40,
    instructions: 'Sans forcer.',
    variantSeated:
      'Inclinez doucement le buste d’un côté puis de l’autre.',
    variantStanding: ''
  },
  {
    id: 'shoulder-release-back',
    title: 'Relâchement des épaules',
    durationSec: 40,
    instructions: 'Respiration fluide.',
    variantSeated:
      'Montez les épaules puis relâchez-les complètement.',
    variantStanding: ''
  },
  {
    id: 'posture-reset',
    title: 'Auto-grandissement',
    durationSec: 40,
    instructions: 'Respiration naturelle.',
    variantSeated:
      'Grandissez-vous comme si un fil tirait le sommet de la tête vers le haut.',
    variantStanding: ''
  },
  {
    id: 'back-relax',
    title: 'Relâchement final',
    durationSec: 40,
    instructions: 'Laissez le dos se détendre.',
    variantSeated:
      'Relâchez le dos, les épaules et la nuque.',
    variantStanding: ''
  }
]

export const SESSION_DOULEUR_NUQUE_ASSIS: Exercise[] = [
  {
    id: 'neck-awareness',
    title: 'Prise de conscience',
    durationSec: 40,
    instructions: 'Respiration calme, sans mouvement.',
    variantSeated:
      'Assis bien droit, observez les sensations dans la nuque et les épaules.',
    variantStanding: ''
  },
  {
    id: 'neck-lengthen',
    title: 'Allongement de la nuque',
    durationSec: 40,
    instructions: 'Très lent, sans forcer.',
    variantSeated:
      'Grandissez-vous comme si la tête montait vers le plafond.',
    variantStanding: ''
  },
  {
    id: 'neck-tilt-side',
    title: 'Inclinaison latérale',
    durationSec: 40,
    instructions: 'Amplitude confortable.',
    variantSeated:
      'Inclinez doucement la tête vers une épaule puis revenez au centre. Alternez.',
    variantStanding: ''
  },
  {
    id: 'neck-nod',
    title: 'Oui / Non très doux',
    durationSec: 40,
    instructions: 'Mouvement minimal.',
    variantSeated:
      'Faites un léger mouvement de “oui”, puis de “non”, sans aller loin.',
    variantStanding: ''
  },
  {
    id: 'shoulder-drop',
    title: 'Relâchement des épaules',
    durationSec: 40,
    instructions: 'Respiration fluide.',
    variantSeated:
      'Montez les épaules puis laissez-les tomber doucement.',
    variantStanding: ''
  },
  {
    id: 'neck-support',
    title: 'Auto-soutien',
    durationSec: 40,
    instructions: 'Sans pression.',
    variantSeated:
      'Posez une main sur la nuque et laissez le poids de la tête se relâcher.',
    variantStanding: ''
  },
  {
    id: 'neck-relax',
    title: 'Détente finale',
    durationSec: 40,
    instructions: 'Respiration lente.',
    variantSeated:
      'Relâchez complètement la nuque et les épaules.',
    variantStanding: ''
  }
]





