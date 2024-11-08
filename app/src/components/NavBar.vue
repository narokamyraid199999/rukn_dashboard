<script setup>
import SearchBar from "./SearchBar.vue";
import UserProfile from "./UserProfile.vue";
</script>

<template>
  <nav
    class="w-full py-7 pr-12 xl:pl-24 pl-8 flex gap-x-8 items-center justify-between bg-white"
  >
    <SearchBar></SearchBar>
    <UserProfile></UserProfile>
  </nav>
</template>
