<script setup>
import Swal from "sweetalert2";
import { ref } from "vue";

let searchValue = ref("");

const Search = () => {
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
  <div class="shadow-sm h-14 hidden md:flex">
    <input
      v-model="searchValue"
      type="text"
      class="bg-[#F9F9F9] pr-4 h-full rounded-r-lg outline-none w-[10rem] lg:w-[20rem] xl:w-[25rem] overflow-auto pl-2 text-sm xl:text-base"
      placeholder="ابحث هنا ..."
    />
    <button
      @click="Search"
      class="bg-[#e84646] h-full text-white w-12 lg:w-16 rounded-l-lg flex items-center justify-center outline-none"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21V21Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
