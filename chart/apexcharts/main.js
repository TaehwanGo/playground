const chart1 = new ApexCharts(document.querySelector("#chart1"), {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
});

chart1.render();

const chart2Options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

const chart2 = new ApexCharts(document.querySelector("#chart2"), chart2Options);

chart2.render();

const chartRadarOptions = {
  series: [
    {
      name: "Radar Series 1",
      data: [45, 52, 38, 24, 33, 10]
    },
    {
      name: "Radar Series 2",
      data: [26, 21, 20, 6, 8, 15]
    }
  ],
  labels: ['April', 'May', 'June', 'July', 'August', 'September']
}
const chartRadar = new ApexCharts(document.querySelector("#chartRadar"), chartRadarOptions);
chartRadar.render();