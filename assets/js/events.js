
// Instatiating a vue app
new Vue({
  el: '#app',
  data: {
    age:75,
    isErrored: true,
    vuelink: 'www.facebook.com'
  },
  methods:{
    addYear () {
      this.age++
    },
    substractYear () {
      this.age--
    },
    add10Years (inc) {
      this.age +=inc
    },
    substract10Years (dec) {
      this.age -=dec
    },
    selectVal (event){
    console.log(event)
      alert(event.target.value)
    }
  }
})
