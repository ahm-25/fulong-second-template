<script setup lang="ts">
import { ShieldCheck, Globe2, Sparkles, Building2 } from 'lucide-vue-next'

const partners = [
  { name: 'STUDIO NORDIC ARCHITECTURE', location: 'Copenhagen • Oslo', code: 'SN' },
  { name: 'VARESE & PARTNERS STUDIO', location: 'Milan • Rome', code: 'VP' },
  { name: 'AL-MANSOUR DEVELOPMENTS', location: 'Riyadh • Jeddah', code: 'AM' },
  { name: 'FOSTER DESIGNS & BUILD', location: 'London • United Kingdom', code: 'FB' },
  { name: 'METROPOLIS LUXURY SURFACES', location: 'New York • Miami', code: 'MS' },
  { name: 'EMIRATES ARCHITECTURAL GROUP', location: 'Dubai • Abu Dhabi', code: 'EA' },
  { name: 'ATELIER MEDITERRANEO', location: 'Barcelona • Athens', code: 'AM' },
  { name: 'SCANDINAVIAN STONE FORM', location: 'Stockholm • Sweden', code: 'SF' },
]

// Duplicate list for seamless infinite marquee loop
const marqueeList = [...partners, ...partners]
</script>

<template>
  <section class="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#E4DDD3] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Centered Title with Minimal Spacing -->
      <div class="text-center mb-8 sm:mb-10">
        <span class="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#666666] font-medium block mb-2">
          International Provenance & Export
        </span>
        <h3 class="font-editorial text-2xl sm:text-3xl text-[#2B2B2B] font-light tracking-wide">
          Trusted by Architecture Studios & Global Contractors Worldwide
        </h3>
      </div>

      <!-- Monochrome Logo Carousel with Subtle Edge Fade Mask -->
      <div class="relative w-full overflow-hidden py-4 marquee-container">
        
        <!-- Subtle gradient mask on left and right edges for smooth fade -->
        <div class="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none"></div>

        <!-- Animated Infinite Track -->
        <div class="flex items-center gap-12 sm:gap-16 lg:gap-20 w-max animate-marquee hover:[animation-play-state:paused]">
          <div 
            v-for="(partner, idx) in marqueeList" 
            :key="idx"
            class="flex items-center gap-3 sm:gap-4 group cursor-pointer opacity-40 hover:opacity-100 transition-all duration-500 hover:scale-105 shrink-0 grayscale hover:grayscale-0"
          >
            <!-- Minimalist Monochrome Emblem -->
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#2B2B2B]/40 flex items-center justify-center font-editorial font-bold text-xs sm:text-sm text-[#2B2B2B] group-hover:border-[#B08B57] group-hover:text-[#B08B57] group-hover:bg-[#F4F1EA] transition-all duration-300">
              {{ partner.code }}
            </div>

            <!-- Typographical Logo Text -->
            <div class="flex flex-col">
              <span class="font-editorial text-sm sm:text-base font-bold tracking-[0.12em] text-[#2B2B2B] uppercase leading-tight group-hover:text-[#B08B57] transition-colors">
                {{ partner.name }}
              </span>
              <span class="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] text-[#666666] leading-none mt-0.5">
                {{ partner.location }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Minimal Trust Badges Below Carousel -->
      <div class="mt-8 pt-6 border-t border-[#E4DDD3]/50 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#666666]">
        <span class="flex items-center gap-2">
          <ShieldCheck class="w-3.5 h-3.5 text-[#B08B57]" /> ASTM Standard Compliant
        </span>
        <span class="flex items-center gap-2">
          <Globe2 class="w-3.5 h-3.5 text-[#B08B57]" /> Direct Container Logistics
        </span>
        <span class="flex items-center gap-2">
          <Building2 class="w-3.5 h-3.5 text-[#B08B57]" /> Custom Millimeter Tolerances
        </span>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

/* Pause animation smoothly on hover for better UX */
.marquee-container:hover .animate-marquee {
  animation-play-state: paused;
}
</style>
