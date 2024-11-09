<script setup>
import StaffTitle from "./StaffTitle.vue";
import StaffTaps from "./StaffTaps.vue";
import StaffForm from "./StaffForm.vue";
import StaffUserDetails from "./StaffUserDetails.vue";
import StaffCompanyDetails from "./StaffCompanyDetails.vue";
</script>

<template>
  <div class="pt-6 pb-6 pl-6">
    <StaffTitle></StaffTitle>
    <div class="bg-white rounded-2xl pb-[30rem] panel-shadow mt-8 p-6">
      <StaffTaps></StaffTaps>
      <StaffForm></StaffForm>
      <StaffUserDetails></StaffUserDetails>
      <StaffCompanyDetails></StaffCompanyDetails>
    </div>
  </div>
</template>

<style scoped>
.panel-shadow {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.02);
}
</style>
