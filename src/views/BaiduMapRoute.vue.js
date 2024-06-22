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
var vue_1 = require("vue");
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'BaiduMapRoute',
    setup: function () {
        var mapContainer = (0, vue_1.ref)(null);
        var map = null;
        var driving = null;
        (0, vue_1.onMounted)(function () {
            // 初始化地图
            map = new BMapGL.Map(mapContainer.value);
            var point = new BMapGL.Point(116.404, 39.915); // 设置地图中心点坐标
            map.centerAndZoom(point, 11); // 初始化地图，设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true); // 启用滚轮缩放
            // 初始化驾车导航实例
            driving = new BMapGL.DrivingRoute(map, {
                renderOptions: {
                    map: map,
                    autoViewport: true,
                },
            });
            // 设置起点和终点，进行驾车导航线路规划
            var start = new BMapGL.Point(116.301965, 39.977551); // 起点坐标
            var end = new BMapGL.Point(116.481028, 39.928987); // 终点坐标
            driving.search(start, end);
        });
        return {
            mapContainer: mapContainer,
        };
    },
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
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("mapContainer") }, { class: ("map-container") }));
    // @ts-ignore
    (__VLS_ctx.mapContainer);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("allmap"), });
    // @ts-ignore
    [mapContainer,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("result") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['map-container'];
        __VLS_styleScopedClasses['result'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = 'BaiduMapRoute';
    var __VLS_internalComponent = (yield Promise.resolve().then(function () { return require('./BaiduMapRoute.vue'); })).default;
}
