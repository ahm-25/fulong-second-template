<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, ArrowUpRight, ShieldCheck, Globe2, Sparkles, Send, Check, Instagram, Linkedin, Youtube, Pin } from 'lucide-vue-next'

const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (!email.value) return
  isSubscribed.value = true
  setTimeout(() => {
    email.value = ''
    isSubscribed.value = false
  }, 3000)
}

const columns = {
  company: [
    { name: 'امتلاك وإدارة المحاجر', href: '#about' },
    { name: 'مصنع السويس الآلي للتصدير', href: '#quarry' },
    { name: 'قدرات الإنتاج (٥٠,٠٠٠ م²)', href: '#quarry' },
    { name: 'التعدين المستدام والطاقة النظيفة', href: '#about' },
    { name: 'سجل توريدات المشاريع الكبرى', href: '#projects' },
    { name: 'التواصل مع إدارة المبيعات', href: '#sample-box' }
  ],
  products: [
    { name: 'كتل وألواح رخام لؤلؤة سيناء', href: '#collections' },
    { name: 'كتل وألواح رخام الجلالة الكريمي', href: '#collections' },
    { name: 'كتل رصف جرانيت أسوان البركاني', href: '#collections' },
    { name: 'ألواح رخام صحارى نوار للتصدير', href: '#collections' },
    { name: 'تكسيات وأعمدة المشاريع القومية', href: '#collections' },
    { name: 'ألواح متناظرة العروق للمطارات', href: '#collections' }
  ],
  resources: [
    { name: 'ملفات المواصفات الفنية للمقاولين', href: '#sample-box' },
    { name: 'شهادات الجودة الدولية ASTM و CE', href: '#sample-box' },
    { name: 'كتالوج منتجات المحاجر لعام ٢٠٢٦', href: '#sample-box' },
    { name: 'مخططات CAD ونماذج BIM للألواح', href: '#sample-box' },
    { name: 'مواصفات التغليف والشحن البحري', href: '#sample-box' },
    { name: 'طلب صندوق عينات ومواصفات المشاريع', href: '#sample-box' }
  ]
}

const socials = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Pinterest', icon: Pin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' }
]
</script>

