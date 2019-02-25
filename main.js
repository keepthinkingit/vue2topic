

Vue.component('coupon', {
    template: `
    <div>
        <input placeholder="input your coupon" type="text" @blur="onCouponApplied">
    </div>
`,

    methods: {
        onCouponApplied(){
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false,
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});

