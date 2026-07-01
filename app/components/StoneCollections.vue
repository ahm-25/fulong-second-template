<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, Filter, Sparkles, SlidersHorizontal, Check, Shield, FileText } from 'lucide-vue-next'

const activeFilter = ref('All Surfaces')
const selectedStone = ref<any | null>(null)

const filters = [
  'All Surfaces',
  'Sinai Limestone',
  'Egyptian Granite',
  'Alabaster & Quartzite',
  'Bespoke Finishes'
]

const stones = [
  {
    id: 'sinai-pearl',
    name: 'Sinai Pearl Velvet',
    category: 'Sinai Limestone',
    origin: 'Mount Sinai Quarry, South Sinai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    absorption: '0.18%',
    density: '2,680 kg/m³',
    strength: '135 MPa',
    finishes: ['Honed Velvet', 'Antique Leathered', 'Bush-Hammered', 'Linear Fluted'],
    desc: 'The quintessential Egyptian dolomitic marble. Known for its warm beige-grey earth tones and subtle fossilized crystallization. Frequently specified by Scandinavian architects for seamless interior-to-exterior transitions.',
    applications: ['Monolithic Kitchen Islands', 'Minimalist Flooring', 'Spa Wall Cladding', 'Exterior Façades']
  },
  {
    id: 'galala-ivory',
    name: 'Galala Classic Ivory',
    category: 'Sinai Limestone',
    origin: 'Suez Eastern Desert Quarry',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    absorption: '0.12%',
    density: '2,710 kg/m³',
    strength: '142 MPa',
    finishes: ['Polished Mirror', 'Honed Velvet', 'Acid-Washed', 'Split-Face'],
    desc: 'A world-famous creamy warm limestone characterized by delicate golden veining and exceptional density. A timeless alternative to Italian travertine with superior hardness.',
    applications: ['Luxury Residential Villas', 'Hotel Reception Lobbies', 'Staircases & Balustrades', 'Vanity Tops']
  },
  {
    id: 'nero-aswan',
    name: 'Nero Aswan Granite',
    category: 'Egyptian Granite',
    origin: 'Aswan Southern Quarries',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    absorption: '0.04%',
    density: '2,890 kg/m³',
    strength: '190 MPa',
    finishes: ['Flamed & Brushed', 'Mirror Polished', 'Leathered Monolith'],
    desc: 'Deep volcanic obsidian granite extracted from the monumental quarries of Aswan. Interspersed with crystalline silver and rose quartz flecks. Engineered for extreme durability and heavy traffic.',
    applications: ['Commercial Plazas', 'Cantilevered Countertops', 'Outdoor Water Features', 'Monumental Sculpture']
  },
  {
    id: 'sahara-noir',
    name: 'Sahara Noir Egyptian',
    category: 'Bespoke Finishes',
    origin: 'Eastern Desert Mountains',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200',
    absorption: '0.08%',
    density: '2,850 kg/m³',
    strength: '165 MPa',
    finishes: ['5-Axis Fluted', 'Honed Monolith', 'Book-Matched Polished'],
    desc: 'A dramatic obsidian black marble intersected by razor-sharp white and desert gold veins. Hand-selected for luxury statement walls and artistic book-matched installations.',
    applications: ['Statement Fireplace Walls', 'Executive Boardrooms', 'Bespoke Furniture Slabs', 'VIP Bar Tops']
  },
  {
    id: 'triesta-grigio',
    name: 'Triesta Grigio',
    category: 'Alabaster & Quartzite',
    origin: 'Red Sea Eastern Range',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    absorption: '0.15%',
    density: '2,740 kg/m³',
    strength: '148 MPa',
    finishes: ['Honed Velvet', 'Brushed Antique', 'Sandblasted'],
    desc: 'An earthy bronze-grey architectural stone with organic layered sediment lines. Brings a grounding, wabi-sabi calm to modern Japanese and Scandinavian inspired residences.',
    applications: ['Minimalist Flooring', 'Seamless Walk-in Showers', 'Outdoor Pool Coping', 'Zen Garden Paving']
  },
  {
    id: 'sunny-gold',
    name: 'Sunny Gold Royal',
    category: 'Sinai Limestone',
    origin: 'Minya Central Quarries',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    absorption: '0.21%',
    density: '2,650 kg/m³',
    strength: '128 MPa',
    finishes: ['Honed', 'Polished', 'Tumbled Antique'],
    desc: 'Sun-drenched golden Egyptian marble featuring sweeping cloud-like veining. Warm, inviting, and radiant, capturing the golden hour of the Egyptian desert.',
    applications: ['Sunlit Courtyards', 'Mediterranean Kitchens', 'Custom Bathroom Vanities', 'Decorative Columns']
  }
]

const filteredStones = computed(() => {
  if (activeFilter.value === 'All Surfaces') return stones
  return stones.filter(s => s.category === activeFilter.value)
})
</script>

