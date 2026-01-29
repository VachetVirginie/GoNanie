<template>
  <div class="space-y-4">
    <div class="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-white to-emerald-50 p-5 shadow-sm">
      <div class="space-y-2">
        <div class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
          Séance terminée
        </div>
        <h1 class="text-3xl font-extrabold tracking-tight">Bravo</h1>
        <p class="text-slate-700">Tu viens de prendre soin de toi. Continue doucement à ton rythme.</p>
      </div>
    </div>

    <div :class="cardClass">
      <div class="space-y-3">
        <button :class="primaryButtonClass + ' w-full'" type="button" @click="router.push('/')">
          Retour à l’accueil
        </button>
        <button :class="secondaryButtonClass + ' w-full'" type="button" @click="router.push('/session')">
          Refaire la séance
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { cardClass, primaryButtonClass, secondaryButtonClass } from '../ui/components'

const router = useRouter()
</script>
