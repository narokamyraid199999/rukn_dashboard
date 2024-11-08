<script setup>
import PieChart from "./PieChart.vue";
import WaveChart from "./WaveChart.vue";
</script>

<template>
  <div class="grid grid-cols-3 gap-x-12 justify-between mt-8">
    <div class="col-span-2">
      <div class="bg-white w-full shadow-sm rounded-xl p-20">
        <WaveChart></WaveChart>
      </div>
    </div>
    <div class="col-span-1">
      <div class="bg-white w-[30rem] shadow-sm rounded-xl">
        <PieChart></PieChart>
      </div>
    </div>
  </div>
</template>
