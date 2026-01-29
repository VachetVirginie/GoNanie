<template>
  <div class="min-h-dvh bg-slate-50">
    <div class="mx-auto min-h-dvh max-w-md bg-slate-50 sm:max-w-lg sm:px-3 sm:py-3">
      <div class="min-h-dvh sm:rounded-[2.25rem] sm:border sm:border-slate-200 sm:bg-white sm:shadow-xl sm:shadow-slate-900/5">
        <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div class="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400" />
          <div class="flex items-center justify-between px-4 py-3">
            <div class="flex items-center gap-2">
              <div class="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 shadow-sm shadow-blue-600/25" />
              <div class="leading-tight">
                <div class="text-lg font-extrabold tracking-tight">{{ headerTitle }}</div>
                <div class="text-sm font-semibold text-slate-600">Mobilité & équilibre</div>
              </div>
            </div>
            <RouterLink class="text-base font-extrabold text-blue-700" to="/" aria-label="Retour à l'accueil">
              Accueil
            </RouterLink>
          </div>
        </header>

        <main class="px-4 py-5">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { loadProfile } from './domain/profile'

const profile = computed(() => loadProfile())

const headerTitle = computed(() => {
  const p = profile.value
  if (!p) return 'Go Nanie Go!'
  return `Go ${p.firstName} Go!`
})
</script>
