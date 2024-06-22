<script lang="ts">
import * as echarts from 'echarts';
  export default {  
    name: '日间停车时长总比',  
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
        const myChart = echarts.init(this.$refs.chartRefRight2  as HTMLElement, 'dark');  
        const chartDom = document.getElementById('mainRight2');
            
        // 指定图表的配置项和数据  
        const  option = {
          backgroundColor: 'rgba(0, 0, 0, 0)', // 或者 'transparent'
            // title: {
            //     text: '日间停车时长总比',
            //     subtext: 'Fake Data',
            //     left: 'center'
            // },
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //     orient: 'vertical',
            //     left: 'left'
            // },
            grid: {
                width:'100%',
            },
            series: [
                {
                name: '日间停车时长总比',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '0-15分钟(39.05%)' },
                    { value: 735, name: '15-30分钟(20.26%)' },
                    { value: 580, name: '30-60分钟(14.23%)' },
                    { value: 484, name: '1-1.5小时(9.01%)' },
                    { value: 300, name: '2-3小时(7.55%)' }
                ],
                emphasis: {
                    itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
                }
            ]
        };

        option && myChart.setOption(option);
      }  
    }  
  };  
</script>

<template>
  <div ref="chartRefRight2" id="mainRight2" style="width: 100%; height: 100%; margin: 0 auto;"></div>
</template>
