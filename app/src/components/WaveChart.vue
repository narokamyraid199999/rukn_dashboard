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
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Page Views",
          data: [5000, 7500, 8000, 6000, 9000],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: "start",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
});
</script>

<template>
  <div class="w-full h-full">
    <div class="w-[50rem]">
      <canvas id="waveChart"></canvas>
    </div>
  </div>
</template>
