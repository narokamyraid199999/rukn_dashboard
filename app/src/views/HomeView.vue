<script setup>
import Box from "../components/Box.vue";
import Statics from "../components/Statics.vue";
import DashboardCharts from "../components/DashboardCharts.vue";
import { ref } from "vue";

let boxies = ref([
  {
    text: "عدد المشاريع",
    number: 208,
    type: "مشروع",
    isColor: true,
  },
  {
    text: "ملفات تحتاج المراجعة",
    number: 8,
    type: "ملف",
    isColor: false,
  },
  {
    text: "البريد الصادر",
    number: 8,
    type: "بريد",
    isColor: false,
  },
  {
    text: "البريد الوارد",
    number: 8,
    type: "بريد",
    isColor: false,
  },
]);
</script>

<template>
  <main>
    <div class="pt-11">
      <p class="text-[#13728F] font-bold text-lg lg:text-[1.7rem]">
        الصفحة الرئيسية
      </p>
      <p class="text-[#696969] mt-1 text-sm lg:text-lg font-medium">
        إحصائيات الموظف
      </p>
    </div>

    <div
      class="mt-7 grid gap-x-6 gap-y-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"
    >
      <Box v-for="elm in boxies" :data="elm" :isColor="elm.isColor"></Box>
    </div>

    <!-- statics with charts -->
    <div class="mb-40">
      <Statics></Statics>
      <DashboardCharts></DashboardCharts>
    </div>
  </main>
</template>
