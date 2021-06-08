<template>
  <!-- <div class="loginPage">
    <input type="text" v-model="userName" placeholder="请输入账号" />
    <input type="password" v-model="password" placeholder="请输入密码" />
    <input type="button" @click="submit" value="登陆" />
  </div> -->
  <body>
      <div class="login-form">
            <h1>Change Password</h1>
            <div class="txtb">
                <input type="text" placeholder="Username" v-model="userName">
            </div>
            <div class="txtb">
                <input type="password" placeholder="Old Password" v-model="password">
            </div>
            <div class="txtb">
                <input type="password" placeholder="New Password" v-model="newPassword">
            </div>
            <input type="submit" class="logbtn" value="Submit" @click="submit">
            <input type="submit" class="returnbtn" value="Return Log" @click="returnBack">
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
      newPassword: '',
      error: ''
    }
  },
  methods: {
    submit () {
      console.log(this.userName, this.password, this.newPassword)
      if (!this.userName) {
        this.error = '请输入账号'
        return false
      }
      if (!this.password) {
        this.error = '请输入密码'
        return false
      }
      api.change({
        params: {
          userName: this.userName,
          password: this.password,
          newPassword: this.newPassword
        }
      }).then((res) => {
        if (res.data.status === 'success') {
          this.$router.push({name: 'login'})
        } else {
          this.error = res.data.msg
        }
      })
    },
    returnBack () {
      this.$router.push({name: 'login'})
    }
  }

}
</script>

<style scoped>
  @import '../assets/css/change.css';
</style>
