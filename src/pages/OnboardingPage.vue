<template>
  <div class="space-y-4">
    <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 ring-1 ring-black/5">
      <div class="space-y-2">
        <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800">
          Étape 1/1
        </div>
        <h1 class="text-3xl font-extrabold tracking-tight">Ton profil</h1>
        <p class="text-slate-700">Quelques infos pour adapter la séance. Modifiable à tout moment.</p>
      </div>
    </div>

    <div :class="cardClass">
      <form class="space-y-4" @submit.prevent="onSubmit">
        <div class="space-y-2">
          <div class="text-base font-semibold text-slate-900">Prénom</div>
          <input
            v-model="firstName"
            :class="inputClass + ' bg-white/90'"
            placeholder="Ex: Marie"
            autocomplete="given-name"
          />
        </div>

        <div class="space-y-2">
          <div class="text-base font-semibold text-slate-900">Âge</div>
          <input v-model="age" :class="inputClass + ' bg-white/90'" inputmode="numeric" pattern="[0-9]*" />
          <div v-if="!ageValid" class="text-base font-medium text-red-700">Âge invalide (50–110).</div>
        </div>

        <button :class="primaryButtonClass + ' w-full'" type="submit" :disabled="!nameValid || !ageValid">
          Enregistrer et démarrer
        </button>
        <button :class="secondaryButtonClass + ' w-full'" type="button" @click="router.push('/')">Retour</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Profile } from '../domain/profile'
import { loadProfile, saveProfile } from '../domain/profile'
import { cardClass, inputClass, primaryButtonClass, secondaryButtonClass } from '../ui/components'

const router = useRouter()
const existing = loadProfile()

const firstName = ref(existing?.firstName ?? '')
const age = ref(String(existing?.age ?? 70))

const parsedAge = computed(() => Number(age.value))
const ageValid = computed(() => Number.isFinite(parsedAge.value) && parsedAge.value >= 50 && parsedAge.value <= 110)
const nameValid = computed(() => firstName.value.trim().length >= 2)

function onSubmit() {
  if (!nameValid.value || !ageValid.value) return

  const p: Profile = {
    firstName: firstName.value.trim(),
    age: parsedAge.value,
    goal: existing?.goal ?? 'mix',
    mobility: existing?.mobility ?? 'assis',
    painLevel: existing?.painLevel ?? 2,
  }

  saveProfile(p)
  router.push('/')
}
</script>
