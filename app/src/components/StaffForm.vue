<script setup>
import FormButton from "./FormButton.vue";
import { ref } from "vue";

const formInputs = ref([
  {
    title: "الاسم الاول",
    required: true,
    placeholder: "الرجاء إدخال الاسم الأول",
    isDropdown: false,
  },
  {
    title: "جنس",
    required: true,
    placeholder: "الرجاء إدخال الجنس",
    isDropdown: false,
  },
  {
    title: "تاريخ الانضمام",
    required: true,
    placeholder: "الرجاء إدخال التاريخ",
    isDropdown: false,
  },
  {
    title: "الاسم الأوسط",
    required: false,
    placeholder: "الرجاء إدخال الاسم الأوسط",
    isDropdown: false,
  },
  {
    title: "تاريخ الميلاد",
    required: true,
    placeholder: "الرجاء إدخال تاريخ الميلاد",
    isDropdown: false,
  },
  {
    title: "حالة",
    required: true,
    placeholder: "الرجاء تحديد أ الحالة",
    isDropdown: true,
  },
  {
    title: "اسم العائلة",
    required: false,
    placeholder: "الرجاء إدخال الاسم الأخير",
    isDropdown: false,
  },
  {
    title: "التحية",
    required: false,
    placeholder: "الرجاء إدخال التحية",
    isDropdown: false,
  },
]);
</script>

<template>
  <div class="mt-6">
    <div class="grid grid-cols-3 gap-x-14 gap-y-5">
      <FormButton
        v-for="input in formInputs"
        :required="input.required"
        :title="input.title"
        :placeholder="input.placeholder"
        :isDropdown="input.isDropdown"
      ></FormButton>
    </div>
    <div class="grid grid-cols-3 mt-5 gap-x-14">
      <FormButton
        class="col-span-1"
        title="الاسم الكامل"
        placeholder="الاسم الكامل فارغ"
        :isDropdown="false"
      ></FormButton>
    </div>
  </div>
</template>
