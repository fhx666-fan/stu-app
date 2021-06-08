<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main>
        <my-content />
    </el-main>
    <el-footer>
      广州大学实验报告上传系统 DESIGNED BY 638 TEAM
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from '@/components/header/index.vue'
import myContent from '@/components/content/index.vue'
export default {
  components: {
    myHeader,
    myContent
  }
}
</script>
<style>
.el-header {
  padding: 0px;
  height: 80px !important
}
.el-aside {
  display:-webkit-inline-flex;
  background-color: rgb(84, 92, 100);
}
.el-footer{
  position: absolute;
  bottom: 0;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  margin-bottom: -30px;
  font-size:12px;
  color: #999999
}
</style>
