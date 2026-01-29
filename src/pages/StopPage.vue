<template>
  <div class="space-y-4">
    <div :class="cardClass">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-800">
          Pause sécurité
        </div>
        <h1 class="text-3xl font-extrabold tracking-tight">Tu as arrêté la séance</h1>
        <div class="rounded-2xl border border-red-200 bg-red-50 p-3">
          <div class="text-base font-semibold text-red-900">Si tu ne te sens pas bien</div>
          <p class="mt-1 text-slate-700">
            Douleur inhabituelle, vertiges, malaise, ou essoufflement important: repose-toi et contacte un proche ou un professionnel de santé.
          </p>
        </div>
      </div>
    </div>

    <div :class="cardClass">
      <div class="space-y-3">
        <button :class="primaryButtonClass + ' w-full'" type="button" @click="router.push('/')">
          Retour à l’accueil
        </button>
        <button :class="secondaryButtonClass + ' w-full'" type="button" @click="router.push('/onboarding')">
          Modifier le profil
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
