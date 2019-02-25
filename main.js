
Vue.component('modal', {
    template: `
    <div class="modal is-active">
    
      <div class="modal-background"></div>
      
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
          <slot name="header"></slot>     <!--动态生成-->
          </p>
          
          <button class="delete" aria-label="close"></button>
        </header>
        
        <section class="modal-card-body">
          <!-- Content ... -->
          <slot>
            <!--Default content here. &lt;!&ndash;可以写一些默认内容在此&ndash;&gt;-->
          </slot>
        </section>
        
        <footer class="modal-card-foot">
            <slot name="footer"></slot>
        </footer>
        
      </div>
    </div>
`,

    methods: {
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false,
    },

});

