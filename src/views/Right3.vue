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
        this.drawChartRight();  
        window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
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
      drawChartRight() {  
        // 基于准备好的dom，初始化echarts实例  
        const myChart = echarts.init(this.$refs.chartRefRight3  as HTMLElement, 'dark');  
        const chartDom = document.getElementById('mainRight3');
            
        // 指定图表的配置项和数据  
        const option = {
            backgroundColor: 'rgba(0, 0, 0, 0)', // 或者 'transparent'
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0点', '3点', '6点', '9点', '12点', '15点', '18点', '21点']
            },
            yAxis: {
                type: 'value'
            },
            grid: {
                width:'100%',
            },
            series: [
                {
                data: [820, 932, 901, 934, 1290, 1330, 1320,1460],
                type: 'line',
                areaStyle: {}
                }
            ]
        };

        option && myChart.setOption(option);
      }  
    }  
  };  
</script>

<template>
  <!-- 确保父容器有确定的宽度和高度 -->
  <div style="width: 100%; height: 100%; position: relative;"> <!-- 你可以根据需要调整高度 -->
    <div ref="chartRefRight3" id="mainRight3" style="width: 100%; height: 100%; position: absolute;"></div>
  </div>
</template>
