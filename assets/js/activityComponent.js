Vue.component('login', {
  template: `<div>
  <h4>Login</h4>
  <label>Username:</label>
  <input placeholder="Username"  name="username" type="text"/>
  <br>
  <label>Password</label>
  <input type="password" placeholder="*****" name="password" />
  <br>
  <button type="submit">Submit</button>
  </div>`,
})

Vue.component('register', {
  template: `<div>
  <h4>Register</h4>
  <label>Firstname:</label>
  <input placeholder="firstaname"  name="firstname" type="text"/>
  <br>
  <label>Username:</label>
  <input placeholder="Username"  name="username" type="text"/>
  <br>
  <label>Password</label>
  <input type="password" placeholder="*****" name="password" />
  <br>
  <button type="submit">Submit</button>
  </div>`
})

new Vue({
  el: '#app',
  data: {
    login: false,
    register: false
  },
  methods: {
    callLogin() {
      this.login = true
      this.register = false
    },
    callRegister() {
      this.login = false
      this.register = true
    }
  }
})
