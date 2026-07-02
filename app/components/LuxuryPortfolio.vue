<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, MapPin, Layers, Building2, Sparkles, CheckCircle2, ShieldCheck, Download } from 'lucide-vue-next'

const activeFilter = ref('جميع المشاريع والتوريدات')
const selectedProject = ref<any | null>(null)

const filters = [
  'جميع المشاريع والتوريدات',
  'المباني الحكومية والمطارات',
  'المراكز التجارية والميادين',
  'الفنادق والمشاريع المعمارية'
]

const portfolioProjects = [
  {
    id: 'nordic-opera-villa',
    title: 'مطار نورديك الدولي',
    category: 'المباني الحكومية والمطارات',
    country: 'كوبنهاغن، الدنمارك',
    stoneType: 'ألواح حجر لؤلؤة سيناء',
    finish: 'مخملي مصقول (سماكة ٢٠-٣٠ ملم)',
    architect: 'ائتلاف نورديك للهندسة',
    scale: 'توريد ١٨,٠٠٠ م² ألواح',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[520px] sm:h-[640px]',
    desc: 'توريد مباشر من محاجرنا لألواح حجر لؤلؤة سيناء الجيري الدولوميتي لتكسية صالات الوصول والمغادرة في مطار نورديك، مع ضمان قوة تحمل حركة المسافرين الكثيفة.'
  },
  {
    id: 'king-fahd-financial-plaza',
    title: 'مركز الملك فهد المالي',
    category: 'المراكز التجارية والميادين',
    country: 'الرياض، السعودية',
    stoneType: 'جرانيت أسوان الأسود والأحمر',
    finish: 'كتل رصف مبشرد وموشى باللهب',
    architect: 'مجموعة المنصور الهندسية',
    scale: 'توريد ٢٥,٠٠٠ م² رصف واجهات',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[440px] sm:h-[500px]',
    desc: 'مشروع تطوير الساحات الخارجية والميادين بجرانيت أسوان البركاني بسماكة ٥٠ ملم، مصمم هندسياً لتحمل الأوزان الثقيلة للمركبات والتقلبات الحرارية الشديدة.'
  },
  {
    id: 'palazzo-varese-residence',
    title: 'فندق قصر فاريزي التاريخي',
    category: 'الفنادق والمشاريع المعمارية',
    country: 'ميلانو، إيطاليا',
    stoneType: 'رخام الجلالة الكلاسيكي الكريمي',
    finish: 'ألواح متناظرة Book-Match مصقولة',
    architect: 'استوديو فاريزي وشركائه',
    scale: 'توريد ٦,٥٠٠ م² ألواح طاولات',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[580px] sm:h-[680px]',
    desc: 'توريد ألواح طاولات عملاقة متناظرة العروق من رخام الجلالة المستخرج من محاجرنا لتجهيز بهو الاستقبال الرئيسي والصالات الكبرى في الفندق.'
  },
  {
    id: 'dubai-palm-penthouse',
    title: 'منتجع وأبراج نخلة دبي',
    category: 'الفنادق والمشاريع المعمارية',
    country: 'دبي، الإمارات',
    stoneType: 'رخام صحارى نوار الفاخر',
    finish: 'تكسيات طولية مضلعة خماسية المحاور',
    architect: 'المجموعة المعمارية الإماراتية',
    scale: 'توريد ٩,٢٠٠ م² ألواح واجهات',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[460px] sm:h-[540px]',
    desc: 'تجهيز وتفصيل جدران معمارية ثلاثية الأبعاد منحوتة بدقة متناهية من ألواح صحارى نوار لتكسية الواجهات الفندقية وصالات كبار الزوار.'
  },
  {
    id: 'st-james-executive-towers',
    title: 'أبراج سانت جيمس الحكومية',
    category: 'المباني الحكومية والمطارات',
    country: 'لندن، المملكة المتحدة',
    stoneType: 'حجر تريستا غريجيو المعماري',
    finish: 'معتق عتيق ومعالج بالرمل',
    architect: 'فوستر للتصميم والبناء',
    scale: 'توريد ١٢,٩٠٠ م² أعمدة وواجهات',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[600px] sm:h-[700px]',
    desc: 'توريد ألواح وتكسيات ضخمة لبهو المبنى الإداري والأعمدة بارتفاع ٨ أمتار، مقصوصة بدقة متناهية بالتحكم الرقمي (CNC) في مصنعنا بالسويس.'
  },
  {
    id: 'atelier-scandinavian-gallery',
    title: 'مركز ستوكهولم الدولي للمؤتمرات',
    category: 'المراكز التجارية والميادين',
    country: 'ستوكهولم، السويد',
    stoneType: 'رخام لؤلؤة سيناء الدولوميتي',
    finish: 'بلاط مقصوص الأطراف ٦٠×١٢٠ سم',
    architect: 'إسكندنافيان لتشكيل الأحجار',
    scale: 'توريد ١٤,٠٠٠ م² أرضيات',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    heightClass: 'h-[480px] sm:h-[560px]',
    desc: 'توريد بلاط وألواح أرضيات متجانسة اللون والصلابة لقاعات المؤتمرات الكبرى والممرات الرئيسية، بمواصفات قياسية عالمية.'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'جميع المشاريع والتوريدات') return portfolioProjects
  return portfolioProjects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <section id="projects" class="py-28 sm:py-40 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
    <!-- Subtle architectural background grid line -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#0F172A 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Editorial Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#3B82F6] block mb-3">
            سجل التوريدات والمشاريع الدولية
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
            توريدات المقاولات <span class="italic text-[#3B82F6]">والمشاريع العملاقة</span>.
          </h2>
        </div>
        <p class="text-sm sm:text-base text-[#475569] max-w-lg leading-relaxed">
          استعراض لأبرز عقود التوريد ومشاريع البنية التحتية، والمطارات، والمراكز التجارية، والفنادق العالمية التي تم توريد كتل وألواح الرخام والجرانيت لها مباشرة من محاجرنا ومصنعنا.
        </p>
      </div>

      <!-- Filter Capsule Bar -->
      <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-14 no-scrollbar">
        <button 
          v-for="flt in filters" 
          :key="flt"
          @click="activeFilter = flt"
          class="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all duration-300 border flex items-center gap-2.5"
          :class="activeFilter === flt 
            ? 'bg-[#1E3A8A] text-[#FFFFFF] border-[#1E3A8A] shadow-sm -translate-y-0.5' 
            : 'bg-[#FFFFFF] text-[#475569] border-[#E2E8F0] hover:border-[#3B82F6] hover:text-[#0F172A]'"
        >
          <span>{{ flt }}</span>
          <span v-if="activeFilter === flt" class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
        </button>
      </div>

      <!-- Asymmetrical Masonry Project Grid (CSS Multi-Columns avoiding equal heights) -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 sm:gap-10 space-y-8 sm:space-y-10">
        <div 
          v-for="proj in filteredProjects" 
          :key="proj.id"
          class="break-inside-avoid relative rounded-[20px] overflow-hidden group cursor-pointer border border-[#E2E8F0] shadow-corporate transition-all duration-700 hover:shadow-luxury hover:-translate-y-2 bg-[#0F172A]"
          :class="proj.heightClass"
          @click="selectedProject = proj"
        >
          <!-- Large Architecture Photo -->
          <img 
            :src="proj.image" 
            :alt="proj.title"
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <!-- Base Gradient Overlay (always visible for contrast) -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>

          <!-- Top Country & Category Pill (Always Visible) -->
          <div class="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
            <span class="bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2E8F0] text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <MapPin class="w-3 h-3 text-[#3B82F6]" /> {{ proj.country }}
            </span>
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#FFFFFF] font-medium opacity-80 drop-shadow hidden sm:inline">
              {{ proj.category }}
            </span>
          </div>

          <!-- Bottom Title Bar (Visible when NOT hovered) -->
          <div class="absolute bottom-6 left-6 right-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-semibold block mb-1">
              دراسة حالة توريد
            </span>
            <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight drop-shadow-md">
              {{ proj.title }}
            </h3>
          </div>

          <!-- Hover Reveals Project Information with Elegant Animation -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 z-20">
            
            <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <!-- Country & City -->
              <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#3B82F6] font-semibold block mb-1">
                {{ proj.country }} // {{ proj.category }}
              </span>

              <!-- Project Name -->
              <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight mb-4">
                {{ proj.title }}
              </h3>

              <!-- Stone Type & Finish Info Box -->
              <div class="bg-[#FFFFFF]/10 backdrop-blur-md p-4 rounded-[20px] border border-[#FFFFFF]/20 mb-4">
                <div class="flex items-center gap-2 mb-1">
                  <Layers class="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span class="text-[9px] uppercase tracking-widest text-[#E2E8F0]/80 font-semibold">الخام المورد:</span>
                </div>
                <span class="font-mono text-xs sm:text-sm font-bold text-[#FFFFFF] block mb-1">
                  {{ proj.stoneType }}
                </span>
                <span class="text-[11px] text-[#E2E8F0] block">
                  التشطيب: <span class="text-[#3B82F6] font-medium">{{ proj.finish }}</span>
                </span>
              </div>

              <!-- Architect & Scale Details -->
              <div class="grid grid-cols-2 gap-2 text-[11px] text-[#E2E8F0] mb-6 border-b border-[#FFFFFF]/15 pb-4">
                <div>
                  <span class="text-[9px] uppercase tracking-wider text-[#E2E8F0]/60 block">الجهة المنفذة / المقاول:</span>
                  <span class="font-medium text-[#FFFFFF] truncate block">{{ proj.architect }}</span>
                </div>
                <div>
                  <span class="text-[9px] uppercase tracking-wider text-[#E2E8F0]/60 block">حجم التوريد:</span>
                  <span class="font-mono font-medium text-[#3B82F6] block">{{ proj.scale }}</span>
                </div>
              </div>

              <!-- "Explore Installation" Action Button -->
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A8A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#0F172A] group/btn">
                  <span>استعراض تفاصيل التوريد</span>
                  <ArrowUpRight class="w-4 h-4 text-[#FFFFFF] group-hover/btn:text-[#0F172A] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:scale-x-[-1]" />
                </span>

                <span class="text-[10px] font-mono uppercase tracking-wider text-[#FFFFFF]/60">
                  دراسة المشروع ←
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

    <!-- Interactive Case Study Modal Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm" @click.self="selectedProject = null">
        <div class="bg-[#FFFFFF] rounded-[20px] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-corporate p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300 text-start">
          
          <button @click="selectedProject = null" class="absolute top-6 end-6 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-6 rounded-[16px] overflow-hidden bg-[#F8FAFC] h-80 lg:h-full min-h-[320px]">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
            </div>

            <div class="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6] font-semibold block mb-1">
                  {{ selectedProject.country }} // {{ selectedProject.category }}
                </span>
                <h3 class="font-editorial text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
                  {{ selectedProject.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  {{ selectedProject.desc }}
                </p>

                <!-- Technical Specification Summary Box -->
                <div class="bg-[#F8FAFC] rounded-[20px] p-5 border border-[#E2E8F0] mb-6 space-y-3">
                  <div class="flex items-center justify-between border-b border-[#E2E8F0]/60 pb-2.5">
                    <span class="text-xs text-[#475569] font-medium">الخام المورد:</span>
                    <span class="font-mono font-bold text-xs text-[#0F172A]">{{ selectedProject.stoneType }}</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-[#E2E8F0]/60 pb-2.5">
                    <span class="text-xs text-[#475569] font-medium">تشطيب السطح:</span>
                    <span class="font-mono font-bold text-xs text-[#3B82F6]">{{ selectedProject.finish }}</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-[#E2E8F0]/60 pb-2.5">
                    <span class="text-xs text-[#475569] font-medium">الاستشاري والمقاول:</span>
                    <span class="font-medium text-xs text-[#0F172A]">{{ selectedProject.architect }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-[#475569] font-medium">حجم وكمية التوريد:</span>
                    <span class="font-mono font-bold text-xs text-[#0F172A]">{{ selectedProject.scale }}</span>
                  </div>
                </div>

                <!-- Provenance Tag -->
                <div class="flex items-center gap-2 text-xs text-[#475569] mb-6">
                  <CheckCircle2 class="w-4 h-4 text-[#3B82F6]" />
                  <span>توريد مباشر من محاجرنا ومصنع السويس الآلي</span>
                </div>
              </div>

              <!-- Modal CTAs -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E2E8F0]">
                <a 
                  href="#sample-box"
                  @click="selectedProject = null"
                  class="flex-1 py-3.5 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>طلب مواصفات وعينات المشروع</span>
                  <ArrowUpRight class="w-4 h-4 rtl:scale-x-[-1]" />
                </a>
                <a 
                  href="#sample-box"
                  @click="selectedProject = null"
                  class="px-5 py-3.5 rounded-[20px] border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#F8FAFC] flex items-center justify-center gap-1.5"
                >
                  <Download class="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>المواصفات الفنية</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Transition>
  </section>
</template>
