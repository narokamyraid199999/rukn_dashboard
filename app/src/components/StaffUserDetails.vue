<script setup>
import { ref } from "vue";
import FormButton from "./FormButton.vue";
import Swal from "sweetalert2";

const isVisible = ref(false);
const arrow = ref("keyboard_arrow_up");

const toggle = () => {
  isVisible.value = !isVisible.value;
  arrow.value =
    arrow.value == "keyboard_arrow_down"
      ? "keyboard_arrow_up"
      : "keyboard_arrow_down";
};

const createNewUser = () => {
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
  <div class="text-[#696969] mt-9">
    <button class="text-[1.3rem]" @click="toggle">
      تفاصيل المستخدم
      <span class="material-icons relative top-1">{{ arrow }}</span>
    </button>
    <div class="mt-3" v-if="isVisible">
      <!-- <p>معرف المستخدم</p> -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-5 xl:gap-x-14 mt-5">
        <FormButton
          class="col-span-1"
          title="معرف المستخدم"
          placeholder="الرجاء إدخال معرف المستخدم"
          :isDropdown="false"
        ></FormButton>
      </div>
      <p class="text-sm mt-1.5">
        معرف مستخدم النظام (تسجيل الدخول). ,إذا تم تعيينه، فسيصبح افتراضيًا
        لجميع نماذج الموارد البشرية.
      </p>
      <button
        @click="createNewUser"
        class="bg-[#E84646] text-[#FFFFFF] py-2 px-6 mt-4 rounded-lg text-sm lg:text-lg outline-none"
      >
        إنشاء مستخدم
      </button>
    </div>
  </div>
</template>
