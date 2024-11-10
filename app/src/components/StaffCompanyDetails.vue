<script setup>
import FormButton from "./FormButton.vue";
import { ref } from "vue";

const formInputs = ref([
  {
    title: "شركة",
    required: true,
    placeholder: "الرجاء إدخال اسم الشركة",
    isDropdown: false,
  },
  {
    title: "التعيين",
    required: false,
    placeholder: "الرجاء إدخال المسمى الوظيفي",
    isDropdown: false,
  },
  {
    title: "الفرع",
    required: false,
    placeholder: "الرجاء إدخال الفرع",
    isDropdown: false,
  },
  {
    title: "القسم",
    required: false,
    placeholder: "الرجاء إدخال القسم",
    isDropdown: false,
  },
  {
    title: "تقارير إلى",
    required: false,
    placeholder: "الرجاء إدخال التقارير إلى ",
    isDropdown: false,
  },
  {
    title: "الدرجة",
    required: false,
    placeholder: "الرجاء إدخال الدرجة",
    isDropdown: true,
  },
]);
</script>

<template>
  <div class="mt-9 text-[#696969]">
    <p class="text-[1.3rem] mb-2">تفاصيل الشركة</p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-5 xl:gap-x-14 gap-y-5">
      <FormButton
        v-for="input in formInputs"
        :required="input.required"
        :title="input.title"
        :placeholder="input.placeholder"
        :isDropdown="input.isDropdown"
      ></FormButton>
    </div>
  </div>
</template>
