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
require("echarts-liquidfill");
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: '停车流量统计',
    mounted: function () {
        this.drawChart();
    },
    methods: {
        drawChart: function () {
            // 基于准备好的dom，初始化echarts实例  
            var myChart = echarts.init(this.$refs.chartRef, 'dark');
            var chartDom = document.getElementById('mainLeft5');
            // 指定图表的配置项和数据  
            var option = {
                backgroundColor: 'transparent', // 设置整个图表的背景为透明
                series: [
                    {
                        type: 'liquidFill',
                        data: [0.8], //数据
                        radius: '80%', // 设置为相对于容器宽度的百分比
                        color: ['#5FFF99'], //设置波形颜色
                        waveLength: 500, // 波浪长度，值越大波浪越平缓
                        moveSpeed: 1, // 波浪移动速度，moveSpeed 的值越大，波浪移动的速度就越快。
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 16,
                                    // color:'#fff',
                                }
                            }
                        },
                        outline: {
                            show: true, //是否显示外边框
                            itemStyle: {
                                borderColor: 'white', // 设置最外面边框颜色为白色
                                borderWidth: 1, // （可选）设置边框宽度，如果需要的话
                            }
                        },
                        backgroundStyle: {
                            borderWidth: 1, // （可选）设置边框宽度，如果需要的话
                            color: '#07233B'
                        },
                        itemStyle: {
                            opacity: 0.9, //设置normal时候的透明度
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 0.9 //设置hover时候的透明度
                            }
                        },
                    },
                ],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("chartRef"), id: ("mainLeft5") }, { style: ({}) }));
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
    var __VLS_internalComponent = (yield Promise.resolve().then(function () { return require('./WaterPolo5.vue'); })).default;
}
