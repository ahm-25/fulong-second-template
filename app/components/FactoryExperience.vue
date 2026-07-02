<script setup lang="ts">
import { ref } from 'vue'
import { Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight, ShieldCheck, Cpu, Sparkles, MapPin, Layers, CheckCircle2 } from 'lucide-vue-next'

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)
const isMuted = ref(true)
const galleryRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeftPos = ref(0)

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

const toggleMute = () => {
  if (!videoRef.value) return
  videoRef.value.muted = !videoRef.value.muted
  isMuted.value = videoRef.value.muted
}

const scrollLeft = () => {
  if (!galleryRef.value) return
  galleryRef.value.scrollBy({ left: -460, behavior: 'smooth' })
}

const scrollRight = () => {
  if (!galleryRef.value) return
  galleryRef.value.scrollBy({ left: 460, behavior: 'smooth' })
}

// Drag to scroll functionality for horizontal gallery
const startDrag = (e: MouseEvent) => {
  if (!galleryRef.value) return
  isDragging.value = true
  startX.value = e.pageX - galleryRef.value.offsetLeft
  scrollLeftPos.value = galleryRef.value.scrollLeft
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !galleryRef.value) return
  e.preventDefault()
  const x = e.pageX - galleryRef.value.offsetLeft
  const walk = (x - startX.value) * 1.5
  galleryRef.value.scrollLeft = scrollLeftPos.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}

const factoryGallery = [
  {
    id: 'wire-sawing',
    title: '٠١. تقنيات استخراج الكتل بالأسلاك الماسية',
    subtitle: 'استخراج الخام وتعدين المحاجر',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    desc: 'استخدام أحدث الحفارات وأسلاك القطع الماسية في محاجرنا لاستخراج كتل صخرية خام تزن حتى ٣٠ طناً بأعلى درجات الأمان والتحكم الهيكلي.'
  },
  {
    id: 'robotic-polishing',
    title: '٠٢. تشكيل الكتل ونشر الألواح آلياً',
    subtitle: 'آلات بريتون متعددة الشفرات',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000',
    desc: 'نشر الكتل العملاقة في مصنع السويس باستخدام خطوط بريتون الإيطالية الآلية لمعالجة وقص الألواح بدقة متناهية بالمليمتر ودون أي هدر.'
  },
  {
    id: 'digital-bookmatching',
    title: '٠٣. المعالجة الآلية وتجهيز الأسطح',
    subtitle: 'خطوط الصقل والمعالجة الرقمية',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
    desc: 'تقنيات صقل روبوتية متطورة تمنح الألواح تشطيبات متعددة (مصقول، مخملي، معتق، ومضلع) تلبي متطلبات المشاريع الهندسية الكبرى.'
  },
  {
    id: 'waterjet-profiling',
    title: '٠٤. القص الهندسي بنفث الماء (CNC)',
    subtitle: 'حلول القطع المخصص للمشاريع',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1000',
    desc: 'تجهيز ألواح وتكسيات ثلاثية الأبعاد مخصصة للواجهات الخارجية والأعمدة والسلالم للمطارات ومقرات الشركات والفنادق العالمية.'
  },
  {
    id: 'quality-inspection',
    title: '٠٥. فحوصات ومراقبة الجودة الصارمة',
    subtitle: 'فحص الهيكل ومعالجة الإيبوكسي',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
    desc: 'يخضع كل لوح وكتلة لفحوصات بالموجات فوق الصوتية ومعالجة إيبوكسي تحت الفراغ لضمان المتانة والخلو التام من التشققات قبل التصدير.'
  },
  {
    id: 'port-loading',
    title: '٠٦. التغليف وشحن حاويات التصدير العالمي',
    subtitle: 'حوامل خشبية معقمة ومطابقة للمواصفات',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1000',
    desc: 'تجهيز صناديق وحوامل خشبية معالجة بالتبخير، وتحميل الحاويات مباشرة من المصنع على بعد ١٥ كم فقط من ميناء السويس إلى مختلف دول العالم.'
  }
]
</script>

