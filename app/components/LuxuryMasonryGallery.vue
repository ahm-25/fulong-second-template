<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, Filter, Sparkles, Layers, Check, Shield, ArrowRight, Eye } from 'lucide-vue-next'

const activeCategory = ref('All')
const selectedItem = ref<any | null>(null)

const categories = [
  'All',
  'Marble',
  'Granite',
  'Slabs',
  'Tiles',
  'Mosaic',
  'Custom Projects'
]

const masonryItems = [
  {
    id: 'sinai-pearl-marble',
    title: 'Sinai Pearl Velvet Marble',
    category: 'Marble',
    origin: 'Mount Sinai Quarry, South Sinai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[520px] sm:h-[620px]',
    desc: 'Our quintessential dolomitic marble featuring organic crystallization and warm earth-toned fossil veining. Widely specified in minimalist Scandinavian flooring.',
    specs: { absorption: '0.18%', density: '2,680 kg/m³', strength: '135 MPa', finishes: ['Honed Velvet', 'Antique Leathered', 'Linear Fluted'] }
  },
  {
    id: 'nero-aswan-granite',
    title: 'Nero Aswan Volcanic Granite',
    category: 'Granite',
    origin: 'Aswan Monumental Quarries',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[380px] sm:h-[440px]',
    desc: 'Deep volcanic obsidian granite interspersed with crystalline silver and rose quartz flecks. Engineered for extreme hardness and monumental architecture.',
    specs: { absorption: '0.04%', density: '2,890 kg/m³', strength: '190 MPa', finishes: ['Flamed & Brushed', 'Mirror Polished', 'Leathered'] }
  },
  {
    id: 'bookmatched-slabs',
    title: 'Book-Matched Galala Monoliths',
    category: 'Slabs',
    origin: 'Suez Eastern Desert Range',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[460px] sm:h-[560px]',
    desc: 'Vein-continuous book-matched 30-ton slabs cut from creamy warm Galala limestone. Digitally planned in our studio for dramatic double-height feature walls.',
    specs: { absorption: '0.12%', density: '2,710 kg/m³', strength: '142 MPa', finishes: ['Polished Mirror', 'Honed Monolith', 'Acid-Washed'] }
  },
  {
    id: 'geometric-mosaic',
    title: 'Handcrafted Geometric Mosaic',
    category: 'Mosaic',
    origin: 'Cairo Artisan Studio',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[360px] sm:h-[420px]',
    desc: 'Waterjet-cut geometric stone mosaics combining Sinai Beige, Nero Aswan, and Triesta Grigio. Designed for luxury spa showers and boutique hotel floors.',
    specs: { absorption: '0.15%', density: '2,720 kg/m³', strength: '150 MPa', finishes: ['Honed Velvet', 'Tumbled Antique', 'Brushed'] }
  },
  {
    id: 'sculptural-sink-monolith',
    title: 'Cantilevered Sculptural Sink Monolith',
    category: 'Custom Projects',
    origin: 'Suez 5-Axis CNC Atelier',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[560px] sm:h-[660px]',
    desc: 'A seamless bathroom basin carved from a single 5-ton block of solid Sinai limestone using 5-axis robotic milling. Minimalist, monolithic, and eternal.',
    specs: { absorption: '0.10%', density: '2,750 kg/m³', strength: '160 MPa', finishes: ['Honed Velvet', 'Interior Acid-Sealed'] }
  },
  {
    id: 'honed-velvet-tiles',
    title: 'Sinai Pearl Honed Velvet Tiles',
    category: 'Tiles',
    origin: 'Mount Sinai Dolomitic Quarry',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[420px] sm:h-[480px]',
    desc: 'Precision-calibrated 60x120cm architectural tiles with micro-bevel edges. Delivers a soft, satiny matte finish that feels warm under barefoot touch.',
    specs: { absorption: '0.18%', density: '2,680 kg/m³', strength: '135 MPa', finishes: ['Honed Velvet', 'Brushed Antique'] }
  },
  {
    id: 'sahara-noir-marble',
    title: 'Sahara Noir Gold Vein Marble',
    category: 'Marble',
    origin: 'Eastern Desert Mountains',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[480px] sm:h-[580px]',
    desc: 'Dramatic obsidian black marble intersected by razor-sharp white and desert gold veins. Hand-selected for VIP statement bars and executive boardrooms.',
    specs: { absorption: '0.08%', density: '2,850 kg/m³', strength: '165 MPa', finishes: ['Mirror Polished', '5-Axis Fluted', 'Honed'] }
  },
  {
    id: '3d-fluted-wall-panel',
    title: '3D Linear Fluted Wall Cladding',
    category: 'Custom Projects',
    origin: 'Suez CNC Engineering Studio',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[400px] sm:h-[460px]',
    desc: 'Salvatori-inspired rhythmic fluted grooves carved into solid Egyptian stone. Creates captivating architectural shadow play under directional lighting.',
    specs: { absorption: '0.12%', density: '2,710 kg/m³', strength: '145 MPa', finishes: ['5-Axis Waterjet Fluted', 'Sandblasted Grooves'] }
  },
  {
    id: 'red-aswan-monumental',
    title: 'Red Aswan Monumental Granite',
    category: 'Granite',
    origin: 'Aswan Southern Quarries',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[500px] sm:h-[600px]',
    desc: 'The iconic rose-red granite utilized since the Pharaohs for monumental obelisks. Today engineered by Atelier Sinai for outdoor commercial plazas and facades.',
    specs: { absorption: '0.05%', density: '2,880 kg/m³', strength: '185 MPa', finishes: ['Flamed', 'Bush-Hammered', 'Polished Monolith'] }
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return masonryItems
  return masonryItems.filter(item => item.category === activeCategory.value)
})
</script>

