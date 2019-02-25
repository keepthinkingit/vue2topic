<template>
  <div id="app">
    <message>Hello There~</message>
  </div>
</template>

<script>
  import Message from './assets/components/Message.vue';

  export default {
    name: 'app',
    components: { Message },

    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>
