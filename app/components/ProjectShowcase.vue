<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Building2, MapPin, Sparkles } from 'lucide-vue-next'

const projects = [
  {
    id: 'nordic-pavilion',
    title: 'The Nordic Architectural Pavilion',
    location: 'Copenhagen, Denmark',
    architect: 'Studio Bjørn & Lind',
    stone: 'Sinai Pearl Velvet (800m² Honed Slabs)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400',
    year: '2025',
    desc: 'An immersive exhibition pavilion designed to celebrate sustainable minimalist materials. Over 800 square meters of Egyptian Sinai Pearl limestone were utilized for monolithic flooring and a floating sculptural staircase.'
  },
  {
    id: 'villa-al-mansour',
    title: 'Villa Al-Mansour Private Residence',
    location: 'Riyadh, Saudi Arabia',
    architect: 'Atelier Desert & Form',
    stone: 'Galala Classic Ivory (3D Fluted Wall Cladding)',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400',
    year: '2024',
    desc: 'An expansive private estate featuring custom 3D linear fluted Galala limestone across double-height living spaces and an outdoor infinity pool coping engineered for extreme heat resilience.'
  },
  {
    id: 'milan-boutique',
    title: 'Via Montenapoleone Luxury Boutique',
    location: 'Milan, Italy',
    architect: 'Studio Varese & Partners',
    stone: 'Nero Aswan Granite & Sahara Noir',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1400',
    year: '2025',
    desc: 'High-fashion retail flagship in central Milan. Monolithic display pedestals sculpted from solid Nero Aswan granite blocks paired with book-matched Sahara Noir marble feature walls.'
  }
]
</script>

<template>
  <section id="projects" class="py-24 sm:py-36 bg-[#FFFFFF] border-b border-[#E4DDD3]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div>
          <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B08B57] block mb-3">
            Global Architectural Presence
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight">
            Selected <span class="italic text-[#B08B57]">Architectural</span> Commissions
          </h2>
        </div>
        <p class="text-sm sm:text-base text-[#666666] max-w-lg">
          We collaborate directly with leading international architecture studios to supply custom stone monoliths, cut-to-size cladding, and book-matched slabs.
        </p>
      </div>

      <!-- Projects Asymmetrical List -->
      <div class="flex flex-col gap-16 sm:gap-24">
        <div 
          v-for="(proj, idx) in projects" 
          :key="proj.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
        >
          <!-- Project Image (7 Cols - alternating) -->
          <div 
            class="lg:col-span-7 relative rounded-[24px] overflow-hidden bg-[#F4F1EA] border border-[#E4DDD3] shadow-luxury"
            :class="idx % 2 === 1 ? 'lg:order-2' : ''"
          >
            <div class="h-[360px] sm:h-[480px] overflow-hidden">
              <img 
                :src="proj.image" 
                :alt="proj.title"
                class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div class="absolute top-6 left-6 bg-[#FFFFFF]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E4DDD3]/60 flex items-center gap-2 shadow-sm">
              <MapPin class="w-3.5 h-3.5 text-[#B08B57]" />
              <span class="text-[11px] font-semibold tracking-wider text-[#2B2B2B] uppercase">{{ proj.location }}</span>
            </div>
            <div class="absolute bottom-6 right-6 bg-[#2B2B2B] text-[#FFFFFF] font-mono text-xs px-3.5 py-1.5 rounded-full shadow-md">
              Commission {{ proj.year }}
            </div>
          </div>

          <!-- Project Description (5 Cols) -->
          <div class="lg:col-span-5 flex flex-col justify-center" :class="idx % 2 === 1 ? 'lg:order-1' : ''">
            <span class="text-xs font-mono text-[#B08B57] uppercase tracking-widest block mb-2 font-semibold">
              0{{ idx + 1 }} // {{ proj.architect }}
            </span>
            <h3 class="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight mb-4 group-hover:text-[#B08B57] transition-colors">
              {{ proj.title }}
            </h3>
            
            <div class="p-4 rounded-[18px] bg-[#F4F1EA] border border-[#E4DDD3] mb-6 inline-block">
              <span class="text-[10px] uppercase tracking-wider text-[#666666] block mb-0.5">Primary Surface Material:</span>
              <span class="text-xs font-semibold text-[#2B2B2B] flex items-center gap-2">
                <Sparkles class="w-3.5 h-3.5 text-[#B08B57]" /> {{ proj.stone }}
              </span>
            </div>

            <p class="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
              {{ proj.desc }}
            </p>

            <div>
              <a 
                href="#sample-box"
                class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2B2B2B] hover:text-[#B08B57] transition-colors group/link"
              >
                <span>Specify This Stone For Your Project</span>
                <ArrowUpRight class="w-4 h-4 text-[#B08B57] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
