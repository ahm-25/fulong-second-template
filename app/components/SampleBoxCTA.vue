<script setup lang="ts">
import { ref } from 'vue'
import { Box, Sparkles, CheckCircle2, Send, ShieldCheck, MapPin } from 'lucide-vue-next'

const submitted = ref(false)
const form = ref({
  name: '',
  firm: '',
  email: '',
  role: 'كبير المهندسين المعماريين',
  country: 'المملكة المتحدة',
  selection: 'لوحة كاملة (٦ عينات)'
})

const handleSubmit = () => {
  if (!form.value.email || !form.value.name) return
  submitted.value = true
}
</script>

<template>
  <section id="sample-box" class="py-24 sm:py-36 bg-[#F8FAFC] relative overflow-hidden">
    <!-- Subtle background accent circle -->
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#3B82F6]/10 pointer-events-none blur-3xl"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#0F172A]/5 pointer-events-none blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <div class="bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] shadow-corporate overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          
          <!-- Left Presentation Column (6 Cols) -->
          <div class="lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-[#0F172A] text-[#FFFFFF] flex flex-col justify-between relative overflow-hidden text-start">
            <!-- Subtle Grid Background -->
            <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: radial-gradient(#FFFFFF 1px, transparent 1px); background-size: 24px 24px;"></div>

            <div>
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest mb-6">
                <Box class="w-3.5 h-3.5" /> للمهندسين المعماريين والمصممين
              </span>

              <h2 class="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-6">
                اطلب صندوق عينات <br /><span class="italic font-normal text-[#3B82F6]">الأتيليه</span>
              </h2>

              <p class="text-sm text-[#E2E8F0]/80 leading-relaxed max-w-md mb-8">
                اختبر الدفء الملمسي للحجر المصري في استوديو التصميم الخاص بك. يحتوي صندوق التقديم المعماري لدينا على ٦ عينات مميزة (١٠×١٠ سم) بتشطيبات متنوعة: مصقول مخملي، معتق جلدي، حراري، ومصقول عاكس.
              </p>

              <div class="space-y-4 mb-12">
                <div class="flex items-center gap-3 text-xs text-[#FFFFFF]">
                  <CheckCircle2 class="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>يشمل لؤلؤة سيناء، الجلالة العاجي، صني الذهبي، وأسوان الأسود</span>
                </div>
                <div class="flex items-center gap-3 text-xs text-[#FFFFFF]">
                  <CheckCircle2 class="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>شحن مجاني عالمي عبر DHL Express للاستوديوهات المعمارية المعتمدة</span>
                </div>
                <div class="flex items-center gap-3 text-xs text-[#FFFFFF]">
                  <CheckCircle2 class="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>مرفق بكتيب فني يحتوي على نتائج اختبارات ASTM وجداول الكثافة</span>
                </div>
              </div>
          <!-- Right Request Form Column (6 Cols) -->
          <div class="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-start">
            <Transition 
              mode="out-in"
              enter-active-class="transition duration-400 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="!submitted">
                <h3 class="font-editorial text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                  طلب صندوق العينات للاستوديو
                </h3>
                <p class="text-xs text-[#475569] mb-8">
                  يرجى ملء تفاصيل الاستوديو الخاص بك أدناه. سيقوم ممثلنا المعماري بتأكيد الشحن خلال ٢٤ ساعة.
                </p>

                <form @submit.prevent="handleSubmit" class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5">
                        الاسم الكامل *
                      </label>
                      <input 
                        v-model="form.name" 
                        type="text" 
                        required 
                        placeholder="مثال: إلينا فاريزي" 
                        class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      />
                    </div>
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5">
                        شركة الهندسة المعمارية / التصميم *
                      </label>
                      <input 
                        v-model="form.firm" 
                        type="text" 
                        required 
                        placeholder="مثال: استوديو فاريزي للهندسة المعمارية" 
                        class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5">
                        البريد الإلكتروني للاستوديو *
                      </label>
                      <input 
                        v-model="form.email" 
                        type="email" 
                        required 
                        placeholder="elena@studio-varese.com" 
                        class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      />
                    </div>
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5">
                        المسمى الوظيفي
                      </label>
                      <select 
                        v-model="form.role"
                        class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      >
                        <option>كبير المهندسين المعماريين</option>
                        <option>مصمم داخلي</option>
                        <option>مطور عقاري</option>
                        <option>مقاول أحجار فاخرة</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5">
                        بلد الوجهة
                      </label>
                      <select 
                        v-model="form.country"
                        class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      >
                        <option>المملكة المتحدة</option>
                        <option>إيطاليا</option>
                        <option>الإمارات العربية المتحدة</option>
                        <option>المملكة العربية السعودية</option>
                        <option>الولايات المتحدة</option>
                        <option>فرنسا</option>
                        <option>ألمانيا</option>
                        <option>الدنمارك / السويد / النرويج</option>
                        <option>أخرى / دولي</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-[11px] uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5">
                        اختيار مجموعة صندوق العينات
                      </label>
                      <select 
                        v-model="form.selection"
                        class="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      >
                        <option>لوحة كاملة (٦ عينات)</option>
                        <option>مجموعة حجر سيناء الجيري (٤ عينات)</option>
                        <option>الجرانيت المصري والرخام الأسود</option>
                        <option>عينات مضلعة ثلاثية الأبعاد مخصصة</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    class="w-full py-4 rounded-[20px] bg-[#1E3A8A] hover:bg-[#3B82F6] text-[#FFFFFF] font-semibold text-xs uppercase tracking-[0.14em] shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send class="w-4 h-4 rtl:scale-x-[-1]" />
                    <span>طلب صندوق تقديم الاستوديو</span>
                  </button>
                </form>
              </div>

              <!-- Success State -->
              <div v-else class="text-center py-10">
                <div class="w-16 h-16 rounded-full bg-[#F8FAFC] border border-[#3B82F6] text-[#3B82F6] flex items-center justify-center mx-auto mb-6 shadow-md animate-bounce">
                  <CheckCircle2 class="w-8 h-8" />
                </div>
                <span class="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3B82F6] block mb-2">
                  تم بدء بروتوكول الشحن
                </span>
                <h3 class="font-editorial text-3xl font-bold text-[#0F172A] mb-4">
                  شكرًا لك، {{ form.name }}.
                </h3>
                <p class="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-sm mx-auto mb-8">
                  لقد استلمنا طلبك لـ <strong>{{ form.selection }}</strong>. سيقوم فريق الشحن لدينا في السويس بتجهيز العينات الخاصة بك لشحنها عبر DHL Express إلى {{ form.country }}.
                </p>
                <button 
                  @click="submitted = false" 
                  class="px-6 py-3 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:bg-[#1E3A8A] hover:text-[#FFFFFF] transition-colors"
                >
                  إرسال طلب آخر
                </button>
              </div>
            </Transition>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
