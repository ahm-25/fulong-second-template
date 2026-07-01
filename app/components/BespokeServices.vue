<script setup lang="ts">
import { Scissors, Layers, Sparkles, ArrowUpRight, Compass, Cpu } from 'lucide-vue-next'

const services = [
  {
    icon: Scissors,
    title: 'Cut-to-Size Architectural Monoliths',
    subtitle: 'Custom Sculptural Sinks & Islands',
    desc: 'We sculpt custom monolithic kitchen islands, cantilevered bathroom vanities, and solid-block stone bathtubs directly from raw Sinai limestone and Aswan granite blocks to your exact CAD drawings.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Cpu,
    title: '3D Fluted & Bamboo Wall Carving',
    subtitle: 'Salvatori-Inspired Linear Grooves',
    desc: 'Using 5-axis robotic waterjet cutting, we carve intricate linear fluting, bamboo ripples, and chevron textures into solid Egyptian stone, creating dramatic plays of light and shadow on interior feature walls.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Layers,
    title: 'Digital Book-Matched Slab Pairing',
    subtitle: 'Vein-Continuous Visual Layouts',
    desc: 'Our studio digitally scans every slab in high definition to create vein-continuous book-matched wall elevations and floor layouts before any physical cutting or international crating occurs.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1000'
  }
]
</script>

<template>
  <section id="bespoke" class="py-24 sm:py-36 bg-[#FFFFFF] border-b border-[#E4DDD3]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Title -->
      <div class="max-w-3xl mb-20">
        <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#B08B57] block mb-3">
          The Bespoke Atelier
        </span>
        <h2 class="font-editorial text-4xl sm:text-6xl text-[#2B2B2B] font-light leading-tight mb-6">
          Architectural <span class="italic text-[#B08B57]">Custom Cutting</span> & Sculpting
        </h2>
        <p class="text-sm sm:text-base text-[#666666] leading-relaxed">
          Beyond standard architectural slabs, our studio provides turnkey fabrication for bespoke residential and commercial commissions. If you can design it in CAD, we can sculpt it in solid Egyptian stone.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        <div 
          v-for="(srv, idx) in services" 
          :key="idx"
          class="group rounded-[24px] bg-[#F4F1EA] overflow-hidden border border-[#E4DDD3] shadow-luxury transition-all duration-500 hover:shadow-luxury-hover hover:-translate-y-2 flex flex-col justify-between"
        >
          <!-- Image Top -->
          <div class="relative h-64 overflow-hidden bg-[#FFFFFF]">
            <img 
              :src="srv.image" 
              :alt="srv.title"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#F4F1EA] via-transparent to-transparent opacity-60"></div>
            <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md flex items-center justify-center text-[#B08B57] shadow-sm group-hover:scale-110 transition-transform">
              <component :is="srv.icon" class="w-5 h-5" />
            </div>
          </div>

          <!-- Content Bottom -->
          <div class="p-8 flex flex-col flex-1 justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#B08B57] font-semibold block mb-1">
                0{{ idx + 1 }} // {{ srv.subtitle }}
              </span>
              <h3 class="font-editorial text-2xl font-bold text-[#2B2B2B] mb-3 group-hover:text-[#B08B57] transition-colors">
                {{ srv.title }}
              </h3>
              <p class="text-xs text-[#666666] leading-relaxed mb-6">
                {{ srv.desc }}
              </p>
            </div>

            <a 
              href="#sample-box"
              class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#2B2B2B] hover:text-[#B08B57] transition-colors pt-4 border-t border-[#E4DDD3]/70"
            >
              <span>Consult Our Engineering Studio</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-[#B08B57]" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
