import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BaiduMap from 'vue-baidu-map-3x';
const app = createApp(App);
app.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'CC9a95b872fb3723985c1ddc69cc1fff',
    // v:'2.0',  // 默认使用3.0
    // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
});
app.use(router);
app.mount('#app');
