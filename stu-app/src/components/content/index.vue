<template>
<el-tabs v-model="activeName" @tab-click="handleClick">
<!-- eslint-disable-next-line vue/no-template-key -->
  <template v-for="item in nums" >
    <el-tab-pane :label="item.name" :name="item.index" :key="item.index">
      <m-form />
    </el-tab-pane>
  </template>
    <!-- <el-tab-pane label="数据库" name="1">
      <m-form />
    </el-tab-pane>
    <el-tab-pane label="数学实验" name="2">
      <m-form />
    </el-tab-pane>
    <el-tab-pane label="面向对象" name="3">
      <m-form />
    </el-tab-pane>
    <el-tab-pane label="软件工程" name="4">
      <m-form />
    </el-tab-pane> -->
  </el-tabs>
</template>
<script>
import MForm from './form'
export default {
  components: {
    MForm
  },
  data () {
    return {
      nums: [{name: '数据库', index: '1'}, {name: '数学实验', index: '2'}],
      activeName: '1'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log('hhhhh')
    }
  }
}
</script>
