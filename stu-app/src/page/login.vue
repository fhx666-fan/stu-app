<template>
  <!-- <div class="loginPage">
    <input type="text" v-model="userName" placeholder="请输入账号" />
    <input type="password" v-model="password" placeholder="请输入密码" />
    <input type="button" @click="submit" value="登陆" />
  </div> -->
  <body>
      <div class="login-form">
            <h1>Students Log In</h1>
            <div class="txtb">
                <input class="input" type="text" placeholder="Username" v-model="userName">
            </div>

            <div class="txtb">
              <!-- <el-input placeholder="Password" v-model="psaaword" show-password class="input"></el-input> -->
                <input type="password" placeholder="Password" v-model="password" >
            </div>

            <input type="submit" class="logbtn" value="Log In" @click="submit">

            <div class="bottom-text">
                遇到问题? <a href="">联系老师</a>
            </div>
        </div>
  </body>

</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      userName: '',
      password: '',
      error: ''
    }
  },
  methods: {
    submit () {
      console.log(this.userName, this.password)
      if (!this.userName) {
        this.error = '请输入账号'
        return false
      }
      if (!this.password) {
        this.error = '请输入密码'
        return false
      }
      api.login({
        params: {
          userName: this.userName,
          password: this.password
        }
      }).then((res) => {
        if (res.data.status === 'success') {
          this.$router.push({name: 'index'})
          this.$store.commit('setUserName', this.userName)
        } else {
          this.error = res.data.msg
        }
      })
    }
  }

}
</script>

<style scoped>
  @import '../assets/css/login.css';
</style>>
