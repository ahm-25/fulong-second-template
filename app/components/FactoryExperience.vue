<script setup lang="ts">
import { ref } from 'vue'
import { Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight, ShieldCheck, Cpu, Sparkles, MapPin, Layers, CheckCircle2 } from 'lucide-vue-next'

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)
const isMuted = ref(true)
const galleryRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeftPos = ref(0)

const togglePlay = () => {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

const toggleMute = () => {
  if (!videoRef.value) return
  videoRef.value.muted = !videoRef.value.muted
  isMuted.value = videoRef.value.muted
}

const scrollLeft = () => {
  if (!galleryRef.value) return
  galleryRef.value.scrollBy({ left: -460, behavior: 'smooth' })
}

const scrollRight = () => {
  if (!galleryRef.value) return
  galleryRef.value.scrollBy({ left: 460, behavior: 'smooth' })
}

// Drag to scroll functionality for horizontal gallery
const startDrag = (e: MouseEvent) => {
  if (!galleryRef.value) return
  isDragging.value = true
  startX.value = e.pageX - galleryRef.value.offsetLeft
  scrollLeftPos.value = galleryRef.value.scrollLeft
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !galleryRef.value) return
  e.preventDefault()
  const x = e.pageX - galleryRef.value.offsetLeft
  const walk = (x - startX.value) * 1.5
  galleryRef.value.scrollLeft = scrollLeftPos.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}

const factoryGallery = [
  {
    id: 'wire-sawing',
    title: '01. 5-Axis Diamond Wire Sawing',
    subtitle: 'Primary Block Extraction & Slicing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    desc: 'Slicing 30-ton Sinai Pearl and Galala dolomitic blocks with computer-guided diamond wire saws, achieving exceptional structural slab uniformity.'
  },
  {
    id: 'robotic-polishing',
    title: '02. Robotic Velvet Polishing Line',
    subtitle: '24-Head Breton Surface Sculpting',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    desc: 'Our automated 24-head Italian polishing line calibrates each slab to millimeter perfection, producing our signature Honed Velvet and Antique Leathered tactile textures.'
  },
  {
    id: 'digital-bookmatching',
    title: '03. Digital Book-Matching Studio',
    subtitle: 'Overhead Laser Vein Alignment',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
    desc: 'High-resolution overhead laser scanners capture slab veining to digitally pair and map book-matched monoliths for double-height residential feature walls.'
  },
  {
    id: 'waterjet-profiling',
    title: '04. Waterjet CNC Profiling',
    subtitle: 'Bespoke Architectural Fluting',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1000',
    desc: 'Robotic 5-axis waterjet cutting heads profile intricate 3D linear fluted wall columns, radius staircase treads, and solid cantilevered sink basins.'
  },
  {
    id: 'quality-inspection',
    title: '05. Automated Quality Control',
    subtitle: 'UV Vacuum Epoxy Treatment',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
    desc: 'Every exported slab undergoes UV vacuum epoxy resin sealing and ultrasonic micro-fracturing verification to guarantee zero structural voids.'
  },
  {
    id: 'port-loading',
    title: '06. Suez Port Container Loading',
    subtitle: 'Fumigated Timber A-Frame Crating',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1000',
    desc: 'Custom heavy-duty fumigated timber A-frames and reinforced shock-absorbing foam crates loaded into marine containers just 15 km from the Port of Suez.'
  }
]
</script>

