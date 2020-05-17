<template>
    <div id="app">
        <ul class="mainmenu">
            <li v-for="(item,index) in imgList" :key="index">
                <div>
                    <img :src="item.url" preview="1">
                    <!-- <img :src="item.url" preview="1" preview-text="描述文字"> -->
                </div>
            </li>     
        </ul>

        <div>
            --------------------------
        </div>

        <!-- <ul class="mainmenu">
            <li v-for="(item,index) in imgList" :key="index">
                <div>
                    <img :src="item.url" preview="2" preview-text="描述文字">
                </div>
            </li>     
        </!--> -->

    </div>
</template>
<script>
    export default {
        data () {
            return {
                imagesArr: [
                    {url: "https://tva3.sinaimg.cn/large/87c01ec7gy1frmrs543ivj21hc0u0ths.jpg"},
                    {url: "https://tva3.sinaimg.cn/large/0072Vf1pgy1foxkjjz8vbj31hc0u0k80.jpg"},
                    {url: "https://tva1.sinaimg.cn/large/0072Vf1pgy1foxlhlozlfj31hc0u07lb.jpg"},
                    {url: "https://tva2.sinaimg.cn/large/0060lm7Tly1ftg6xaqdu6j31hc0u0x4k.jpg"},
                    {url: "https://tva3.sinaimg.cn/large/87c01ec7gy1frmrr7y6u3j21hc0u0k0c.jpg"},
                    {url: "https://tva3.sinaimg.cn/large/87c01ec7gy1frmmx0bdlsj21kw0w0npn.jpg"},
                    {url: "https://tva4.sinaimg.cn/large/0060lm7Tly1ftg6onkf2aj318g0p0wmo.jpg"},
                    {url: "https://tva4.sinaimg.cn/large/0060lm7Tly1ftg6oh633dj31hc0u0qbh.jpg"},
                    {url: "https://tva1.sinaimg.cn/large/87c01ec7gy1frmry78dkhj21hc0u0n6b.jpg"},
                ],
                imgList: []
            }
        },
        components: {
        },
        props: {},
        created () {
        },
        mounted () {
            //异步插入的图片
            setTimeout(() => {
                this.imgList = this.imagesArr
                this.$previewRefresh()
            }, 2000);

            //图片查看器打开后，打印本次查看器的实例（事件、方法、属性的示例）
            this.$preview.on('imageLoadComplete',(e,item)=>{
                console.log(this.$preview.self)
            })
        },
        methods: {
            handleClose() {
                
            }
        },
    }
</script>
<style scoped>
/* css */
</style>
