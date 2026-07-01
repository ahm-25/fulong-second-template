<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDownRight, ArrowUpRight, Play, Pause, Sparkles, ShieldCheck, MapPin, Compass, Layers, CheckCircle2 } from 'lucide-vue-next'

const isPlaying = ref(true)
const activeClip = ref(0)
const videoRef = ref<HTMLVideoElement | null>(null)

const videoClips = [
  {
    id: 'quarry',
    title: '01. Sinai Quarry Extraction',
    subtitle: 'Mount Sinai Dolomitic Limestone',
    video: 'https://assets.mixkit.co/videos/42862/42862-720.mp4',
    poster: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'cutting',
    title: '02. 5-Axis Diamond Wire Sawing',
    subtitle: 'Suez Millimeter CNC Cutting',
    video: 'https://assets.mixkit.co/videos/42860/42860-720.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'polishing',
    title: '03. Robotic Velvet Polishing',
    subtitle: 'Custom Tactile Finish Sculpting',
    video: 'https://assets.mixkit.co/videos/41443/41443-720.mp4',
    poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'interiors',
    title: '04. Monolithic Luxury Interiors',
    subtitle: 'Scandinavian Villa Installations',
    video: 'https://assets.mixkit.co/videos/41452/41452-720.mp4',
    poster: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
  }
]

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

const switchClip = (idx: number) => {
  activeClip.value = idx
  isPlaying.value = true
  // Video tag will auto-load new source via reactive binding
}

const stats = [
  { value: '26+ Years', label: 'Quarry Mastery & Provenance' },
  { value: '30+ Countries', label: 'Global Architectural Export' },
  { value: '1000+ Projects', label: 'Luxury Residences & Plazas' },
]
</script>

