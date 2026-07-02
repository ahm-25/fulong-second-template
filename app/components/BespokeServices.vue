<script setup lang="ts">
import { Scissors, Layers, Sparkles, ArrowUpRight, Compass, Cpu } from 'lucide-vue-next'

const services = [
  {
    icon: Scissors,
    title: 'كتل وألواح مقصوصة بمواصفات خاصة',
    subtitle: 'توريد كتل خام وألواح طاولات مخصصة',
    desc: 'نستخرج ونجهز كتل الرخام والجرانيت الخام بأوزان تصل إلى ٣٠ طناً ونقوم بقص الألواح بسماكات ومقاسات خاصة لتلبية متطلبات مشاريع البنية التحتية والمباني الكبرى.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Cpu,
    title: 'نحت تكسيات الجدران والأعمدة ثلاثية الأبعاد',
    subtitle: 'قص هندسي بالتحكم الرقمي (CNC)',
    desc: 'باستخدام أحدث الروبوتات خماسية المحاور، ننحت ونشكل التكسيات الخارجية، والأعمدة العملاقة، ودرجات السلالم الضخمة للمطارات والفنادق العالمية وفقاً لمخططات الـ CAD.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    icon: Layers,
    title: 'مطابقة العروق المتناظرة للمشاريع (Book-Match)',
    subtitle: 'مخططات رقمية دقيقة قبل الشحن',
    desc: 'يخضع كل لوح لمسح بالليزر وفحص رقمي فائق الدقة لإنشاء ألواح متناظرة العروق للجدران وبوائك الصالات الكبرى، مع ضمان الجودة والتغليف الآمن للشحن البحري.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1000'
  }
]
</script>

<template>
  <section id="bespoke" class="py-24 sm:py-36 bg-[#FFFFFF] border-b border-[#E2E8F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      
      <!-- Editorial Title -->
      <div class="max-w-3xl mb-20 text-start">
        <span class="text-[11px] uppercase tracking-[0.25em] font-medium text-[#3B82F6] block mb-3">
          قسم التوريدات والحلول الهندسية المخصصة
        </span>
        <h2 class="font-editorial text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight mb-6">
          تصنيع وتجهيز <span class="italic text-[#3B82F6]">كتل وألواح المشاريع العملاقة</span>
        </h2>
        <p class="text-sm sm:text-base text-[#475569] leading-relaxed">
          بعيداً عن توريد الكتل والألواح القياسية، يمتلك مصنعنا الآلي بالسويس قدرات تصنيع وتفصيل هندسي متكامل لعقود التصدير والمشاريع القومية والتجارية الكبرى. نحول مخططاتك المعمارية المعقدة إلى واقع ملموس بدقة متناهية بالمليمتر.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        <div 
          v-for="(srv, idx) in services" 
          :key="idx"
          class="group rounded-[20px] bg-[#F8FAFC] overflow-hidden border border-[#E2E8F0] shadow-corporate transition-all duration-500 hover:shadow-luxury hover:border-[#3B82F6] hover:-translate-y-2 flex flex-col justify-between"
        >
          <!-- Image Top -->
          <div class="relative h-64 overflow-hidden bg-[#FFFFFF]">
            <img 
              :src="srv.image" 
              :alt="srv.title"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent opacity-60"></div>
            <div class="absolute top-4 end-4 w-10 h-10 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md flex items-center justify-center text-[#1E3A8A] shadow-sm group-hover:scale-110 transition-transform">
              <component :is="srv.icon" class="w-5 h-5" />
            </div>
          </div>

          <!-- Content Bottom -->
          <div class="p-8 flex flex-col flex-1 justify-between text-start">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#3B82F6] font-semibold block mb-1">
                ٠{{ idx + 1 }} // {{ srv.subtitle }}
              </span>
              <h3 class="font-editorial text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                {{ srv.title }}
              </h3>
              <p class="text-xs text-[#475569] leading-relaxed mb-6">
                {{ srv.desc }}
              </p>
            </div>

            <a 
              href="#sample-box"
              class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0F172A] hover:text-[#1E3A8A] transition-colors pt-4 border-t border-[#E2E8F0]"
            >
              <span>استشر فريق التوريدات الهندسية لدينا</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-[#3B82F6] rtl:scale-x-[-1]" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
