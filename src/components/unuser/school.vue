<template>
  <div>
    <div class="header">全部学院</div>
    <el-row :gutter="20">
      <el-col :span="3" v-for="(item, index) in data" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <div class="icon-wrap">
            <i class="el-icon-school"></i>
          </div>
            <span>学院名：{{ data[index].school }}</span>
            <span>学院id：{{ data[index].sid }}</span>
            <el-button
              type="text"
              class="button"
              @click="load(data[index].sid)"
              >查看详情</el-button
            >
        </el-card>
      </el-col>
    </el-row>
    <div class="block" style="margin-top: 15px">
      <el-pagination
        align="center"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- <el-row>
      <el-col
        :span="4"
        v-for="(o, index) in 4"
        :key="o"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="@/assets/GZHU.jpg"
            class="image"
          />
          <div style="padding: 14px">
            <span>学院</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      data: [
        { school: "学校1", sid: "123" },
        { school: "学校2", sid: "124" },
        { school: "学校3", sid: "125" },
        { school: "学校4", sid: "126" },
        { school: "学校5", sid: "127" },
        { school: "学校6", sid: "128" },
        { school: "学校7", sid: "194" },
        { school: "学校8", sid: "185" },
        { school: "学校9", sid: "176" },
        { school: "学校10", sid: "120" },
        { school: "学校11", sid: "154" },
        { school: "学校12", sid: "112" },
      ],
      currentPage: 1, // 当前页码
      total: 24, // 总条数
      pageSize: 12, // 每页的数据条数
      schoolList: [],
    };
  },
  mounted() {
    // api.getSchoolPage({
    //   params:{
    //     num:this.currentPage
    //   }
    // }).then((res)=>{
    //   this.schoolList = res.data.data
    //   this.total = res.data.total
    //   this.currentPage = res.data.currentPage
    // }).catch(error=>{
    //   alert(error)
    // })
  },
  methods: {
    load(data) {
      console.log(data);
      this.$store.commit("setLast", true);
      this.$router.push({ path: "school" ,query: {sid : data}});
      // this.$router.push({ path: '/admin/shcool',query: {id: 1, name: 'zhangsan'}})
    },
    alert1(msg){
      this.$message(msg);
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    //   this.currentPage = 1;
    //   this.pageSize = val;
    // },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      //   api.getSchoolPage({
      //   params:{
      //     num:this.currentPage
      //   }
      // }).then((res)=>{
      //   this.schoolList = res.data.data
      //   this.total = res.data.total
      //   this.currentPage = res.data.currentPage
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
  },
};
</script>
<style>
/* .time {
  font-size: 13px;
  color: #999;
} */

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

/* .button {
  padding: 0;
  float: right;
} */

/* .image {
  width: 100%;
  display: block;
} */

/* .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.block {
  text-align: center;
}
.icon-wrap {
  font-size: 80px;
  text-align: center;
}*/
</style> 