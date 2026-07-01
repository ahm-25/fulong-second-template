<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, MapPin, Check, Layers } from 'lucide-vue-next'

const sliderRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeftPos = ref(0)
const selectedProduct = ref<any | null>(null)

const products = [
  {
    id: 'sinai-pearl-royal',
    name: 'Sinai Pearl Royal Limestone',
    origin: 'Mount Sinai Quarry, South Sinai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    finishes: ['Honed Velvet', 'Antique Leathered', '3D Linear Fluted', 'Bush-Hammered'],
    absorption: '0.18%',
    density: '2,680 kg/m³',
    strength: '135 MPa',
    desc: 'The quintessential dolomitic architectural limestone. Celebrated for its warm beige-grey crystallization and subtle fossilized flora.'
  },
  {
    id: 'galala-classic-beige',
    name: 'Galala Classic Beige Marble',
    origin: 'Suez Eastern Desert Range',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
    finishes: ['Mirror Polished', 'Honed Monolith', 'Acid-Washed', 'Split-Face'],
    absorption: '0.12%',
    density: '2,710 kg/m³',
    strength: '142 MPa',
    desc: 'A world-renowned creamy warm limestone featuring delicate golden veining and exceptional structural density for minimalist luxury villas.'
  },
  {
    id: 'nero-aswan-obsidian',
    name: 'Nero Aswan Obsidian Granite',
    origin: 'Aswan Monumental Quarries',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
    finishes: ['Flamed & Brushed', 'Mirror Polished', 'Leathered Monolith'],
    absorption: '0.04%',
    density: '2,890 kg/m³',
    strength: '190 MPa',
    desc: 'Deep volcanic obsidian granite interspersed with crystalline silver and rose quartz flecks. Engineered for monumental architectural durability.'
  },
  {
    id: 'sahara-noir-gold',
    name: 'Sahara Noir Gold Vein Marble',
    origin: 'Eastern Desert Red Sea Range',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1000',
    finishes: ['5-Axis Waterjet Fluted', 'Honed Monolith', 'Book-Matched Polished'],
    absorption: '0.08%',
    density: '2,850 kg/m³',
    strength: '165 MPa',
    desc: 'Dramatic obsidian black marble intersected by razor-sharp white and desert gold veins. Hand-selected for luxury statement walls.'
  },
  {
    id: 'sunny-gold-royal',
    name: 'Sunny Gold Royal Marble',
    origin: 'Minya Central Egyptian Quarries',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1000',
    finishes: ['Honed Velvet', 'Polished Mirror', 'Tumbled Antique'],
    absorption: '0.21%',
    density: '2,650 kg/m³',
    strength: '128 MPa',
    desc: 'Sun-drenched golden Egyptian marble featuring sweeping cloud-like veining. Radiating the warmth and timeless light of the desert.'
  },
  {
    id: 'triesta-grigio-alabaster',
    name: 'Triesta Grigio Alabaster',
    origin: 'Eastern Desert Range',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    finishes: ['Honed Velvet', 'Brushed Antique', 'Sandblasted'],
    absorption: '0.15%',
    density: '2,740 kg/m³',
    strength: '148 MPa',
    desc: 'An earthy bronze-grey architectural stone with organic layered sediment lines. Brings a wabi-sabi calm to Scandinavian residences.'
  }
]

const scrollLeft = () => {
  if (!sliderRef.value) return
  sliderRef.value.scrollBy({ left: -420, behavior: 'smooth' })
}

const scrollRight = () => {
  if (!sliderRef.value) return
  sliderRef.value.scrollBy({ left: 420, behavior: 'smooth' })
}

// Drag to scroll functionality
const startDrag = (e: MouseEvent) => {
  if (!sliderRef.value) return
  isDragging.value = true
  startX.value = e.pageX - sliderRef.value.offsetLeft
  scrollLeftPos.value = sliderRef.value.scrollLeft
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !sliderRef.value) return
  e.preventDefault()
  const x = e.pageX - sliderRef.value.offsetLeft
  const walk = (x - startX.value) * 1.5
  sliderRef.value.scrollLeft = scrollLeftPos.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}
</script>

