<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, Filter, Sparkles, Layers, Check, Shield, ArrowRight, Eye } from 'lucide-vue-next'

const activeCategory = ref('الكل')
const selectedItem = ref<any | null>(null)

const categories = [
  'الكل',
  'كتل رخام',
  'كتل جرانيت',
  'ألواح طاولات',
  'بلاط وقطع',
  'مشاريع قومية',
  'حلول مخصصة'
]

const masonryItems = [
  {
    id: 'sinai-pearl-marble',
    title: 'كتل رخام لؤلؤة سيناء الخام',
    category: 'كتل رخام',
    origin: 'محجر جبل سيناء، جنوب سيناء',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[520px] sm:h-[620px]',
    desc: 'كتل صخرية خام مستخرجة من محاجرنا في جبل سيناء بأوزان تصل إلى ٣٠ طناً، جاهزة للشحن أو النشر في مصنعنا لتلبية عقود التوريد الكبرى.',
    specs: { absorption: '٠.١٨٪', density: '٢,٦٨٠ كجم/م³', strength: '١٣٥ ميجا باسكال', finishes: ['كتل خام (Blocks)', 'ألواح طاولات Slabs', 'نحت طولي ثلاثي الأبعاد'] }
  },
  {
    id: 'nero-aswan-granite',
    title: 'كتل جرانيت أسوان الأسود',
    category: 'كتل جرانيت',
    origin: 'محاجر أسوان التاريخية',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[380px] sm:h-[440px]',
    desc: 'كتل جرانيت بركاني خام فائقة الصلابة مستخرجة من محاجر أسوان التاريخية، مصممة لأعمال الرصف والبنية التحتية والمشاريع العملاقة.',
    specs: { absorption: '٠.٠٤٪', density: '٢,٨٩٠ كجم/م³', strength: '١٩٠ ميجا باسكال', finishes: ['كتل رصف ضخمة', 'موشى بالهب ومفرش', 'مصقول مرآتي'] }
  },
  {
    id: 'bookmatched-slabs',
    title: 'ألواح رخام الجلالة الكريمي',
    category: 'ألواح طاولات',
    origin: 'سلسلة جبال الصحراء الشرقية، السويس',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[460px] sm:h-[560px]',
    desc: 'ألواح طاولات مقصوصة من كتل حجر الجلالة الخام بمقاسات وسماكات مخصصة (٢٠-٥٠ ملم)، معالجة بأحدث آلات بريتون الإيطالية.',
    specs: { absorption: '٠.١٢٪', density: '٢,٧١٠ كجم/م³', strength: '١٤٢ ميجا باسكال', finishes: ['مصقول مرآتي Polished', 'مخملي Honed', 'حجر وش جبل'] }
  },
  {
    id: 'geometric-mosaic',
    title: 'بلاط أرصفة وميادين عامة',
    category: 'بلاط وقطع',
    origin: 'محاجر ومصنع السويس الآلي',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[360px] sm:h-[420px]',
    desc: 'بلاط حجري وجرانيتي مقصوص بدقة عالية ومقاوم للانزلاق والتآكل، مخصص لمشاريع التطوير العمراني، والساحات الخارجية للمطارات والفنادق.',
    specs: { absorption: '٠.١٥٪', density: '٢,٧٢٠ كجم/م³', strength: '١٥٠ ميجا باسكال', finishes: ['بلاط خارجي', 'معتق عتيق', 'جلدي مقاوم للانزلاق'] }
  },
  {
    id: 'sculptural-sink-monolith',
    title: 'تكسيات واجهات المشاريع القومية',
    category: 'مشاريع قومية',
    origin: 'مصنع السويس خماسي المحاور، مصر',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[560px] sm:h-[660px]',
    desc: 'تجهيز وتفصيل ألواح واجهات ضخمة ومقصوصة بالتحكم الرقمي (CNC) للمباني الحكومية والمطارات والمقرات الإدارية الكبرى.',
    specs: { absorption: '٠.١٠٪', density: '٢,٧٥٠ كجم/م³', strength: '١٦٠ ميجا باسكال', finishes: ['قص هندسي دقيق', 'معالجة ضد الحموضة والرطوبة'] }
  },
  {
    id: 'honed-velvet-tiles',
    title: 'ألواح وبلاط لؤلؤة سيناء',
    category: 'ألواح طاولات',
    origin: 'محجر جبل سيناء المملوك',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[420px] sm:h-[480px]',
    desc: 'ألواح وبلاط بمقاسات مخصصة (٦٠×١٢٠ سم أو طاولات كاملة) مع تشطيبات متنوعة لتجهيز الممرات والصالات الكبرى في المشاريع التجارية.',
    specs: { absorption: '٠.١٨٪', density: '٢,٦٨٠ كجم/م³', strength: '١٣٥ ميجا باسكال', finishes: ['ألواح طاولات Slabs', 'بلاط قياسي Tiles'] }
  },
  {
    id: 'sahara-noir-marble',
    title: 'كتل وألواح صحارى نوار الفاخر',
    category: 'كتل رخام',
    origin: 'محاجر جبال البحر الأحمر، مصر',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[480px] sm:h-[580px]',
    desc: 'استخراج وتجهيز كتل وألواح صحارى نوار ذي العروق الذهبية، مختارة بعناية فائقة لعقود التصدير ومواصفات المقاولين الدوليين.',
    specs: { absorption: '٠.٠٨٪', density: '٢,٨٥٠ كجم/م³', strength: '١٦٥ ميجا باسكال', finishes: ['كتل للتصدير Blocks', 'ألواح مصقولة Polished'] }
  },
  {
    id: '3d-fluted-wall-panel',
    title: 'حلول قص هندسي ثلاثي الأبعاد',
    category: 'حلول مخصصة',
    origin: 'استوديو هندسة التحكم الرقمي بالسويس',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[400px] sm:h-[460px]',
    desc: 'تفصيل وحفر آلي باستخدام أحدث الروبوتات خماسية المحاور لإنتاج جدران وتكسيات معمارية مضلعة للمشاريع الفندقية والتجارية الفاخرة.',
    specs: { absorption: '٠.١٢٪', density: '٢,٧١٠ كجم/م³', strength: '١٤٥ ميجا باسكال', finishes: ['نحت مضلع بنفث الماء', 'تكسيات ثلاثية الأبعاد'] }
  },
  {
    id: 'red-aswan-monumental',
    title: 'كتل وألواح جرانيت أسوان الأحمر',
    category: 'كتل جرانيت',
    origin: 'محاجر أسوان التاريخية المملوكة',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[500px] sm:h-[600px]',
    desc: 'كتل جرانيت أحمر تاريخي مستخرجة من محاجر أسوان، مجهزة للرصف الثقيل والواجهات المعمارية العاتية ومشاريع البنية التحتية.',
    specs: { absorption: '٠.٠٥٪', density: '٢,٨٨٠ كجم/م³', strength: '١٨٥ ميجا باسكال', finishes: ['كتل خام Blocks', 'موشى باللهب', 'مصقول مرآتي'] }
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'الكل') return masonryItems
  return masonryItems.filter(item => item.category === activeCategory.value)
})
</script>

