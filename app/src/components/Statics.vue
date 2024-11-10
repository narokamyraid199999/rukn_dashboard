<script setup>
import Swal from "sweetalert2";

const create = () => {
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
  <div class="flex justify-between gap-x-4 items-center mt-10">
    <p class="text-sm md:text-lg lg:text-[1.6rem] font-bold text-[#13728F]">
      احصائيات
    </p>
    <button
      @click="create"
      class="items-center flex md:gap-x-4 bg-[#28B870] text-white rounded-lg px-2 md:px-5 py-3.5 text-sm lg:text-lg outline-none"
    >
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 18V6"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <p>اضافة مخطط جديد</p>
    </button>
  </div>
</template>
