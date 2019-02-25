// 共有两个 组件 . 总体目标为渲染 html 页面的 tab , 并且点击切换时自动切换激活状态 , 地址栏显示对应地址 .
Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">    <!--当选中时激活: 选中时传值-->
                    //绑定属性 href, 
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>  <!--点击标签后切换-->
                </li>
            </ul>
        </div>
        
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
`,

    data() {    //传递给父级 vue 数值
        return {tabs: []}
    },

    created() {     //开始渲染时 , 传值
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
    <div v-show="isActive"><slot></slot></div>
`,

    props: {    //把 html 给定的 tab 元素进行赋值/传值
        name: {required: true},
        selected: {default: false}
    },

    data() {    //只能返回对象 ?
        return {isActive: false}
    },

    computed: {
        href() {    //自动替换 : about us -> about-us
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted(){      //渲染时传值
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root',
    data: {}
});