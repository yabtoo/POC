import Vue from 'vue';
import msgUtil from '@/common/utils/msg_util';
import '@/assets/css/common.css';
import app from '@/assets/js/app.vue'

const myApp = new Vue({
  el: '#app',
  components:{app},
  template: '<div>11111</div>'
})

console.log(myApp, 1, 2);