<template>
  <footer class="bg-[#F8FAFC] text-[#0F172A] pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[#E2E8F0] relative overflow-hidden">
    <!-- Subtle natural stone background grid pattern -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: radial-gradient(#0F172A 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Top Section: Newsletter Subscription & Brand Intro -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 sm:pb-24 border-b border-[#E2E8F0] items-center">
        
        <!-- Brand Intro & Minimal Socials (5 Cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between h-full text-start">
          <div>
            <a href="#" class="flex items-center gap-3.5 group inline-block mb-6">
              <img src="/logo.png" alt="Fulong Logo" class="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            </a>
            
            <p class="text-sm sm:text-base text-[#475569] max-w-sm leading-relaxed font-normal mb-8">
              نمتلك ونشغل محاجرنا في سيناء وأسوان، وندير مصنعنا الهندسي بالسويس الممتد على مساحة ٥٠,٠٠٠ م² لتوريد كتل وألواح الرخام والجرانيت لمشاريع البنية التحتية، والمطارات، والمراكز التجارية في مختلف دول العالم.
            </p>
          </div>

          <!-- Minimal Outlined Social Icons -->
          <div class="flex items-center gap-3">
            <a 
              v-for="soc in socials" 
              :key="soc.name" 
              :href="soc.href" 
              :title="soc.name"
              class="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#1E3A8A] hover:bg-[#1E3A8A] text-[#0F172A] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-105"
            >
              <component :is="soc.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Newsletter Subscription Box (7 Cols) -->
        <div class="lg:col-span-7 bg-[#FFFFFF]/80 backdrop-blur-md p-8 sm:p-12 rounded-[20px] border border-[#E2E8F0] shadow-corporate text-start">
          <span class="text-[10px] font-mono uppercase tracking-[0.25em] font-semibold text-[#3B82F6] block mb-2">
            نشرة المحاجر والتوريدات الدولية
          </span>
          <h3 class="font-editorial text-2xl sm:text-3xl lg:text-4xl font-light text-[#0F172A] leading-tight mb-3">
            اشترك في تقريرنا <span class="italic font-normal text-[#3B82F6]">ربع السنوي لإنتاج المحاجر</span>.
          </h3>
          <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8 max-w-xl">
            انضم إلى أكثر من ٤,٥٠٠ مهندس مشتريات ومقاول دولي. احصل على آخر تحديثات استخراج الكتل، ومواصفات الألواح المتاحة للتصدير، وجداول الشحن البحري مباشرة في بريدك الإلكتروني.
          </p>

          <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3">
            <div class="relative flex-1">
              <input 
                v-model="email"
                type="email" 
                required
                placeholder="أدخل البريد الإلكتروني للشركة..." 
                class="w-full px-6 py-4 rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder-[#475569]/60 focus:outline-none focus:border-[#3B82F6] transition-colors"
                :disabled="isSubscribed"
              />
            </div>
            
            <button 
              type="submit" 
              class="px-8 py-4 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm shrink-0 disabled:opacity-50"
              :disabled="isSubscribed"
            >
              <span v-if="!isSubscribed">اشترك بالنشرة</span>
              <span v-else class="text-[#3B82F6] font-bold flex items-center gap-1.5">
                <Check class="w-4 h-4" /> تم الاشتراك
              </span>
              <ArrowRight v-if="!isSubscribed" class="w-4 h-4 rtl:scale-x-[-1]" />
            </button>
          </form>
          
          <span class="text-[10px] text-[#475569] block mt-3 font-medium">
            🔒 نضمن عدم إرسال رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت بنقرة واحدة.
          </span>
        </div>

      </div>

      <!-- Center Section: Four Elegant Columns with Large White Space -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 sm:py-24 text-start">
        
        <!-- Column 1: Company -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
            <span>شركة فولونج ومحاجرها</span>
          </h4>
          <ul class="space-y-3.5">
            <li v-for="link in columns.company" :key="link.name">
              <a 
                :href="link.href"
                class="text-xs sm:text-[13px] text-[#475569] hover:text-[#3B82F6] transition-colors duration-200 flex items-center justify-between group"
              >
                <span>{{ link.name }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 rtl:translate-x-2 ltr:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#3B82F6] rtl:scale-x-[-1]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Products -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
            <span>إنتاج الرخام والجرانيت</span>
          </h4>
          <ul class="space-y-3.5">
            <li v-for="link in columns.products" :key="link.name">
              <a 
                :href="link.href"
                class="text-xs sm:text-[13px] text-[#475569] hover:text-[#3B82F6] transition-colors duration-200 flex items-center justify-between group"
              >
                <span>{{ link.name }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 rtl:translate-x-2 ltr:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#3B82F6] rtl:scale-x-[-1]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Resources -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
            <span>موارد المقاولين والموردين</span>
          </h4>
          <ul class="space-y-3.5">
            <li v-for="link in columns.resources" :key="link.name">
              <a 
                :href="link.href"
                class="text-xs sm:text-[13px] text-[#475569] hover:text-[#3B82F6] transition-colors duration-200 flex items-center justify-between group"
              >
                <span>{{ link.name }}</span>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 rtl:translate-x-2 ltr:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#3B82F6] rtl:scale-x-[-1]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact & Global Desks -->
        <div>
          <h4 class="font-editorial text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
            <span>إدارة المحاجر ومصنع التصدير</span>
          </h4>
          <div class="space-y-4 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
            <div>
              <span class="font-bold text-[#0F172A] block">محاجر ومصنع السويس:</span>
              <span>المنطقة الصناعية بعتاقة، القطاع ٤، بالقرب من ميناء السويس للتصدير، مصر</span>
            </div>
            <div>
              <span class="font-bold text-[#0F172A] block">المكتب الرئيسي بالقاهرة:</span>
              <span>أبراج الزمالك الإدارية، كورنيش النيل، القاهرة، مصر</span>
            </div>
            <div>
              <span class="font-bold text-[#0F172A] block">إدارة مبيعات التصدير:</span>
              <span class="font-mono text-[#3B82F6]">+20 (0) 62 345 8900</span>
            </div>
            <div>
              <span class="font-bold text-[#0F172A] block">مناقصات وعقود التوريد:</span>
              <a href="mailto:export@fulongegypt.com" class="font-mono text-[#0F172A] hover:text-[#3B82F6] underline transition-colors">export@fulongegypt.com</a>
            </div>
          </div>
        </div>

      </div>

      <!-- Soft Divider & Bottom Copyright / Certification Bar -->
      <div class="pt-10 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#475569]">
        
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-6 uppercase tracking-[0.16em]">
          <span class="flex items-center gap-1.5 text-[#0F172A] font-semibold">
            <ShieldCheck class="w-4 h-4 text-[#3B82F6]" /> معتمد بشهادة الآيزو ٩٠٠١:٢٠١٥ وعلامة CE
          </span>
          <span>مطابق لمعايير الجمعية الأمريكية (ASTM C568)</span>
          <span>خدمات لوجستية مباشرة للتصدير من السويس</span>
        </div>

        <div class="text-center sm:text-end font-medium">
          <p>© {{ new Date().getFullYear() }} شركة فولونج مصر لتعدين وتصدير الرخام والجرانيت ش.م.م. جميع الحقوق محفوظة.</p>
          <div class="flex items-center justify-center sm:justify-end gap-6 mt-1 text-[10px] uppercase tracking-wider text-[#475569]">
            <a href="#" class="hover:text-[#3B82F6] transition-colors">سياسة الخصوصية</a>
            <a href="#" class="hover:text-[#3B82F6] transition-colors">شروط المواصفات</a>
            <a href="#" class="hover:text-[#3B82F6] transition-colors">خريطة الموقع</a>
          </div>
        </div>

      </div>

    </div>
  </footer>
</template>