<template>
  <section id="quarry" class="py-28 sm:py-40 bg-[#FFFFFF] border-b border-[#E4DDD3] overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#B08B57] block mb-3">
            The Suez Engineering Atelier
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight">
            Inside Our Automated <br /><span class="italic text-[#B08B57]">Stone Manufactory</span>.
          </h2>
        </div>
        <p class="text-base sm:text-lg text-[#666666] max-w-xl leading-relaxed font-normal">
          Step inside our 50,000 m² solar-powered processing facility in Suez, Egypt. We fuse 50 million years of natural geological heritage with state-of-the-art Italian Breton 5-axis robotic mills, diamond wire saws, and zero-waste water recycling.
        </p>
      </div>

      <!-- Large Rounded Cinematic Video Container (32px border radius) -->
      <div class="relative rounded-[32px] overflow-hidden bg-[#2B2B2B] border border-[#E4DDD3] shadow-luxury-hover my-12 sm:my-16 group">
        
        <div class="relative h-[480px] sm:h-[640px] lg:h-[720px] w-full bg-[#2B2B2B]">
          <video 
            ref="videoRef"
            src="https://assets.mixkit.co/videos/42860/42860-720.mp4"
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          ></video>

          <!-- Cinematic Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/85 via-transparent to-[#2B2B2B]/40 pointer-events-none"></div>

          <!-- Top Bar: Live Studio Feed & Location Pill -->
          <div class="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 z-10">
            <div class="inline-flex items-center gap-2.5 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E4DDD3]/60 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-[#B08B57] animate-pulse"></span>
              <span class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#2B2B2B]">
                Live Production Feed // Suez Facility, Egypt
              </span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                @click="toggleMute"
                class="w-10 h-10 rounded-full bg-[#FFFFFF]/90 hover:bg-[#B08B57] text-[#2B2B2B] hover:text-[#FFFFFF] transition-colors flex items-center justify-center shadow-sm"
                :title="isMuted ? 'Unmute Studio Audio' : 'Mute Audio'"
              >
                <VolumeX v-if="isMuted" class="w-4 h-4" />
                <Volume2 v-else class="w-4 h-4" />
              </button>
              <button 
                @click="togglePlay"
                class="w-10 h-10 rounded-full bg-[#FFFFFF]/90 hover:bg-[#B08B57] text-[#2B2B2B] hover:text-[#FFFFFF] transition-colors flex items-center justify-center shadow-sm"
                :title="isPlaying ? 'Pause Cinematic Video' : 'Play Video'"
              >
                <Pause v-if="isPlaying" class="w-4 h-4" />
                <Play v-else class="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          <!-- Bottom Glass Informational Banner inside Video -->
          <div class="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 bg-[#FFFFFF]/95 backdrop-blur-md p-6 sm:p-8 rounded-[24px] border border-[#E4DDD3] shadow-lg">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-2xl bg-[#F4F1EA] flex items-center justify-center text-[#B08B57] shrink-0">
                <Cpu class="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#2B2B2B] block">0.2mm Tolerance</span>
                <span class="text-[11px] text-[#666666]">Italian Breton 5-Axis CNC Milling</span>
              </div>
            </div>

            <div class="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-[#E4DDD3] pt-4 md:pt-0 md:pl-8">
              <div class="w-11 h-11 rounded-2xl bg-[#F4F1EA] flex items-center justify-center text-[#B08B57] shrink-0">
                <Layers class="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#2B2B2B] block">30-Ton Slabs</span>
                <span class="text-[11px] text-[#666666]">Monolithic Book-Matched Slicing</span>
              </div>
            </div>

            <div class="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-[#E4DDD3] pt-4 md:pt-0 md:pl-8">
              <div class="w-11 h-11 rounded-2xl bg-[#F4F1EA] flex items-center justify-center text-[#B08B57] shrink-0">
                <ShieldCheck class="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#2B2B2B] block">Direct Container Port</span>
                <span class="text-[11px] text-[#666666]">15 km from Suez Export Terminal</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Horizontal Image Gallery Header with Navigation Arrows -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-20 sm:mt-28 mb-10">
        <div>
          <span class="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#B08B57] block mb-2">
            The Production Pipeline
          </span>
          <h3 class="font-editorial text-3xl sm:text-4xl text-[#2B2B2B] font-light">
            Atelier Processing Lines & Equipment
          </h3>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs text-[#666666] font-medium mr-2 hidden sm:inline">Drag to explore</span>
          <button 
            @click="scrollLeft"
            class="w-11 h-11 rounded-full border border-[#E4DDD3] bg-[#FFFFFF] hover:bg-[#2B2B2B] hover:text-[#FFFFFF] text-[#2B2B2B] flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Scroll Gallery Left"
          >
            <ArrowLeft class="w-4 h-4" />
          </button>
          <button 
            @click="scrollRight"
            class="w-11 h-11 rounded-full border border-[#E4DDD3] bg-[#FFFFFF] hover:bg-[#2B2B2B] hover:text-[#FFFFFF] text-[#2B2B2B] flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Scroll Gallery Right"
          >
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>

    <!-- Horizontal Drag-to-Scroll Image Gallery -->
    <div 
      ref="galleryRef"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      class="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-12 pt-4 px-4 sm:px-8 max-w-[1440px] mx-auto cursor-grab active:cursor-grabbing no-scrollbar select-none snap-x snap-mandatory"
    >
      <div 
        v-for="item in factoryGallery" 
        :key="item.id"
        class="w-[320px] sm:w-[400px] lg:w-[460px] shrink-0 snap-start bg-[#FFFFFF] rounded-[28px] overflow-hidden border border-[#E4DDD3] shadow-luxury transition-all duration-500 hover:shadow-luxury-hover hover:-translate-y-2 flex flex-col justify-between group"
      >
        <!-- Gallery Image -->
        <div class="relative h-64 sm:h-72 overflow-hidden bg-[#F4F1EA] pointer-events-none">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span class="text-[10px] font-mono font-bold text-[#FFFFFF] uppercase tracking-wider bg-[#B08B57] px-3 py-1 rounded-full shadow-md">
              {{ item.subtitle }}
            </span>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-6 sm:p-8 flex flex-col justify-between flex-1">
          <div>
            <span class="text-[9px] font-mono uppercase tracking-[0.25em] text-[#B08B57] font-semibold block mb-1">
              Atelier Production Step
            </span>
            <h4 class="font-editorial text-2xl font-bold text-[#2B2B2B] leading-snug group-hover:text-[#B08B57] transition-colors mb-3">
              {{ item.title }}
            </h4>
            <p class="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <div class="pt-5 mt-6 border-t border-[#E4DDD3]/70 flex items-center justify-between text-[11px] font-semibold text-[#2B2B2B]">
            <span class="flex items-center gap-1.5 text-[#B08B57]">
              <CheckCircle2 class="w-3.5 h-3.5" /> ISO 9001 Certified Line
            </span>
            <span class="font-mono text-[10px] text-[#666666] uppercase">Suez Atelier</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
