<script setup>
import PieChart from "./PieChart.vue";
import WaveChart from "./WaveChart.vue";
</script>

<template>
  <div class="flex gap-x-8 justify-between mt-8 flex-wrap gap-y-8">
    <div class="flex-auto max-w-full overflow-auto">
      <div class="bg-white w-full shadow-sm rounded-xl p-4">
        <WaveChart></WaveChart>
      </div>
    </div>
    <div class="col-span-1 overflow-auto chart-scrool2">
      <div class="bg-white w-[30rem] shadow-sm rounded-xl">
        <PieChart></PieChart>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-scrool2::-webkit-scrollbar {
  height: 5px;
}

/* Track */
.chart-scrool2::-webkit-scrollbar-track {
  background: #e2e2e3;
}

/* Handle */
.chart-scrool2::-webkit-scrollbar-thumb {
  background: #cd3535;
}
</style>
