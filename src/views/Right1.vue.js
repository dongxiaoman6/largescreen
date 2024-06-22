"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var echarts = require("echarts");
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: '车位满位率',
    mounted: function () {
        this.drawChartRight();
        window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize); // 组件销毁前移除监听器
    },
    data: function () {
        return {
            myChart: null // 用于存储echarts实例的变量
        };
    },
    methods: {
        handleResize: function () {
            if (this.myChart) {
                this.myChart.resize(); // 调整图表尺寸以适应容器大小
            }
        },
        drawChartRight: function () {
            // 基于准备好的dom，初始化echarts实例  
            var myChart = echarts.init(this.$refs.chartRefRight, 'dark');
            var chartDom = document.getElementById('mainRight');
            // 指定图表的配置项和数据  
            var option = {
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
                    width: '100%',
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
});
;
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("chartRefRight"), id: ("mainRight") }, { style: ({}) }));
    // @ts-ignore
    (__VLS_ctx.chartRefRight);
    // @ts-ignore
    [chartRefRight,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = '车位满位率';
    var __VLS_internalComponent = (yield Promise.resolve().then(function () { return require('./Right1.vue'); })).default;
}
