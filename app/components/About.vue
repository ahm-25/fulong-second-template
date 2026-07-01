<script setup lang="ts">
import { Award, Cpu, Sparkles, ShieldCheck, Package, Globe2, Users, ArrowUpRight, MapPin } from 'lucide-vue-next'

const timelineItems = [
  {
    icon: Award,
    title: '26 Years Experience',
    desc: 'Over two decades of geological provenance and master stone extraction from exclusive Mount Sinai and Galala quarries.'
  },
  {
    icon: Cpu,
    title: 'Advanced Machinery',
    desc: 'State-of-the-art Italian Breton and Pedrini 5-axis CNC robotic waterjet mills achieving millimeter precision below 0.2mm.'
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    desc: '100% organic dolomitic marble and deep volcanic obsidian granite selected for structural density and uniform veining.'
  },
  {
    icon: ShieldCheck,
    title: 'Strict Inspection',
    desc: 'Rigorous ASTM standard compliance, UV epoxy vacuum treatment, and zero micro-fracturing verification on every slab.'
  },
  {
    icon: Package,
    title: 'Professional Packaging',
    desc: 'Heavy-duty fumigated wooden A-frames and custom reinforced foam crates engineered for safe overseas container transit.'
  },
  {
    icon: Globe2,
    title: 'Worldwide Export',
    desc: 'Containerized direct marine logistics from the Port of Suez to architectural job sites across 30+ international markets.'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'Expert architectural engineers, CAD drafters, and master stone carvers guiding every project from quarry extraction to final installation.'
  }
]
</script>

