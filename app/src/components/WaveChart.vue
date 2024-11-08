<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

onMounted(() => {
  const ctx = document.getElementById("waveChart");
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };
  new Chart(ctx, config);
});
</script>

<template>
  <div class="max-h-[30rem]">
    <div class="w-[25rem]">
      <canvas id="waveChart"></canvas>
    </div>
  </div>
</template>
