<template>
  <div class="space-y-4">
    <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 ring-1 ring-black/5">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800">
          <span class="h-2 w-2 rounded-full bg-blue-600" />
          Séances douces et progressives
        </div>

        <div v-if="profile" class="space-y-2">
          <div class="flex items-start justify-between gap-3">
            <h1 class="text-3xl font-extrabold tracking-tight">
              Bonjour <span class="text-blue-700">{{ profile.firstName }}</span>.
            </h1>
            <button type="button" :class="secondaryButtonClass + ' px-3 py-2 text-sm'" @click="router.push('/onboarding')">
              Profil
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
            <div class="text-lg font-semibold">Démarrer</div>
            <div class="mt-1 text-slate-700">
              {{ profile ? 'Votre prochaine séance est prête.' : 'Créez votre profil en moins d’une minute.' }}
            </div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
            {{ profile ? 'Prêt(e)' : 'Rapide' }}
          </div>
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
          <div class="grid gap-3">
            <button
              class="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-4 text-left text-xl font-extrabold text-white shadow-sm shadow-blue-600/20 transition active:translate-y-px"
              type="button"
              @click="router.push({ path: '/session', query: { program: 'mix' } })"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                    <div>Séance mix</div>
                    <div class="mt-1 text-sm font-semibold text-white/85">Mobilité + équilibre</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" class="h-6 w-6 opacity-90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
            <button
              class="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-4 text-left text-xl font-extrabold text-white shadow-sm shadow-emerald-600/20 transition active:translate-y-px"
              type="button"
              @click="router.push({ path: '/session', query: { program: 'circulation_assis' } })"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2c2.5 2.5 2.5 5.5 0 8" />
                      <path d="M12 22c-2.5-2.5-2.5-5.5 0-8" />
                      <path d="M2 12c2.5-2.5 5.5-2.5 8 0" />
                      <path d="M22 12c-2.5 2.5-5.5 2.5-8 0" />
                    </svg>
                  </div>
                  <div>
                    <div>Circulation</div>
                    <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" class="h-6 w-6 opacity-90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
            <button
              class="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-4 text-left text-xl font-extrabold text-white shadow-sm shadow-violet-600/20 transition active:translate-y-px"
              type="button"
              @click="router.push({ path: '/session', query: { program: 'renfo_doux_assis' } })"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M7 12h10" />
                      <path d="M9 7h6" />
                      <path d="M9 17h6" />
                      <path d="M4 12a2 2 0 0 1 2-2h1v4H6a2 2 0 0 1-2-2Z" />
                      <path d="M20 12a2 2 0 0 1-2 2h-1v-4h1a2 2 0 0 1 2 2Z" />
                    </svg>
                  </div>
                  <div>
                    <div>Renforcement doux</div>
                    <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" class="h-6 w-6 opacity-90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
            <button
              class="w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-4 text-left text-xl font-extrabold text-white shadow-sm shadow-sky-600/20 transition active:translate-y-px"
              type="button"
              @click="router.push({ path: '/session', query: { program: 'respiration' } })"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2c2.5 2.5 2.5 5.5 0 8" />
                      <path d="M12 22c-2.5-2.5-2.5-5.5 0-8" />
                      <path d="M2 12c2.5-2.5 5.5-2.5 8 0" />
                      <path d="M22 12c-2.5 2.5-5.5 2.5-8 0" />
                    </svg>
                  </div>
                  <div>
                    <div>Respiration</div>
                    <div class="mt-1 text-sm font-semibold text-white/85">Douce</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" class="h-6 w-6 opacity-90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
            <button
              class="w-full rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-4 text-left text-xl font-extrabold text-white shadow-sm shadow-amber-600/20 transition active:translate-y-px"
              type="button"
              @click="router.push({ path: '/session', query: { program: 'relaxation_assis' } })"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div class="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 21s-6-4.35-6-10a3.5 3.5 0 0 1 6-2 3.5 3.5 0 0 1 6 2c0 5.65-6 10-6 10Z" />
                    </svg>
                  </div>
                  <div>
                    <div>Relaxation</div>
                    <div class="mt-1 text-sm font-semibold text-white/85">Assis</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" class="h-6 w-6 opacity-90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
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
  if (p.goal === 'mix') return 'mix mobilité + équilibre'
  if (p.goal === 'mobilite') return 'mobilité'
  return 'équilibre'
})

const mobilityLabel = computed(() => {
  const p = profile.value
  if (!p) return ''
  return p.mobility === 'assis' ? 'assis' : 'debout'
})
</script>
