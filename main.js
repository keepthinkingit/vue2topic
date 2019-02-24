Vue.component('message', {
    props: ['title', 'body'],

    data() {        //only return object
        return {    //页面渲染时传递初始属性值
            isVisible: true
        }
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
            </div>
            
            <!--点击时改变 isVisible 属性-->
            <button type="button" @click="hideModel">X</button> 
            <!--第二种方法(简易书写) -->
            <!--<button type="button" @click="isVisible=false">X</button>-->
            <div class="message-body">
                {{ body }}
            </div>
        </article>
`,


methods: {
    hideModel(){
        this.isVisible = false;
    }
}

});

new Vue({
    el: '#root',
});