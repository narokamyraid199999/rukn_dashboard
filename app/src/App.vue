<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/Sidebar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="flex">
    <div>
      <SideBar></SideBar>
    </div>
    <div
      class="w-full bg-[#FCFCFC] overflow-y-auto h-full max-h-screen min-h-screen"
    >
      <NavBar></NavBar>
      <div class="px-12 rounded-lg">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* width */

::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e2e2e3;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cd3535;
}
</style>
