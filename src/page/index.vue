<template>
  <div>
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <a @click="submit">首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a @click="load">学院</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/school' }" @click="load">学院</el-breadcrumb-item>
       <el-breadcrumb-item v-show="$store.state.last">{{ -->
        <!-- $store.state.class
      }}</el-breadcrumb-item> --> 
      <!-- <el-breadcrumb-item v-show="$store.state.last">{{
        $store.state.class == "教师" ? "课程" : "成员名单"
      }}</el-breadcrumb-item>
    </el-breadcrumb> --> 
    <!-- <m-school :data="school"/> -->
<el-row class="tac">
  <el-col :span="3">
    <el-menu
      default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      @select="handleSelect">
      <el-menu-item index="/admin/show" class="item1">
        <i class="el-icon-school"></i>
        <span slot="title">学院</span>
      </el-menu-item>
      <el-menu-item index="/admin/allteacher">
        <i class="el-icon-user-solid"></i>
        <span slot="title">老师</span>
      </el-menu-item>
      <el-menu-item index="/admin/allstudent">
        <i class="el-icon-user"></i>
        <span slot="title">学生</span>
      </el-menu-item>
      <el-menu-item index="/admin/allcourse">
        <i class="el-icon-collection"></i>
        <span slot="title">课程</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="1"></el-col>
  <el-col :span="20">
    <router-view></router-view>
  </el-col>
  </el-row>
  </div>
</template>
<script>
// import mBreadcrumb from '@/components/content/breadcrumb.vue'
// import mSchool from "@/components/content/allschool.vue";
// import mClass from "@/components/content/class.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    // mSchool,
    // mClass,
    // mBreadcrumb
  },
  methods: {
    // load() {
    //   this.$store.commit("setLast", false);
    //   this.$router.push({ name: "school" });
    // },
    // submit() {
    //   this.$store.commit("setLast", false);
    //   this.$router.push({ name: "index" });
    // },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>
<style scoped>
.el-breadcrumb {
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: 30px;
  font-size: 20px;
}
.el-menu-vertical-demo{
  height: 500px;
}
.item1{
  margin-top: 15px;
}
</style>