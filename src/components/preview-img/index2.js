
import Vue from 'vue';

import Hammer from './vue-hammer.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import vuePicturePreview from './preview.vue';

Vue.use(Hammer);

const PreviewImg = {
    install(Vue) {
        const PreviewImgConstructor = Vue.extend(vuePicturePreview);

        Vue.prototype.$previewImage = (options) => {

            options = options || {};


            const instance = new PreviewImgConstructor({
                data: options
            });
            instance.vm = instance.$mount();
            document.body.appendChild(instance.vm.$el);
            document.body.style.overflow = 'hidden';

            
            instance.vm.show = true;


            const userOnClose = options.onClose || null;

            options.onClose = function() {
                document.body.style.overflow = 'auto';
                setTimeout(() => {
                    if(userOnClose) {
                        close(userOnClose, index)
                    }
                    document.body.removeChild(instance.vm.$el)
                }, 400) 
            }
        }
    }
}

const close = function(userOnClose, index) {
    userOnClose(index)
}


export default PreviewImg