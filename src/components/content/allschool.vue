<template>
  <div>
    <div class="header">All School</div>
    <div>
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, index) in tableData" :key="index">
        <div class="card" >
          <div @click="submit0(item, index)">
            <div class="icon-wrap">
              <i class="el-icon-school"></i>
            </div>
            <div class="teacher-name">
              <span class="hhh1" v-show="isShow2">{{ item.sid }}</span>
              <span class="hhh1">{{ item.school }}</span>
            </div>
          </div>
          <div class="icon-top" v-show="isShow">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click.stop="open(item, index)"
            ></el-button>
            <el-dialog title="修改学院信息" :visible.sync="dialogVisible" :width="dialogWidth">
              <el-form>
                <el-form-item
                  label="修改学院名"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="namec" autocomplete="off"></el-input>
                </el-form-item>
                <el-button @click.stop="submit1">确定</el-button>
              </el-form>
            </el-dialog>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click.stop="deleted(item, index)"
            ></el-button>
            <el-dialog
              title="是否删除该内容?"
              :visible.sync="dialogTalkVisible"
              :width="dialogWidth"
            >
              <el-button @click.stop="submit2">确定</el-button>
              <el-button @click.stop="cancel">取消</el-button>
            </el-dialog>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="footer">
      <el-button
        @click="dialogFormVisible = true"
        icon="el-icon-circle-plus-outline"
        >添加</el-button
      >
      <el-dialog title="添加学院" :visible.sync="dialogFormVisible" :width="dialogWidth">
        <el-form>
          <el-form-item label="学院名" :label-width="formLabelWidth">
            <el-input v-model="name" autocomplete="off"></el-input>
          </el-form-item>
          <el-button @click="submit">确定</el-button>
        </el-form>
      </el-dialog>
      <el-button @click="isShow = !isShow">删除和修改</el-button>
    </div>
    <div class="block" style="margin-top: 15px">
      <el-pagination
        align="center"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :hide-on-single-page="value"
        layout="total, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
    <!-- <el-row :gutter="20">
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
    </div> -->
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
      tableData: [
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
      name: "",
      id: "",
      nid: "",
      oid:'',
      oname:'',
      isShow: false,
      isShow2:false,
      num: "",
      num2: "",
      namec: "",
      //对话框属性
      dialogVisible: false,
      visible: false,
      dialogFormVisible: false,
      dialogTalkVisible: false,
      formLabelWidth: "100px",
      dialogWidth: "400px",
      // isDestroy:true,
      //翻页
      currentPage: 1, // 当前页码
      total: 24, // 总条数
      pageSize: 12, // 每页的数据条数
      value:false,
    };
  },
  created() {
    this.handleCurrentChange(1)
  },
  mounted() {
    if (this.total < 12) {
      this.value = true;
      console.log(this.value);
    }
  },
  methods: {
    alert1(msg){
      this.$message(msg);
    },

    //添加
    submit() {
      this.dialogFormVisible = false;
      this.tableData.push({ school: this.name, sid: this.id });
      // api.getAddSchool({
      //   params:{
      //     school : this.name
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(1)
      //   this.name = ""
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //编辑
    submit1() {
      this.tableData.splice(this.num, 1, { school: this.namec, id: this.nid });
      this.dialogVisible = false;
      // api.getChangeSchool({
      //   params:{
      //     sid : this.oid,
      //     nschool: this.namec
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(this.currentPage)
      //   this.namec = ""
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
    open(item, index) {
      console.log(item, index);
      this.num = index;
      this.oid = item.sid;
      this.oname = item.school
      this.dialogVisible = true;
    },

    //删除老师
    deleted(item, index) {
      console.log(item, index);
      this.num2 = index;
      this.oid = item.sid;
      this.oname = item.school
      this.dialogTalkVisible = true;
    },
    submit2() {
      this.tableData.splice(this.num2, 1);
      this.dialogTalkVisible = false;
      // api.getDeleteTeacher({
      //   params:{
      //     sid : this.oid,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(1)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
    cancel() {
      this.dialogTalkVisible = false;
    },

    // 进入内部
    submit0(item, index) {
      console.log(item, index);
      this.$router.push({ path: "school" ,query: {tid : item.sid}});
      // api.getEnterSchool({
      //   params:{
      //     sid:item.sid,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.$router.push({ path: "school" ,query: {tid : item.sid}});
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      //   api.getSchoolPage({
      //   params:{
      //     page:this.currentPage
      //   }
      // }).then((res)=>{
      //   this.tableData = res.data.data
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
.header {
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
}
.card {
  cursor: pointer;
}
.hhh1 {
  display: block;
}
.footer {
  margin-top: 20px;
  text-align: center;
}
.icon-top {
  font-size: 15px;
  text-align: center;
}
.icon-wrap {
  font-size: 80px;
  text-align: center;
}
.teacher-name {
  text-align: center;
}
/* .time {
  font-size: 13px;
  color: #999;
} */

/* .bottom {
  margin-top: 13px;
  line-height: 12px;
} */

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