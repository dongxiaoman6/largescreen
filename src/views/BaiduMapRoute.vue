<template>
    <div ref="mapContainer" class="map-container">
      <div id="allmap"></div>
      <div class="result">根据起点和终点经纬度驾车导航</div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  
  export default {
    name: 'BaiduMapRoute',
    setup() {
      const mapContainer = ref(null);
      let map = null;
      let driving = null;
  
      onMounted(() => {
        // 初始化地图
        map = new BMapGL.Map(mapContainer.value);
        const point = new BMapGL.Point(116.404, 39.915); // 设置地图中心点坐标
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
        const start = new BMapGL.Point(116.301965, 39.977551); // 起点坐标
        const end = new BMapGL.Point(116.481028, 39.928987); // 终点坐标
        driving.search(start, end);
      });
  
      return {
        mapContainer,
      };
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 100vh; /* 视口高度 */
    position: relative;
  }
  
  #allmap {
    width: 100%;
    height: 100%;
  }
  
  .result {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    z-index: 999;
  }
  </style>