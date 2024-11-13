<script setup>
import FormButton from "../FormButton.vue";
import { ref } from "vue";

const formInputs = ref([
  {
    title: "الانضمام",
    required: true,
    placeholder: "الرجاء إدخال الانضمام",
    isDropdown: false,
  },
  {
    title: "تاريخ الانضمام",
    required: true,
    placeholder: "الرجاء تاريخ الانضمام",
    isDropdown: false,
  },
  {
    title: "الراتب",
    required: true,
    placeholder: "الرجاء إدخال الراتب",
    isDropdown: false,
  },
  {
    title: "الاسم الأوسط",
    required: false,
    placeholder: "الرجاء إدخال الاسم الأوسط",
    isDropdown: false,
  },
  {
    title: "تاريخ القبض",
    required: true,
    placeholder: "الرجاء إدخال تاريخ القبض",
    isDropdown: false,
  },
  {
    title: "حالة الراتب",
    required: true,
    placeholder: "الرجاء تحديد حالة الراتب",
    isDropdown: true,
  },
  {
    title: "اسم المشرف",
    required: false,
    placeholder: "الرجاء إدخال اسم المشرف",
    isDropdown: false,
  },
  {
    title: "اللقب",
    required: false,
    placeholder: "الرجاء إدخال اللقب",
    isDropdown: false,
  },
]);
</script>

<template>
  <div class="mt-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-5 xl:gap-x-14 gap-y-5">
      <FormButton
        v-for="input in formInputs"
        :required="input.required"
        :title="input.title"
        :placeholder="input.placeholder"
        :isDropdown="input.isDropdown"
      ></FormButton>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-14 mt-5">
      <FormButton
        class="col-span-1"
        title="الاسم الكامل"
        placeholder="الاسم الكامل فارغ"
        :isDropdown="false"
      ></FormButton>
    </div>
  </div>
</template>
