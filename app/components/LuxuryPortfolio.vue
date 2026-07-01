<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, MapPin, Layers, Building2, Sparkles, CheckCircle2, ShieldCheck, Download } from 'lucide-vue-next'

const activeFilter = ref('All Installations')
const selectedProject = ref<any | null>(null)

const filters = [
  'All Installations',
  'Residential Villas',
  'Commercial Plazas',
  'Cultural & Hospitality'
]

const portfolioProjects = [
  {
    id: 'nordic-opera-villa',
    title: 'The Nordic Opera Villa',
    category: 'Residential Villas',
    country: 'Copenhagen, Denmark',
    stoneType: 'Sinai Pearl Dolomitic Limestone',
    finish: 'Honed Velvet (12mm & 20mm Slabs)',
    architect: 'Studio Nordic Architecture',
    scale: '2,800 m² Monoliths',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[520px] sm:h-[640px]',
    desc: 'An uncompromising waterfront residence in Copenhagen. Specified with vein-matched Sinai Pearl dolomitic limestone across all exterior cladding, heated interior flooring, and monolithic cantilevered kitchen islands.'
  },
  {
    id: 'king-fahd-financial-plaza',
    title: 'King Fahd Financial Plaza',
    category: 'Commercial Plazas',
    country: 'Riyadh, Saudi Arabia',
    stoneType: 'Red Aswan & Nero Aswan Granite',
    finish: 'Flamed & Bush-Hammered Monumental',
    architect: 'Al-Mansour Engineering Group',
    scale: '14,500 m² Paving & Facades',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[440px] sm:h-[500px]',
    desc: 'A high-traffic financial institution courtyard utilizing 50mm thick Red Aswan and Nero Aswan volcanic granite paving. Engineered for extreme thermal fluctuations and heavy vehicular loading.'
  },
  {
    id: 'palazzo-varese-residence',
    title: 'Palazzo Varese Private Residence',
    category: 'Residential Villas',
    country: 'Milan, Italy',
    stoneType: 'Galala Classic Ivory Marble',
    finish: 'Book-Matched Mirror Polished',
    architect: 'Varese & Partners Studio',
    scale: '1,650 m² Book-Matched Slabs',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[580px] sm:h-[680px]',
    desc: 'A historic Milanese palazzo renovation featuring 30-ton book-matched Galala Classic Ivory monoliths in the double-height grand atrium and master bath suites.'
  },
  {
    id: 'dubai-palm-penthouse',
    title: 'The Dubai Palm Sky Penthouse',
    category: 'Cultural & Hospitality',
    country: 'Dubai, UAE',
    stoneType: 'Sahara Noir Gold Vein Marble',
    finish: '5-Axis Waterjet Fluted Cladding',
    architect: 'Emirates Architectural Group',
    scale: '3,200 m² Custom Slabs',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[460px] sm:h-[540px]',
    desc: 'A VIP sky penthouse overlooking the Palm Jumeirah. Boasts custom 3D linear fluted Sahara Noir feature walls with embedded ambient lighting channels.'
  },
  {
    id: 'st-james-executive-towers',
    title: 'St. James Executive Towers',
    category: 'Commercial Plazas',
    country: 'London, United Kingdom',
    stoneType: 'Triesta Grigio Alabaster Stone',
    finish: 'Brushed Antique & Sandblasted',
    architect: 'Foster Designs & Build',
    scale: '8,900 m² Lobby & Columns',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[600px] sm:h-[700px]',
    desc: 'A monumental Mayfair corporate lobby featuring soaring 8-meter columns clad in vein-matched Triesta Grigio architectural stone with antique brushed texture.'
  },
  {
    id: 'atelier-scandinavian-gallery',
    title: 'Atelier Minimalist Art Gallery',
    category: 'Cultural & Hospitality',
    country: 'Stockholm, Sweden',
    stoneType: 'Sinai Pearl Honed Velvet',
    finish: '60x120cm Calibrated Micro-Bevel Tiles',
    architect: 'Scandinavian Stone Form',
    scale: '5,400 m² Gallery Floors',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[480px] sm:h-[560px]',
    desc: 'An international contemporary art museum in Stockholm where seamless, satin-matte Sinai Pearl floors provide a neutral, light-diffusing canvas for world sculpture.'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All Installations') return portfolioProjects
  return portfolioProjects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <section id="projects" class="py-28 sm:py-40 bg-[#F4F1EA] border-b border-[#E4DDD3] relative overflow-hidden">
    <!-- Subtle architectural background grid line -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#2B2B2B 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Editorial Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#B08B57] block mb-3">
            Global Architectural Portfolio
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight">
            Monolithic <span class="italic text-[#B08B57]">Installations</span> & Residences.
          </h2>
        </div>
        <p class="text-sm sm:text-base text-[#666666] max-w-lg leading-relaxed">
          An asymmetrical showcase of our international stone specifications across luxury residences, cultural institutions, and commercial plazas—each sculpted from custom-cut Sinai and Galala monoliths.
        </p>
      </div>

      <!-- Filter Capsule Bar -->
      <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-14 no-scrollbar">
        <button 
          v-for="flt in filters" 
          :key="flt"
          @click="activeFilter = flt"
          class="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-300 border flex items-center gap-2.5"
          :class="activeFilter === flt 
            ? 'bg-[#2B2B2B] text-[#FFFFFF] border-[#2B2B2B] shadow-md -translate-y-0.5' 
            : 'bg-[#FFFFFF] text-[#666666] border-[#E4DDD3] hover:border-[#B08B57] hover:text-[#2B2B2B]'"
        >
          <span>{{ flt }}</span>
          <span v-if="activeFilter === flt" class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
        </button>
      </div>

      <!-- Asymmetrical Masonry Project Grid (CSS Multi-Columns avoiding equal heights) -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 sm:gap-10 space-y-8 sm:space-y-10">
        <div 
          v-for="proj in filteredProjects" 
          :key="proj.id"
          class="break-inside-avoid relative rounded-[32px] overflow-hidden group cursor-pointer border border-[#E4DDD3] shadow-luxury transition-all duration-700 hover:shadow-luxury-hover hover:-translate-y-2 bg-[#2B2B2B]"
          :class="proj.heightClass"
          @click="selectedProject = proj"
        >
          <!-- Large Architecture Photo -->
          <img 
            :src="proj.image" 
            :alt="proj.title"
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <!-- Base Gradient Overlay (always visible for contrast) -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#2B2B2B]/20 to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>

          <!-- Top Country & Category Pill (Always Visible) -->
          <div class="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
            <span class="bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E4DDD3]/60 text-[10px] font-mono font-bold text-[#2B2B2B] uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <MapPin class="w-3 h-3 text-[#B08B57]" /> {{ proj.country }}
            </span>
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#FFFFFF] font-medium opacity-80 drop-shadow hidden sm:inline">
              {{ proj.category }}
            </span>
          </div>

          <!-- Bottom Title Bar (Visible when NOT hovered) -->
          <div class="absolute bottom-6 left-6 right-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
              Atelier Case Study
            </span>
            <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight drop-shadow-md">
              {{ proj.title }}
            </h3>
          </div>

          <!-- Hover Reveals Project Information with Elegant Animation -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/95 via-[#2B2B2B]/85 to-[#2B2B2B]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 z-20">
            
            <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <!-- Country & City -->
              <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B08B57] font-semibold block mb-1">
                {{ proj.country }} // {{ proj.category }}
              </span>

              <!-- Project Name -->
              <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight mb-4">
                {{ proj.title }}
              </h3>

              <!-- Stone Type & Finish Info Box -->
              <div class="bg-[#FFFFFF]/10 backdrop-blur-md p-4 rounded-[20px] border border-[#FFFFFF]/20 mb-4">
                <div class="flex items-center gap-2 mb-1">
                  <Layers class="w-3.5 h-3.5 text-[#B08B57]" />
                  <span class="text-[9px] uppercase tracking-widest text-[#E4DDD3]/80 font-semibold">Specified Stone:</span>
                </div>
                <span class="font-mono text-xs sm:text-sm font-bold text-[#FFFFFF] block mb-1">
                  {{ proj.stoneType }}
                </span>
                <span class="text-[11px] text-[#E4DDD3] block">
                  Finish: <span class="text-[#B08B57] font-medium">{{ proj.finish }}</span>
                </span>
              </div>

              <!-- Architect & Scale Details -->
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#E4DDD3] mb-6 border-b border-[#FFFFFF]/15 pb-4">
                <div>
                  <span class="text-[9px] uppercase tracking-wider text-[#E4DDD3]/60 block">Architectural Studio:</span>
                  <span class="font-medium text-[#FFFFFF] truncate block">{{ proj.architect }}</span>
                </div>
                <div>
                  <span class="text-[9px] uppercase tracking-wider text-[#E4DDD3]/60 block">Project Scale:</span>
                  <span class="font-mono font-medium text-[#B08B57] block">{{ proj.scale }}</span>
                </div>
              </div>

              <!-- "Explore Installation" Action Button -->
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B08B57] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] shadow-md transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#2B2B2B] group/btn">
                  <span>Explore Installation</span>
                  <ArrowUpRight class="w-4 h-4 text-[#FFFFFF] group-hover/btn:text-[#2B2B2B] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>

                <span class="text-[10px] font-mono uppercase tracking-wider text-[#FFFFFF]/60">
                  Case Study →
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

    <!-- Interactive Case Study Modal Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/70 backdrop-blur-sm" @click.self="selectedProject = null">
        <div class="bg-[#FFFFFF] rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#E4DDD3] shadow-2xl p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300">
          
          <button @click="selectedProject = null" class="absolute top-6 right-6 p-2 rounded-full bg-[#F4F1EA] text-[#2B2B2B] hover:bg-[#B08B57] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-6 rounded-[28px] overflow-hidden bg-[#F4F1EA] h-80 lg:h-full min-h-[320px]">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
            </div>

            <div class="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                  {{ selectedProject.country }} // {{ selectedProject.category }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
                  {{ selectedProject.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                  {{ selectedProject.desc }}
                </p>

                <!-- Technical Specification Summary Box -->
                <div class="bg-[#F4F1EA] rounded-[24px] p-5 border border-[#E4DDD3] mb-6 space-y-3">
                  <div class="flex items-center justify-between border-b border-[#E4DDD3]/60 pb-2.5">
                    <span class="text-xs text-[#666666] font-medium">Specified Stone:</span>
                    <span class="font-mono font-bold text-xs text-[#2B2B2B]">{{ selectedProject.stoneType }}</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-[#E4DDD3]/60 pb-2.5">
                    <span class="text-xs text-[#666666] font-medium">Surface Finish:</span>
                    <span class="font-mono font-bold text-xs text-[#B08B57]">{{ selectedProject.finish }}</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-[#E4DDD3]/60 pb-2.5">
                    <span class="text-xs text-[#666666] font-medium">Lead Studio:</span>
                    <span class="font-medium text-xs text-[#2B2B2B]">{{ selectedProject.architect }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-[#666666] font-medium">Installation Scale:</span>
                    <span class="font-mono font-bold text-xs text-[#2B2B2B]">{{ selectedProject.scale }}</span>
                  </div>
                </div>

                <!-- Provenance Tag -->
                <div class="flex items-center gap-2 text-xs text-[#666666] mb-6">
                  <CheckCircle2 class="w-4 h-4 text-[#B08B57]" />
                  <span>Sourced directly from Mount Sinai & Suez Atelier</span>
                </div>
              </div>

              <!-- Modal CTAs -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E4DDD3]">
                <a 
                  href="#sample-box"
                  @click="selectedProject = null"
                  class="flex-1 py-3.5 rounded-[20px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Request Project Sample Box</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
                <a 
                  href="#sample-box"
                  @click="selectedProject = null"
                  class="px-5 py-3.5 rounded-[20px] border border-[#E4DDD3] text-[#2B2B2B] text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#F4F1EA] flex items-center justify-center gap-1.5"
                >
                  <Download class="w-3.5 h-3.5 text-[#B08B57]" />
                  <span>Spec Sheet</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Transition>
  </section>
</template>
