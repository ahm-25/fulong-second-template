<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, ArrowUpRight, ShieldCheck, Globe2, Sparkles, Send, Check, Instagram, Linkedin, Youtube, Pin } from 'lucide-vue-next'

const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (!email.value) return
  isSubscribed.value = true
  setTimeout(() => {
    email.value = ''
    isSubscribed.value = false
  }, 3000)
}

const columns = {
  company: [
    { name: 'The Atelier Philosophy', href: '#about' },
    { name: 'Suez Automated Manufactory', href: '#quarry' },
    { name: 'Quarry Provenance & Mount Sinai', href: '#quarry' },
    { name: 'Zero-Waste Solar Milling', href: '#about' },
    { name: 'Global Architecture Press', href: '#blog' },
    { name: 'Careers & Atelier Apprenticeships', href: '#contact' }
  ],
  products: [
    { name: 'Sinai Pearl Velvet Limestone', href: '#collections' },
    { name: 'Galala Classic Beige Marble', href: '#collections' },
    { name: 'Nero Aswan Volcanic Granite', href: '#collections' },
    { name: 'Sahara Noir Gold Vein', href: '#collections' },
    { name: '3D Linear Fluted Wall Panels', href: '#collections' },
    { name: 'Monolithic Book-Matched Slabs', href: '#collections' }
  ],
  resources: [
    { name: 'Architectural Specification Binders', href: '#sample-box' },
    { name: 'ASTM & CE Technical Data Sheets', href: '#sample-box' },
    { name: '2026 Master Surface Catalogue', href: '#sample-box' },
    { name: 'CAD & High-Res BIM Textures', href: '#sample-box' },
    { name: 'Stone Care & Acid-Sealing Guide', href: '#sample-box' },
    { name: 'Order 6-Swatch Sample Box', href: '#sample-box' }
  ]
}

const socials = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Pinterest', icon: Pin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' }
]
</script>

