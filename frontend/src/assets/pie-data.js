export const pieChartData = {
  type: 'pie',
  data: {
    labels: [
      '77002',
      '77005',
      '77006',
      '77056',
      '77010',
      '77021'

    ],
    
    datasets: [{
      label: 'Clients in Zip Code',
      data: [300, 50, 100, 150, 90, 200],
      backgroundColor: [
        'rgb(255, 0, 0)',
        'rgb(82, 215, 38)',
        'rgb(255, 236, 0)',
        'rgb(255, 115, 0)',
        'rgb(0, 126, 214)',
        'rgb(124, 221, 221)'
      ],
      hoverOffset: 4
    }]
  }
};
  
  export default pieChartData;