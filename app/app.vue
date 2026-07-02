<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import TrustedWorldwide from './components/TrustedWorldwide.vue'
import About from './components/About.vue'
import Philosophy from './components/Philosophy.vue'
import HorizontalProductSlider from './components/HorizontalProductSlider.vue'
import LuxuryMasonryGallery from './components/LuxuryMasonryGallery.vue'
import LuxuryPortfolio from './components/LuxuryPortfolio.vue'
import FactoryExperience from './components/FactoryExperience.vue'
import BespokeServices from './components/BespokeServices.vue'
import PremiumCTA from './components/PremiumCTA.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  console.log('Fulong Egypt — B2B Marble & Granite Quarry Exporter initialized.')
})
</script>

<template>
  <div class="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#1E3A8A] selection:text-white">
    <Header />
    
    <main>
      <Hero />
      <TrustedWorldwide />
      <About />
      <Philosophy />
      <HorizontalProductSlider />
      <LuxuryMasonryGallery />
      <LuxuryPortfolio />
      <FactoryExperience />
      <BespokeServices />
      <PremiumCTA />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Ensure clean transitions across the layout */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