<template>
  <section id="collections" class="py-24 sm:py-36 bg-[#F4F1EA] relative border-b border-[#E4DDD3]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#B08B57] block mb-3">
            Architectural Surface Gallery
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight">
            Curated <span class="italic text-[#B08B57]">Masonry</span> Collections
          </h2>
        </div>
        <p class="text-sm sm:text-base text-[#666666] max-w-md leading-relaxed">
          An editorial showcase of our custom stone monoliths, book-matched slabs, and architectural mosaics—sculpted without equal-height constraints to highlight natural geological scale.
        </p>
      </div>

      <!-- Category Capsule Filter Tabs -->
      <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-14 no-scrollbar">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-300 border flex items-center gap-2"
          :class="activeCategory === cat 
            ? 'bg-[#2B2B2B] text-[#FFFFFF] border-[#2B2B2B] shadow-md -translate-y-0.5' 
            : 'bg-[#FFFFFF] text-[#666666] border-[#E4DDD3] hover:border-[#B08B57] hover:text-[#2B2B2B]'"
        >
          <span>{{ cat }}</span>
          <span v-if="activeCategory === cat" class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
        </button>
      </div>

      <!-- Asymmetrical Editorial Masonry Layout (CSS Multi-Columns avoiding equal-height cards) -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="break-inside-avoid relative rounded-[28px] overflow-hidden group cursor-pointer border border-[#E4DDD3] shadow-luxury transition-all duration-700 hover:shadow-luxury-hover hover:-translate-y-1.5 bg-[#2B2B2B]"
          :class="item.heightClass"
          @click="selectedItem = item"
        >
          <!-- Large Premium Image with Zoom Effect -->
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <!-- Soft Dark Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/95 via-[#2B2B2B]/40 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-500"></div>

          <!-- Top Category & Origin Pill -->
          <div class="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span class="bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E4DDD3]/60 text-[10px] font-mono font-bold text-[#2B2B2B] uppercase tracking-wider shadow-sm">
              {{ item.category }}
            </span>
            <span class="text-[10px] uppercase tracking-widest text-[#FFFFFF] font-medium opacity-80 drop-shadow">
              {{ item.origin }}
            </span>
          </div>

          <!-- Bottom Editorial Content & Animated Arrow Button -->
          <div class="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
              Atelier Architectural Slabs
            </span>
            <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight mb-2 group-hover:text-[#B08B57] transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-xs sm:text-[13px] text-[#E4DDD3]/80 leading-relaxed line-clamp-2 mb-6">
              {{ item.desc }}
            </p>

            <!-- "View Collection" Button with Animated Arrow -->
            <div class="pt-4 border-t border-[#FFFFFF]/15 flex items-center justify-between">
              <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B08B57] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] shadow-md transition-all duration-300 group-hover:bg-[#FFFFFF] group-hover:text-[#2B2B2B]">
                <span>View Collection</span>
                <ArrowUpRight class="w-4 h-4 text-[#FFFFFF] group-hover:text-[#2B2B2B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>

              <span class="text-[11px] font-mono font-semibold text-[#E4DDD3] opacity-70 group-hover:opacity-100 transition-opacity">
                {{ item.specs.absorption }} Abs
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Interactive Architectural Spec Modal Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedItem" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/70 backdrop-blur-sm" @click.self="selectedItem = null">
        <div class="bg-[#FFFFFF] rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E4DDD3] shadow-2xl p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300">
          
          <button @click="selectedItem = null" class="absolute top-6 right-6 p-2 rounded-full bg-[#F4F1EA] text-[#2B2B2B] hover:bg-[#B08B57] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-5 rounded-[24px] overflow-hidden bg-[#F4F1EA] h-72 md:h-full min-h-[280px]">
              <img :src="selectedItem.image" :alt="selectedItem.title" class="w-full h-full object-cover" />
            </div>

            <div class="md:col-span-7 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                  {{ selectedItem.origin }} • {{ selectedItem.category }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
                  {{ selectedItem.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                  {{ selectedItem.desc }}
                </p>

                <!-- Technical Specs Box -->
                <div class="bg-[#F4F1EA] rounded-[20px] p-4 border border-[#E4DDD3] mb-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Water Absorption</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedItem.specs.absorption }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Density</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedItem.specs.density }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#666666] block">Strength</span>
                    <span class="font-mono font-bold text-sm text-[#2B2B2B]">{{ selectedItem.specs.strength }}</span>
                  </div>
                </div>

                <!-- Available Finishes -->
                <div class="mb-6">
                  <span class="text-xs font-semibold text-[#2B2B2B] uppercase tracking-wider block mb-2.5">
                    Studio Custom Finishes:
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fin in selectedItem.specs.finishes" :key="fin" class="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E4DDD3] text-[11px] font-medium text-[#2B2B2B] flex items-center gap-1.5 shadow-sm">
                      <Check class="w-3.5 h-3.5 text-[#B08B57]" /> {{ fin }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- CTA in Modal -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E4DDD3]">
                <a 
                  href="#sample-box"
                  @click="selectedItem = null"
                  class="flex-1 py-3.5 rounded-[20px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Request Sample Swatch</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
                <button 
                  @click="selectedItem = null"
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
