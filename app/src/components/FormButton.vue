<script setup>
const { title, isDropdown, data, required, placeholder } = defineProps([
  "title",
  "isDropdown",
  "data",
  "required",
  "placeholder",
]);
</script>

<template>
  <div>
    <p class="text-sm xl:text-[1.1rem] mb-2 text-[#696969]">
      {{ title }} <span v-if="required" class="text-[#da3d3d]">*</span>
    </p>
    <input
      :required="required"
      :placeholder="placeholder"
      type="text"
      class="bg-[#F9F9F9] h-14 pr-4 rounded-lg outline-none w-full overflow-auto pl-2 text-sm xl:text-base text-[#9B9B9B]"
      placeholder="الرجاء إدخال الاسم الأول"
    />
  </div>
</template>
