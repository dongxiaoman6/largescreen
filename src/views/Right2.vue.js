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
    name: '日间停车时长总比',
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
            var myChart = echarts.init(this.$refs.chartRefRight2, 'dark');
            var chartDom = document.getElementById('mainRight2');
            // 指定图表的配置项和数据  
            var option = {
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
                    width: '100%',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("chartRefRight2"), id: ("mainRight2") }, { style: ({}) }));
    // @ts-ignore
    (__VLS_ctx.chartRefRight2);
    // @ts-ignore
    [chartRefRight2,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = '日间停车时长总比';
    var __VLS_internalComponent = (yield Promise.resolve().then(function () { return require('./Right2.vue'); })).default;
}
