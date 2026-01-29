<template>
  <div class="space-y-4" v-if="profile">
    <div :class="'rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 ' + theme.heroTo">
      <div class="flex items-start justify-between gap-3">
        <div class="space-y-1">
          <div :class="'inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ' + theme.chip">
            Séance du jour
          </div>
          <div class="text-2xl font-extrabold tracking-tight">{{ programLabel }}</div>
          <div class="text-slate-700">Exercice {{ idx + 1 }} / {{ total }}</div>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
          {{ profile.mobility === 'assis' ? 'Mode assis' : 'Mode debout' }}
        </div>
      </div>
      <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div :class="'h-2 rounded-full bg-gradient-to-r ' + theme.progress" :style="{ width: progressPct + '%' }" />
      </div>
    </div>

    <div :class="cardClass">
      <div class="space-y-3">
        <div class="text-sm font-semibold text-slate-600">À faire maintenant</div>
        <div class="text-2xl font-extrabold tracking-tight">{{ ex.title }}</div>

        <div :class="'rounded-3xl border p-4 shadow-sm ' + theme.consigneCard">
          <div class="flex items-center justify-between gap-3">
            <div :class="'inline-flex items-center rounded-full px-3 py-1 text-sm font-extrabold ' + theme.consignePill">
              Consigne
            </div>
          </div>
          <div :class="'mt-3 rounded-2xl border bg-white p-4 ' + theme.consigneInner">
            <div :class="'border-l-4 pl-4 text-2xl font-extrabold leading-8 tracking-tight text-slate-900 ' + theme.consigneLeft">
              {{ variant }}
            </div>
          </div>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5">
          <div class="flex items-center justify-between gap-3">
            <div class="text-sm font-semibold text-slate-600">Conseil</div>
            <div :class="'rounded-full px-3 py-1 text-sm font-semibold ' + theme.modePill">
              {{ profile.mobility === 'assis' ? 'Assis' : 'Debout' }}
            </div>
          </div>
          <div class="mt-2 text-lg font-semibold leading-7 text-slate-900">{{ ex.instructions }}</div>
        </div>
      </div>
    </div>

    <div :class="cardClass">
      <div class="space-y-3">
        <div :class="'rounded-3xl border bg-white p-4 shadow-sm shadow-slate-900/5 ' + theme.timerCard">
          <div class="flex items-center justify-between gap-3">
            <div>
              <div class="text-sm font-semibold text-slate-600">Temps restant</div>
              <div class="mt-1 text-6xl font-extrabold tracking-tight tabular-nums text-slate-900">{{ mmss }}</div>
            </div>
            <div :class="'rounded-2xl px-3 py-2 text-sm font-extrabold shadow-sm ring-1 ring-white/20 ' + theme.timerPill">
              {{ running ? 'EN COURS' : 'PAUSE' }}
            </div>
          </div>

          <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div :class="'h-2 rounded-full bg-gradient-to-r ' + theme.progress" :style="{ width: progressPct + '%' }" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button
            :class="'w-full rounded-2xl px-4 py-4 text-xl font-extrabold text-white shadow-sm transition active:translate-y-px ' + theme.primaryButton"
            type="button"
            @click="running = !running"
          >
            {{ running ? 'Pause' : 'Démarrer' }}
          </button>
          <button
            :class="secondaryButtonClass + ' w-full min-w-0 py-4 text-lg sm:text-xl whitespace-nowrap'"
            type="button"
            @click="restart"
          >
            Relancer
          </button>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button
            :class="secondaryButtonClass + ' w-full py-4 text-xl'"
            type="button"
            @click="prev"
            :disabled="idx === 0"
          >
            Précédent
          </button>
          <button
            :class="primaryButtonClass + ' w-full py-4 text-xl'"
            type="button"
            @click="next"
          >
            {{ isLast ? 'Terminer' : 'Suivant' }}
          </button>
        </div>

        <button
          class="w-full rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-xl font-semibold text-red-800"
          type="button"
          @click="stopNow"
        >
          Arrêt immédiat
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { loadProfile } from '../domain/profile'
import { getSessionByProgram } from '../domain/session'
import { cardClass, primaryButtonClass, secondaryButtonClass } from '../ui/components'

const router = useRouter()
const route = useRoute()
const profile = loadProfile()

if (!profile) {
  router.replace('/onboarding')
}

const idx = ref(0)
const running = ref(false)
const remaining = ref(0)

const programId = computed(() => {
  const q = route.query.program
  return typeof q === 'string' ? q : null
})

const exercises = computed(() => getSessionByProgram(programId.value))

const total = computed(() => exercises.value.length)

const programLabel = computed(() => {
  switch (programId.value) {
    case 'circulation_assis':
      return 'Circulation (assis)'
    case 'renfo_doux_assis':
      return 'Renforcement doux (assis)'
    case 'relaxation_assis':
      return 'Relaxation (assis)'
    case 'mix':
    default:
      return 'Séance mix'
  }
})

