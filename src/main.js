import Vue from 'vue'
import App from './app.vue'

import './common/css/common.css'

import PreviewImage from './components/preview-img/index.js';

var options={
    fullscreenEl:false, //关闭全屏按钮
    loop: false,
    zoomEl: false,  //缩放按钮
    arrowEl: false,
    tapToClose: true,   //触摸点击关闭
    closeEl: false,
    pinchToClose: false,
    closeOnScroll: false,
    closeOnVerticalDrag: false   //拖动关闭
    // loadingIndicatorDelay: 1, // 2s

}

Vue.use(PreviewImage,options)


new Vue({
    render: h => h(App)
}).$mount("#app")