<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/GZHU.jpg" alt="" />
      <span>广州大学实验报告上传系统-学生端</span>
      <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu> -->
      <div class="inf">
          <span class="dongtai">欢迎 {{$store.state.userName}} 同学</span>
          <router-link :to="{name: 'change'}">
              <el-button>修改密码</el-button>
          </router-link>
          <router-link :to="{name: 'login'}">
              <el-button>注销账户</el-button>
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
//   data () {
//     return {
//       activeIndex: '1'
//     }
//   },
//   methods: {
//     handleSelect (key, keyPath) {
//       console.log(key, keyPath)
//     }
//   }
}
</script>

<style scoped>
.header{
    height: 250px;
    line-height: 70px;
    background-color:#fff;
}
.logo img{
    height: 50px;
    width: 50px;
    display: inline-block;
    margin:30px 75px 50px 75px;
    vertical-align: middle;
}
.logo span{
    margin-left: 25px;
        margin-top:30px ;
    font-size: 20px;
    color: #000;
}
.logo .dongtai{
    margin-right: 15px;
    font-size: 16px;
    color:#000;
}
.inf{
    float: right;
    margin-top:30px ;
    padding-right:30px ;
    margin-right: 25px;
}
a{
    color: #000;
    text-decoration: none;
}
</style>