const theme = computed(() => {
  switch (programId.value) {
    case 'circulation_assis':
      return {
        heroTo: '',
        chip: 'bg-emerald-50 text-emerald-900',
        progress: 'from-emerald-600 to-teal-500',
        blob: 'bg-emerald-400',
        consigneCard: 'border-emerald-200 bg-emerald-50/40',
        consignePill: 'bg-emerald-600 text-white',
        consigneInner: 'border-emerald-100',
        consigneLeft: 'border-emerald-600',
        modePill: 'bg-emerald-50 text-emerald-900',
        timerCard: 'border-emerald-200',
        timerPill: 'bg-emerald-600 text-white',
        primaryButton: 'bg-gradient-to-r from-emerald-600 to-teal-500 shadow-emerald-600/20',
      }
    case 'renfo_doux_assis':
      return {
        heroTo: '',
        chip: 'bg-fuchsia-50 text-fuchsia-900',
        progress: 'from-violet-600 to-fuchsia-500',
        blob: 'bg-fuchsia-400',
        consigneCard: 'border-fuchsia-200 bg-fuchsia-50/40',
        consignePill: 'bg-violet-600 text-white',
        consigneInner: 'border-fuchsia-100',
        consigneLeft: 'border-violet-600',
        modePill: 'bg-fuchsia-50 text-fuchsia-900',
        timerCard: 'border-fuchsia-200',
        timerPill: 'bg-violet-600 text-white',
        primaryButton: 'bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-violet-600/20',
      }
    case 'relaxation_assis':
      return {
        heroTo: '',
        chip: 'bg-amber-50 text-amber-900',
        progress: 'from-amber-500 to-orange-500',
        blob: 'bg-orange-400',
        consigneCard: 'border-amber-200 bg-amber-50/40',
        consignePill: 'bg-orange-600 text-white',
        consigneInner: 'border-amber-100',
        consigneLeft: 'border-orange-600',
        modePill: 'bg-amber-50 text-amber-900',
        timerCard: 'border-amber-200',
        timerPill: 'bg-orange-600 text-white',
        primaryButton: 'bg-gradient-to-r from-amber-500 to-orange-500 shadow-amber-600/20',
      }
    case 'mix':
    default:
      return {
        heroTo: '',
        chip: 'bg-blue-50 text-blue-800',
        progress: 'from-blue-600 to-sky-400',
        blob: 'bg-sky-400',
        consigneCard: 'border-blue-200 bg-blue-50/40',
        consignePill: 'bg-blue-600 text-white',
        consigneInner: 'border-blue-100',
        consigneLeft: 'border-blue-600',
        modePill: 'bg-blue-50 text-blue-800',
        timerCard: 'border-blue-200',
        timerPill: 'bg-blue-600 text-white',
        primaryButton: 'bg-gradient-to-r from-blue-600 to-sky-500 shadow-blue-600/20',
      }
  }
})

const progressPct = computed(() => {
  if (total.value <= 1) return 0
  return Math.round((idx.value / (total.value - 1)) * 100)
})

const ex = computed(() => exercises.value[idx.value])
const isLast = computed(() => idx.value === total.value - 1)

const variant = computed(() => {
  if (!profile) return ''
  const seated = ex.value?.variantSeated ?? ''
  const standing = ex.value?.variantStanding ?? ''

  if (profile.mobility === 'assis') {
    return seated || standing
  }

  return standing || seated
})

const mmss = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = String(remaining.value % 60).padStart(2, '0')
  return `${m}:${s}`
})

let timer: number | null = null

function clearTimer() {
  if (timer !== null) {
    window.clearInterval(timer)
    timer = null
  }
}

watch(idx, () => {
  running.value = false
  remaining.value = ex.value?.durationSec ?? 0
  clearTimer()
})

watch(
  exercises,
  () => {
    idx.value = 0
    running.value = false
    remaining.value = exercises.value[0]?.durationSec ?? 0
    clearTimer()
  },
  { immediate: true },
)

watch(running, (isRunning: boolean) => {
  if (!isRunning) {
    clearTimer()
    return
  }

  clearTimer()
  timer = window.setInterval(() => {
    remaining.value = Math.max(0, remaining.value - 1)
    if (remaining.value <= 0) {
      running.value = false
      clearTimer()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  clearTimer()
})

function restart() {
  running.value = false
  remaining.value = ex.value?.durationSec ?? 0
}

function prev() {
  idx.value = Math.max(0, idx.value - 1)
}

function next() {
  if (!isLast.value) idx.value = idx.value + 1
  else router.push('/done')
}

function stopNow() {
  running.value = false
  router.push('/stop')
}
</script>
