<script lang="ts">
import * as echarts from 'echarts';
  export default {  
    name: '车位满位率',  
    mounted() {  
        this.drawChartRight();  
        window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
    },  
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize); // 组件销毁前移除监听器
    },
    data() {
        return {
          myChart: null as echarts.ECharts | null// 用于存储echarts实例的变量
        };
    },
    methods: {  
      handleResize() {
          if (this.myChart) {
            this.myChart.resize(); // 调整图表尺寸以适应容器大小
          }
      },
      drawChartRight() {  
        // 基于准备好的dom，初始化echarts实例  
        const myChart = echarts.init(this.$refs.chartRefRight  as HTMLElement, 'dark');  
        const chartDom = document.getElementById('mainRight');
            
        // 指定图表的配置项和数据  
        const  option = {
          backgroundColor: 'rgba(0, 0, 0, 0)', // 或者 'transparent'
        // title: {
        //   text: '车位满位率'
        // },
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
          width:'100%',
          left: '3%',
          right: '4%',
          bottom: '3%',
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
  <div ref="chartRefRight" id="mainRight" style="width: 100%; height: 100%; margin: 0 auto;"></div>
</template>