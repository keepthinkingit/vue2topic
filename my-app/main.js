Vue.component('coupon', {
  props: ['code'],

  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,

  data() {
    return {
      invalids: ['free', 'work']
    }
  },

  methods: {
    updateCode(code){
      if(this.invalids.includes(code)){
        alert('this code is no longer valid');

        this.$refs.input.value = code = '';
      }
      this.$emit('input', code);
      return;
    }
  }
})
new Vue({
  el: '#app',

  data: {
    coupon: 'free lunch?'
  }
})