<template>
  <section id="collections" class="py-24 sm:py-36 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 text-start">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#3B82F6] block mb-3">
            معرض منتجات المحاجر والمصنع
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
            كتل وألواح خام <span class="italic text-[#3B82F6]">بمواصفات قياسية</span>
          </h2>
        </div>
        <p class="text-sm sm:text-base text-[#475569] max-w-md leading-relaxed">
          استعراض شامل لكتلنا الرخامية والجرانيتية الخام المستخرجة من محاجرنا، إلى جانب ألواح الطاولات، والبلاط، وحلول القص المخصص لتوريدات المشاريع الكبرى.
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
            ? 'bg-[#1E3A8A] text-[#FFFFFF] border-[#1E3A8A] shadow-sm -translate-y-0.5' 
            : 'bg-[#FFFFFF] text-[#475569] border-[#E2E8F0] hover:border-[#3B82F6] hover:text-[#0F172A]'"
        >
          <span>{{ cat }}</span>
          <span v-if="activeCategory === cat" class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
        </button>
      </div>

      <!-- Asymmetrical Editorial Masonry Layout (CSS Multi-Columns avoiding equal-height cards) -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="break-inside-avoid relative rounded-[20px] overflow-hidden group cursor-pointer border border-[#E2E8F0] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#0F172A]"
          :class="item.heightClass"
          @click="selectedItem = item"
        >
          <!-- Large Premium Product Image with Smooth Hover Zoom -->
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-11"
          />

          <!-- Subtle gradient at rest for legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/25 to-transparent opacity-65 group-hover:opacity-0 transition-opacity duration-500"></div>

          <!-- Vibrant Blue Overlay on Hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/95 via-[#1E3A8A]/75 to-[#1E3A8A]/30 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px]"></div>

          <!-- Top Category Pill (Minimal) -->
          <div class="absolute top-5 start-5 end-5 flex items-center justify-between pointer-events-none z-10">
            <span class="bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-wider shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
              {{ item.category }}
            </span>
          </div>

          <!-- Minimal Product Information & Animated Arrow (Editorial Appearance) -->
          <div class="absolute bottom-6 start-6 end-6 flex items-end justify-between z-10">
            <div class="flex flex-col text-start transition-transform duration-500 group-hover:-translate-y-1 max-w-[80%]">
              <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3B82F6] group-hover:text-[#DBEAFE] font-semibold block mb-1.5 transition-colors">
                {{ item.origin }}
              </span>
              <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight">
                {{ item.title }}
              </h3>
            </div>

            <!-- Animated Arrow Icon -->
            <div class="w-12 h-12 rounded-full bg-[#FFFFFF] text-[#1E3A8A] group-hover:bg-[#3B82F6] group-hover:text-[#FFFFFF] flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 shrink-0">
              <ArrowUpRight class="w-5 h-5 transition-transform duration-300 group-hover:scale-11 rtl:scale-x-[-1]" />
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
      <div v-if="selectedItem" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm" @click.self="selectedItem = null">
        <div class="bg-[#FFFFFF] rounded-[20px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-corporate p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300 text-start">
          
          <button @click="selectedItem = null" class="absolute top-6 end-6 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="md:col-span-5 rounded-[16px] overflow-hidden bg-[#F8FAFC] h-72 md:h-full min-h-[280px]">
              <img :src="selectedItem.image" :alt="selectedItem.title" class="w-full h-full object-cover" />
            </div>

            <div class="md:col-span-7 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6] font-semibold block mb-1">
                  {{ selectedItem.origin }} • {{ selectedItem.category }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
                  {{ selectedItem.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {{ selectedItem.desc }}
                </p>

                <!-- Technical Specs Box -->
                <div class="bg-[#F8FAFC] rounded-[20px] p-4 border border-[#E2E8F0] mb-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#475569] block">امتصاص الماء</span>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{{ selectedItem.specs.absorption }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#475569] block">الكثافة</span>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{{ selectedItem.specs.density }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] uppercase tracking-wider text-[#475569] block">قوة التحمل</span>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#0F172A]">{{ selectedItem.specs.strength }}</span>
                  </div>
                </div>

                <!-- Available Finishes -->
                <div class="mb-6">
                  <span class="text-xs font-semibold text-[#0F172A] uppercase tracking-wider block mb-2.5">
                    تشطيبات وخيارات التوريد للمشاريع:
                  </span>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="fin in selectedItem.specs.finishes" :key="fin" class="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[11px] font-medium text-[#0F172A] flex items-center gap-1.5 shadow-sm">
                      <Check class="w-3.5 h-3.5 text-[#3B82F6]" /> {{ fin }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- CTA in Modal -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E2E8F0]">
                <a 
                  href="#sample-box"
                  @click="selectedItem = null"
                  class="flex-1 py-3.5 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>طلب توريد تجاري ومواصفات</span>
                  <ArrowUpRight class="w-4 h-4 rtl:scale-x-[-1]" />
                </a>
                <button 
                  @click="selectedItem = null"
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
