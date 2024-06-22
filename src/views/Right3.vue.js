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
        this.drawChartRight();
        window.addEventListener('resize', this.handleResize); // 监听窗口大小变化
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
        drawChartRight: function () {
            // 基于准备好的dom，初始化echarts实例  
            var myChart = echarts.init(this.$refs.chartRefRight3, 'dark');
            var chartDom = document.getElementById('mainRight3');
            // 指定图表的配置项和数据  
            var option = {
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
                    width: '100%',
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1460],
                        type: 'line',
                        areaStyle: {}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("chartRefRight3"), id: ("mainRight3") }, { style: ({}) }));
    // @ts-ignore
    (__VLS_ctx.chartRefRight3);
    // @ts-ignore
    [chartRefRight3,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = '停车流量统计';
    var __VLS_internalComponent = (yield Promise.resolve().then(function () { return require('./Right3.vue'); })).default;
}
