<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDownRight, ArrowUpRight, Play, Pause, Sparkles, ShieldCheck, MapPin, Compass, Layers, CheckCircle2 } from 'lucide-vue-next'

const isPlaying = ref(true)
const activeClip = ref(0)
const videoRef = ref<HTMLVideoElement | null>(null)

const videoClips = [
  {
    id: 'quarry',
    title: '01. استخراج الكتل الخام من محاجر سيناء',
    subtitle: 'كتل رخام جبل سيناء والدولوميت',
    video: 'https://assets.mixkit.co/videos/4069/4069-720.mp4',
    poster: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'cutting',
    title: '02. معدات التعدين والقص الماسي الثقيلة',
    subtitle: 'قدرة استخراج وضخ كتل تزن ٣٠ طناً',
    video: 'https://assets.mixkit.co/videos/2252/2252-720.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'polishing',
    title: '03. نشر الألواح وتفصيل المشاريع العملاقة',
    subtitle: 'مصنع المعالجة الآلي في السويس',
    video: 'https://assets.mixkit.co/videos/23377/23377-720.mp4',
    poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'interiors',
    title: '04. التجهيز والشحن اللوجستي للحاويات',
    subtitle: 'توريد مباشر للمطارات والمشاريع القومية',
    video: 'https://assets.mixkit.co/videos/4011/4011-720.mp4',
    poster: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
  }
]

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

const switchClip = (idx: number) => {
  activeClip.value = idx
  isPlaying.value = true
  // Video tag will auto-load new source via reactive binding
}

const stats = [
  { value: '٢٦+ عاماً', label: 'من الخبرة والتشغيل في إدارة المحاجر' },
  { value: '٥ محاجر نشطة', label: 'مملوكة بالكامل في سيناء وأسوان' },
  { value: '٢٥٠,٠٠٠ م³', label: 'القدرة الإنتاجية السنوية للكتل الخام' },
]
</script>

