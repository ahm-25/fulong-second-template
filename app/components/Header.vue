<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Box, Layers, Mountain, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const productsMenuOpen = ref(false)
let closeTimeout: ReturnType<typeof setTimeout> | null = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const openProductsMenu = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  productsMenuOpen.value = true
}

const closeProductsMenu = () => {
  closeTimeout = setTimeout(() => {
    productsMenuOpen.value = false
  }, 150)
}

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#collections', hasMegaMenu: true },
  { name: 'Projects', href: '#projects' },
  { name: 'Export', href: '#quarry' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#sample-box' },
]

const megaCategories = [
  {
    id: 'sinai-limestone',
    title: 'Sinai Limestone & Marble',
    origin: 'Mount Sinai & Galala Quarries',
    desc: 'Warm beige dolomitic stones including Sinai Pearl Velvet and Galala Ivory. Ideal for Scandinavian minimalist flooring and monolithic kitchen islands.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    count: '8 Signature Slabs',
    href: '#collections'
  },
  {
    id: 'egyptian-granite',
    title: 'Egyptian Volcanic Granite',
    origin: 'Aswan Southern Quarries',
    desc: 'Deep volcanic obsidian and crystalline quartz granite including Nero Aswan and Red Aswan. Engineered for extreme durability and heavy traffic.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    count: '6 Volcanic Types',
    href: '#collections'
  },
  {
    id: 'alabaster-quartzite',
    title: 'Alabaster & Quartzite',
    origin: 'Eastern Desert & Red Sea Range',
    desc: 'Earthy bronze-grey architectural stones with organic layered sediment lines and translucent warm amber alabaster for backlit feature walls.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    count: '5 Tactile Finishes',
    href: '#collections'
  },
  {
    id: 'bespoke-carved',
    title: '3D Fluted & Carved Slabs',
    origin: 'Suez 5-Axis CNC Atelier',
    desc: 'Salvatori-inspired linear fluting, bamboo ripples, and chevron textures carved into solid Egyptian stone with millimeter waterjet precision.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
    count: 'Custom Architectural',
    href: '#bespoke'
  }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (closeTimeout) clearTimeout(closeTimeout)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 h-[90px] transition-all duration-500 bg-[#FFFFFF] border-b border-[#E4DDD3] flex items-center"
    :class="isScrolled ? 'bg-[#FFFFFF]/85 backdrop-blur-md shadow-luxury border-[#E4DDD3]/80' : 'bg-[#FFFFFF]'"
  >
    <div class="max-w-7xl mx-auto w-full px-4 sm:px-8 flex items-center justify-between h-full">
      
      <!-- Left: Elegant Logo -->
      <a href="#" class="flex items-center gap-3 group shrink-0">
        <div class="w-10 h-10 rounded-[14px] bg-[#2B2B2B] flex items-center justify-center text-[#B08B57] transition-transform duration-500 group-hover:scale-105 shadow-md">
          <span class="font-editorial font-bold text-xl tracking-wider">A</span>
        </div>
        <div class="flex flex-col">
          <span class="font-editorial text-2xl font-bold tracking-[0.08em] text-[#2B2B2B] uppercase leading-none">
            Atelier Sinai
          </span>
          <span class="text-[9px] uppercase tracking-[0.25em] text-[#666666] font-medium mt-1">
            Egyptian Architectural Stone
          </span>
        </div>
      </a>

      <!-- Center: Navigation Links -->
      <nav class="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
        <div 
          v-for="link in navLinks" 
          :key="link.name"
          class="h-full flex items-center relative"
          @mouseenter="link.hasMegaMenu ? openProductsMenu() : null"
          @mouseleave="link.hasMegaMenu ? closeProductsMenu() : null"
        >
          <a 
            :href="link.href"
            class="text-xs xl:text-[13px] uppercase tracking-[0.14em] font-medium text-[#2B2B2B] hover:text-[#B08B57] transition-colors duration-300 relative py-2 flex items-center gap-1 group"
          >
            <span>{{ link.name }}</span>
            <ChevronDown 
              v-if="link.hasMegaMenu" 
              class="w-3.5 h-3.5 text-[#B08B57] transition-transform duration-300"
              :class="productsMenuOpen ? 'rotate-180' : ''"
            />
            
            <!-- Subtle underline hover animation -->
            <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B08B57] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </nav>

      <!-- Right: Primary Button "Request Quote" -->
      <div class="hidden sm:flex items-center gap-4 shrink-0">
        <a 
          href="#sample-box"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[24px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-md hover:shadow-luxury hover:-translate-y-0.5 group"
        >
          <span>Request Quote</span>
          <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-2.5 rounded-xl border border-[#E4DDD3] text-[#2B2B2B] hover:bg-[#F4F1EA] transition-colors"
        aria-label="Toggle Navigation"
      >
        <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>

    </div>

    <!-- Mega Menu for Products -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div 
        v-if="productsMenuOpen"
        class="absolute top-[90px] left-0 right-0 z-40 bg-[#FFFFFF] border-b border-[#E4DDD3] shadow-luxury-hover"
        @mouseenter="openProductsMenu"
        @mouseleave="closeProductsMenu"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <!-- Left Editorial Intro (3 Cols) -->
            <div class="lg:col-span-3 flex flex-col justify-between h-full border-r border-[#E4DDD3]/60 pr-6">
              <div>
                <span class="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B08B57] mb-3">
                  <Layers class="w-3.5 h-3.5" /> Architectural Surfaces
                </span>
                <h3 class="font-editorial text-3xl font-bold text-[#2B2B2B] leading-tight mb-3">
                  Curated <br /><span class="italic font-normal text-[#B08B57]">Egyptian Stone</span>
                </h3>
                <p class="text-xs text-[#666666] leading-relaxed mb-6">
                  Extracted from our exclusive quarries across Sinai, Galala, and Aswan. Custom cut and honed to millimeter precision in our Suez automated facility.
                </p>
              </div>

              <div class="pt-6 border-t border-[#E4DDD3]/60">
                <a 
                  href="#collections" 
                  @click="productsMenuOpen = false"
                  class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#2B2B2B] hover:text-[#B08B57] transition-colors group"
                >
                  <span>Explore All 24+ Slabs</span>
                  <ArrowRight class="w-4 h-4 text-[#B08B57] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <!-- Right Mega Category Cards Grid (9 Cols) -->
            <div class="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                v-for="cat in megaCategories" 
                :key="cat.id"
                :href="cat.href"
                @click="productsMenuOpen = false"
                class="group bg-[#F4F1EA]/60 rounded-[24px] overflow-hidden border border-[#E4DDD3] hover:border-[#B08B57] transition-all duration-400 hover:bg-[#FFFFFF] hover:shadow-luxury flex flex-col justify-between"
              >
                <!-- Preview Image -->
                <div class="relative h-44 overflow-hidden bg-[#F4F1EA]">
                  <img 
                    :src="cat.image" 
                    :alt="cat.title"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span class="text-[10px] font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider bg-[#B08B57] px-2.5 py-1 rounded-full">
                      {{ cat.count }}
                    </span>
                  </div>
                </div>

                <!-- Card Content -->
                <div class="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span class="text-[9px] uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                      {{ cat.origin }}
                    </span>
                    <h4 class="font-editorial text-lg font-bold text-[#2B2B2B] leading-snug group-hover:text-[#B08B57] transition-colors mb-2">
                      {{ cat.title }}
                    </h4>
                    <p class="text-[11px] text-[#666666] line-clamp-2 leading-relaxed">
                      {{ cat.desc }}
                    </p>
                  </div>

                  <div class="pt-4 mt-4 border-t border-[#E4DDD3]/60 flex items-center justify-between text-[11px] font-semibold text-[#2B2B2B] group-hover:text-[#B08B57]">
                    <span>View Slabs</span>
                    <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen"
        class="lg:hidden absolute top-[90px] left-0 right-0 bg-[#FFFFFF] border-b border-[#E4DDD3] shadow-luxury p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto"
      >
        <nav class="flex flex-col gap-3">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-[0.14em] font-medium text-[#2B2B2B] hover:text-[#B08B57] py-2.5 border-b border-[#E4DDD3]/60 flex items-center justify-between"
          >
            <span>{{ link.name }}</span>
            <ArrowUpRight class="w-4 h-4 text-[#B08B57]" />
          </a>
        </nav>

        <div class="flex flex-col gap-3 pt-2">
          <a 
            href="#sample-box"
            @click="mobileMenuOpen = false"
            class="flex items-center justify-center gap-2 w-full py-4 rounded-[24px] bg-[#B08B57] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] shadow-md"
          >
            <span>Request Quote</span>
            <ArrowUpRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
