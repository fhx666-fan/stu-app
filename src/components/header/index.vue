<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/GZHU.jpg" alt="" />
      <span>广州大学实验报告上传系统-管理员端</span>
      <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu> -->
      <div class="inf">
        <router-link :to="{ name: 'login' }">
          <el-button>注销账户</el-button>
        </router-link>
        <el-button @click="dialogFormVisible = true">发布公告</el-button>
        <el-dialog title="发布公告" :visible.sync="dialogFormVisible">
          <message/>
        </el-dialog>
        <el-button @click="dialogTableVisible = true">查看公告</el-button>
        <el-dialog title="查看公告" :visible.sync="dialogTableVisible">
          <takemsg :datas="tableData" />
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
import Message from './message'
import Takemsg from './takemsg'
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogTableVisible: false,
      formLabelWidth: "80px",
      tableData: [
        {
          title: "2016-05-02",
          content: "王小suhdfbsfnsdnfsndfnksndfsdifnsndfsjndfsnfinsdnfdsnsdnfisjndfsdmfijsindfnsdin虎",
          time:"2016-05-02",
          id:"001"
        },
        {
          title: "2016-05-02",
          content: "王小虎",
          time:"2016-05-02",
          id:"002"
        },
        {
          title: "2016-05-02",
          content: "王小虎",
          time:"2016-05-02",
          id:"003"
        },
      ],
    };
  },
  components:{
    Message,
    Takemsg
  },
  created(){
    // api.getTextList().then((res)=>{
    //   this.tableData = res.data.data
    // })
  }
};
</script>

<style scoped>
.header {
  height: 250px;
  line-height: 70px;
  background-color: #fff;
}
.logo img {
  height: 50px;
  width: 50px;
  display: inline-block;
  margin: 30px 75px 50px 75px;
  vertical-align: middle;
}
.logo span {
  margin-left: 25px;
  margin-top: 30px;
  font-size: 20px;
  color: #000;
}
.inf {
  float: right;
  margin-top: 30px;
  padding-right: 30px;
  margin-right: 25px;
}
a {
  color: #000;
  text-decoration: none;
}
</style>