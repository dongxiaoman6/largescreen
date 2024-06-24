<script lang="ts">
import * as echarts from 'echarts';
  export default {  
    name: '停车流量统计',  
    data() {
    return {
      myChart: null as echarts.ECharts | null// 用于存储echarts实例的变量
    };
    },
    mounted() {  
        this.drawChart();  
        window.addEventListener('resize', this.handleResize); // 添加resize事件监听器
    },  
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize); // 组件销毁前移除监听器
    },
    methods: {  
      handleResize() {
          if (this.myChart) {
            this.myChart.resize(); // 调整图表尺寸以适应容器大小
          }
      },
      drawChart() {  
        // 基于准备好的dom，初始化echarts实例  
        const chartDom = document.getElementById('mainLeft3');
        const myChart = echarts.init(this.$refs.chartRef  as HTMLElement, 'dark');
        // 指定图表的配置项和数据  
        const  option = {
          backgroundColor: 'rgba(0, 0, 0, 0)', // 或者 'transparent'
        dataset: [
            {
            dimensions: ['date', 'score'],
            source: [
                ['08-11', 120],
                ['08-12', 200],
                ['08-13', 150],
                ['08-14', 120],
                ['08-15', 111],
                ['08-16', 134],
                ['08-16', 140],
            ]
            },
            {
            transform: {
                type: 'sort',
                config: { dimension: 'date', order: 'asc' }
            }
            }
        ],
        xAxis: {
            type: 'category',
            axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {},
        series: {
            type: 'bar',
            encode: { x: 'date', y: 'score' },
            datasetIndex: 1
        }
        };

        option && myChart.setOption(option);
      }  
    }  
  };  
</script>

<template>
  <div ref="chartRef" id="mainLeft3" style="width:100%;height:100%;margin:0 auto"></div>
</template>