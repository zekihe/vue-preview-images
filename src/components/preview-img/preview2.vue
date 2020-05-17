<template>
    <transition name="viewer-fade">
        <div v-if="show" 
            tabindex="-1"
            v-tap="tap" 
            ref="image-viewer__wrapper" 
            class="image-viewer__wrapper" 
            :style="{ 'z-index': zIndex }">
            <div class="image-viewer__mask"></div>
            <!-- close -->
            <span class="image-viewer__btn image-viewer__close" @click="hide">
                <i>X</i>
            </span>


            <div class="image-viewer__canvas">
                <img class="image-viewer__img"
                  ref="imgs"
                  :src="currentImg" 
                  v-pinchin="pinchin"
                  v-pinchout="pinchout"
                  v-swipeleft="swipeleft"
                  v-swiperight="swiperight">
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                zIndex: 999,
                show: false,
                list: [],
                currentIndex: 0,
            }
        },
        components: {
        },
        props: {},
        computed: {
          currentImg() {
              console.log(this.list)
              return this.list[this.currentIndex].url
          }
        },
        created () {
            
        },
        mounted () {
        },
        methods: {
            tap : function(s, e) {
                console.log("点击");
                console.log(s);
                this.hide()
            },
            swipeleft : function(s, e) {
                console.log("向左滑动:x偏移量[" + s.deltaX + "],y偏移量[" + s.deltaY + "]");
                console.log(this.$refs.imgs.width);
            },
            swiperight : function(s, e) {
                console.log("向右滑动:x偏移量[" + s.deltaX + "],y偏移量[" + s.deltaY + "]");
            },
            pinchin(s, e) {
                alert("多点触控时两手指越来越近")
 
            },
            pinchout(e, s) {
                alert("多点触控时两手指越来越远")
            },
            hide() {
                this.show = false;
                if (typeof this.onClose === 'function') {
                    this.onClose(this.index);
                }
            }
        },
    }
</script>
<style scoped>
.image-viewer__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.image-viewer__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .5;
    background: #000;
}
.image-viewer__btn {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.image-viewer__close {
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    font-size: 40px;
}

.image-viewer__canvas {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-viewer__canvas img {
  width: 100%;
}

.viewer-fade-enter-active {
  animation: viewer-fade-in .3s;
}

.viewer-fade-leave-active {
  animation: viewer-fade-out .3s;
}

@keyframes viewer-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes viewer-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
