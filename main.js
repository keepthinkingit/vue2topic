Vue.component('task', {
    template: '<li><slot></slot></li>'

    // data() {
    //     return {
    //         tasks: [
    //             {task: 'Go to the store', complete: true},
    //             {task: 'Go to farm', complete: false},
    //             {task: 'Go to work', complete: true},
    //         ]
    //     }
    // }
});

new Vue({
    el: '#root'

})