<template>
  <section class="relative pt-36 sm:pt-48 pb-36 lg:pb-48 overflow-hidden bg-[#F8FAFC]">
    <!-- Architectural background grid lines with large white space -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#0F172A 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <!-- Ambient architectural glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#DBEAFE]/40 via-[#3B82F6]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
      
      <!-- Top Provenance Badge -->
      <div class="flex items-center gap-4 mb-10 sm:mb-14 text-start">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm transition-transform duration-300 hover:scale-105">
          <span class="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          <span class="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#0F172A]">
            محاجر رخام وجرانيت مملوكة • توريد دولي للمشاريع القومية
          </span>
        </div>
        <span class="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#475569] font-medium">
          <ShieldCheck class="w-4 h-4 text-[#1E3A8A]" /> كتل وألواح خام معتمدة دولياً بمواصفات الجودة ISO 9001 و CE
        </span>
      </div>

      <!-- Clean Two-Column Architectural Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        <!-- Left Column: Large Bold Headline, Description & Two CTA Buttons (6 Cols) -->
        <div class="lg:col-span-6 flex flex-col justify-center text-start">
          
          <!-- Large Bold Headline -->
          <h1 class="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold text-[#0F172A] leading-[1.08] tracking-tight text-balance mb-8">
            محاجر رخام وجرانيت رائدة، وتوريد عالمي <span class="italic font-normal text-[#1E3A8A]">للكتل الصخرية</span> الخام.
          </h1>

          <!-- Short Description -->
          <p class="text-lg sm:text-xl text-[#475569] font-normal leading-relaxed max-w-xl mb-12">
            نمتلك ونشغل محاجر الرخام والجرانيت في سيناء وأسوان، لنورد الكتل الصخرية الخام (Blocks) والألواح المعالجة بكميات ضخمة لشركات المقاولات والمشاريع القومية، والمطارات، والفنادق العالمية، مع دعم لوجستي وشحن مباشر للحاويات إلى أكثر من ٣٥ دولة.
          </p>

          <!-- Two CTA Buttons with subtle hover animations -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-14">
            <a 
              href="#sample-box" 
              class="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[20px] bg-[#1E3A8A] text-[#FFFFFF] font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] shadow-md transition-all duration-300 hover:bg-[#3B82F6] hover:-translate-y-1 hover:shadow-xl active:scale-95 group/btn"
            >
              <span>طلب توريد تجاري للحاويات</span>
              <ArrowUpRight class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:scale-x-[-1]" />
            </a>

            <a 
              href="#collections" 
              class="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[20px] bg-[#FFFFFF] text-[#1E3A8A] border-2 border-[#1E3A8A] font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:bg-[#1E3A8A] hover:text-[#FFFFFF] hover:-translate-y-1 hover:shadow-lg active:scale-95 group/btn2"
            >
              <span>استكشف كتل المحاجر والألواح</span>
              <ArrowDownRight class="w-4 h-4 text-[#1E3A8A] transition-all duration-300 group-hover/btn2:text-[#FFFFFF] group-hover/btn2:translate-x-0.5 group-hover/btn2:translate-y-0.5 rtl:scale-x-[-1]" />
            </a>
          </div>

          <!-- Quick Provenance Feature Pill -->
          <div class="pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center gap-8 text-xs sm:text-sm text-[#475569] font-medium">
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-4 h-4 text-[#22C55E]" />
              <span>امتلاك مباشر للمحاجر دون وسطاء</span>
            </div>
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-4 h-4 text-[#22C55E]" />
              <span>قدرات إنتاجية ضخمة واستدامة بيئية</span>
            </div>
          </div>

        </div>

        <!-- Right Column: 24px Rounded Image/Video Container with Floating Stats Card (6 Cols) -->
        <div class="lg:col-span-6 relative pb-20 sm:pb-24 pt-6 lg:pt-0">
          
          <!-- Large 24px Rounded Image/Video Container with Soft Shadow -->
          <div class="relative rounded-[24px] overflow-hidden bg-[#0F172A] border border-[#E2E8F0] shadow-corporate transition-all duration-500 hover:shadow-2xl group">
            
            <!-- Video Container displaying premium marble quarry & factory footage -->
            <div class="relative h-[460px] sm:h-[540px] lg:h-[580px] w-full bg-[#0F172A]">
              <video 
                ref="videoRef"
                :key="videoClips[activeClip].video"
                :src="videoClips[activeClip].video"
                :poster="videoClips[activeClip].poster"
                autoplay
                loop
                muted
                playsinline
                class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              ></video>
              
              <!-- Clean Architectural Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-[#0F172A]/30 pointer-events-none"></div>

              <!-- Top Controls: Quarry / Factory Location Badge & Pause/Play -->
              <div class="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 z-10 text-start">
                <div class="flex items-center gap-2 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E2E8F0] shadow-sm">
                  <MapPin class="w-3.5 h-3.5 text-[#1E3A8A]" />
                  <span class="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    {{ videoClips[activeClip].subtitle }}
                  </span>
                </div>

                <button 
                  @click="togglePlay"
                  class="w-10 h-10 rounded-full bg-[#FFFFFF]/95 hover:bg-[#1E3A8A] text-[#0F172A] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center shadow-md hover:scale-105"
                  :title="isPlaying ? 'إيقاف الفيديو مؤقتاً' : 'تشغيل الفيديو'"
                >
                  <Pause v-if="isPlaying" class="w-4 h-4" />
                  <Play v-else class="w-4 h-4 ps-0.5" />
                </button>
              </div>

              <!-- Video Info & Switchers positioned above the floating stats card -->
              <div class="absolute bottom-20 sm:bottom-24 left-6 right-6 z-10 flex flex-col gap-3 text-start">
                <span class="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6] font-bold">
                  عمليات المحاجر والاستخراج // المرحلة {{ activeClip + 1 }} من ٤
                </span>
                <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#FFFFFF] leading-tight drop-shadow-md">
                  {{ videoClips[activeClip].title }}
                </h3>

                <!-- Switcher Pill Buttons -->
                <div class="flex items-center gap-2 pt-2 overflow-x-auto no-scrollbar">
                  <button 
                    v-for="(clip, idx) in videoClips" 
                    :key="clip.id"
                    @click="switchClip(idx)"
                    class="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap"
                    :class="activeClip === idx 
                      ? 'bg-[#1E3A8A] text-[#FFFFFF] border-[#1E3A8A] shadow-md scale-105' 
                      : 'bg-[#0F172A]/80 text-[#FFFFFF]/80 border-[#FFFFFF]/20 hover:border-[#3B82F6] hover:bg-[#1E3A8A]/50'"
                  >
                    <span>0{{ idx + 1 }}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- Floating Statistics Card Overlapping the Bottom of the Image -->
          <div class="relative -mt-12 sm:-mt-16 z-20 mx-2 sm:mx-6 lg:mx-8">
            <div class="bg-[#FFFFFF]/95 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 border border-[#E2E8F0] shadow-2xl transition-transform duration-500 hover:-translate-y-1.5">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x md:rtl:divide-x-reverse divide-[#E2E8F0]">
                <div 
                  v-for="(st, idx) in stats" 
                  :key="idx"
                  class="flex flex-col justify-center text-start pt-4 md:pt-0 first:pt-0 md:px-3 lg:px-4 md:first:ps-0 md:last:pe-0"
                >
                  <span class="font-editorial text-2xl sm:text-3xl font-bold text-[#1E3A8A] tracking-tight leading-none mb-2 break-words">
                    {{ st.value }}
                  </span>
                  <span class="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed break-words">
                    {{ st.label }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
