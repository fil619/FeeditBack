<template>
  <div>
    <apexchart
      type="bar"
      height="420"
      :options="chartOptions"
      :series="orders"
    ></apexchart>
  </div>
</template>


<script>
export default {
  computed: {
    orders() {
      var newV = this.$store.state.dashboardorders;
      console.log(this.chartOptions.xaxis.categories);
      this.ClearChart()
      var series = [{ data: [] }]
      newV.forEach((element) => {
        this.chartOptions.xaxis.categories.push(element.name);
        series[0].data.push(element.quantity);
      });
      return series
    },
  },
  methods: {
    ClearChart(){
      this.chartOptions.xaxis.categories = []
    }
  },
  data() {
    return {
      loading: false,
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
};
</script>

<style >
 .apexcharts-text {
   fill: white;
 }
</style>