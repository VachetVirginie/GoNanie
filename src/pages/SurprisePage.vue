<template>
  <div class="space-y-4">
    <div class="rounded-3xl border border-rose-200/60 bg-gradient-to-br from-white via-white to-rose-50 p-5 shadow-sm">
      <div class="space-y-2">
        <div class="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-800">
          Surprise
        </div>
        <h1 class="text-3xl font-extrabold tracking-tight">Je t’aime !</h1>
      </div>
    </div>

    <div :class="cardClass">
      <div class="space-y-3">
        <button :class="primaryButtonClass + ' w-full'" type="button" @click="router.push('/')">
          Retour à l’accueil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { cardClass, primaryButtonClass } from '../ui/components'

const router = useRouter()
</script>
