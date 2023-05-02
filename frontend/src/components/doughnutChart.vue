<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  mounted() {
    const zipcodesData = [
      { _id: '77023', count: 10 },
      { _id: '77304', count: 20 },
      { _id: '72345', count: 15 },
      { _id: '98232', count: 5 },
      { _id: '90210', count: 8 },
      { _id: '90003', count: 12 }
    ]

    const ctx = this.$refs.chart.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: zipcodesData.map((d) => d._id),
        datasets: [
          {
            label: 'Number of events per zipcode',
            data: zipcodesData.map((item) => item.count),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#C9CBCF'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Number of clients per zipcode'
        }
      }
    })
  }
}
</script>
