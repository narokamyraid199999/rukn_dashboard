<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

const options = ref([
  { title: "الانضمام", link: "join" },
  { title: "العنوان وجهات الاتصال", link: "info" },
  { title: "الحضور والانصراف", link: "details" },
  { title: "الراتب", link: "salary" },
  { title: "الشخصي", link: "personal" },
  { title: "الملف الشخصي", link: "profile" },
]);

const logout = () => {
  Swal.fire({
    icon: "error",
    title: "خطأ!",
    showDenyButton: true,
    showConfirmButton: false,
    denyButtonText: `موافق`,
    text: "لم يتم برمجة هذه الخاصية بعد",
  });
};
</script>

<template>
  <div class="bg-[#FCFCFC] text-sm xl:text-base w-full rounded-2xl h-14">
    <div class="flex pl-0 xl:pl-20">
      <RouterLink
        active-class="text-white bg-[#E84646]"
        to="general"
        class="flex flex-auto items-center justify-center h-14 px-1 text-[#696969] rounded-l-xl xl:rounded-l-none rounded-r-xl"
      >
        نظرة عامة
      </RouterLink>

      <RouterLink
        active-class="text-white bg-[#E84646]"
        :to="option.link"
        v-for="option in options"
        class="hidden xl:flex flex-auto items-center justify-center px-1 h-14 text-[#696969]"
      >
        {{ option.title }}
      </RouterLink>
      <button
        @click="logout"
        class="hidden xl:flex flex-auto items-center justify-center px-1 h-14 text-[#696969]"
      >
        خروج
      </button>
    </div>
  </div>
</template>
