<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      广州大学实验报告上传系统 DESIGNED BY 638 TEAM
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from '@/components/header/index.vue'
// import myContent from '@/page/index.vue'
export default {
  components: {
    myHeader,
    // myContent
  }
}
</script>
<style scoped>
.el-header {
  padding: 0px;
  height: 80px !important
}
.el-footer{
  text-align: center;
  margin-bottom: -30px;
  font-size:12px;
  color: #999999
}
</style>
