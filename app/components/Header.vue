<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Box, Layers, Mountain, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const productsMenuOpen = ref(false)
let closeTimeout: ReturnType<typeof setTimeout> | null = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const openProductsMenu = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  productsMenuOpen.value = true
}

const closeProductsMenu = () => {
  closeTimeout = setTimeout(() => {
    productsMenuOpen.value = false
  }, 150)
}

const navLinks = [
  { name: 'الرئيسية', href: '#' },
  { name: 'عن المحاجر', href: '#about' },
  { name: 'الكتل والألواح', href: '#collections', hasMegaMenu: true },
  { name: 'المشاريع القومية', href: '#projects' },
  { name: 'التصدير الدولي', href: '#quarry' },
  { name: 'قدراتنا الإنتاجية', href: '#blog' },
  { name: 'طلب توريد تجاري', href: '#sample-box' },
]

const megaCategories = [
  {
    id: 'sinai-limestone',
    title: 'كتل رخام سيناء والجلالة',
    origin: 'محاجرنا المملوكة في جنوب سيناء والسويس',
    desc: 'استخراج كتل صخرية خام تزن حتى ٣٠ طناً من الرخام الجيري الدافئ والدولوميتي. توريد مباشر لمصانع المعالجة والمشاريع القومية الكبرى.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    count: 'قدرة استخراج: ٥٠,٠٠٠ م³ سنوياً',
    href: '#collections'
  },
  {
    id: 'egyptian-granite',
    title: 'كتل جرانيت أسوان البركاني',
    origin: 'محاجر الجرانيت التاريخية جنوب مصر',
    desc: 'كتل جرانيت أسود وأحمر وأشهب فائقة الصلابة ومقاومة للتآكل. مخصصة لمشاريع البنية التحتية، الرصف الضخم، والواجهات الخارجية للمطارات.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    count: 'قدرة استخراج: ٤٠,٠٠٠ م³ سنوياً',
    href: '#collections'
  },
  {
    id: 'alabaster-quartzite',
    title: 'ألواح طاولات خام مقصوصة (Slabs)',
    origin: 'مصنع المعالجة والقص الرقمي بالسويس',
    desc: 'نشر الكتل الخام باستخدام آلات بريتون (Breton) متعددة الشفرات، لتوريد ألواح مخصصة السماكات (٢٠ ملم حتى ٥٠ ملم) بكميات تجارية لحاويات التصدير.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    count: 'إنتاج: ١٥٠,٠٠٠ م² شهرياً',
    href: '#collections'
  },
  {
    id: 'bespoke-carved',
    title: 'القطع المخصص للمشاريع العملاقة',
    origin: 'قسم المشاريع والمواصفات الفنية المتقدمة',
    desc: 'تجهيز وتفصيل الأحجار بالكميات الضخمة لتلبية متطلبات شركات المقاولات العالمية، والمطارات، والفنادق، والمباني الحكومية بدقة متناهية.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
    count: 'توريد مباشر للحاويات',
    href: '#bespoke'
  }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (closeTimeout) clearTimeout(closeTimeout)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 h-[90px] transition-all duration-500 bg-[#FFFFFF] border-b border-[#E2E8F0] flex items-center"
    :class="isScrolled ? 'bg-[#FFFFFF]/90 backdrop-blur-md shadow-corporate border-[#E2E8F0]' : 'bg-[#FFFFFF]'"
  >
    <div class="max-w-7xl mx-auto w-full px-4 sm:px-8 flex items-center justify-between h-full">
      
      <!-- Left: Elegant Logo -->
      <a href="#" class="flex items-center gap-3 group shrink-0">
        <img src="/logo.png" alt="Fulong Logo" class="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
      </a>

      <!-- Center: Navigation Links -->
      <nav class="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
        <div 
          v-for="link in navLinks" 
          :key="link.name"
          class="h-full flex items-center relative"
          @mouseenter="link.hasMegaMenu ? openProductsMenu() : null"
          @mouseleave="link.hasMegaMenu ? closeProductsMenu() : null"
        >
          <a 
            :href="link.href"
            class="text-xs xl:text-[13px] uppercase tracking-[0.14em] font-medium text-[#0F172A] hover:text-[#3B82F6] transition-colors duration-300 relative py-2 flex items-center gap-1 group"
          >
            <span>{{ link.name }}</span>
            <ChevronDown 
              v-if="link.hasMegaMenu" 
              class="w-3.5 h-3.5 text-[#3B82F6] transition-transform duration-300"
              :class="productsMenuOpen ? 'rotate-180' : ''"
            />
            
            <!-- Subtle underline hover animation -->
            <span class="absolute bottom-0 start-0 w-0 h-[1.5px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </nav>

      <!-- Right: Primary Button "Request Quote" -->
      <div class="hidden sm:flex items-center gap-4 shrink-0">
        <a 
          href="#sample-box"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm hover:shadow-corporate hover:-translate-y-0.5 group"
        >
          <span>طلب توريد تجاري</span>
          <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:scale-x-[-1]" />
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-2.5 rounded-xl border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
        aria-label="Toggle Navigation"
      >
        <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>

    </div>

    <!-- Mega Menu for Products -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div 
        v-if="productsMenuOpen"
        class="absolute top-[90px] left-0 right-0 z-40 bg-[#FFFFFF] border-b border-[#E2E8F0] shadow-corporate"
        @mouseenter="openProductsMenu"
        @mouseleave="closeProductsMenu"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-start">
            
            <!-- Left Editorial Intro (3 Cols) -->
            <div class="lg:col-span-3 flex flex-col justify-between h-full border-e border-[#E2E8F0] pe-6">
              <div>
                <span class="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3B82F6] mb-3">
                  <Layers class="w-3.5 h-3.5" /> إنتاج المحاجر والكتل
                </span>
                <h3 class="font-editorial text-3xl font-bold text-[#0F172A] leading-tight mb-3">
                  كتل وألواح خام <br /><span class="italic font-normal text-[#3B82F6]">مباشرة من المحجر</span>
                </h3>
                <p class="text-xs text-[#475569] leading-relaxed mb-6">
                  نمتلك ونشغل محاجر الرخام والجرانيت في سيناء وأسوان والسويس، لنورد الكتل الصخرية الخام والألواح المعالجة بكميات ضخمة للمشاريع القومية والعالمية.
                </p>
              </div>

              <div class="pt-6 border-t border-[#E2E8F0]">
                <a 
                  href="#collections" 
                  @click="productsMenuOpen = false"
                  class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0F172A] hover:text-[#3B82F6] transition-colors group"
                >
                  <span>استكشف قدرات المحاجر والتوريد</span>
                  <ArrowRight class="w-4 h-4 text-[#3B82F6] transition-transform group-hover:translate-x-1 rtl:scale-x-[-1]" />
                </a>
              </div>
            </div>

            <!-- Right Mega Category Cards Grid (9 Cols) -->
            <div class="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                v-for="cat in megaCategories" 
                :key="cat.id"
                :href="cat.href"
                @click="productsMenuOpen = false"
                class="group bg-[#F8FAFC] rounded-[20px] overflow-hidden border border-[#E2E8F0] hover:border-[#3B82F6] transition-all duration-400 hover:bg-[#FFFFFF] hover:shadow-corporate flex flex-col justify-between"
              >
                <!-- Preview Image -->
                <div class="relative h-44 overflow-hidden bg-[#F8FAFC]">
                  <img 
                    :src="cat.image" 
                    :alt="cat.title"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span class="text-[10px] font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider bg-[#1E3A8A] px-2.5 py-1 rounded-full">
                      {{ cat.count }}
                    </span>
                  </div>
                </div>

                <!-- Card Content -->
                <div class="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span class="text-[9px] uppercase tracking-[0.2em] text-[#3B82F6] font-semibold block mb-1">
                      {{ cat.origin }}
                    </span>
                    <h4 class="font-editorial text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#3B82F6] transition-colors mb-2">
                      {{ cat.title }}
                    </h4>
                    <p class="text-[11px] text-[#475569] line-clamp-2 leading-relaxed">
                      {{ cat.desc }}
                    </p>
                  </div>

                  <div class="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-semibold text-[#0F172A] group-hover:text-[#3B82F6]">
                    <span>عرض كتل المحجر</span>
                    <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:scale-x-[-1]" />
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen"
        class="lg:hidden absolute top-[90px] left-0 right-0 bg-[#FFFFFF] border-b border-[#E2E8F0] shadow-corporate p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto"
      >
        <nav class="flex flex-col gap-3">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-[0.14em] font-medium text-[#0F172A] hover:text-[#3B82F6] py-2.5 border-b border-[#E2E8F0] flex items-center justify-between"
          >
            <span>{{ link.name }}</span>
            <ArrowUpRight class="w-4 h-4 text-[#3B82F6] rtl:scale-x-[-1]" />
          </a>
        </nav>

        <div class="flex flex-col gap-3 pt-2">
          <a 
            href="#sample-box"
            @click="mobileMenuOpen = false"
            class="flex items-center justify-center gap-2 w-full py-4 rounded-[20px] bg-[#1E3A8A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] shadow-sm"
          >
            <span>طلب توريد تجاري</span>
            <ArrowUpRight class="w-4 h-4 rtl:scale-x-[-1]" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
