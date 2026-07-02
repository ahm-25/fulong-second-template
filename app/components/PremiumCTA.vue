
<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, PhoneCall, Mail, MapPin, CheckCircle2, Sparkles, Send, ShieldCheck, Clock, Check } from 'lucide-vue-next'

const quoteModalOpen = ref(false)
const contactModalOpen = ref(false)
const isSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  studio: '',
  projectType: 'مشروع بنية تحتية / تجاري',
  stoneInterest: 'كتل رخام وألواح لؤلؤة سيناء الخام',
  message: ''
})

const handleSubmit = (type: string) => {
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    quoteModalOpen.value = false
    contactModalOpen.value = false
    form.value = {
      name: '',
      email: '',
      studio: '',
      projectType: 'مشروع بنية تحتية / تجاري',
      stoneInterest: 'كتل رخام وألواح لؤلؤة سيناء الخام',
      message: ''
    }
  }, 2500)
}
</script>

<template>
  <section id="sample-box" class="py-28 sm:py-44 bg-[#FFFFFF] relative overflow-hidden">
    <!-- Outer ambient decoration -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background-image: radial-gradient(#0F172A 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Large Rounded Container instead of full-width background -->
      <div class="relative rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] shadow-corporate overflow-hidden p-10 sm:p-16 lg:p-24 text-center flex flex-col items-center justify-center group">
        
        <!-- Subtle natural stone texture background decoration -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-multiply transition-transform duration-1000 ease-out group-hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
            alt="Natural Sinai Limestone Texture Background" 
            class="w-full h-full object-cover grayscale" 
          />
        </div>

        <!-- Ambient glowing light rings -->
        <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none"></div>

        <!-- Provenance Badge -->
        <div class="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2E8F0] shadow-sm mb-6">
          <span class="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></span>
          <span class="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] font-semibold text-[#0F172A]">
            ضمان توريدات المحاجر والمصنع
          </span>
        </div>

        <!-- Editorial Heading -->
        <h2 class="relative z-10 font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-light max-w-3xl leading-[1.08] tracking-tight mb-6 text-balance">
          اعتمد على محاجرنا لتوريد <span class="italic font-normal text-[#3B82F6]">كتل وألواح مشاريعك العملاقة</span>.
        </h2>

        <!-- Short Paragraph -->
        <p class="relative z-10 text-base sm:text-lg text-[#475569] max-w-2xl font-normal leading-relaxed mb-10 sm:mb-12">
          تواصل مباشرة مع فريق إدارة المحاجر ومصنع السويس الآلي. نحن نقدم حلول توريد متكاملة لشركات المقاولات والمطورين، تشمل استخراج الكتل الخام، وقص الألواح بالمقاسات الهندسية، والشحن المباشر في الحاويات إلى كافة موانئ العالم.
        </p>

        <!-- Two Buttons: Request Quote & Contact Us -->
        <div class="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          <button 
            @click="quoteModalOpen = true"
            class="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] font-semibold text-xs uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:scale-105 group/btn"
          >
            <span>طلب توريد ومواصفات</span>
            <ArrowUpRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:scale-x-[-1]" />
          </button>

          <button 
            @click="contactModalOpen = true"
            class="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-[20px] bg-[#FFFFFF] hover:bg-[#1E3A8A] text-[#0F172A] hover:text-[#FFFFFF] border border-[#E2E8F0] hover:border-[#1E3A8A] font-semibold text-xs uppercase tracking-[0.14em] shadow-sm transition-all duration-300 hover:scale-105 group/btn2"
          >
            <span>التواصل التجاري</span>
            <PhoneCall class="w-4 h-4 text-[#3B82F6] group-hover/btn2:text-[#FFFFFF] transition-colors" />
          </button>
        </div>

        <!-- Trust Badges inside Container Footer -->
        <div class="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-12 mt-12 border-t border-[#E2E8F0] text-[11px] uppercase tracking-[0.18em] text-[#475569] w-full">
          <span class="flex items-center gap-2">
            <ShieldCheck class="w-4 h-4 text-[#3B82F6]" /> إنتاج محاجر ومصانع معتمد بشهادة الآيزو ٩٠٠١ وعلامة CE
          </span>
          <span class="flex items-center gap-2">
            <Clock class="w-4 h-4 text-[#3B82F6]" /> شحن عينات ومواصفات المقاولين عالمياً خلال ٤٨ ساعة
          </span>
          <span class="flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-[#3B82F6]" /> شحن لوجستي للحاويات مباشرة من ميناء السويس للتصدير
          </span>
        </div>

      </div>

    </div>

    <!-- Interactive Request Quote Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="quoteModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm" @click.self="quoteModalOpen = false">
        <div class="bg-[#FFFFFF] rounded-[20px] max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-corporate p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300 text-start">
          
          <button @click="quoteModalOpen = false" class="absolute top-6 end-6 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <div v-if="!isSubmitted">
            <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#3B82F6] font-semibold block mb-2">
              إدارة مبيعات التصدير والمشاريع
            </span>
            <h3 class="font-editorial text-3xl font-bold text-[#0F172A] mb-2">
              طلب عرض سعر تجاري ومواصفات التوريد
            </h3>
            <p class="text-xs text-[#475569] mb-6">
              احصل على الأسعار التنافسية للكميات التجارية، وجدول الشحن من ميناء السويس، وصندوق عينات مواصفات المقاولين.
            </p>

            <form @submit.prevent="handleSubmit('quote')" class="space-y-4 text-start">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1">اسم المسؤول / مهندس المشتريات</label>
                  <input v-model="form.name" type="text" required placeholder="مهندس المشتريات / مدير المشروع" class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6]" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1">البريد الإلكتروني للشركة / المقاول</label>
                  <input v-model="form.email" type="email" required placeholder="procurement@contractor.com" class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6]" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1">اسم شركة المقاولات / المطور</label>
                  <input v-model="form.studio" type="text" placeholder="شركة المقاولات الدولية / المطور" class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6]" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1">نوع الخام والمنتج المطلوب</label>
                  <select v-model="form.stoneInterest" class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6]">
                    <option>كتل رخام وألواح لؤلؤة سيناء الخام</option>
                    <option>كتل وألواح رخام الجلالة الكريمي</option>
                    <option>كتل رصف جرانيت أسوان الأسود البركاني</option>
                    <option>ألواح وتكسيات رخام صحارى نوار للتصدير</option>
                    <option>حلول القطع المخصص للمشاريع القومية (CNC)</option>
                    <option>توريد كتل خام وتفصيل ألواح حسب الطلب</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-[11px] font-semibold text-[#0F172A] uppercase tracking-wider mb-1">حجم ومتطلبات التوريد (الكميات التجارية)</label>
                <textarea v-model="form.message" rows="3" placeholder="الكمية التقريبية بالمتر المربع أو الطن، سمك الألواح (٢٠ ملم / ٣٠ ملم / ٥٠ ملم)، ميناء الوصول والجدول الزمني..." class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6]"></textarea>
              </div>

              <button type="submit" class="w-full py-4 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-sm transition-all mt-2">
                <span>إرسال طلب التوريد التجاري</span>
                <Send class="w-4 h-4 rtl:scale-x-[-1]" />
              </button>
            </form>
          </div>

          <div v-else class="text-center py-10 space-y-4">
            <div class="w-16 h-16 rounded-full bg-[#F8FAFC] text-[#3B82F6] flex items-center justify-center mx-auto border border-[#E2E8F0]">
              <Check class="w-8 h-8" />
            </div>
            <h3 class="font-editorial text-3xl font-bold text-[#0F172A]">تم استلام طلب التوريد التجاري بنجاح</h3>
            <p class="text-xs text-[#475569] max-w-sm mx-auto leading-relaxed">
              لقد قام فريق إدارة المبيعات والتصدير في السويس بتسجيل طلبك. سيتم إرسال الملف الفني للمحاجر وعرض السعر التجاري الرسمي إلى البريد الإلكتروني <span class="font-bold text-[#0F172A]">{{ form.email }}</span> خلال ٤ ساعات عمل.
            </p>
          </div>

        </div>
      </div>
    </Transition>

    <!-- Interactive Contact Us Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="contactModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm" @click.self="contactModalOpen = false">
        <div class="bg-[#FFFFFF] rounded-[20px] max-w-lg w-full border border-[#E2E8F0] shadow-corporate p-6 sm:p-10 relative animate-in fade-in zoom-in-95 duration-300 text-start">
          
          <button @click="contactModalOpen = false" class="absolute top-6 end-6 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] transition-colors">
            ✕
          </button>

          <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#3B82F6] font-semibold block mb-2">
            إدارة المحاجر ومصنع التصدير العالمي
          </span>
          <h3 class="font-editorial text-3xl font-bold text-[#0F172A] mb-6">
            التواصل المباشر بإدارة التصدير
          </h3>

          <div class="space-y-6">
            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div class="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#3B82F6] shrink-0 shadow-sm">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#0F172A] block mb-0.5">محاجرنا ومصنع السويس الآلي</span>
                <span class="text-xs text-[#475569] leading-relaxed">المنطقة الصناعية بعتاقة، القطاع ٤، بالقرب من محطة حاويات ميناء السويس، مصر</span>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div class="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#3B82F6] shrink-0 shadow-sm">
                <PhoneCall class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#0F172A] block mb-0.5">إدارة المبيعات وعقود التصدير</span>
                <span class="text-xs text-[#475569] font-mono">+20 (0) 62 345 8900 // +20 (0) 100 888 7766</span>
                <span class="text-[10px] text-[#3B82F6] font-medium block mt-1">الاثنين–السبت: ٠٨:٠٠ – ١٨:٠٠ بتوقيت شرق أوروبا</span>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div class="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center text-[#3B82F6] shrink-0 shadow-sm">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs font-bold text-[#0F172A] block mb-0.5">استفسارات المقاولين والمناقصات</span>
                <span class="text-xs text-[#475569] font-mono">projects@ateliersinai.com // export@ateliersinai.com</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-[#E2E8F0] text-center">
            <button @click="contactModalOpen = false; quoteModalOpen = true" class="w-full py-3.5 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.14em] transition-colors">
              فتح نموذج طلب التوريد التجاري والعينات
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </section>
</template>
