<template>
    <div>
        <!-- canvas element for chart -->
        <canvas id="pie-chart"></canvas>
    </div>
</template>
  

<script>
import { Chart, registerables } from 'chart.js'
import pieChartData from '../assets/pie-data.js'
  
//we have to register the registerables with Chart object
Chart.register(...registerables);
export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },

  //establish Chart object after mounting the component
  mounted() {
    const ctx = document.getElementById('pie-chart');
    new Chart(ctx, this.pieChartData);
  }
}
</script>