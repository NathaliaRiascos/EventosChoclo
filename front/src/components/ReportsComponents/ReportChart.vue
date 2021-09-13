<template>
  <div>
    unu
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ReportNumbers',
  data () {
    return {
      options: {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }
    }
  }
}
</script>

<style>

</style>
