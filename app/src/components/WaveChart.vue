<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

onMounted(() => {
  Chart.defaults.font.size = 16;
  Chart.defaults.font.family = "Cairo";
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
      labels: [
        "ديسمبر",
        "نوفمبر",
        "أكتوبر",
        "سبتمبر",
        "أغسطس",
        "يوليو",
        "يونيو",
        "مايو",
        "ابريل",
        "مارس",
        "فبراير",
        "يناير",
      ],
      datasets: [
        {
          label: "أحصائيات",
          data: [
            82000, 60000, 60000, 71000, 71000, 88000, 62000, 25000, 39990,
            17000, 45000, 37000, 78000,
          ],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: "start",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 16,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<template>
  <div class="w-full overflow-auto p-5 chart-scrool">
    <div class="mx-auto w-[50rem]">
      <canvas id="waveChart"></canvas>
    </div>
  </div>
</template>

<style scoped>
.chart-scrool::-webkit-scrollbar {
  height: 5px;
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