<template>
  <section id="quarry" class="py-28 sm:py-40 bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 text-start">
        <div>
          <span class="text-[11px] font-mono uppercase tracking-[0.25em] font-semibold text-[#3B82F6] block mb-3">
            محاجرنا ومصنعنا الآلي بالسويس
          </span>
          <h2 class="font-editorial text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
            جولة في المحاجر <br />ومراحل <span class="italic text-[#3B82F6]">الإنتاج والتصدير</span>
          </h2>
        </div>
        <p class="text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed font-normal">
          نجمع بين امتلاكنا المباشر لمحاجر جبل سيناء وأسوان، وقدرات مصنعنا الآلي الممتد على مساحة ٥٠,٠٠٠ متر مربع بالسويس. ندير دورة الإنتاج كاملة من استخراج الكتل الخام بالأسلاك الماسية، وحتى نشر الألواح، والفحص الفني، وشحن الحاويات للأسواق العالمية.
        </p>
      </div>

      <!-- Large Rounded Cinematic Video Container (20px border radius) -->
      <div class="relative rounded-[20px] overflow-hidden bg-[#0F172A] border border-[#E2E8F0] shadow-corporate my-12 sm:my-16 group">
        
        <div class="relative h-[480px] sm:h-[640px] lg:h-[720px] w-full bg-[#0F172A]">
          <video 
            ref="videoRef"
            src="https://assets.mixkit.co/videos/2250/2250-720.mp4"
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          ></video>

          <!-- Cinematic Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-[#0F172A]/40 pointer-events-none"></div>

          <!-- Top Bar: Live Studio Feed & Location Pill -->
          <div class="absolute top-6 start-6 end-6 flex flex-wrap items-center justify-between gap-3 z-10">
            <div class="inline-flex items-center gap-2.5 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E2E8F0] shadow-sm">
              <span class="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
              <span class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#0F172A]">
                بث حي ومباشر من خط الإنتاج // منشأة السويس، مصر
              </span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                @click="toggleMute"
                class="w-10 h-10 rounded-full bg-[#FFFFFF]/90 hover:bg-[#1E3A8A] text-[#0F172A] hover:text-[#FFFFFF] transition-colors flex items-center justify-center shadow-sm"
                :title="isMuted ? 'تشغيل صوت المصنع' : 'كتم الصوت'"
              >
                <VolumeX v-if="isMuted" class="w-4 h-4" />
                <Volume2 v-else class="w-4 h-4" />
              </button>
              <button 
                @click="togglePlay"
                class="w-10 h-10 rounded-full bg-[#FFFFFF]/90 hover:bg-[#1E3A8A] text-[#0F172A] hover:text-[#FFFFFF] transition-colors flex items-center justify-center shadow-sm"
                :title="isPlaying ? 'إيقاف الفيديو مؤقتاً' : 'تشغيل الفيديو'"
              >
                <Pause v-if="isPlaying" class="w-4 h-4" />
                <Play v-else class="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          <!-- Bottom Glass Informational Banner inside Video -->
          <div class="absolute bottom-6 sm:bottom-10 start-6 sm:start-10 end-6 sm:end-10 z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 bg-[#FFFFFF]/95 backdrop-blur-md p-6 sm:p-8 rounded-[20px] border border-[#E2E8F0] shadow-lg text-start">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-2xl bg-[#F8FAFC] flex items-center justify-center text-[#3B82F6] shrink-0">
                <Cpu class="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#0F172A] block">دقة تصنيع ٠.٢ ملم</span>
                <span class="text-[11px] text-[#475569]">نحت إيطالي خماسي المحاور (CNC)</span>
              </div>
            </div>

            <div class="flex items-center gap-3.5 border-t md:border-t-0 md:border-s border-[#E2E8F0] pt-4 md:pt-0 md:ps-8">
              <div class="w-11 h-11 rounded-2xl bg-[#F8FAFC] flex items-center justify-center text-[#3B82F6] shrink-0">
                <Layers class="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#0F172A] block">ألواح بوزن ٣٠ طناً</span>
                <span class="text-[11px] text-[#475569]">قص متناظر متكامل (Book-Match)</span>
              </div>
            </div>

            <div class="flex items-center gap-3.5 border-t md:border-t-0 md:border-s border-[#E2E8F0] pt-4 md:pt-0 md:ps-8">
              <div class="w-11 h-11 rounded-2xl bg-[#F8FAFC] flex items-center justify-center text-[#3B82F6] shrink-0">
                <ShieldCheck class="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#0F172A] block">شحن مباشر إلى الميناء</span>
                <span class="text-[11px] text-[#475569]">على بعد ١٥ كم من محطة تصدير السويس</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Horizontal Image Gallery Header with Navigation Arrows -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-20 sm:mt-28 mb-10 text-start">
        <div>
          <span class="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[#3B82F6] block mb-2">
            خط ومراحل الإنتاج
          </span>
          <h3 class="font-editorial text-3xl sm:text-4xl text-[#0F172A] font-light">
            خطوط معالجة وتصنيع أتيليه ومعداته
          </h3>
        </div>

        <div class="flex items-center gap-3 flex-row rtl:flex-row-reverse">
          <span class="text-xs text-[#475569] font-medium me-2 hidden sm:inline">اسحب للاستكشاف</span>
          <button 
            @click="scrollLeft"
            class="w-11 h-11 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] hover:border-[#1E3A8A] text-[#0F172A] flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Scroll Gallery Left"
          >
            <ArrowLeft class="w-4 h-4 rtl:scale-x-[-1]" />
          </button>
          <button 
            @click="scrollRight"
            class="w-11 h-11 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] hover:border-[#1E3A8A] text-[#0F172A] flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label="Scroll Gallery Right"
          >
            <ArrowRight class="w-4 h-4 rtl:scale-x-[-1]" />
          </button>
        </div>
      </div>

    </div>

    <!-- Horizontal Drag-to-Scroll Image Gallery -->
    <div 
      ref="galleryRef"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      class="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-12 pt-4 px-4 sm:px-8 max-w-[1440px] mx-auto cursor-grab active:cursor-grabbing no-scrollbar select-none snap-x snap-mandatory"
    >
      <div 
        v-for="item in factoryGallery" 
        :key="item.id"
        class="w-[320px] sm:w-[400px] lg:w-[460px] shrink-0 snap-start bg-[#FFFFFF] rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-corporate transition-all duration-500 hover:shadow-luxury hover:border-[#3B82F6] hover:-translate-y-2 flex flex-col justify-between group"
      >
        <!-- Gallery Image -->
        <div class="relative h-64 sm:h-72 overflow-hidden bg-[#F8FAFC] pointer-events-none">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span class="text-[10px] font-mono font-bold text-[#FFFFFF] uppercase tracking-wider bg-[#1E3A8A] px-3 py-1 rounded-full shadow-md">
              {{ item.subtitle }}
            </span>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-6 sm:p-8 flex flex-col justify-between flex-1 text-start">
          <div>
            <span class="text-[9px] font-mono uppercase tracking-[0.25em] text-[#3B82F6] font-semibold block mb-1">
              خطوة من مراحل إنتاج أتيليه
            </span>
            <h4 class="font-editorial text-2xl font-bold text-[#0F172A] leading-snug group-hover:text-[#1E3A8A] transition-colors mb-3">
              {{ item.title }}
            </h4>
            <p class="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <div class="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-semibold text-[#0F172A]">
            <span class="flex items-center gap-1.5 text-[#3B82F6]">
              <CheckCircle2 class="w-3.5 h-3.5" /> خط معتمد بشهادة الآيزو ٩٠٠١
            </span>
            <span class="font-mono text-[10px] text-[#475569] uppercase">أتيليه السويس</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
