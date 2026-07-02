<script setup lang="ts">
import { ref } from 'vue'
import { Layers, Cpu, Sun, Sparkles, Eye, CheckCircle2 } from 'lucide-vue-next'

const selectedFinish = ref('fluted')

const finishes = {
  honed: {
    title: 'ألواح مصقولة مخملية (Honed)',
    desc: 'نشر الكتل الخام إلى ألواح ناعمة ومطردة اللمعان. مثالية لأرضيات المطارات والمباني الحكومية الضخمة والممرات ذات الحركة الكثيفة.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    tactile: 'سماكات مخصصة من ٢٠ ملم حتى ٥٠ ملم لمشاريع البنية التحتية.'
  },
  fluted: {
    title: 'قطع هندسي مضلع ثلاثي الأبعاد (CNC)',
    desc: 'حفر وتفصيل الآلات الروبوتية خماسية المحاور لإنتاج جدران وتكسيات ثلاثية الأبعاد للواجهات الفندقية والمشاريع العملاقة.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    tactile: 'تفاوت دقيق بالمليمتر خالي من الفواصل للمواصفات العالمية.'
  },
  leathered: {
    title: 'ألواح بملمس جلدي مقاوم للانزلاق',
    desc: 'معالجة بالفرش الماسية تمنح الحجر صلابة فائقة ومقاومة عالية للتآكل، مناسبة للساحات الخارجية والميادين العامة والمشاريع التجارية.',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e071fa1a?auto=format&fit=crop&q=80&w=1200',
    tactile: 'متانة عالية ومقاومة فائقة للعوامل الجوية والحركة الكثيفة.'
  },
  polished: {
    title: 'ألواح وكتل صقل مرآتي (Polished)',
    desc: 'تلميع آلي متكامل يبرز التباين اللوني المتأصل في الرخام والجرانيت، لتجهيز الصالات الكبرى وبهو الفنادق الفاخرة.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    tactile: 'انعكاس بلوري ولمعان فائق التميز للكميات الضخمة.'
  }
}

const pillars = [
  {
    icon: Layers,
    title: '٠١. امتلاك مباشر للمحاجر',
    subtitle: 'محاجر جبل سيناء والجلالة وأسوان',
    desc: 'نمتلك ونشغل محاجرنا حصرياً دون وسطاء، مما يضمن استمرارية التوريد، وتجانس الجودة، والقدرة على توفير كتل خام تتجاوز ٢٥٠,٠٠٠ م³ سنوياً.'
  },
  {
    icon: Cpu,
    title: '٠٢. معدات تعدين وقص متطورة',
    subtitle: 'آلات بريتون الإيطالية متعددة الشفرات',
    desc: 'نستخدم أحدث الحفارات الثقيلة والأسلاك الماسية خماسية المحاور في المحجر والمصنع، لمعالجة وقص الكتل والألواح بدقة متناهية تقل عن ٠.٢ ملم وتلبية الكميات الضخمة.'
  },
  {
    icon: Sun,
    title: '٠٣. لوجستيات وشحن دولي موثوق',
    subtitle: 'حاويات تصدير مباشرة من المحجر',
    desc: 'شبكة لوجستية متكاملة تضمن فحص الجودة الصارم، والتغليف الآمن في صناديق خشبية معالجة، والشحن المباشر للحاويات من ميناء السويس إلى أكثر من ٣٥ دولة حول العالم.'
  }
]
</script>

