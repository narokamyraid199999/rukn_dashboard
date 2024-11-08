<script setup>
import { ref } from "vue";
const options = ref([
  "الانضمام",
  "العنوان وجهات الاتصال",
  "الحضور والانصراف",
  "الراتب",
  "الشخصي",
  "الملف الشخصي",
  "خروج",
]);
</script>

<template>
  <div class="bg-[#FCFCFC] text-sm xl:text-base w-full rounded-2xl h-14">
    <div class="flex pl-0 xl:pl-20">
      <button
        class="flex flex-auto items-center justify-center h-14 px-1 text-white rounded-l-xl xl:rounded-l-none rounded-r-xl bg-[#E84646]"
      >
        نظرة عامة
      </button>

      <button
        v-for="option in options"
        class="hidden xl:flex flex-auto items-center justify-center px-1 h-14 text-[#696969]"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
