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
    name: 'كتل وألواح حجر لؤلؤة سيناء',
    category: 'كتل رخام وألواح خام',
    country: 'مصر',
    origin: 'محجر جبل سيناء المملوك، جنوب سيناء',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    finishes: ['كتل خام (Blocks)', 'ألواح طاولات Slabs', 'بلاط مخصص Tiles', 'مبشرد (Bush-Hammered)'],
    absorption: '٠.١٨٪',
    density: '٢,٦٨٠ كجم/م³',
    strength: '١٣٥ ميجا باسكال',
    desc: 'كتل صخرية خام تزن حتى ٣٠ طناً وألواح مقصوصة بسماكات مخصصة (٢٠-٥٠ ملم) من الرخام الجيري الدولوميتي. توريد مباشر للمشاريع القومية والمطارات.'
  },
  {
    id: 'galala-classic-beige',
    name: 'كتل وألواح رخام الجلالة الكلاسيكي',
    category: 'ألواح طاولات ومربعات',
    country: 'مصر',
    origin: 'محاجر جبال الجلالة، السويس',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
    finishes: ['مصقول مرآتي Polished', 'مخملي Honed', 'قص هندسي CNC', 'حجر وش جبل'],
    absorption: '٠.١٢٪',
    density: '٢,٧١٠ كجم/م³',
    strength: '١٤٢ ميجا باسكال',
    desc: 'استخراج مباشر لكتل رخام الجلالة الكريمي ذي الكثافة الهيكلية الفائقة، وتجهيز ألواح طاولات وبلاط مخصص وآمن للشحن اللوجستي في الحاويات.'
  },
  {
    id: 'nero-aswan-obsidian',
    name: 'كتل جرانيت أسوان الأسود البركاني',
    category: 'كتل جرانيت رصف ضخمة',
    country: 'مصر',
    origin: 'محاجر الجرانيت التاريخية بأسوان',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
    finishes: ['كتل رصف ضخمة', 'موشى بالهب ومفرش', 'مصقول مرآتي', 'جلدي عتيق'],
    absorption: '٠.٠٤٪',
    density: '٢,٨٩٠ كجم/م³',
    strength: '١٩٠ ميجا باسكال',
    desc: 'كتل جرانيت خام وألواح رصف ضخمة مصممة هندسياً لمشاريع البنية التحتية، والميادين العامة، والواجهات الخارجية للمباني الحكومية والفنادق.'
  },
  {
    id: 'sahara-noir-gold',
    name: 'ألواح رخام صحارى نوار الفاخر',
    category: 'ألواح واجهات للتصدير',
    country: 'مصر',
    origin: 'محاجر جبال البحر الأحمر، الصحراء الشرقية',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1000',
    finishes: ['نحت مضلع بنفث الماء', 'مخملي مصقول', 'ألواح متناظرة Book-Match'],
    absorption: '٠.٠٨٪',
    density: '٢,٨٥٠ كجم/م³',
    strength: '١٦٥ ميجا باسكال',
    desc: 'أحجار وألواح فاخرة مجهزة بكميات تجارية ومختارة بعناية لتلبية مواصفات كبرى شركات المقاولات العالمية في تصميم الواجهات والصالات الكبرى.'
  },
  {
    id: 'sunny-gold-royal',
    name: 'كتل وألواح صني جولد الملكي',
    category: 'كتل وألواح وحلول قطع',
    country: 'مصر',
    origin: 'محاجر المنيا الدافئة، وسط مصر',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1000',
    finishes: ['كتل خام Blocks', 'ألواح طاولات', 'بلاط قياسي Tiles', 'معتق عتيق'],
    absorption: '٠.٢١٪',
    density: '٢,٦٥٠ كجم/م³',
    strength: '١٢٨ ميجا باسكال',
    desc: 'توريد كتل خام وتفصيل ألواح وبلاط بمقاسات مخصصة لحاويات التصدير، مع ضمان تجانس العروق والألوان للطلبيات التجارية الكبيرة.'
  },
  {
    id: 'triesta-grigio-alabaster',
    name: 'ألواح تريستا غريجيو وحلول القطع',
    category: 'حلول القطع المخصص (CNC)',
    country: 'مصر',
    origin: 'محترف التحكم الرقمي بالسويس',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    finishes: ['قطع هندسي مخصص CNC', 'مخملي مصقول', 'جلدي عتيق', 'معالج بالرمل'],
    absorption: '٠.١٥٪',
    density: '٢,٧٤٠ كجم/م³',
    strength: '١٤٨ ميجا باسكال',
    desc: 'تجهيز ألواح وتكسيات ثلاثية الأبعاد منحوتة بدقة متناهية بالتحكم الرقمي، مخصصة للمشاريع الفندقية والإنشاءات المعمارية الكبرى.'
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
  <section class="py-24 sm:py-36 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Top Section Header with Navigational Arrows -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 text-start">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#3B82F6] block mb-3">
            إنتاج المحاجر والكتل الصخرية والألواح
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
            كتل وألواح خام <span class="italic text-[#3B82F6]">للتصدير والمشاريع</span>
          </h2>
        </div>

        <div class="flex items-center gap-4 flex-row rtl:flex-row-reverse">
          <button 
            @click="scrollLeft"
            class="w-12 h-12 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] hover:border-[#1E3A8A] text-[#0F172A] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
            aria-label="Scroll Left"
          >
            <ArrowLeft class="w-5 h-5 rtl:scale-x-[-1]" />
          </button>
          <button 
            @click="scrollRight"
            class="w-12 h-12 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] hover:border-[#1E3A8A] text-[#0F172A] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
            aria-label="Scroll Right"
          >
            <ArrowRight class="w-5 h-5 rtl:scale-x-[-1]" />
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
        class="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start bg-[#FFFFFF] rounded-[24px] overflow-hidden border border-[#E2E8F0] shadow-corporate transition-all duration-500 hover:shadow-2xl hover:border-[#3B82F6] hover:-translate-y-2 flex flex-col justify-between group"
      >
        <!-- Large Product Image Container (h-80 sm:h-96) -->
        <div class="relative h-80 sm:h-96 overflow-hidden bg-[#F8FAFC] pointer-events-none">
          <img 
            :src="prod.image" 
            :alt="prod.name"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Blue Category Badge -->
          <div class="absolute top-5 start-5 z-10">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E3A8A] text-[#FFFFFF] text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
              {{ prod.category }}
            </span>
          </div>
        </div>

        <!-- Minimal Modern Content: Country, Stone Name, View Details Button -->
        <div class="p-6 sm:p-8 flex flex-col flex-1 justify-between text-start bg-[#FFFFFF]">
          <div class="mb-6">
            <!-- Country / Origin -->
            <div class="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-semibold mb-2.5">
              <MapPin class="w-3.5 h-3.5 shrink-0" />
              <span>{{ prod.country }} • {{ prod.origin }}</span>
            </div>

            <!-- Stone Name -->
            <h3 class="font-editorial text-2xl sm:text-[28px] font-bold text-[#0F172A] leading-tight group-hover:text-[#1E3A8A] transition-colors">
              {{ prod.name }}
            </h3>
          </div>

          <!-- Minimal View Details Button -->
          <button 
            @click="selectedProduct = prod"
            class="w-full py-3.5 rounded-[20px] bg-[#F8FAFC] hover:bg-[#1E3A8A] text-[#0F172A] hover:text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center gap-2 border border-[#E2E8F0] shadow-sm group/btn"
          >
            <span>عرض التفاصيل والمواصفات</span>
            <ArrowUpRight class="w-4 h-4 text-[#3B82F6] group-hover/btn:text-[#FFFFFF] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:scale-x-[-1]" />
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
      <div v-if="selectedProduct" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm" @click.self="selectedProduct = null">
        <div class="bg-[#FFFFFF] rounded-[20px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-corporate p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300 text-start">
          
          <button @click="selectedProduct = null" class="absolute top-6 end-6 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-5 rounded-[16px] overflow-hidden bg-[#F8FAFC] h-72 md:h-full min-h-[280px]">
              <img :src="selectedProduct.image" :alt="selectedProduct.name" class="w-full h-full object-cover" />
            </div>

            <div class="md:col-span-7 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6] font-semibold block mb-1">
                  {{ selectedProduct.origin }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
                  {{ selectedProduct.name }}
                </h3>
                <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {{ selectedProduct.desc }}
                </p>

                <!-- Technical Specs Box -->
                <div class="bg-[#F8FAFC] rounded-[20px] p-4 border border-[#E2E8F0] mb-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#475569] block">امتصاص الماء</span>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{{ selectedProduct.absorption }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#475569] block">الكثافة</span>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{{ selectedProduct.density }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#475569] block">قوة التحمل</span>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{{ selectedProduct.strength }}</span>
                  </div>
                </div>

                <!-- Available Finishes -->
                <div class="mb-6">
                  <span class="text-xs font-semibold text-[#0F172A] uppercase tracking-wider block mb-2.5">
                    تشطيبات وخيارات التوريد للمشاريع:
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fin in selectedProduct.finishes" :key="fin" class="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[11px] font-medium text-[#0F172A] flex items-center gap-1.5 shadow-sm">
                      <Check class="w-3.5 h-3.5 text-[#3B82F6]" /> {{ fin }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- CTA in Modal -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E2E8F0]">
                <a 
                  href="#sample-box"
                  @click="selectedProduct = null"
                  class="flex-1 py-3.5 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>طلب توريد تجاري ومواصفات</span>
                  <ArrowUpRight class="w-4 h-4 rtl:scale-x-[-1]" />
                </a>
                <button 
                  @click="selectedProduct = null"
                  class="px-5 py-3.5 rounded-[20px] border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#F8FAFC]"
                >
                  إغلاق المواصفات
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Transition>
  </section>
</template>
