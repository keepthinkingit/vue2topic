Vue.component('modal', {
    template: `
        <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, odit, rerum.
                    A ad corporis cumque eaque earum eligendi ipsum natus,
                    quae qui quibusdam ratione, sed,
                    sunt tenetur totam voluptates voluptatum?
                </p>
            </div>
        </div>
        
        <!--$emit 触发当前实例上的事件。附加参数都会传给监听器回调。-->
        <!--当点击 X 按钮时 , 回调 close , 即: 改变 showModal = false .  -->
        <button class="modal-close" @click="$emit('close')"></button>
    </div>
`
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});