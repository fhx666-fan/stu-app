<template>
  <div>
    <el-page-header @back="goBack" content="班级详情"></el-page-header>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.sname.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="学号" prop="sid"> </el-table-column>
      <el-table-column label="姓名" prop="sname"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>

        <!-- 删除和编辑 -->
        <!-- <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            type="primary"
            >Edit</el-button
          >
          <el-dialog
            title="修改学生信息"
            :visible.sync="dialogVisible"
            center
            :width="maxWidth"
          >
            <el-form>
              <el-form-item label="修改学号" :label-width="formLabelWidth">
                <el-input v-model="nid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="修改姓名" :label-width="formLabelWidth">
                <el-input v-model="nname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="修改性别" :label-width="formLabelWidth">
                <el-select v-model="csex" placeholder="选择性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <div class="submit1-btn">
                <el-button @click="submit1">确定</el-button>
              </div>
            </el-form>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
          <el-dialog
            title="是否删除该内容?"
            :visible.sync="dialogTalkVisible"
            center
            :width="minWidth"
          >
            <div class="submit2-btn">
              <el-button @click="submit2">确定</el-button>
              <el-button @click="cancel">取消</el-button>
            </div>
          </el-dialog>
        </template> -->
      </el-table-column>
    </el-table>

    <!-- 添加学生 -->
    <!-- <div class="add-btn">
      <el-button @click="handleAdd">添加学生</el-button>
      <el-dialog
        title="添加课程"
        :visible.sync="dialogFormVisible"
        :width="maxWidth"
      >
        <el-form>
          <el-form-item label="学号" :label-width="formLabelWidth">
            <el-input v-model="nid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="nname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-select v-model="csex" placeholder="选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-button @click="submit">确定</el-button>
        </el-form>
      </el-dialog> -->
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
  <!-- </div> -->
</template>
<script>
// import api from '@/api/index.js'
export default {
  data() {
    return {
      tableData: [
        {
          sid: "1815200001",
          sname: "路霸",
          sex: "男",
        },
        {
          sid: "1815200025",
          sname: "麦克雷",
          sex: "男",
        },
        {
          sid: "1815200034",
          sname: "黑百合",
          sex: "女",
        },
        {
          sid: "1815200015",
          sname: "邓紫棋",
          sex: "女",
        },
        {
          sid: "1815200095",
          sname: "半藏",
          sex: "男",
        },
        {
          sid: "1815200045",
          sname: "源氏",
          sex: "男",
        },
      ],

      //记录学生变化
      sid: "",
      sname: "",
      sex: "",
      nid: "",
      nname: "",
      oid:'',
      csex: "",

      //对话框属性
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "100px",
      maxWidth: "500px",
      minWidth: "400px",
      dialogTalkVisible: false,
      index: "",
      dialogVisible: false,

      //翻页
      currentPage: 1, // 当前页码
      total: 24, // 总条数
      pageSize: 7, // 每页的数据条数
      value: false,
    };
  },
  created() {
    console.log(this.$route.query.cid);
    // this.$store.commit("setCid", this.$route.query.cid);
    // api.getStudentList({
    //   params:{
    //     cid : this.$route.query.cid,
    //   }
    // }).then((res)=>{
    //   this.tableData = res.data.student
    //   this.total = res.data.total
    // }).catch(error=>{
    //   this.alert1(error)
    // })
    this.handleCurrentChange(1)
  },
  mounted() {
    if (this.total < 7) {
      this.value = true;
      console.log(this.value);
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: "grade" });
    },
    alert1(msg){
      this.$message(msg);
    },

    //编辑
    handleEdit(index, row) {
      this.sid = row.sid;
      this.sname = row.sname;
      this.sex = row.sex;
      this.index = index;
      this.dialogVisible = true;
    },
    submit1() {
      if (this.nid) {
        this.tableData.splice(this.index, 1, {
          sid: this.nid,
          sname: this.sname,
          sex: this.sex,
        });
        this.nid = "";
      }
      if (this.nname) {
        this.tableData.splice(this.index, 1, {
          sid: this.sid,
          sname: this.nname,
          sex: this.sex,
        });
        this.nname = "";
      }
      if (this.csex) {
        this.tableData.splice(this.index, 1, {
          sid: this.sid,
          sname: this.sname,
          sex: this.csex,
        });
        this.csex = "";
      }
      this.sex = "";
      this.sname = "";
      this.sid = "";
      this.dialogVisible = false;
      // api.getChangeStu({
      //   params:{
      //     id:this.sid,
      //     nid:this.nid,
      //     nname:this.nname,
      //     nsex:this.nsex
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(res.data.currentPage)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //删除
    handleDelete(index, row) {
      console.log(index,row)
      this.oid = row.sid
      this.index = index;
      this.dialogTalkVisible = true;
    },
    cancel() {
      this.dialogTalkVisible = false;
    },
    submit2() {
      this.tableData.splice(this.index, 1);
      this.dialogTalkVisible = false;
      // api.getDeleteStu({
      //   params:{
      //     id:this.oid,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(1)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //新增学生
    handleAdd() {
      this.dialogFormVisible = true;
    },
    submit() {
      this.tableData.push({ sid: this.nid, sname: this.nname, sex: this.csex });
      this.nid = "";
      this.nname = "";
      this.csex = "";
      this.dialogFormVisible = false;
      // api.getAddStu({
      //   params:{
      //     id:this.sid,
      //     name:this.sanme,
      //     sex:this.sex
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(1)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //翻页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // this.changePage(val);
      // api.getStudentPage({
      //   params:{
      //     page : val
      //     cid : this.$route.query.cid
      //     sid : this.$store.state.sid
      //   }
      // }).then((res)=>{
      //   this.tableData = res.data.data
      //   this.currentPage = res.data.currentPage
      //   this.total = res.data.total
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    }
  },
};
</script>
<style scoped>
.add-btn {
  margin-top: 15px;
  text-align: center;
}
.submit1-btn {
  text-align: center;
}
.submit2-btn {
  text-align: center;
}
.el-dialog__title {
  text-align: center;
}
</style>