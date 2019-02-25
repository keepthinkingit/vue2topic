window.Event = new Vue();   //创建一个统一事件

Vue.component('coupon', {
    template: `
    <div>
        <input placeholder="input your coupon" type="text" @blur="onCouponApplied">
    </div>
`,

    methods: {
        onCouponApplied(){
            Event.$emit('applied');     //传递给 Event
        }
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false,
    },

    created() {
        Event.$on('applied', ()=>alert('handle it') )
    }
});

