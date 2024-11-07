<script setup>
import Box from "../components/Box.vue";
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
      <p class="text-[#13728F] font-bold text-[1.7rem]">الصفحة الرئيسية</p>
      <p class="text-[#696969] mt-1 text-lg font-medium">إحصائيات الموظف</p>
    </div>

    <div class="mt-7 flex gap-x-6">
      <Box
        v-for="elm in boxies"
        class="flex-1"
        :data="elm"
        :isColor="elm.isColor"
      ></Box>
    </div>
  </main>
</template>
