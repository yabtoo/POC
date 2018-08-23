import Vue from 'vue';
import msgUtil from '@/common/utils/msg_util';
import '@/assets/css/common.css';
import app from '@/assets/js/app.vue'

const myApp = new Vue({
  el: '#app',
  components:{app},
  template: '<div>11111</div>'
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registeration => {
            console.log('SW registered: ', registeration);
        }).catch(registerationError => {
            console.log('SW registeration failed:', registerationError);
        });
    });
}