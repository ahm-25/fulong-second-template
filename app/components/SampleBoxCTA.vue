<script setup lang="ts">
import { ref } from 'vue'
import { Box, Sparkles, CheckCircle2, Send, ShieldCheck, MapPin } from 'lucide-vue-next'

const submitted = ref(false)
const form = ref({
  name: '',
  firm: '',
  email: '',
  role: 'Principal Architect',
  country: 'United Kingdom',
  selection: 'Full Palette (6 Swatches)'
})

const handleSubmit = () => {
  if (!form.value.email || !form.value.name) return
  submitted.value = true
}
</script>

<template>
  <section id="sample-box" class="py-24 sm:py-36 bg-[#F4F1EA] relative overflow-hidden">
    <!-- Subtle background accent circle -->
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#B08B57]/10 pointer-events-none blur-3xl"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#2B2B2B]/5 pointer-events-none blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <div class="bg-[#FFFFFF] rounded-[24px] border border-[#E4DDD3] shadow-luxury overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          
          <!-- Left Presentation Column (6 Cols) -->
          <div class="lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-[#2B2B2B] text-[#FFFFFF] flex flex-col justify-between relative overflow-hidden">
            <!-- Subtle Grid Background -->
            <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: radial-gradient(#FFFFFF 1px, transparent 1px); background-size: 24px 24px;"></div>

            <div>
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B08B57]/20 border border-[#B08B57]/40 text-[10px] font-mono text-[#B08B57] uppercase tracking-widest mb-6">
                <Box class="w-3.5 h-3.5" /> For Architects & Designers
              </span>

              <h2 class="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-6">
                Order The Atelier <br /><span class="italic font-normal text-[#B08B57]">Sample Box</span>
              </h2>

              <p class="text-sm text-[#E4DDD3]/80 leading-relaxed max-w-md mb-8">
                Experience the tactile warmth of Egyptian stone in your design studio. Our architectural presentation box contains 6 signature swatches (10x10cm) in diverse finishes: Honed Velvet, Antique Leathered, Flamed, and Mirror Polished.
              </p>

              <div class="space-y-4 mb-12">
                <div class="flex items-center gap-3 text-xs text-[#FFFFFF]">
                  <CheckCircle2 class="w-4 h-4 text-[#B08B57] shrink-0" />
                  <span>Includes Sinai Pearl, Galala Ivory, Sunny Gold, and Nero Aswan</span>
                </div>
                <div class="flex items-center gap-3 text-xs text-[#FFFFFF]">
                  <CheckCircle2 class="w-4 h-4 text-[#B08B57] shrink-0" />
                  <span>Complimentary DHL Express global delivery for verified architecture studios</span>
                </div>
                <div class="flex items-center gap-3 text-xs text-[#FFFFFF]">
                  <CheckCircle2 class="w-4 h-4 text-[#B08B57] shrink-0" />
                  <span>Accompanying technical binder with ASTM test results & density sheets</span>
                </div>
              </div>
            </div>

            <div class="pt-8 border-t border-[#FFFFFF]/10 flex items-center justify-between text-xs text-[#E4DDD3]/60">
              <span class="flex items-center gap-1.5">
                <ShieldCheck class="w-4 h-4 text-[#B08B57]" /> ISO 9001 Certified Quarrying
              </span>
              <span>100% Organic Egyptian Stone</span>
            </div>
          </div>

          <!-- Right Request Form Column (6 Cols) -->
          <div class="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <Transition 
              mode="out-in"
              enter-active-class="transition duration-400 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="!submitted">
                <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#2B2B2B] mb-2">
                  Request Studio Sample Box
                </h3>
                <p class="text-xs text-[#666666] mb-8">
                  Please fill in your studio details below. Our architectural representative will confirm shipment within 24 hours.
                </p>

                <form @submit.prevent="handleSubmit" class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#2B2B2B] font-semibold mb-1.5">
                        Your Full Name *
                      </label>
                      <input 
                        v-model="form.name" 
                        type="text" 
                        required 
                        placeholder="e.g. Elena Varese" 
                        class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57] transition-colors"
                      />
                    </div>
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#2B2B2B] font-semibold mb-1.5">
                        Architecture / Design Firm *
                      </label>
                      <input 
                        v-model="form.firm" 
                        type="text" 
                        required 
                        placeholder="e.g. Varese Architecture Studio" 
                        class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57] transition-colors"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#2B2B2B] font-semibold mb-1.5">
                        Studio Email Address *
                      </label>
                      <input 
                        v-model="form.email" 
                        type="email" 
                        required 
                        placeholder="elena@studio-varese.com" 
                        class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57] transition-colors"
                      />
                    </div>
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#2B2B2B] font-semibold mb-1.5">
                        Professional Role
                      </label>
                      <select 
                        v-model="form.role"
                        class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57] transition-colors"
                      >
                        <option>Principal Architect</option>
                        <option>Interior Designer</option>
                        <option>Real Estate Developer</option>
                        <option>Luxury Stone Contractor</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#2B2B2B] font-semibold mb-1.5">
                        Destination Country
                      </label>
                      <select 
                        v-model="form.country"
                        class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57] transition-colors"
                      >
                        <option>United Kingdom</option>
                        <option>Italy</option>
                        <option>United Arab Emirates</option>
                        <option>Saudi Arabia</option>
                        <option>United States</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Denmark / Sweden / Norway</option>
                        <option>Other / International</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#2B2B2B] font-semibold mb-1.5">
                        Sample Box Palette Selection
                      </label>
                      <select 
                        v-model="form.selection"
                        class="w-full px-4 py-3 rounded-xl bg-[#F4F1EA] border border-[#E4DDD3] text-xs text-[#2B2B2B] focus:outline-none focus:border-[#B08B57] transition-colors"
                      >
                        <option>Full Palette (6 Swatches)</option>
                        <option>Sinai Limestone Selection (4 Swatches)</option>
                        <option>Egyptian Granite & Black Marble</option>
                        <option>Bespoke 3D Fluted Swatches</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    class="w-full py-4 rounded-[20px] bg-[#B08B57] hover:bg-[#9A774A] text-[#FFFFFF] font-semibold text-xs uppercase tracking-[0.14em] shadow-luxury transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send class="w-4 h-4" />
                    <span>Request Studio Presentation Box</span>
                  </button>
                </form>
              </div>

              <!-- Success State -->
              <div v-else class="text-center py-10">
                <div class="w-16 h-16 rounded-full bg-[#F4F1EA] border border-[#B08B57] text-[#B08B57] flex items-center justify-center mx-auto mb-6 shadow-md animate-bounce">
                  <CheckCircle2 class="w-8 h-8" />
                </div>
                <span class="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B08B57] block mb-2">
                  Dispatch Protocol Initiated
                </span>
                <h3 class="font-editorial text-3xl font-bold text-[#2B2B2B] mb-4">
                  Thank You, {{ form.name }}.
                </h3>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-sm mx-auto mb-8">
                  We have received your request for the <strong>{{ form.selection }}</strong>. Our Suez dispatch team will prepare your presentation swatches for DHL Express shipping to {{ form.country }}.
                </p>
                <button 
                  @click="submitted = false" 
                  class="px-6 py-3 rounded-full bg-[#F4F1EA] border border-[#E4DDD3] text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#FFFFFF] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </Transition>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
