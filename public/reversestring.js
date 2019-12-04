

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Text to reverse'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});