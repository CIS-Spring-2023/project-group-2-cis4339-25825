
// This is the data object used for creating a chart
export const data = {
  labels: ["77006", "77005", "70003", "77002", "77021"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#cecfef"],
      data: [4, 2, 2, 1, 5],
    },
  ],
};
// These are the options for the chart
export const options = {
  responsive: false,
  maintainAspectRatio: false, // The chart will not maintain aspect ratio
};
