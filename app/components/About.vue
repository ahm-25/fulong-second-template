<script setup lang="ts">
import { Award, Cpu, Sparkles, Globe2, ArrowUpRight, MapPin, ShieldCheck } from 'lucide-vue-next'

const featureCards = [
  {
    icon: Award,
    title: 'امتلاك المحاجر واستخراج الخام',
    desc: 'أكثر من عقدين من التشغيل المباشر واستخراج الكتل الصخرية الخام بمهارة فائقة من محاجرنا المملوكة في سيناء وأسوان.'
  },
  {
    icon: Cpu,
    title: 'قدرة إنتاجية ضخمة للكتل',
    desc: 'تجهيز ونشر كتل خام تزن حتى ٣٠ طناً، مع قدرة استخراج سنوية تتجاوز ٢٥٠,٠٠٠ متر مكعب لتلبية طلبات المشاريع العملاقة.'
  },
  {
    icon: Sparkles,
    title: 'رقابة جودة صارمة ومعالجة متقدمة',
    desc: 'فحص دقيق بالسلامة الهيكلية والخلو من التصدعات، مع معالجة رقمية باستخدام آلات بريتون الإيطالية متعددة الشفرات.'
  },
  {
    icon: Globe2,
    title: 'شحن وحاويات تصدير لوجستية',
    desc: 'دعم لوجستي مباشر لتنظيم وشحن حاويات الكتل والألواح من المحجر والمصنع إلى أكثر من ٣٥ دولة حول العالم.'
  }
]
</script>

<template>
  <section id="about" class="py-28 sm:py-40 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
    <!-- Subtle architectural grid pattern background -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#0F172A 1px, transparent 1px); background-size: 36px 36px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Modern Asymmetrical Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        
        <!-- Left Side: Large Rounded Image Container (6 Cols) -->
        <div class="lg:col-span-6 relative">
          
          <!-- Masterpiece Image Card with 24px Rounded Corners -->
          <div class="relative rounded-[24px] overflow-hidden bg-[#FFFFFF] p-3 sm:p-4 border border-[#E2E8F0] shadow-corporate group transition-all duration-500 hover:shadow-2xl">
            <div class="relative h-[520px] sm:h-[640px] lg:h-[700px] rounded-[18px] overflow-hidden bg-[#0F172A]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400" 
                alt="Atelier Sinai Automated Factory in Suez" 
                class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent opacity-75"></div>

              <!-- Top Location Badge -->
              <div class="absolute top-6 start-6 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E2E8F0] flex items-center gap-2.5 shadow-md">
                <MapPin class="w-4 h-4 text-[#1E3A8A]" />
                <span class="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  محاجر جبل سيناء ومصنع المعالجة بالسويس • مصر
                </span>
              </div>

              <!-- Bottom Glass Info Box inside image -->
              <div class="absolute bottom-6 start-6 end-6 bg-[#FFFFFF]/95 backdrop-blur-md p-6 sm:p-8 rounded-[20px] border border-[#E2E8F0] shadow-xl text-start transition-transform duration-500 group-hover:-translate-y-1">
                <span class="text-[11px] font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold block mb-1.5">
                  استخراج وتعدين مستدام
                </span>
                <h4 class="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2.5">
                  عمليات تعدين ومحاجر صديقة للبيئة وإعادة تدوير المياه
                </h4>
                <p class="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  نطبق أعلى معايير الاستدامة في محاجرنا ومصنعنا، حيث نعيد تدوير ٩٨٪ من المياه ونعتمد على الطاقة الشمسية لتقليل البصمة الكربونية في إنتاج الكتل والألواح.
                </p>
              </div>
            </div>
          </div>

          <!-- Secondary Floating Experience Badge -->
          <div class="hidden sm:flex absolute -bottom-6 -end-6 bg-[#FFFFFF] p-5 rounded-[20px] border border-[#E2E8F0] shadow-2xl items-center gap-4 z-20 max-w-xs transition-transform duration-500 hover:-translate-y-1 text-start">
            <div class="w-14 h-14 rounded-[16px] bg-[#1E3A8A] flex items-center justify-center text-[#FFFFFF] shrink-0 font-editorial font-bold text-2xl shadow-sm">
              ٢٦+
            </div>
            <div>
              <span class="text-xs font-bold text-[#0F172A] block leading-snug">عاماً من قيادة المحاجر والاستخراج</span>
              <span class="text-[11px] text-[#475569]">في توريد الكتل الخام والمشاريع القومية</span>
            </div>
          </div>

          <!-- Decorative Architectural Ring -->
          <div class="absolute -top-8 -start-8 w-44 h-44 rounded-full border border-[#1E3A8A]/15 -z-10 pointer-events-none"></div>
        </div>

        <!-- Right Side: Editorial Content & 2x2 Feature Cards Grid (6 Cols) -->
        <div class="lg:col-span-6 flex flex-col justify-center text-start">
          
          <!-- Small Label -->
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm text-[11px] font-mono uppercase tracking-[0.22em] text-[#3B82F6] font-semibold w-max mb-6">
            <ShieldCheck class="w-3.5 h-3.5 text-[#1E3A8A]" /> قصة محاجرنا وقدراتنا الصناعية
          </span>

          <!-- Large Editorial Title -->
          <h2 class="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] text-[#0F172A] font-bold leading-[1.12] tracking-tight mb-6">
            امتلاك مباشر للمحاجر، وقدرات استخراج وإنتاج <span class="italic font-normal text-[#1E3A8A]">للمشاريع العالمية العملاقة</span>.
          </h2>

          <!-- Short Company Introduction -->
          <p class="text-base sm:text-lg text-[#475569] font-normal leading-relaxed mb-10 sm:mb-12">
            نحن شركة رائدة في امتلاك وتشغيل محاجر الرخام والجرانيت في مصر، متخصصون في استخراج وتوريد الكتل الصخرية الخام (Blocks) وألواح الطاولات بكميات تجارية ضخمة. نضع إمكانيات محاجرنا ومصنعنا الآلي بالسويس تحت تصرف شركات المقاولات الدولية ومطوري المطارات والمشاريع الحكومية والفنادق الكبرى.
          </p>

          <!-- 2x2 Grid of White Feature Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-2">
            <div 
              v-for="(card, idx) in featureCards" 
              :key="idx"
              class="group bg-[#FFFFFF] rounded-[20px] p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-corporate transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E3A8A]/30 flex flex-col justify-between text-start relative overflow-hidden"
            >
              <!-- Blue Accent Outline Icon -->
              <div class="w-12 h-12 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-[#FFFFFF] group-hover:border-[#1E3A8A] transition-all duration-300 shadow-sm mb-6 shrink-0">
                <component :is="card.icon" class="w-6 h-6 stroke-[1.5]" />
              </div>

              <!-- Typography & Short Description -->
              <div>
                <h3 class="font-editorial text-lg sm:text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                  {{ card.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  {{ card.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA link -->
          <div class="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            <span class="text-xs text-[#475569] uppercase tracking-wider font-medium">
              هل تبحث عن مورد موثوق للكتل والألواح بكميات ضخمة؟
            </span>
            <a 
              href="#sample-box"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A8A] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] shadow-sm hover:bg-[#3B82F6] transition-all duration-300 group hover:scale-105"
            >
              <span>طلب مواصفات وكتالوج المحاجر</span>
              <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:scale-x-[-1]" />
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
