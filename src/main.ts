import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import OnboardingPage from './pages/OnboardingPage.vue'
import SessionPage from './pages/SessionPage.vue'
import StopPage from './pages/StopPage.vue'
import DonePage from './pages/DonePage.vue'
import './styles.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/onboarding', component: OnboardingPage },
    { path: '/session', component: SessionPage },
    { path: '/stop', component: StopPage },
    { path: '/done', component: DonePage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

createApp(App).use(router).mount('#root')
