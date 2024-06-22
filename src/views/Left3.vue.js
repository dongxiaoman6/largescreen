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
    name: '停车流量统计',
    data: function () {
        return {
            myChart: null // 用于存储echarts实例的变量
        };
    },
    mounted: function () {
        this.drawChart();
        window.addEventListener('resize', this.handleResize); // 添加resize事件监听器
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize); // 组件销毁前移除监听器
    },
    methods: {
        handleResize: function () {
            if (this.myChart) {
                this.myChart.resize(); // 调整图表尺寸以适应容器大小
            }
        },
        drawChart: function () {
            // 基于准备好的dom，初始化echarts实例  
            var chartDom = document.getElementById('mainLeft3');
            var myChart = echarts.init(this.$refs.chartRef, 'dark');
            // 指定图表的配置项和数据  
            var option = {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("chartRef"), id: ("mainLeft3") }, { style: ({}) }));
    // @ts-ignore
    (__VLS_ctx.chartRef);
    // @ts-ignore
    [chartRef,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = '停车流量统计';
    var __VLS_internalComponent = (yield Promise.resolve().then(function () { return require('./Left3.vue'); })).default;
}
