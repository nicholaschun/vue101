
// Instatiating a vue app
new Vue({
  el: '#app',
  data: {
    name: 'nicholas',
    job: 'Sleeping',
  },
  methods: {
    greeting (time){
      return 'Good ' + time + ' ' + this.name
    }
  }
})
