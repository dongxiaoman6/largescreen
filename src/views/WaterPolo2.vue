<script lang="ts">
// import * as echarts from 'echarts';

import * as echarts from 'echarts';
import 'echarts-liquidfill'

  export default {  
    name: '停车流量统计',  
    mounted() {  
        this.drawChart();  
    },  
    
    methods: {  
      drawChart() {  
        // 基于准备好的dom，初始化echarts实例  
        const myChart = echarts.init(this.$refs.chartRef   as HTMLElement, 'dark');  
        const chartDom = document.getElementById('mainLeft2');
            
        // 指定图表的配置项和数据  
        var option = {
          backgroundColor: 'transparent', // 设置整个图表的背景为透明
              series: [
                {
                  type: 'liquidFill',
                  data: [0.8],//数据
                  radius: '80%', // 设置为相对于容器宽度的百分比
                  color: ['#4AE6DE'],//设置波形颜色
                  waveLength: 500,// 波浪长度，值越大波浪越平缓
                  moveSpeed: 1, // 波浪移动速度，moveSpeed 的值越大，波浪移动的速度就越快。
                  label: {
                      normal :{
                          textStyle:{//设置球状里字体颜色
                            fontSize:16,
                            // color:'#fff',
                          }
                      }
                  },
                  outline: {
                    show:true,//是否显示外边框
                    itemStyle: {
                      borderColor: 'white', // 设置最外面边框颜色为白色
                      borderWidth: 1, // （可选）设置边框宽度，如果需要的话
                    }
                  },
                  backgroundStyle: {//球状剩余部分样式
                    borderWidth: 1, // （可选）设置边框宽度，如果需要的话
                    color:'#07233B'
                  },
                  itemStyle: {
                          opacity: 0.9,//设置normal时候的透明度
                  },
                  
                  emphasis: {
                      itemStyle: {
                          opacity: 0.9//设置hover时候的透明度
                      }
                  },
              
              },
              
            ],
        };

        option && myChart.setOption(option);
      }  
    }  
  };  
</script>

<template>
  <div ref="chartRef" id="mainLeft2" style="width:33%;height:100%;margin:0 auto;"></div>  
</template>
