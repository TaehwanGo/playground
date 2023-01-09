const bubbleChart1 = document.getElementById('bubbleChart1');

const bubbleChartConfig = {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: '#42A5F5',
      hoverBackgroundColor: '#64B5F6'
    }, {
      label: 'Second Dataset',
      data: [{
        x: 10,
        y: 20,
        r: 15
      }, {
        x: 20,
        y: 30,
        r: 10
      }],
      backgroundColor: '#FFA726',
      hoverBackgroundColor: '#FFB74D'
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bubble Chart'
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'x Axis'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'y Axis'
        }
      }]
    }
  }
};

const bubbleChartInstance = new Chart(bubbleChart1, bubbleChartConfig);

const bubbleChart2 = document.getElementById('bubbleChart2');
const bubbleChart2Data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};
const bubbleChart2Config = {
  type: 'bubble',
  data: bubbleChart2Data,
  options: {}
};

const bubbleChart2Instance = new Chart(bubbleChart2, bubbleChart2Config);
