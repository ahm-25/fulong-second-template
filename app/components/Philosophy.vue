<script setup lang="ts">
import { ref } from 'vue'
import { Layers, Cpu, Sun, Sparkles, Eye, CheckCircle2 } from 'lucide-vue-next'

const selectedFinish = ref('fluted')

const finishes = {
  honed: {
    title: 'Honed Velvet Finish',
    desc: 'A matte, satiny surface that absorbs light softly. Ideal for Scandinavian minimalist flooring and barefoot touch in luxury bathroom spas.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    tactile: 'Silky smooth, matte, non-reflective, warm underfoot.'
  },
  fluted: {
    title: '3D Linear Fluted Carving',
    desc: 'Inspired by Italian design houses like Salvatori. Precision 5-axis CNC grooves that create rhythmic shadows and dramatic architectural accent walls.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    tactile: 'Rhythmic, architectural depth, dynamic play of light and shadow.'
  },
  leathered: {
    title: 'Antique Leathered Texture',
    desc: 'Diamond-brushed texture that enhances the natural crystallization and fossilized grain of Sinai limestone with high slip-resistance.',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    tactile: 'Textured organic grain, matte, slip-resistant, highly durable.'
  },
  polished: {
    title: 'Mirror Polished Monolith',
    desc: 'A high-gloss reflective finish that deepens the inherent color contrast of Egyptian granite and marble, creating a glass-like jewel surface.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    tactile: 'High gloss, crystalline reflection, zero friction, vibrant contrast.'
  }
}

const pillars = [
  {
    icon: Layers,
    title: '01. Raw Geological Heritage',
    subtitle: '50 Million Years of Crystallization',
    desc: 'Our Sinai Pearl and Galala quarries were formed in warm ancient Eocene seas. Every slab features organic crystallization, subtle fossilized flora, and timeless structural density.'
  },
  {
    icon: Cpu,
    title: '02. 5-Axis CNC Precision',
    subtitle: 'Italian Robotic Sculpting',
    desc: 'We combine handcrafted Egyptian stonemasonry with state-of-the-art Italian 5-axis CNC waterjet and wire-saw mills, achieving tolerances below 0.2mm for seamless architectural cladding.'
  },
  {
    icon: Sun,
    title: '03. Sustainable Extraction',
    subtitle: 'Zero-Waste Closed-Loop Milling',
    desc: 'True luxury respects origin. Our Suez finishing facility operates on 100% solar energy with a closed-loop water filtration system that recycles 98% of quarry cutting water.'
  }
]
</script>

<template>
  <section id="philosophy" class="py-20 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E4DDD3]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Quote Header -->
      <div class="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
        <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B08B57] block mb-4">
          The Atelier Doctrine — Warm Minimal Luxury
        </span>
        <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#2B2B2B] font-light leading-tight mb-8">
          “A stone is not merely extracted; <br class="hidden sm:inline" />it is <span class="italic text-[#B08B57]">uncovered</span>. In every block lies geological history waiting to be revealed.”
        </h2>
        <div class="w-16 h-[1px] bg-[#B08B57] mx-auto mb-6"></div>
        <p class="text-sm sm:text-base text-[#666666] max-w-xl mx-auto font-normal">
          We reject mass commodity manufacturing. Our studio approaches Egyptian natural stone as an artistic architectural medium—calm, timeless, and tactile.
        </p>
      </div>

      <!-- 3 Architectural Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div 
          v-for="(pillar, idx) in pillars" 
          :key="idx"
          class="p-8 sm:p-10 rounded-[24px] bg-[#F4F1EA]/60 border border-[#E4DDD3] transition-all duration-500 hover:bg-[#FFFFFF] hover:shadow-luxury hover:-translate-y-1 group"
        >
          <div class="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E4DDD3] flex items-center justify-center text-[#B08B57] mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#B08B57] transition-all duration-300">
            <component :is="pillar.icon" class="w-6 h-6" />
          </div>
          <span class="text-[11px] font-mono text-[#B08B57] font-semibold tracking-wider block mb-1">
            {{ pillar.subtitle }}
          </span>
          <h3 class="font-editorial text-2xl font-bold text-[#2B2B2B] mb-3">
            {{ pillar.title }}
          </h3>
          <p class="text-sm text-[#666666] leading-relaxed">
            {{ pillar.desc }}
          </p>
        </div>
      </div>

      <!-- Interactive Tactile Finish Showcase -->
      <div class="rounded-[24px] bg-[#F4F1EA] p-6 sm:p-10 lg:p-12 border border-[#E4DDD3] shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Info & Tabs (6 Cols) -->
          <div class="lg:col-span-6 flex flex-col justify-center">
            <span class="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B08B57] mb-3">
              <Eye class="w-3.5 h-3.5" /> Interactive Surface Sculpting
            </span>
            <h3 class="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] leading-tight mb-4">
              Tactile Surface Finishes
            </h3>
            <p class="text-sm sm:text-base text-[#666666] mb-8 leading-relaxed">
              The same block of Sinai Pearl limestone can take on radically different personalities depending on our studio finishing technique. Toggle between finishes to explore:
            </p>

            <!-- Finish Selector Capsules -->
            <div class="grid grid-cols-2 gap-3 mb-8">
              <button 
                v-for="(item, key) in finishes" 
                :key="key"
                @click="selectedFinish = key"
                class="p-4 rounded-[18px] text-left transition-all duration-300 border flex flex-col gap-1"
                :class="selectedFinish === key 
                  ? 'bg-[#FFFFFF] border-[#B08B57] shadow-md -translate-y-0.5' 
                  : 'bg-[#FFFFFF]/60 border-[#E4DDD3] hover:bg-[#FFFFFF] hover:border-[#2B2B2B]'"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold font-editorial text-[#2B2B2B] capitalize">{{ item.title }}</span>
                  <span class="w-2 h-2 rounded-full" :class="selectedFinish === key ? 'bg-[#B08B57]' : 'bg-transparent'"></span>
                </div>
                <span class="text-[10px] text-[#666666] line-clamp-1">{{ item.tactile }}</span>
              </button>
            </div>

            <div class="p-4 rounded-[18px] bg-[#FFFFFF] border border-[#E4DDD3] flex items-start gap-3">
              <CheckCircle2 class="w-5 h-5 text-[#B08B57] shrink-0 mt-0.5" />
              <div>
                <h4 class="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider mb-1">
                  {{ finishes[selectedFinish as keyof typeof finishes].title }}
                </h4>
                <p class="text-xs text-[#666666]">
                  {{ finishes[selectedFinish as keyof typeof finishes].desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right Interactive Image Display (6 Cols) -->
          <div class="lg:col-span-6 relative">
            <div class="relative h-[340px] sm:h-[440px] rounded-[20px] overflow-hidden bg-[#FFFFFF] border border-[#E4DDD3] shadow-luxury">
              <Transition 
                mode="out-in"
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-105"
              >
                <img 
                  :key="selectedFinish"
                  :src="finishes[selectedFinish as keyof typeof finishes].image" 
                  :alt="finishes[selectedFinish as keyof typeof finishes].title"
                  class="w-full h-full object-cover"
                />
              </Transition>
              <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              
              <div class="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md p-4 rounded-[16px] border border-[#E4DDD3] shadow-lg flex items-center justify-between">
                <span class="text-xs font-semibold text-[#2B2B2B]">
                  Tactile Impression: <span class="font-normal text-[#666666]">{{ finishes[selectedFinish as keyof typeof finishes].tactile }}</span>
                </span>
                <span class="px-3 py-1 rounded-full bg-[#B08B57] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
