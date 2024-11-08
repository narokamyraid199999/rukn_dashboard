<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

onMounted(() => {
  const ctx = document.getElementById("myChart");
  const data = {
    labels: ["الحضور", "الفياب", "متأخر"],
    datasets: [
      {
        label: "",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(232, 70, 70)",
          "rgb(40, 184, 112)",
          "rgb(11, 86, 126)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            padding: 25,
            boxWidth: 15,
          },
        },
      },
    },
  };
  new Chart(ctx, config);
});
</script>

<template>
  <div class="p-5">
    <p class="mb-10">الحضور والغياب</p>
    <div class="mx-auto w-[16rem]">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>
