
// Instatiating a vue app
new Vue({
  el: '#app',
  data: {
    item: []
  },
  methods: {
    addItem () {
      this.$refs.addButton.innerText = 'Processing...'
    }
  }
})