<template>
  <section id="collections" class="py-24 sm:py-36 bg-[#F4F1EA] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B08B57] block mb-3">
            Architectural Surface Gallery
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight">
            Curated <span class="italic text-[#B08B57]">Egyptian Stone</span> Collections
          </h2>
        </div>
        <p class="text-sm sm:text-base text-[#666666] max-w-md">
          Each slab is cut to precision in our Suez facility, available in monolithic custom dimensions and tactile custom finishes for luxury architecture.
        </p>
      </div>

      <!-- Filter Capsule Tabs -->
      <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          class="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-300 border flex items-center gap-2"
          :class="activeFilter === filter 
            ? 'bg-[#2B2B2B] text-[#FFFFFF] border-[#2B2B2B] shadow-md -translate-y-0.5' 
            : 'bg-[#FFFFFF] text-[#666666] border-[#E4DDD3] hover:border-[#B08B57] hover:text-[#2B2B2B]'"
        >
          <span>{{ filter }}</span>
          <span v-if="activeFilter === filter" class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
        </button>
      </div>

      <!-- Stone Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <div 
          v-for="stone in filteredStones" 
          :key="stone.id"
          class="group bg-[#FFFFFF] rounded-[24px] overflow-hidden border border-[#E4DDD3] shadow-luxury transition-all duration-500 hover:shadow-luxury-hover hover:-translate-y-1.5 flex flex-col"
        >
          <!-- Image Container with Hover Micro-Interaction -->
          <div class="relative h-72 sm:h-80 overflow-hidden bg-[#F4F1EA] cursor-pointer" @click="selectedStone = stone">
            <img 
              :src="stone.image" 
              :alt="stone.name"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] bg-[#B08B57] px-4 py-2 rounded-full shadow-lg">
                <span>View Architectural Specs</span>
                <ArrowUpRight class="w-4 h-4" />
              </span>
            </div>
            
            <div class="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E4DDD3]/60 text-[10px] font-mono font-semibold text-[#666666] uppercase">
              {{ stone.category }}
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-6 sm:p-8 flex flex-col flex-1 justify-between">
            <div>
              <span class="text-[10px] uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                {{ stone.origin }}
              </span>
              <h3 class="font-editorial text-2xl font-bold text-[#2B2B2B] group-hover:text-[#B08B57] transition-colors mb-3">
                {{ stone.name }}
              </h3>
              <p class="text-xs text-[#666666] leading-relaxed line-clamp-3 mb-6">
                {{ stone.desc }}
              </p>
            </div>

            <!-- Spec Footer -->
            <div class="pt-4 border-t border-[#E4DDD3]/70 flex items-center justify-between text-xs">
              <div class="flex flex-col">
                <span class="text-[10px] uppercase tracking-wider text-[#666666]">Water Absorption</span>
                <span class="font-mono font-bold text-[#2B2B2B]">{{ stone.absorption }}</span>
              </div>
              <div class="flex flex-col text-right">
                <span class="text-[10px] uppercase tracking-wider text-[#666666]">Available Finishes</span>
                <span class="font-semibold text-[#B08B57]">{{ stone.finishes.length }} Bespoke Types</span>
              </div>
            </div>

            <!-- Action Button -->
            <button 
              @click="selectedStone = stone"
              class="mt-6 w-full py-3 rounded-[18px] bg-[#F4F1EA] hover:bg-[#2B2B2B] text-[#2B2B2B] hover:text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 flex items-center justify-center gap-2 border border-[#E4DDD3]"
            >
              <span>Explore Slab & Order Sample</span>
              <ArrowUpRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Architectural Spec Modal Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedStone" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/60 backdrop-blur-sm" @click.self="selectedStone = null">
        <div class="bg-[#FFFFFF] rounded-[24px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E4DDD3] shadow-2xl p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300">
          
          <button @click="selectedStone = null" class="absolute top-6 right-6 p-2 rounded-full bg-[#F4F1EA] text-[#2B2B2B] hover:bg-[#B08B57] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-5 rounded-[18px] overflow-hidden bg-[#F4F1EA] h-64 md:h-full min-h-[260px]">
              <img :src="selectedStone.image" :alt="selectedStone.name" class="w-full h-full object-cover" />
            </div>

            <div class="md:col-span-7 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                  {{ selectedStone.origin }} • {{ selectedStone.category }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
                  {{ selectedStone.name }}
                </h3>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                  {{ selectedStone.desc }}
                </p>

                <!-- Technical Specs Box -->
                <div class="bg-[#F4F1EA] rounded-[18px] p-4 border border-[#E4DDD3] mb-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Water Absorption</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedStone.absorption }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Density</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedStone.density }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Strength</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedStone.strength }}</span>
                  </div>
                </div>

                <!-- Available Finishes -->
                <div class="mb-6">
                  <span class="text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider block mb-2.5">
                    Studio Architectural Finishes:
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fin in selectedStone.finishes" :key="fin" class="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E4DDD3] text-[11px] font-medium text-[#2B2B2B] flex items-center gap-1.5 shadow-sm">
                      <Check class="w-3 h-3 text-[#B08B57]" /> {{ fin }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- CTA in Modal -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E4DDD3]">
                <a 
                  href="#sample-box"
                  @click="selectedStone = null"
                  class="flex-1 py-3.5 rounded-[18px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Request Sample Swatch</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
                <button 
                  @click="selectedStone = null"
                  class="px-5 py-3.5 rounded-[18px] border border-[#E4DDD3] text-[#2B2B2B] text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#F4F1EA]"
                >
                  Close Specs
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Transition>
  </section>
</template>
