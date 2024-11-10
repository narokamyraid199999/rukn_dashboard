<script setup>
import StaffTitle from "./StaffTitle.vue";
import StaffTaps from "./StaffTaps.vue";
import StaffForm from "./StaffForm.vue";
import StaffUserDetails from "./StaffUserDetails.vue";
import StaffCompanyDetails from "./StaffCompanyDetails.vue";
import StaffTimeline from "./StaffTimeline.vue";
import Swal from "sweetalert2";
import { ref } from "vue";

let userComment = ref("");

const SendUserComment = () => {
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
  <div class="pt-6 pb-6 pl-0 lg:pl-6">
    <!-- staff form -->
    <StaffTitle></StaffTitle>
    <div class="bg-white rounded-2xl panel-shadow mt-8 p-6">
      <StaffTaps></StaffTaps>
      <StaffForm></StaffForm>
      <StaffUserDetails></StaffUserDetails>
      <StaffCompanyDetails></StaffCompanyDetails>
    </div>

    <!-- comment -->
    <div class="bg-white rounded-2xl panel-shadow mb-5 mt-8 p-6 text-[#696969]">
      <p class="text-sm lg:text-[1.7rem] mb-3">أضف تعليقًا</p>
      <textarea
        v-model="userComment"
        rows="10"
        cols="10"
        name="userComment"
        placeholder="أدخل تعليق..."
        type="text"
        class="bg-[#F9F9F9] resize-none pr-4 rounded-2xl outline-none w-full pt-4 pl-2 text-sm xl:text-base text-[#9B9B9B]"
      ></textarea>
      <button
        @click="SendUserComment"
        class="bg-[#E84646] text-[#FFFFFF] py-2 px-12 mt-4 rounded-lg text-sm lg:text-lg outline-none"
      >
        تعليق
      </button>
    </div>

    <StaffTimeline></StaffTimeline>
  </div>
</template>

<style scoped>
.panel-shadow {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.02);
}
</style>