<template>
  <section id="philosophy" class="py-20 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Quote Header -->
      <div class="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
        <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#3B82F6] block mb-4">
          لماذا تختارنا — القوة الإنتاجية والموثوقية العالمية
        </span>
        <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] font-light leading-tight mb-8">
          “نمتلك المحاجر، وندير التعدين، ونضمن التوريد <span class="italic text-[#3B82F6]">المباشر</span> للمشاريع العالمية العملاقة دون وسطاء.”
        </h2>
        <div class="w-16 h-[1px] bg-[#3B82F6] mx-auto mb-6"></div>
        <p class="text-sm sm:text-base text-[#475569] max-w-xl mx-auto font-normal">
          نحن شريكك الصناعي الموثوق للمشاريع القومية، والمطارات، والفنادق العالمية، نجمع بين ضخامة الإنتاج التعديني ودقة التشطيب الرقمي للمواصفات العالمية.
        </p>
      </div>

      <!-- 3 Architectural Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div 
          v-for="(pillar, idx) in pillars" 
          :key="idx"
          class="p-8 sm:p-10 rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-500 hover:bg-[#FFFFFF] hover:border-[#3B82F6] hover:shadow-corporate hover:-translate-y-1 group text-start"
        >
          <div class="w-12 h-12 rounded-[16px] bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#3B82F6] transition-all duration-300">
            <component :is="pillar.icon" class="w-6 h-6" />
          </div>
          <span class="text-[11px] font-mono text-[#3B82F6] font-semibold tracking-wider block mb-1">
            {{ pillar.subtitle }}
          </span>
          <h3 class="font-editorial text-2xl font-bold text-[#0F172A] mb-3">
            {{ pillar.title }}
          </h3>
          <p class="text-sm text-[#475569] leading-relaxed">
            {{ pillar.desc }}
          </p>
        </div>
      </div>

      <!-- Interactive Tactile Finish Showcase -->
      <div class="rounded-[20px] bg-[#F8FAFC] p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Info & Tabs (6 Cols) -->
          <div class="lg:col-span-6 flex flex-col justify-center text-start">
            <span class="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3B82F6] mb-3">
              <Eye class="w-3.5 h-3.5" /> خيارات تجهيز ومعالجة الكتل
            </span>
            <h3 class="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
              تشطيبات الألواح ومواصفات الكتل
            </h3>
            <p class="text-sm sm:text-base text-[#475569] mb-8 leading-relaxed">
              نوفر كتل رخام وجرانيت خام أو ألواح طاولات معالجة بمختلف التشطيبات لتلبية المتطلبات الهندسية الدقيقة لشركات المقاولات والمشاريع الكبرى:
            </p>

            <!-- Finish Selector Capsules -->
            <div class="grid grid-cols-2 gap-3 mb-8">
              <button 
                v-for="(item, key) in finishes" 
                :key="key"
                @click="selectedFinish = key"
                class="p-4 rounded-[16px] text-start transition-all duration-300 border flex flex-col gap-1"
                :class="selectedFinish === key 
                  ? 'bg-[#FFFFFF] border-[#1E3A8A] shadow-sm -translate-y-0.5' 
                  : 'bg-[#FFFFFF]/60 border-[#E2E8F0] hover:bg-[#FFFFFF] hover:border-[#3B82F6]'"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold font-editorial text-[#0F172A] capitalize">{{ item.title }}</span>
                  <span class="w-2 h-2 rounded-full" :class="selectedFinish === key ? 'bg-[#1E3A8A]' : 'bg-transparent'"></span>
                </div>
                <span class="text-[10px] text-[#475569] line-clamp-1 text-start">{{ item.tactile }}</span>
              </button>
            </div>

            <div class="p-4 rounded-[16px] bg-[#FFFFFF] border border-[#E2E8F0] flex items-start gap-3">
              <CheckCircle2 class="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <div>
                <h4 class="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  {{ finishes[selectedFinish as keyof typeof finishes].title }}
                </h4>
                <p class="text-xs text-[#475569]">
                  {{ finishes[selectedFinish as keyof typeof finishes].desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right Interactive Image Display (6 Cols) -->
          <div class="lg:col-span-6 relative">
            <div class="relative h-[340px] sm:h-[440px] rounded-[20px] overflow-hidden bg-[#FFFFFF] border border-[#E2E8F0] shadow-corporate">
              <Transition 
                mode="out-in"
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-105"
              >
                <img 
                  :key="selectedFinish"
                  :src="finishes[selectedFinish as keyof typeof finishes].image" 
                  :alt="finishes[selectedFinish as keyof typeof finishes].title"
                  class="w-full h-full object-cover"
                />
              </Transition>
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              
              <div class="absolute bottom-4 start-4 end-4 bg-[#FFFFFF]/90 backdrop-blur-md p-4 rounded-[16px] border border-[#E2E8F0] shadow-lg flex items-center justify-between text-start">
                <span class="text-xs font-semibold text-[#0F172A]">
                  المواصفات الفنية: <span class="font-normal text-[#475569]">{{ finishes[selectedFinish as keyof typeof finishes].tactile }}</span>
                </span>
                <span class="px-3 py-1 rounded-full bg-[#1E3A8A] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider">
                  متاح للتوريد
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
