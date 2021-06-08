<template>
  <div>
    <!-- <el-tabs :tab-position="tabPosition" @tab-click="handleClick">
      <el-tab-pane label="课程">
        <m-course />
      </el-tab-pane>
      <el-tab-pane label="班级">
        <m-class :class1="grade" />
      </el-tab-pane>
    </el-tabs> -->
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <!-- <el-menu-item index="ad">首页</el-menu-item> -->
      <el-menu-item index="/admin/course">课程</el-menu-item>
      <el-menu-item index="/admin/grade">班级</el-menu-item>
    </el-menu>
    <div class="hello" v-if="isShow">欢迎进入学院内部，请选择查看课程或班级</div>
    <router-view></router-view>  
  </div>
  <!-- <el-tabs :tab-position="tabPosition" @tab-click="handleClick">
    <el-tab-pane label="教师">
      <m-teacher :teacher="teacher" />
    </el-tab-pane>
    <el-tab-pane label="班级">
      <m-class :class1="grade" />
    </el-tab-pane>
  </el-tabs> -->
</template>
<script>
import mCourse from "./course";
import mClass from "./grade";
export default {
  data() {
    return {
      tabPosition: "top",
      // teacher: [
      //   {
      //     data: "麦红",
      //     id: 552,
      //   },
      //   {
      //     data: "陈蓉西",
      //     id: 568,
      //   },
      //   {
      //     data: "王光武",
      //     id: 562,
      //   },
      //   {
      //     data: "蔡云鹭",
      //     id: 592,
      //   },
      //   {
      //     data: "终于并",
      //     id: 555,
      //   },
      //   {
      //     data: "李灏",
      //     id: 651,
      //   },
      //   {
      //     data: "林环节",
      //     id: 598,
      //   },
      //   {
      //     data: "樊浩轩",
      //     id: 561,
      //   },
      //   {
      //     data: "陈建熙",
      //     id: 553,
      //   },
      //   {
      //     data: "彩虹",
      //     id: 565,
      //   },
      // ],
      class1: [],
      total: 25,
      isShow: false,
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
    },
    alert1(msg){
      this.$message(msg);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.isShow = false
      }
    // changePage(page){
    //   api.getTeacherPage({
    //     params:{
    //       num:page
    //     }
    //   }).then((res)=>{
    //     this.teacher = res.data.data
    //     this.currentPage = res.data.currentPage
    //     this.total = res.data.total
    //   }).catch(error=>{
    //     this.alert1(error)
    //   })
    // }
  },
  created() {
    console.log(this.$route.query.tid);
    if(this.$route.query.tid){
      this.isShow = true
    }
    this.$store.commit("setSid", this.$route.query.tid);
    // api.getAll({
    //   params:{sid:this.$route.query.tid}
    // }).then((res)=>{
    //   this.teacher = res.data.teacher
    //   this.total = res.data.total
    //   this.grade = res.data.grade
    // }).catch(error=>{
    //   alert(error)
    // })
  },
  components: {
    mCourse,
    mClass,
  },
};
</script>

<style scoped>
.hello{
  font-size: 30px;
  margin:15px;
}
</style>