<template>
  <section class="py-24 sm:py-36 bg-[#FFFFFF] border-b border-[#E4DDD3] overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Top Section Header with Navigational Arrows -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#B08B57] block mb-3">
            Featured Quarry Releases
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight">
            Signature <span class="italic text-[#B08B57]">Architectural</span> Slabs
          </h2>
        </div>

        <div class="flex items-center gap-4">
          <button 
            @click="scrollLeft"
            class="w-12 h-12 rounded-full border border-[#E4DDD3] bg-[#FFFFFF] hover:bg-[#2B2B2B] hover:text-[#FFFFFF] hover:border-[#2B2B2B] text-[#2B2B2B] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
            aria-label="Scroll Left"
          >
            <ArrowLeft class="w-5 h-5" />
          </button>
          <button 
            @click="scrollRight"
            class="w-12 h-12 rounded-full border border-[#E4DDD3] bg-[#FFFFFF] hover:bg-[#2B2B2B] hover:text-[#FFFFFF] hover:border-[#2B2B2B] text-[#2B2B2B] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
            aria-label="Scroll Right"
          >
            <ArrowRight class="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>

    <!-- Horizontal Drag-to-Scroll Slider Container -->
    <div 
      ref="sliderRef"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      class="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-12 pt-4 px-4 sm:px-8 max-w-[1440px] mx-auto cursor-grab active:cursor-grabbing no-scrollbar select-none snap-x snap-mandatory"
    >
      <div 
        v-for="prod in products" 
        :key="prod.id"
        class="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start bg-[#FFFFFF] rounded-[28px] overflow-hidden border border-[#E4DDD3] shadow-luxury transition-all duration-500 hover:shadow-luxury-hover hover:-translate-y-2 flex flex-col justify-between group"
      >
        <!-- Top Image Container -->
        <div class="relative h-72 sm:h-80 overflow-hidden bg-[#F4F1EA] pointer-events-none">
          <img 
            :src="prod.image" 
            :alt="prod.name"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span class="text-[11px] font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider bg-[#B08B57] px-3 py-1 rounded-full shadow-md">
              {{ prod.absorption }} Water Abs
            </span>
          </div>

          <!-- Top Right Origin Badge -->
          <div class="absolute top-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E4DDD3]/60 flex items-center gap-1.5 shadow-sm">
            <MapPin class="w-3 h-3 text-[#B08B57]" />
            <span class="text-[10px] font-mono font-semibold text-[#2B2B2B] uppercase tracking-wider">
              Egypt
            </span>
          </div>
        </div>

        <!-- Bottom Content -->
        <div class="p-6 sm:p-8 flex flex-col flex-1 justify-between">
          <div>
            <!-- Origin -->
            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
              {{ prod.origin }}
            </span>

            <!-- Stone Name -->
            <h3 class="font-editorial text-2xl sm:text-[26px] font-bold text-[#2B2B2B] leading-tight group-hover:text-[#B08B57] transition-colors mb-4">
              {{ prod.name }}
            </h3>

            <!-- Available Finishes -->
            <div class="mb-6">
              <span class="text-[10px] uppercase tracking-wider text-[#666666] font-semibold block mb-2">
                Available Studio Finishes:
              </span>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="fin in prod.finishes" 
                  :key="fin"
                  class="px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E4DDD3]/80 text-[10px] font-medium text-[#2B2B2B] flex items-center gap-1"
                >
                  <span class="w-1 h-1 rounded-full bg-[#B08B57]"></span>
                  <span>{{ fin }}</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Elegant View Details Button -->
          <button 
            @click="selectedProduct = prod"
            class="w-full py-3.5 rounded-[20px] bg-[#F4F1EA] hover:bg-[#2B2B2B] text-[#2B2B2B] hover:text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center gap-2 border border-[#E4DDD3] shadow-sm group/btn"
          >
            <span>View Details & Specs</span>
            <ArrowUpRight class="w-4 h-4 text-[#B08B57] group-hover/btn:text-[#FFFFFF] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Interactive Technical Specification Modal Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedProduct" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/70 backdrop-blur-sm" @click.self="selectedProduct = null">
        <div class="bg-[#FFFFFF] rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E4DDD3] shadow-2xl p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300">
          
          <button @click="selectedProduct = null" class="absolute top-6 right-6 p-2 rounded-full bg-[#F4F1EA] text-[#2B2B2B] hover:bg-[#B08B57] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-5 rounded-[24px] overflow-hidden bg-[#F4F1EA] h-72 md:h-full min-h-[280px]">
              <img :src="selectedProduct.image" :alt="selectedProduct.name" class="w-full h-full object-cover" />
            </div>

            <div class="md:col-span-7 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                  {{ selectedProduct.origin }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
                  {{ selectedProduct.name }}
                </h3>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                  {{ selectedProduct.desc }}
                </p>

                <!-- Technical Specs Box -->
                <div class="bg-[#F4F1EA] rounded-[20px] p-4 border border-[#E4DDD3] mb-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Water Absorption</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedProduct.absorption }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Density</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedProduct.density }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Strength</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedProduct.strength }}</span>
                  </div>
                </div>

                <!-- Available Finishes -->
                <div class="mb-6">
                  <span class="text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider block mb-2.5">
                    Studio Custom Finishes:
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fin in selectedProduct.finishes" :key="fin" class="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E4DDD3] text-[11px] font-medium text-[#2B2B2B] flex items-center gap-1.5 shadow-sm">
                      <Check class="w-3.5 h-3.5 text-[#B08B57]" /> {{ fin }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- CTA in Modal -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E4DDD3]">
                <a 
                  href="#sample-box"
                  @click="selectedProduct = null"
                  class="flex-1 py-3.5 rounded-[20px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Request Sample Swatch</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
                <button 
                  @click="selectedProduct = null"
                  class="px-5 py-3.5 rounded-[20px] border border-[#E4DDD3] text-[#2B2B2B] text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#F4F1EA]"
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
