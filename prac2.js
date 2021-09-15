const PromptComponent = {
  template:'<div><p>${message}</p><button @click="sayHi">Click me if you dare!</button></div>',
  delimiters: ['${','}'],
  data: function() {
    return {
      message: 'Clicking test'
    }
  },
  methods: {
    sayHi: function(){
      alert('You get nothing! ha ha ha');
    }
  }
};
let vm = new Vue({
  el:'#app',
  components: {
    'prompt-component':PromptComponent
  },
  data: {
    num: 1
  },
  template: `<prompt-component/>`
});

Vue.component('prompt-compo', {
  template: '<div><p>${message}</p><button @click="sayHi">What lies behind!</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      message: 'Behind the button'
    }
  },
  methods: {
    sayHi: function() {
      alert('Hello!!!');
    }
  }
});

let mv = new Vue({
  el:'#global',
  template: `<prompt-compo/>`
});

Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<div>{{ text }}</div>`
});

new Vue({
  el: '#map',
  data() {
    return {
      message: 'Thank yoou for comming to the books page.'
    }
  }
})