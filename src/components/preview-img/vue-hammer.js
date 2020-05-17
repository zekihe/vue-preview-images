import './hammer.min.js';


const install = (Vue) => {
    //全局指令点击
    Vue.directive("tap", {
        bind : function(el, binding) {
            new vueTouch(el, "tap", binding);
        }
    });
    //左滑
    Vue.directive("swipeleft", {
        bind : function(el, binding) {
            new vueTouch(el, "swipeleft", binding);
        }
    });
    //右滑
    Vue.directive("swiperight", {
        bind : function(el, binding) {
            new vueTouch(el, "swiperight", binding);
        }
    });
    //长按
    Vue.directive("press", {
        bind : function(el, binding) {
            new vueTouch(el, "press", binding);
        }
    });
    //多点触控时两手指越来越近
    Vue.directive("pinchin", {
        bind : function(el, binding) {
            new vueTouch(el, "pinchin", binding);
        }
    });
    //多点触控时两手指越来越远
    Vue.directive("pinchout", {
        bind : function(el, binding) {
            new vueTouch(el, "pinchout", binding);
        }
    });
}

const vueTouch = function(el, type, binding) {
    this.el = el;
    this.type = type;
    this.binding = binding;
    var hammertime = new Hammer(this.el);
    
    hammertime.get('pinch').set({ enable: true });

    hammertime.on(this.type, this.binding.value);
}

export default install