<template>
  <footer class="bg-[#F4F1EA] text-[#2B2B2B] pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[#E4DDD3] relative overflow-hidden">
    <!-- Subtle natural stone background grid pattern -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#2B2B2B 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Top Section: Newsletter Subscription & Brand Intro -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 sm:pb-24 border-b border-[#E4DDD3] items-center">
        
        <!-- Brand Intro & Minimal Socials (5 Cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <a href="#" class="flex items-center gap-3.5 group inline-block mb-6">
              <div class="w-12 h-12 rounded-[16px] bg-[#2B2B2B] flex items-center justify-center text-[#B08B57] transition-transform duration-500 group-hover:scale-105 shadow-md">
                <span class="font-editorial font-bold text-2xl tracking-wider">A</span>
              </div>
              <div class="flex flex-col">
                <span class="font-editorial text-3xl font-bold tracking-[0.08em] text-[#2B2B2B] uppercase leading-none">
                  Atelier Sinai
                </span>
                <span class="text-[10px] uppercase tracking-[0.25em] text-[#666666] font-medium mt-1.5">
                  Egyptian Architectural Stone
                </span>
              </div>
            </a>
            
            <p class="text-sm sm:text-base text-[#666666] max-w-sm leading-relaxed font-normal mb-8">
              Fusing 50 million years of natural Egyptian geological heritage with Italian 5-axis CNC robotic precision. Sculpting custom monolithic surfaces for world-renowned architecture studios.
            </p>
          </div>

          <!-- Minimal Outlined Social Icons -->
          <div class="flex items-center gap-3">
            <a 
              v-for="soc in socials" 
              :key="soc.name" 
              :href="soc.href" 
              :title="soc.name"
              class="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E4DDD3] hover:border-[#B08B57] hover:bg-[#2B2B2B] text-[#2B2B2B] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-105"
            >
              <component :is="soc.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Newsletter Subscription Box (7 Cols) -->
        <div class="lg:col-span-7 bg-[#FFFFFF]/80 backdrop-blur-md p-8 sm:p-12 rounded-[32px] border border-[#E4DDD3] shadow-subtle">
          <span class="text-[10px] font-mono uppercase tracking-[0.25em] font-semibold text-[#B08B57] block mb-2">
            The Stone Specifier Journal
          </span>
          <h3 class="font-editorial text-2xl sm:text-3xl lg:text-4xl font-light text-[#2B2B2B] leading-tight mb-3">
            Subscribe to Our <span class="italic font-normal text-[#B08B57]">Quarterly Provenance</span> Report.
          </h3>
          <p class="text-xs sm:text-sm text-[#666666] leading-relaxed mb-8 max-w-xl">
            Join 4,500+ international architects and specification directors. Receive curated quarry extraction updates, new stone slab releases, and technical CAD binders directly to your inbox.
          </p>

          <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3">
            <div class="relative flex-1">
              <input 
                v-model="email"
                type="email" 
                required
                placeholder="Enter studio email address..." 
                class="w-full px-6 py-4 rounded-[20px] bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] placeholder-[#666666]/60 focus:outline-none focus:border-[#B08B57] transition-colors"
                :disabled="isSubscribed"
              />
            </div>
            
            <button 
              type="submit" 
              class="px-8 py-4 rounded-[20px] bg-[#2B2B2B] hover:bg-[#B08B57] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center gap-2 shadow-md shrink-0 disabled:opacity-50"
              :disabled="isSubscribed"
            >
              <span v-if="!isSubscribed">Subscribe Journal</span>
              <span v-else class="text-[#B08B57] font-bold flex items-center gap-1.5">
                <Check class="w-4 h-4" /> Subscribed
              </span>
              <ArrowRight v-if="!isSubscribed" class="w-4 h-4" />
            </button>
          </form>
          
          <span class="text-[10px] text-[#666666] block mt-3 font-medium">
            🔒 Zero spam guarantee. Unsubscribe at any time with a single click.
          </span>
        </div>

      </div>

      <!-- Center Section: Four Elegant Columns with Large White Space -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 sm:py-24">
        
        <!-- Column 1: Company -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#2B2B2B] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
            <span>Company & Heritage</span>
          </h4>
          <ul class="space-y-3.5">
            <li v-for="link in columns.company" :key="link.name">
              <a 
                :href="link.href"
                class="text-xs sm:text-[13px] text-[#666666] hover:text-[#B08B57] transition-colors duration-200 flex items-center justify-between group"
              >
                <span>{{ link.name }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#B08B57]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Products -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#2B2B2B] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
            <span>Signature Surfaces</span>
          </h4>
          <ul class="space-y-3.5">
            <li v-for="link in columns.products" :key="link.name">
              <a 
                :href="link.href"
                class="text-xs sm:text-[13px] text-[#666666] hover:text-[#B08B57] transition-colors duration-200 flex items-center justify-between group"
              >
                <span>{{ link.name }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#B08B57]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Resources -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#2B2B2B] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
            <span>Architect Resources</span>
          </h4>
          <ul class="space-y-3.5">
            <li v-for="link in columns.resources" :key="link.name">
              <a 
                :href="link.href"
                class="text-xs sm:text-[13px] text-[#666666] hover:text-[#B08B57] transition-colors duration-200 flex items-center justify-between group"
              >
                <span>{{ link.name }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#B08B57]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Global Desks -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#2B2B2B] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#B08B57]"></span>
            <span>Global Desks & Atelier</span>
          </h4>
          <div class="space-y-4 text-xs sm:text-[13px] text-[#666666] leading-relaxed">
            <div>
              <span class="font-bold text-[#2B2B2B] block">Suez Automated Manufactory:</span>
              <span>Attaka Industrial Sector 4, Port of Suez, Egypt</span>
            </div>
            <div>
              <span class="font-bold text-[#2B2B2B] block">Cairo Specification Suite:</span>
              <span>Zamalek Executive Towers, Nile Corniche, Cairo</span>
            </div>
            <div>
              <span class="font-bold text-[#2B2B2B] block">International Specification Desk:</span>
              <span class="font-mono text-[#B08B57]">+20 (0) 62 345 8900</span>
            </div>
            <div>
              <span class="font-bold text-[#2B2B2B] block">Architectural Inquiries:</span>
              <a href="mailto:projects@ateliersinai.com" class="font-mono text-[#2B2B2B] hover:text-[#B08B57] underline transition-colors">projects@ateliersinai.com</a>
            </div>
          </div>
        </div>

      </div>

      <!-- Soft Divider & Bottom Copyright / Certification Bar -->
      <div class="pt-10 border-t border-[#E4DDD3] flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#666666]">
        
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-6 uppercase tracking-[0.16em]">
          <span class="flex items-center gap-1.5 text-[#2B2B2B] font-semibold">
            <ShieldCheck class="w-4 h-4 text-[#B08B57]" /> ISO 9001:2015 CE Certified
          </span>
          <span>ASTM C568 Standard Compliant</span>
          <span>Suez Direct Export Logistics</span>
        </div>

        <div class="text-center sm:text-right font-medium">
          <p>© {{ new Date().getFullYear() }} Atelier Sinai Luxury Stone S.A.E. All rights reserved.</p>
          <div class="flex items-center justify-center sm:justify-end gap-6 mt-1 text-[10px] uppercase tracking-wider text-[#666666]">
            <a href="#" class="hover:text-[#B08B57] transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-[#B08B57] transition-colors">Terms of Specification</a>
            <a href="#" class="hover:text-[#B08B57] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>

    </div>
  </footer>
</template>