<template>
  <section id="about" class="py-28 sm:py-40 bg-[#F4F1EA] border-b border-[#E4DDD3] relative overflow-hidden">
    <!-- Subtle architectural grid pattern background -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#2B2B2B 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Asymmetrical Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Side: Large Rounded Factory Image (Sticky on desktop so it follows the timeline scroll) (6 Cols) -->
        <div class="lg:col-span-6 relative lg:sticky lg:top-32 self-start">
          
          <!-- Main Factory Masterpiece Image Container -->
          <div class="relative rounded-[32px] overflow-hidden bg-[#FFFFFF] p-3 sm:p-4 border border-[#E4DDD3] shadow-luxury-hover group transition-all duration-500">
            <div class="relative h-[480px] sm:h-[620px] lg:h-[720px] rounded-[24px] overflow-hidden bg-[#2B2B2B]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400" 
                alt="Atelier Sinai Automated Factory in Suez" 
                class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/85 via-transparent to-transparent opacity-70"></div>

              <!-- Top Left Location Pill -->
              <div class="absolute top-5 left-5 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E4DDD3]/60 flex items-center gap-2 shadow-sm">
                <MapPin class="w-3.5 h-3.5 text-[#B08B57]" />
                <span class="text-[10px] sm:text-[11px] font-bold text-[#2B2B2B] uppercase tracking-wider">
                  50,000 m² Automated Facility • Suez, Egypt
                </span>
              </div>

              <!-- Bottom Glass Info Box inside image -->
              <div class="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-md p-6 rounded-[20px] border border-[#E4DDD3]/60 shadow-lg">
                <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B08B57] font-semibold block mb-1">
                  Zero-Waste Closed Loop Production
                </span>
                <h4 class="font-editorial text-2xl font-bold text-[#2B2B2B] mb-2">
                  100% Solar-Powered Stone Milling
                </h4>
                <p class="text-xs text-[#666666] leading-relaxed">
                  Our manufacturing facility recycles 98% of quarry cutting water and operates exclusively on renewable solar power, setting a new global standard for eco-conscious luxury stone processing.
                </p>
              </div>
            </div>
          </div>

          <!-- Secondary Floating Detail Card (overlapping bottom right) -->
          <div class="hidden sm:flex absolute -bottom-6 -right-6 bg-[#FFFFFF] p-5 rounded-[24px] border border-[#E4DDD3] shadow-luxury items-center gap-4 z-20 max-w-xs animate-in fade-in duration-700">
            <div class="w-12 h-12 rounded-2xl bg-[#F4F1EA] flex items-center justify-center text-[#B08B57] shrink-0 font-editorial font-bold text-xl">
              26+
            </div>
            <div>
              <span class="text-xs font-bold text-[#2B2B2B] block">Years of Provenance</span>
              <span class="text-[11px] text-[#666666]">Extracting Sinai Pearl & Galala Marble</span>
            </div>
          </div>

          <!-- Decorative Accent Element -->
          <div class="absolute -top-6 -left-6 w-40 h-40 rounded-full border border-[#B08B57]/20 -z-10 pointer-events-none"></div>
        </div>

        <!-- Right Side: Editorial Content & Premium Vertical Timeline (6 Cols) -->
        <div class="lg:col-span-6 flex flex-col justify-center">
          
          <!-- Small Label -->
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#B08B57] block mb-4">
            The Atelier Heritage & Manufactory
          </span>

          <!-- Large Editorial Title -->
          <h2 class="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#2B2B2B] font-light leading-[1.08] tracking-tight mb-6">
            Where Ancient Egyptian Geology Meets <span class="italic font-normal text-[#B08B57]">Italian CNC Mastery</span>.
          </h2>

          <!-- Short Company Introduction -->
          <p class="text-base sm:text-lg text-[#666666] font-normal leading-relaxed mb-10 sm:mb-12">
            Founded on an uncompromising vision for architectural perfection, Atelier Sinai operates Egypt’s most advanced natural stone processing manufactory. We extract 30-ton monolithic blocks from our exclusive quarries across Mount Sinai and Galala, transforming them into bespoke cut-to-size slabs, fluted wall panels, and book-matched masterpieces for world-renowned architecture studios.
          </p>

          <!-- Premium Vertical Timeline (replacing icon cards) -->
          <div class="relative pl-8 sm:pl-11 space-y-6 sm:space-y-7 my-2">
            <!-- Elegant Connecting Line -->
            <div class="absolute top-4 bottom-4 left-[15px] sm:left-[19px] w-[1.5px] bg-gradient-to-b from-[#B08B57] via-[#E4DDD3] to-[#E4DDD3]/20"></div>

            <!-- 7 Timeline Items -->
            <div 
              v-for="(item, idx) in timelineItems" 
              :key="idx"
              class="relative group"
            >
              <!-- Outlined Icon Node on the Line -->
              <div class="absolute -left-[32px] sm:-left-[44px] top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFFFFF] border-2 border-[#E4DDD3] group-hover:border-[#B08B57] group-hover:bg-[#2B2B2B] text-[#B08B57] group-hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-300 shadow-sm z-10">
                <component :is="item.icon" class="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </div>

              <!-- Timeline Item Card -->
              <div class="bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] p-5 sm:p-6 rounded-[24px] border border-[#E4DDD3]/80 hover:border-[#B08B57] shadow-subtle hover:shadow-luxury transition-all duration-300 transform group-hover:-translate-y-1">
                <div class="flex items-center justify-between mb-1.5">
                  <h3 class="font-editorial text-xl font-bold text-[#2B2B2B] group-hover:text-[#B08B57] transition-colors">
                    {{ item.title }}
                  </h3>
                  <span class="text-[10px] font-mono text-[#E4DDD3] font-bold group-hover:text-[#B08B57] transition-colors">
                    0{{ idx + 1 }}
                  </span>
                </div>
                <p class="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA link -->
          <div class="mt-12 pt-6 border-t border-[#E4DDD3]/70 flex items-center justify-between">
            <span class="text-xs text-[#666666] uppercase tracking-wider font-medium">
              Want to inspect our manufacturing tolerances?
            </span>
            <a 
              href="#sample-box"
              class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#B08B57] hover:text-[#9A774A] transition-colors group"
            >
              <span>Download Technical Spec Binder</span>
              <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
