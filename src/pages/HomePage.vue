<template>
  <div class="space-y-4">
    <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 ring-1 ring-black/5">
      <div class="space-y-3">
        <!-- <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800">
          <span class="h-2 w-2 rounded-full bg-blue-600" />
          Séances douces et progressives
        </div> -->

        <div v-if="profile" class="space-y-2">
          <div class="flex items-start justify-between gap-3">
            <h1 class="text-3xl font-extrabold tracking-tight">
              Bonjour <span class="text-blue-700">{{ profile.firstName }}</span>.
            </h1>
            <button
              type="button"
              :class="secondaryButtonClass + ' grid h-10 w-10 place-items-center p-0'"
              aria-label="Profil"
              @click="router.push('/onboarding')"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
          <div class="text-slate-700">Objectif: <span class="font-semibold">{{ goalLabel }}</span></div>
          <div class="text-slate-700">Mode: <span class="font-semibold">{{ mobilityLabel }}</span></div>
        </div>
        <h1 v-else class="text-3xl font-extrabold tracking-tight">Bouger avec plaisir, chaque jour</h1>
      </div>
    </div>

    <div :class="cardClass">
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-2xl font-extrabold tracking-tight">Démarrer</div>
            <div class="mt-1 text-lg font-semibold text-slate-700">
              {{ profile ? 'Votre prochaine séance est prête.' : 'Créez votre profil en moins d’une minute.' }}
            </div>
          </div>
          <!-- <div class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
            {{ profile ? 'Prêt(e)' : 'Rapide' }}
          </div> -->
        </div>

        <button
          v-if="!profile"
          :class="primaryButtonClass + ' w-full'"
          type="button"
          @click="router.push('/onboarding')"
        >
          Créer mon profil
        </button>

        <div v-else class="space-y-3">
          <div class="space-y-4">
            <div class="space-y-2">
              <div class="text-lg font-extrabold text-slate-900">Rituels du jour</div>
              <div class="grid grid-cols-2 gap-3">
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-yellow-500 to-amber-500 p-4 text-center text-white shadow-sm shadow-amber-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'matin_douceur' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 3v3" />
                          <path d="M4.5 10.5l2 2" />
                          <path d="M19.5 10.5l-2 2" />
                          <path d="M6 18h12" />
                          <path d="M8 18a4 4 0 0 1 8 0" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Matin</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Douceur</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-slate-700 to-indigo-700 p-4 text-center text-white shadow-sm shadow-slate-700/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'soir_detente' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M21 12.5A7.5 7.5 0 0 1 11.5 3 6.5 6.5 0 1 0 21 12.5Z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Soir</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Détente</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-lg font-extrabold text-slate-900">Bien-être</div>
              <div class="grid grid-cols-2 gap-3">
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-center text-white shadow-sm shadow-amber-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'relaxation_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 21s-6-4.35-6-10a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 5.65-6 10-6 10Z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Relaxation</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-400 p-4 text-center text-white shadow-sm shadow-sky-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'respiration' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 8c3-2 6-2 9 0" />
                          <path d="M3 12c4-2 8-2 12 0" />
                          <path d="M3 16c3-2 6-2 9 0" />
                          <path d="M17 10c1.8 0 3 1.2 3 3s-1.2 3-3 3" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Respiration</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Douce</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-lg font-extrabold text-slate-900">Soulagement (douleurs)</div>
              <div class="grid grid-cols-2 gap-3">
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-rose-600 to-red-600 p-4 text-center text-white shadow-sm shadow-rose-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'douleur_genoux_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 21s-6-4.35-6-10a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 5.65-6 10-6 10Z" />
                        <path d="M9.2 10.8l5.6 5.6" />
                        <path d="M14.8 10.8l-5.6 5.6" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Douleur genoux</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-fuchsia-600 to-rose-600 p-4 text-center text-white shadow-sm shadow-fuchsia-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'douleur_poignets_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 7v10" />
                        <path d="M17 7v10" />
                        <path d="M5 17h14" />
                        <path d="M5 7h14" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Poignets</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-center text-white shadow-sm shadow-emerald-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'douleur_dos_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8 4c0 5 2 16 4 16s4-11 4-16" />
                        <path d="M8 6h8" />
                        <path d="M8 18h8" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Dos</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-center text-white shadow-sm shadow-cyan-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'douleur_nuque_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 6a4 4 0 0 0-4 4" />
                        <path d="M12 6a4 4 0 0 1 4 4" />
                        <path d="M8 10c0 7-2 10-2 10" />
                        <path d="M16 10c0 7 2 10 2 10" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Nuque</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-lg font-extrabold text-slate-900">Mobilité douce</div>
              <div class="grid grid-cols-2 gap-3">
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 p-4 text-center text-white shadow-sm shadow-indigo-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'mobilite_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 8l6-4 6 4" />
                          <path d="M6 16l6 4 6-4" />
                          <path d="M12 4v16" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Mobilité</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-4 text-center text-white shadow-sm shadow-emerald-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'circulation_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2c2.5 2.5 2.5 5.5 0 8" />
                          <path d="M12 22c-2.5-2.5-2.5-5.5 0-8" />
                          <path d="M2 12c2.5-2.5 5.5-2.5 8 0" />
                          <path d="M22 12c-2.5 2.5-5.5 2.5-8 0" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Circulation</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-lg font-extrabold text-slate-900">Renforcement & équilibre</div>
              <div class="grid grid-cols-2 gap-3">
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-rose-600 to-pink-500 p-4 text-center text-white shadow-sm shadow-rose-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'equilibre_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2v20" />
                          <path d="M6 10h12" />
                          <path d="M8 22l4-4 4 4" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Équilibre</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-4 text-center text-white shadow-sm shadow-violet-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'renfo_doux_assis' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M7 12h10" />
                          <path d="M9 7h6" />
                          <path d="M9 17h6" />
                          <path d="M4 12a2 2 0 0 1 2-2h1v4H6a2 2 0 0 1-2-2Z" />
                          <path d="M20 12a2 2 0 0 1-2 2h-1v-4h1a2 2 0 0 1 2 2Z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Renfo doux</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                    </div>
                  </div>
                </button>
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-4 text-center text-white shadow-sm shadow-blue-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push({ path: '/session', query: { program: 'mix' } })"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2v6" />
                          <path d="M12 16v6" />
                          <path d="M2 12h6" />
                          <path d="M16 12h6" />
                          <path d="M7 7l2.2 2.2" />
                          <path d="M14.8 14.8L17 17" />
                          <path d="M7 17l2.2-2.2" />
                          <path d="M14.8 9.2L17 7" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Séance mix</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Mobilité + équilibre</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <div class="text-lg font-extrabold text-slate-900">Bonus</div>
              <div class="grid grid-cols-2 gap-3">
                <button
                  class="aspect-[1/1] w-full rounded-3xl bg-gradient-to-r from-rose-600 to-red-600 p-4 text-center text-white shadow-sm shadow-rose-600/20 transition active:translate-y-px"
                  type="button"
                  @click="router.push('/surprise')"
                >
                  <div class="flex h-full flex-col items-center justify-center gap-3">
                    <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                      <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 21s-6-4.35-6-10a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 5.65-6 10-6 10Z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-extrabold">Surprise</div>
                      <div class="mt-1 text-sm font-semibold text-white/85">Session</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div :class="cardClass">
      <div class="space-y-3">
        <div class="text-lg font-semibold">Comment ça marche</div>
        <div class="grid gap-3">
          <div class="rounded-2xl border border-slate-200 bg-white p-4">
            <div class="text-sm font-semibold text-slate-600">1</div>
            <div class="mt-1 text-base font-semibold">Choisissez votre objectif</div>
            <div class="mt-1 text-slate-700">Mix mobilité + équilibre, ou un focus.</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4">
            <div class="text-sm font-semibold text-slate-600">2</div>
            <div class="mt-1 text-base font-semibold">Suivez une séance guidée</div>
            <div class="mt-1 text-slate-700">Une consigne simple à la fois, avec timer.</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4">
            <div class="text-sm font-semibold text-slate-600">3</div>
            <div class="mt-1 text-base font-semibold">Arrêtez à tout moment</div>
            <div class="mt-1 text-slate-700">Bouton “Arrêt immédiat” si besoin.</div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div :class="cardClass">
      <div class="space-y-2">
        <div class="text-lg font-semibold">Important</div>
        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-slate-900">
          <div class="text-base font-semibold text-amber-900">Écoutez votre corps</div>
          <p class="mt-1 text-slate-700">
            Si douleur inhabituelle, vertiges ou essoufflement important: arrêtez et demandez
            conseil à un professionnel de santé.
          </p>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-3">
          <div class="text-base font-semibold">Conseil</div>
          <div class="mt-1 text-slate-700">Gardez un support proche (mur, chaise) pour l’équilibre.</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { loadProfile } from '../domain/profile'
import { cardClass, primaryButtonClass, secondaryButtonClass } from '../ui/components'

const router = useRouter()
const profile = computed(() => loadProfile())

const goalLabel = computed(() => {
  const p = profile.value
  if (!p) return ''
  if (p.goal === 'mix') return 'Péter la forme'
  if (p.goal === 'mobilite') return 'mobilité'
  return 'équilibre'
})

const mobilityLabel = computed(() => {
  const p = profile.value
  if (!p) return ''
  return p.mobility === 'assis' ? 'assis' : 'assis'
})
</script>
