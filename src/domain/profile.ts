export type Profile = {
  firstName: string
  age: number
  goal: 'mix' | 'mobilite' | 'equilibre'
  mobility: 'assis' | 'debout'
  painLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

const STORAGE_KEY = 'sa_profile_v1'

export function loadProfile(): Profile | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Profile
  } catch {
    return null
  }
}

export function saveProfile(p: Profile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
}
