<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, PhoneCall, Mail, MapPin, CheckCircle2, Sparkles, Send, ShieldCheck, Clock, Check } from 'lucide-vue-next'

const quoteModalOpen = ref(false)
const contactModalOpen = ref(false)
const isSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  studio: '',
  projectType: 'Residential Villa',
  stoneInterest: 'Sinai Pearl Velvet',
  message: ''
})

const handleSubmit = (type: string) => {
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    quoteModalOpen.value = false
    contactModalOpen.value = false
    form.value = {
      name: '',
      email: '',
      studio: '',
      projectType: 'Residential Villa',
      stoneInterest: 'Sinai Pearl Velvet',
      message: ''
    }
  }, 2500)
}
</script>

<template>
  <section id="sample-box" class="py-28 sm:py-44 bg-[#FFFFFF] relative overflow-hidden">
    <!-- Outer ambient decoration -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background-image: radial-gradient(#2B2B2B 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Large Rounded Container instead of full-width background -->
      <div class="relative rounded-[40px] bg-[#F4F1EA] border border-[#E4DDD3] shadow-luxury-hover overflow-hidden p-10 sm:p-16 lg:p-24 text-center flex flex-col items-center justify-center group">
        
        <!-- Subtle natural stone texture background decoration -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-multiply transition-transform duration-1000 ease-out group-hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
            alt="Natural Sinai Limestone Texture Background" 
            class="w-full h-full object-cover grayscale" 
          />
        </div>

        <!-- Ambient glowing light rings -->
        <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B08B57]/15 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#B08B57]/15 blur-3xl pointer-events-none"></div>

        <!-- Provenance Badge -->
        <div class="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E4DDD3] shadow-sm mb-6">
          <span class="w-2 h-2 rounded-full bg-[#B08B57] animate-pulse"></span>
          <span class="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] font-semibold text-[#2B2B2B]">
            The Atelier Sinai Guarantee
          </span>
        </div>

        <!-- Editorial Heading -->
        <h2 class="relative z-10 font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#2B2B2B] font-light max-w-3xl leading-[1.08] tracking-tight mb-6 text-balance">
          Transform Your Architectural Vision Into <span class="italic font-normal text-[#B08B57]">Eternal Egyptian Stone</span>.
        </h2>

        <!-- Short Paragraph -->
        <p class="relative z-10 text-base sm:text-lg text-[#666666] max-w-2xl font-normal leading-relaxed mb-10 sm:mb-12">
          Connect directly with our Suez engineering studio and master stone technologists. We provide custom CAD vein-mapping, millimeter waterjet profiling, and expedited architectural sample swatches shipped worldwide within 48 hours.
        </p>

        <!-- Two Buttons: Request Quote & Contact Us -->
        <div class="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          <button 
            @click="quoteModalOpen = true"
            class="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[24px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] font-semibold text-xs uppercase tracking-[0.14em] shadow-luxury transition-all duration-300 hover:scale-105 group/btn"
          >
            <span>Request Quote</span>
            <ArrowUpRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          <button 
            @click="contactModalOpen = true"
            class="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[24px] bg-[#FFFFFF] hover:bg-[#2B2B2B] text-[#2B2B2B] hover:text-[#FFFFFF] border border-[#E4DDD3] hover:border-[#2B2B2B] font-semibold text-xs uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:scale-105 group/btn2"
          >
            <span>Contact Us</span>
            <PhoneCall class="w-4 h-4 text-[#B08B57] group-hover/btn2:text-[#FFFFFF] transition-colors" />
          </button>
        </div>

        <!-- Trust Badges inside Container Footer -->
        <div class="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-12 mt-12 border-t border-[#E4DDD3]/80 text-[11px] uppercase tracking-[0.18em] text-[#666666] w-full">
          <span class="flex items-center gap-2">
            <ShieldCheck class="w-4 h-4 text-[#B08B57]" /> ISO 9001 CE Certified Slabs
          </span>
          <span class="flex items-center gap-2">
            <Clock class="w-4 h-4 text-[#B08B57]" /> 48-Hour Worldwide Sample Dispatch
          </span>
          <span class="flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-[#B08B57]" /> Direct Suez Port Logistics
          </span>
        </div>

      </div>

    </div>

    <!-- Interactive Request Quote Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="quoteModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/70 backdrop-blur-sm" @click.self="quoteModalOpen = false">
        <div class="bg-[#FFFFFF] rounded-[32px] max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E4DDD3] shadow-2xl p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300">
          
          <button @click="quoteModalOpen = false" class="absolute top-6 right-6 p-2 rounded-full bg-[#F4F1EA] text-[#2B2B2B] hover:bg-[#B08B57] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div v-if="!isSubmitted">
            <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B08B57] font-semibold block mb-2">
              Architectural Specification Department
            </span>
            <h3 class="font-editorial text-3xl font-bold text-[#2B2B2B] mb-2">
              Request Project Quote & Samples
            </h3>
            <p class="text-xs text-[#666666] mb-6">
              Receive pricing, shipping timelines from Port of Suez, and a 6-swatch physical stone box.
            </p>

            <form @submit.prevent="handleSubmit('quote')" class="space-y-4 text-left">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1">Full Name</label>
                  <input v-model="form.name" type="text" required placeholder="Architect / Designer" class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57]" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1">Corporate Email</label>
                  <input v-model="form.email" type="email" required placeholder="studio@architecture.com" class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57]" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1">Studio / Contractor Name</label>
                  <input v-model="form.studio" type="text" placeholder="Studio Nordic / Varese" class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57]" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1">Specified Stone</label>
                  <select v-model="form.stoneInterest" class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57]">
                    <option>Sinai Pearl Velvet Limestone</option>
                    <option>Galala Classic Ivory Marble</option>
                    <option>Nero Aswan Volcanic Granite</option>
                    <option>Sahara Noir Obsidian Gold</option>
                    <option>3D Linear Fluted Wall Panels</option>
                    <option>Custom Cut-to-Size Monoliths</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-[#2B2B2B] uppercase tracking-wider mb-1">Project Scale & Requirements</label>
                <textarea v-model="form.message" rows="3" placeholder="Approx. square meters, slab thickness (12mm/20mm/30mm), destination port..." class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57]"></textarea>
              </div>

              <button type="submit" class="w-full py-4 rounded-[20px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md transition-all mt-2">
                <span>Submit Specification Request</span>
                <Send class="w-4 h-4" />
              </button>
            </form>
          </div>

          <div v-else class="text-center py-10 space-y-4">
            <div class="w-16 h-16 rounded-full bg-[#F4F1EA] text-[#B08B57] flex items-center justify-center mx-auto border border-[#E4DDD3]">
              <Check class="w-8 h-8" />
            </div>
            <h3 class="font-editorial text-3xl font-bold text-[#2B2B2B]">Specification Received</h3>
            <p class="text-xs text-[#666666] max-w-sm mx-auto leading-relaxed">
              Our Suez engineering team has logged your inquiry. An architectural binder and formal quotation will be dispatched to <span class="font-bold text-[#2B2B2B]">{{ form.email }}</span> within 4 business hours.
            </p>
          </div>

        </div>
      </div>
    </Transition>

    <!-- Interactive Contact Us Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="contactModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B]/70 backdrop-blur-sm" @click.self="contactModalOpen = false">
        <div class="bg-[#FFFFFF] rounded-[32px] max-w-lg w-full border border-[#E4DDD3] shadow-2xl p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300 text-left">
          
          <button @click="contactModalOpen = false" class="absolute top-6 right-6 p-2 rounded-full bg-[#F4F1EA] text-[#2B2B2B] hover:bg-[#B08B57] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B08B57] font-semibold block mb-2">
            Global Headquarters & Manufactory
          </span>
          <h3 class="font-editorial text-3xl font-bold text-[#2B2B2B] mb-6">
            Direct Atelier Contact
          </h3>

          <div class="space-y-6">
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F1EA] border border-[#E4DDD3]">
              <div class="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#B08B57] shrink-0 shadow-sm">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#2B2B2B] block mb-0.5">Suez Automated Manufactory</span>
                <span class="text-xs text-[#666666] leading-relaxed">Attaka Industrial Zone, Sector 4, Suez Export Port, Egypt</span>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F1EA] border border-[#E4DDD3]">
              <div class="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#B08B57] shrink-0 shadow-sm">
                <PhoneCall class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#2B2B2B] block mb-0.5">Global Specification Desk</span>
                <span class="text-xs text-[#666666] font-mono">+20 (0) 62 345 8900 // +20 (0) 100 888 7766</span>
                <span class="text-[10px] text-[#B08B57] font-medium block mt-1">Mon–Sat: 08:00 – 18:00 EET</span>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F1EA] border border-[#E4DDD3]">
              <div class="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#B08B57] shrink-0 shadow-sm">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#2B2B2B] block mb-0.5">Architectural Inquiries</span>
                <span class="text-xs text-[#666666] font-mono">projects@ateliersinai.com // export@ateliersinai.com</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-[#E4DDD3] text-center">
            <button @click="contactModalOpen = false; quoteModalOpen = true" class="w-full py-3.5 rounded-[20px] bg-[#2B2B2B] hover:bg-[#B08B57] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-colors">
              Open Online Quote & Sample Form
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </section>
</template>
