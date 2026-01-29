export type Exercise = {
  id: string
  title: string
  durationSec: number
  instructions: string
  variantSeated: string
  variantStanding: string
}

export type ProgramId = 'mix' | 'circulation_assis' | 'renfo_doux_assis' | 'relaxation_assis' | 'respiration'

export function getSessionByProgram(program: string | null | undefined): Exercise[] {
  switch (program) {
    case 'respiration':
      return SESSION_RESPIRATION
    case 'circulation_assis':
      return SESSION_CIRCULATION_ASSIS
    case 'renfo_doux_assis':
      return SESSION_RENFO_DOUX_ASSIS
    case 'relaxation_assis':
      return SESSION_RELAXATION_ASSIS
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




