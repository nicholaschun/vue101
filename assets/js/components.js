export default myName() {
  Vue.component('greeting',{
    template:`<div>
    <p>{{this.name}}</p>
    <button @click="alertHello">Alert Hello</button>
    </div>`,
    data(){
      return {
        name: 'Nicholas chun'
      }
    },
    methods: {
      alertHello (){
        alert(this.name)
      }
    }
  });
}
