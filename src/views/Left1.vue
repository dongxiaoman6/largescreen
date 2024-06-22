<script lang="ts">
import * as echarts from 'echarts';
  export default {  
    name: '停车流量统计',  
    mounted() {  
        this.drawChart();  
        window.addEventListener('resize', this.handleResize);
    },  
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {  
      handleResize() {
        const myChart = echarts.getInstanceByDom(this.$refs.chartRef  as HTMLElement);
        if (myChart) {
          myChart.resize();
        }
      },
      drawChart() {  
        // 基于准备好的dom，初始化echarts实例  
        const myChart = echarts.init(this.$refs.chartRef as HTMLElement, 'dark');  
        const chartDom = document.getElementById('mainLeft1');
            
        // 指定图表的配置项和数据  
        const  option = {
          backgroundColor: 'rgba(0, 0, 0, 0)', // 或者 'transparent'
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['昨天', '上周同天']
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          width:'100%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['0点', '3点', '6点', '9点', '12点', '15点', '18点', '21点']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '昨天',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210, 120]
          },
          {
            name: '上周同天',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310, 290]
          }
        ]
      };
        option && myChart.setOption(option);
      }  
    }  
  };  
</script>

<template>
  <div style="width: 100%; height: 100%; position: relative;"> <!-- 父级容器 -->
    <div ref="chartRef" id="mainLeft1" style="width: 100%; height: 100%; position: absolute;"></div>
  </div>
</template>