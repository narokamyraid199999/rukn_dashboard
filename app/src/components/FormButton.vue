<script setup>
const { title, isDropdown, data, required } = defineProps([
  "title",
  "isDropdown",
  "data",
  "required",
]);
</script>

<template>
  <div>
    <p class="text-xl mb-2 text-[#696969]">
      {{ title }} <span v-if="required" class="text-[#da3d3d]">*</span>
    </p>
    <input
      type="text"
      class="bg-[#F9F9F9] h-14 pr-4 rounded-lg outline-none w-full overflow-auto pl-2 text-sm xl:text-base"
      placeholder="الرجاء إدخال الاسم الأول"
    />
  </div>
</template>