<template>
  <section class="relative pt-32 sm:pt-40 pb-28 lg:pb-36 overflow-hidden bg-[#F4F1EA]">
    <!-- Subtle architectural background grid line -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#2B2B2B 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Top Provenance Badge -->
      <div class="flex items-center gap-3 mb-8 sm:mb-10">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E4DDD3] shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#B08B57] animate-pulse"></span>
          <span class="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-[#2B2B2B]">
            Handcrafted in Egypt • Designed for World Architecture
          </span>
        </div>
        <span class="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#666666]">
          <ShieldCheck class="w-3.5 h-3.5 text-[#B08B57]" /> ISO 9001 CE Certified Slabs
        </span>
      </div>

      <!-- Two-Column Asymmetrical Hero Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Left Column: Editorial Headline & Subtitle (6 Cols) -->
        <div class="lg:col-span-6 flex flex-col justify-center">
          <h1 class="font-editorial text-4xl sm:text-6xl md:text-[4.25rem] lg:text-[4.75rem] text-[#2B2B2B] font-light leading-[1.04] tracking-tight text-balance mb-6 sm:mb-8">
            Timeless <span class="italic font-normal text-[#B08B57]">Egyptian Stone</span>, Sculpted for Luxury Interiors.
          </h1>

          <p class="text-base sm:text-lg text-[#666666] font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
            From the monumental limestone cliffs of Sinai and Galala to bespoke villas in Milan, London, and Dubai. We fuse 50 million years of geological heritage with Scandinavian minimal design and Italian 5-axis CNC robotic precision.
          </p>

          <!-- Two Premium Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
            <a 
              href="#collections" 
              class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[24px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] font-semibold text-xs uppercase tracking-[0.14em] shadow-luxury transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Architectural Slabs</span>
              <ArrowDownRight class="w-4 h-4" />
            </a>

            <a 
              href="#sample-box" 
              class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[24px] bg-[#FFFFFF] hover:bg-[#F4F1EA] text-[#2B2B2B] border border-[#E4DDD3] font-semibold text-xs uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:border-[#B08B57]"
            >
              <span>Order Sample Box (6 Swatches)</span>
              <ArrowUpRight class="w-4 h-4 text-[#B08B57]" />
            </a>
          </div>

          <!-- Quick Provenance Feature Pill -->
          <div class="pt-6 border-t border-[#E4DDD3]/70 flex items-center gap-6 text-xs text-[#666666]">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-[#B08B57]" />
              <span>100% Organic Dolomitic Marble</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-[#B08B57]" />
              <span>Zero-Waste Solar Milling</span>
            </div>
          </div>
        </div>

        <!-- Right Column: 32px Rounded Video Container with Overlapping Stats Bar (6 Cols) -->
        <div class="lg:col-span-6 relative pb-14 sm:pb-16">
          
          <!-- Large 32px Rounded Video Card -->
          <div class="relative rounded-[32px] overflow-hidden bg-[#2B2B2B] border border-[#E4DDD3] shadow-luxury-hover group">
            
            <!-- Video Container -->
            <div class="relative h-[420px] sm:h-[500px] lg:h-[540px] w-full bg-[#2B2B2B]">
              <video 
                ref="videoRef"
                :key="videoClips[activeClip].video"
                :src="videoClips[activeClip].video"
                :poster="videoClips[activeClip].poster"
                autoplay
                loop
                muted
                playsinline
                class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              ></video>
              
              <!-- Dark Cinematic Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/85 via-transparent to-[#2B2B2B]/40 pointer-events-none"></div>

              <!-- Top Controls: Video Playlist Tabs -->
              <div class="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 z-10">
                <div class="flex items-center gap-1.5 bg-[#FFFFFF]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E4DDD3]/60 shadow-sm">
                  <MapPin class="w-3 h-3 text-[#B08B57]" />
                  <span class="text-[10px] font-bold text-[#2B2B2B] uppercase tracking-wider">
                    {{ videoClips[activeClip].subtitle }}
                  </span>
                </div>

                <button 
                  @click="togglePlay"
                  class="w-9 h-9 rounded-full bg-[#FFFFFF]/90 hover:bg-[#B08B57] text-[#2B2B2B] hover:text-[#FFFFFF] transition-colors flex items-center justify-center shadow-sm"
                  :title="isPlaying ? 'Pause Production Video' : 'Play Video'"
                >
                  <Pause v-if="isPlaying" class="w-4 h-4" />
                  <Play v-else class="w-4 h-4 ml-0.5" />
                </button>
              </div>

              <!-- Bottom Video Info & Step Switchers (positioned above stats overlap) -->
              <div class="absolute bottom-16 sm:bottom-20 left-5 right-5 z-10 flex flex-col gap-3">
                <span class="text-[10px] font-mono uppercase tracking-widest text-[#B08B57] font-semibold">
                  Live Studio Feed // Step {{ activeClip + 1 }} of 4
                </span>
                <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-none drop-shadow-md">
                  {{ videoClips[activeClip].title }}
                </h3>

                <!-- Switcher Pill Buttons -->
                <div class="flex items-center gap-1.5 pt-2 overflow-x-auto no-scrollbar">
                  <button 
                    v-for="(clip, idx) in videoClips" 
                    :key="clip.id"
                    @click="switchClip(idx)"
                    class="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap"
                    :class="activeClip === idx 
                      ? 'bg-[#B08B57] text-[#FFFFFF] border-[#B08B57] shadow-md' 
                      : 'bg-[#2B2B2B]/80 text-[#FFFFFF]/80 border-[#FFFFFF]/20 hover:border-[#FFFFFF]'"
                  >
                    <span>0{{ idx + 1 }}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- Floating Statistics Bar Overlapping the Video Card -->
          <div class="absolute -bottom-2 sm:-bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-20">
            <div class="bg-[#FFFFFF]/95 backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-[#E4DDD3] shadow-luxury-hover transition-transform duration-500 hover:-translate-y-1">
              <div class="grid grid-cols-3 gap-3 sm:gap-6 divide-x divide-[#E4DDD3]">
                <div 
                  v-for="(st, idx) in stats" 
                  :key="idx"
                  class="flex flex-col items-center sm:items-start text-center sm:text-left"
                  :class="idx > 0 ? 'pl-3 sm:pl-6' : ''"
                >
                  <span class="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2B2B] tracking-tight leading-none mb-1">
                    {{ st.value }}
                  </span>
                  <span class="text-[10px] sm:text-xs text-[#666666] font-medium leading-tight line-clamp-2">
                    {{ st.label }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Subtle Decorative Circle behind Video -->
          <div class="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-[#B08B57]/20 -z-10 pointer-events-none"></div>
        </div>

      </div>

    </div>
  </section>
</template>
