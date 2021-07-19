<template>
<div>
  <apexchart type="radialBar" height="420" :options="productOrdersRadialBar.chartOptions" :series="series" />
</div>
</template>

<script>
export default {
    computed:{
        series(){
          var newV = this.$store.state.dashboardguests
          return [newV.filter(el => el.gender == 'Male').length , newV.filter(el => el.gender == 'Female').length]
        }
    },
  data() {
    return {
      sData:[0,0],
      productOrdersRadialBar: {
            chartOptions: {
                labels: ['Male', 'Female'],
                plotOptions: {
                    radialBar: {
                        size: 165,
                        offsetY: -5,
                        hollow: {
                            size: '20%'
                        },
                        track: {
                            background: "#ebebeb",
                            strokeWidth: '100%',
                            margin: 15,
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                fontSize: '18px',
                            },
                            value: {
                                fontSize: '16px',
                                color: "#636a71",
                                offsetY: 11,
                                formatter: function (val) {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                return (
                                w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b;
                                }, 0) 
                                );
                            },
                            }
                        }
                    },
                },
                responsive: [{
                    breakpoint: 576,
                    options: {
                        plotOptions: {
                            radialBar: {
                                size: 150,
                                hollow: {
                                    size: '20%'
                                },
                                track: {
                                    background: "#ebebeb",
                                    strokeWidth: '100%',
                                    margin: 15,
                                },
                            }
                        }
                    }
                }],
                colors: ['#7961F9', '#FF9F43', '#EA5455'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        // enabled: true,
                        shade: 'dark',
                        type: 'vertical',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    },
                },
                stroke: {
                    lineCap: 'round'
                },
                chart: {
                    height: 355,
                    dropShadow: {
                        enabled: true,
                        blur: 3,
                        left: 1,
                        top: 1,
                        opacity: 0.1
                    },
                }
            }
      },
      productsOrder: {
        analyticsData: [
            { 'orderType': 'Finished', 'counts': 23043, color: 'primary' },
            { 'orderType': 'Pending', 'counts': 14658, color: 'warning' },
            { 'orderType': 'Rejected ', 'counts': 4758, color: 'danger' },
        ],
        series: [70, 52],
        
      },
    }
  },
};
</script>