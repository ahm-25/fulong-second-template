<script setup lang="ts">
import { ref } from 'vue'
import { Mountain, Cpu, ShieldCheck, Globe2, ArrowRight } from 'lucide-vue-next'

const activeStep = ref(0)

const steps = [
  {
    step: '01',
    title: 'Diamond Wire Quarrying',
    subtitle: 'Mount Sinai & Red Sea Range',
    desc: 'We extract 30-ton monolith blocks using high-speed diamond wire saws. This non-explosive technique eliminates internal micro-fractures, ensuring maximum structural stability for cantilevered installations.',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    step: '02',
    title: 'Epoxy Vacuum Impregnation',
    subtitle: 'Suez Processing Facility',
    desc: 'Every stone block undergoes automated thermal vacuum drying followed by UV epoxy resin impregnation. This seals microscopic capillaries and guarantees 0% moisture penetration.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    step: '03',
    title: '5-Axis CNC & Robotic Sculpting',
    subtitle: 'Robotic Surface Profiling',
    desc: 'Our Italian Breton and Pedrini 5-axis CNC machines carve intricate 3D fluted textures, custom sink basins, and ultra-flat architectural panels with tolerances below 0.2mm.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    step: '04',
    title: 'Global Architectural Logistics',
    subtitle: 'Port of Suez to World Capitals',
    desc: 'Slabs are custom-cushioned and crated in fumigated Scandinavian pine. We ship directly from the Port of Suez to architectural job sites in London, Rotterdam, Dubai, Riyadh, and New York.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
  }
]

const stats = [
  { value: '500,000+', label: 'm² Annual Stone Production', icon: Mountain },
  { value: '12', label: 'Exclusive Egyptian Quarries', icon: ShieldCheck },
  { value: '45+', label: 'Global Export Destinations', icon: Globe2 },
  { value: '0.2mm', label: 'CNC Millimeter Precision', icon: Cpu },
]
</script>

<template>
  <section id="quarry" class="py-24 sm:py-36 bg-[#F4F1EA] border-b border-[#E4DDD3]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Section Intro -->
      <div class="max-w-3xl mb-20">
        <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B08B57] block mb-3">
          The Quarry & Factory Experience
        </span>
        <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight mb-6">
          From Egyptian <span class="italic text-[#B08B57]">Mountain Cliffs</span> to Architectural Slabs
        </h2>
        <p class="text-sm sm:text-base text-[#666666] leading-relaxed">
          We control the entire geological supply chain—from raw extraction in our exclusive Sinai and Galala quarries to robotic custom cutting in our 50,000 m² solar-powered facility in Suez.
        </p>
      </div>

      <!-- Live Statistics Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
        <div 
          v-for="(st, idx) in stats" 
          :key="idx"
          class="p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] border border-[#E4DDD3] shadow-sm flex flex-col justify-between hover:shadow-luxury hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#B08B57] mb-6">
            <component :is="st.icon" class="w-5 h-5" />
          </div>
          <div>
            <span class="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] tracking-tight block mb-1">
              {{ st.value }}
            </span>
            <span class="text-xs text-[#666666] uppercase tracking-wider font-medium">
              {{ st.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- Interactive Storytelling Timeline -->
      <div class="bg-[#FFFFFF] rounded-[24px] p-6 sm:p-10 lg:p-12 border border-[#E4DDD3] shadow-luxury">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Steps Navigation (5 Cols) -->
          <div class="lg:col-span-5 flex flex-col gap-3">
            <span class="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-semibold mb-2 block">
              The 4-Step Production Protocol
            </span>
            <button 
              v-for="(st, idx) in steps" 
              :key="st.step"
              @click="activeStep = idx"
              class="p-5 rounded-[20px] text-left transition-all duration-300 border flex items-center justify-between group"
              :class="activeStep === idx 
                ? 'bg-[#2B2B2B] text-[#FFFFFF] border-[#2B2B2B] shadow-md -translate-x-1' 
                : 'bg-[#F4F1EA]/60 text-[#2B2B2B] border-[#E4DDD3] hover:bg-[#F4F1EA] hover:border-[#B08B57]'"
            >
              <div class="flex items-center gap-4">
                <span class="font-mono text-sm font-bold opacity-60" :class="activeStep === idx ? 'text-[#B08B57]' : 'text-[#666666]'">
                  {{ st.step }}
                </span>
                <div class="flex flex-col">
                  <span class="font-editorial text-lg sm:text-xl font-bold leading-tight">
                    {{ st.title }}
                  </span>
                  <span class="text-[10px] uppercase tracking-wider opacity-70" :class="activeStep === idx ? 'text-[#E4DDD3]' : 'text-[#666666]'">
                    {{ st.subtitle }}
                  </span>
                </div>
              </div>
              <ArrowRight class="w-4 h-4 transition-transform duration-300" :class="activeStep === idx ? 'text-[#B08B57] translate-x-1' : 'text-[#E4DDD3] opacity-0 group-hover:opacity-100'" />
            </button>
          </div>

          <!-- Active Step Display (7 Cols) -->
          <div class="lg:col-span-7 relative">
            <div class="relative h-[340px] sm:h-[420px] rounded-[20px] overflow-hidden bg-[#F4F1EA] border border-[#E4DDD3] shadow-md">
              <Transition 
                mode="out-in"
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 translate-x-4"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-4"
              >
                <img 
                  :key="activeStep"
                  :src="steps[activeStep].image" 
                  :alt="steps[activeStep].title"
                  class="w-full h-full object-cover"
                />
              </Transition>
              <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/90 via-[#2B2B2B]/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span class="text-xs font-mono text-[#B08B57] font-semibold tracking-widest uppercase mb-1">
                  Step {{ steps[activeStep].step }} // {{ steps[activeStep].subtitle }}
                </span>
                <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-3">
                  {{ steps[activeStep].title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#E4DDD3] leading-relaxed max-w-xl">
                  {{ steps[activeStep].desc }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
