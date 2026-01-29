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

export function getSessionByProgram(
  program?: ProgramId | null
): Exercise[] {
  switch (program) {
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
    durationSec: 90,
    instructions: 'Mouvement régulier, respiration naturelle.',
    variantSeated: 'Pieds au sol, montez puis baissez les talons, puis les pointes.',
    variantStanding: ""
  },
  {
    id: 'leg-extension',
    title: 'Extension des jambes',
    durationSec: 90,
    instructions: 'Gardez le dos droit. Ne bloquez pas la respiration.',
    variantSeated: 'Tendez une jambe devant vous, reposez, puis changez.',
    variantStanding: ""
  },
  {
    id: 'hands',
    title: 'Mains et poignets',
    durationSec: 60,
    instructions: 'Mouvements doux, sans crispation.',
    variantSeated: 'Ouvrez et fermez les mains, puis cercles de poignets.',
    variantStanding: ""
  },
]

export const SESSION_RENFO_DOUX_ASSIS: Exercise[] = [
  {
    id: 'knee-lift',
    title: 'Montée de genou',
    durationSec: 90,
    instructions: 'Mouvement lent et contrôlé. Stop si douleur.',
    variantSeated: 'Assis, levez légèrement un genou puis reposez. Alternez.',
    variantStanding: ""
  },
  {
    id: 'arm-raise',
    title: 'Bras',
    durationSec: 60,
    instructions: 'Respirez pendant l’effort.',
    variantSeated: 'Levez les bras devant vous ou sur les côtés, sans dépasser l’épaule.',
    variantStanding: ""
  },
  {
    id: 'core',
    title: 'Gainage assis',
    durationSec: 60,
    instructions: 'Contraction légère, sans bloquer la respiration.',
    variantSeated: 'Rentrez légèrement le ventre comme pour rapprocher le nombril du dos.',
    variantStanding: ""
  },
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
    durationSec: 90,
    instructions: 'Étirez sans douleur.',
    variantSeated: 'Étirez les bras devant vous puis au-dessus de la tête.',
    variantStanding: ""
  },
  {
    id: 'body-scan',
    title: 'Relâchement',
    durationSec: 60,
    instructions: 'Prenez conscience des zones détendues.',
    variantSeated: 'Relâchez volontairement épaules, mâchoire et mains.',
    variantStanding: ""
  },
]

export const DEFAULT_SESSION_MIX: Exercise[] = [
  {
    id: 'breathing',
    title: 'Respiration lente',
    durationSec: 90,
    instructions: 'Inspirez par le nez, expirez lentement par la bouche. Respiration calme et régulière.',
    variantSeated: 'Assis bien droit, dos contre le dossier si besoin, pieds au sol, mains sur le ventre.',
    variantStanding: ""
  },
  {
    id: 'neck',
    title: 'Mobilité du cou',
    durationSec: 60,
    instructions: 'Mouvements lents et sans forcer. Arrêtez en cas de gêne.',
    variantSeated: 'Tournez doucement la tête de droite à gauche, puis inclinez légèrement sur les côtés.',
    variantStanding: ""
  },
  {
    id: 'shoulders',
    title: 'Épaules',
    durationSec: 60,
    instructions: 'Respiration fluide pendant les mouvements.',
    variantSeated: 'Montez les épaules vers les oreilles puis relâchez. Cercles d’épaules lents.',
    variantStanding: ""
  },
  {
    id: 'ankles',
    title: 'Chevilles',
    durationSec: 90,
    instructions: 'Mouvements amples mais confortables.',
    variantSeated: 'Une jambe à la fois, dessinez des cercles avec le pied. Alternez.',
    variantStanding: ""
  },
]

export const SESSION_MOBILITE_ASSIS: Exercise[] = [
  {
    id: 'neck-mobility',
    title: 'Mobilité du cou',
    durationSec: 60,
    instructions: 'Mouvements lents, sans jamais forcer.',
    variantSeated: 'Tournez doucement la tête de droite à gauche, puis inclinez légèrement sur les côtés.',
    variantStanding: ""
  },
  {
    id: 'shoulder-roll',
    title: 'Mobilité des épaules',
    durationSec: 60,
    instructions: 'Respirez calmement pendant le mouvement.',
    variantSeated: 'Faites des cercles lents avec les épaules, vers l’arrière puis vers l’avant.',
    variantStanding: ""
  },
  {
    id: 'ankle-mobility',
    title: 'Mobilité des chevilles',
    durationSec: 90,
    instructions: 'Amplitude confortable.',
    variantSeated: 'Une jambe à la fois, dessinez des cercles avec le pied. Changez de côté.',
    variantStanding: ""
  },
]

export const SESSION_EQUILIBRE_ASSIS: Exercise[] = [
  {
    id: 'weight-shift',
    title: 'Transfert de poids',
    durationSec: 60,
    instructions: 'Mouvement lent et contrôlé.',
    variantSeated: 'Assis bien droit, transférez doucement le poids du corps à droite puis à gauche.',
    variantStanding: ""
  },
  {
    id: 'single-leg-support',
    title: 'Stabilité de la jambe',
    durationSec: 90,
    instructions: 'Stoppez si vous perdez l’équilibre.',
    variantSeated: 'Soulevez légèrement un pied du sol, maintenez quelques secondes, puis changez.',
    variantStanding: ""
  },
  {
    id: 'posture',
    title: 'Posture assise',
    durationSec: 60,
    instructions: 'Respiration naturelle.',
    variantSeated: 'Grandissez-vous comme si un fil tirait le sommet de la tête vers le haut.',
    variantStanding: ""
  },
]

export const SESSION_MATIN_DOUCEUR: Exercise[] = [
  {
    id: 'wake-breath',
    title: 'Respiration douce',
    durationSec: 60,
    instructions: 'Respiration calme et régulière.',
    variantSeated: 'Assis au bord de la chaise, pieds bien à plat, mains sur les cuisses.',
    variantStanding: ""
  },
  {
    id: 'arms-wake',
    title: 'Réveil des bras',
    durationSec: 60,
    instructions: 'Ne montez pas au-dessus des épaules.',
    variantSeated: 'Levez doucement les bras devant vous puis reposez.',
    variantStanding: ""
  },
  {
    id: 'feet-wake',
    title: 'Réveil des pieds',
    durationSec: 60,
    instructions: 'Mouvement fluide.',
    variantSeated: 'Montez et baissez les pointes et les talons, tranquillement.',
    variantStanding: ""
  },
]

export const SESSION_SOIR_DETENTE: Exercise[] = [
  {
    id: 'slow-breathing',
    title: 'Respiration lente',
    durationSec: 90,
    instructions: 'Allongez doucement l’expiration.',
    variantSeated: 'Assis confortablement, épaules relâchées.',
    variantStanding: ""
  },
  {
    id: 'shoulder-release',
    title: 'Relâchement des épaules',
    durationSec: 60,
    instructions: 'Sans forcer.',
    variantSeated: 'Montez les épaules puis laissez-les tomber doucement.',
    variantStanding: ""
  },
  {
    id: 'body-relax',
    title: 'Détente globale',
    durationSec: 60,
    instructions: 'Prenez conscience des zones détendues.',
    variantSeated: 'Relâchez volontairement la mâchoire, les mains et le dos.',
    variantStanding: ""
  },
]





