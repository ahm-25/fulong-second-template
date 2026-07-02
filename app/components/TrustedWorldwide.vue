<script setup lang="ts">
import { ShieldCheck, Globe2, Building2 } from 'lucide-vue-next'

const partners = [
  { name: 'مجموعة نورديك للإنشاءات الدولية', location: 'كوبنهاغن • أوسلو', code: 'NC' },
  { name: 'ائتلاف فاريزي للمشاريع القومية', location: 'ميلانو • روما', code: 'VC' },
  { name: 'المنصور للهندسة والبنية التحتية', location: 'الرياض • جدة', code: 'AM' },
  { name: 'فوستر الدولية للمطارات والموانئ', location: 'لندن • المملكة المتحدة', code: 'FA' },
  { name: 'ميتروبوليس للمقاولات العامة', location: 'نيويورك • ميامي', code: 'MC' },
  { name: 'المجموعة الهندسية للمشاريع الكبرى', location: 'دبي • أبوظبي', code: 'EG' },
  { name: 'ائتلاف ميديترانيو للتطوير', location: 'برشلونة • أثينا', code: 'MD' },
  { name: 'إسكندنافيان للبنية التحتية', location: 'ستوكهولم • السويد', code: 'SI' },
]
</script>

<template>
  <section class="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
    <!-- Subtle architectural grid decoration -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background-image: radial-gradient(#0F172A 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
      
      <!-- Centered Title with Generous Spacing -->
      <div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm text-[11px] font-mono uppercase tracking-[0.22em] text-[#3B82F6] font-semibold mb-4">
          التوريد الدولي والمقاولات العملاقة
        </span>
        <h2 class="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-bold tracking-tight leading-[1.15] text-balance">
          موضع ثقة كبرى شركات المقاولات، والمطارات، ومطوري البنية التحتية عالمياً
        </h2>
      </div>

      <!-- Centered Grid of Elegant White Cards with Hover Lift Effect -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div 
          v-for="(partner, idx) in partners" 
          :key="idx"
          class="group bg-[#FFFFFF] rounded-[20px] p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-corporate transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E3A8A]/30 flex flex-col justify-between text-start cursor-pointer relative overflow-hidden"
        >
          <!-- Top Emblem Box -->
          <div class="flex items-center justify-between mb-8">
            <div class="w-12 h-12 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center font-editorial font-bold text-base text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-[#FFFFFF] group-hover:border-[#1E3A8A] transition-all duration-300 shadow-sm shrink-0">
              {{ partner.code }}
            </div>
            <span class="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#3B82F6] transition-colors duration-300"></span>
          </div>

          <!-- Partner Details -->
          <div>
            <h3 class="font-editorial text-base sm:text-lg font-bold tracking-wide text-[#0F172A] uppercase leading-snug mb-1.5 group-hover:text-[#1E3A8A] transition-colors">
              {{ partner.name }}
            </h3>
            <p class="text-xs font-mono uppercase tracking-[0.16em] text-[#475569] leading-relaxed">
              {{ partner.location }}
            </p>
          </div>
        </div>
      </div>

      <!-- Minimal Trust Badges Below Grid -->
      <div class="mt-16 sm:mt-20 pt-10 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs uppercase tracking-[0.2em] text-[#475569] font-medium">
        <span class="flex items-center gap-2.5">
          <ShieldCheck class="w-4 h-4 text-[#3B82F6]" /> كتل وألواح خام مطابقة لمعايير ASTM و ISO العالمية
        </span>
        <span class="flex items-center gap-2.5">
          <Globe2 class="w-4 h-4 text-[#3B82F6]" /> شحن وحاويات تصدير لوجستية مباشرة من المحجر
        </span>
        <span class="flex items-center gap-2.5">
          <Building2 class="w-4 h-4 text-[#3B82F6]" /> قدرات توريد ضخمة للمشاريع الحكومية والتجارية
        </span>
      </div>

    </div>
  </section>
</template>
