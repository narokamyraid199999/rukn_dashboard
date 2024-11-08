<script setup>
import FormButton from "./FormButton.vue";
</script>

<template>
  <div class="mt-6">
    <div class="grid grid-cols-3 gap-x-14 gap-y-6">
      <FormButton :required="true" title="الاسم الاول"></FormButton>
      <FormButton :required="true" title="جنس"></FormButton>
      <FormButton :required="true" title="تاريخ الانضمام"></FormButton>
      <FormButton title="الاسم الأوسط"></FormButton>
      <FormButton :required="true" title="تاريخ الميلاد"></FormButton>
    </div>
  </div>
</template>
