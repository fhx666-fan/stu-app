<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, index) in tableData" :key="index">
        <div class="card">
          <div @click="submit0(item, index)">
            <div class="icon-wrap">
              <i class="el-icon-collection"></i>
            </div>
            <div class="teacher-name">
              <span v-show="isShow2">{{ item.cid }}</span>
              <span>{{ item.course }}</span>
            </div>
          </div>
          <div class="icon-top" v-show="isShow">
            <!-- <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click.stop="open(item, index)"
            ></el-button>
            <el-dialog title="修改老师信息" :visible.sync="dialogVisible">
              <el-form>
                <el-form-item
                  label="修改老师编号"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="nid" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                  label="修改老师姓名"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="namec" autocomplete="off"></el-input>
                </el-form-item>
                <el-button @click.stop="submit1">确定</el-button>
              </el-form> -->
            <!-- <div>
                <el-checkbox
                  v-model="checked1"
                  label="备选项1"
                  border
                ></el-checkbox>
                <el-checkbox
                  v-model="checked2"
                  label="备选项2"
                  border
                ></el-checkbox>
              </div>
              <el-button @click.stop="submit1">确定</el-button>
            </el-dialog> -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click.stop="deleted(item, index)"
              >删除</el-button
            >
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
      <el-dialog title="添加课程" :visible.sync="dialogFormVisible">
        <!-- <el-form>
          <el-form-item label="老师编号" :label-width="formLabelWidth">
            <el-input v-model="id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="老师名称" :label-width="formLabelWidth">
            <el-input v-model="name" autocomplete="off"></el-input>
          </el-form-item>
          <el-button @click="submit">确定</el-button>
        </el-form> -->
        <div>
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
          <div style="margin: 15px 0"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="(city,index) in tableData1" :label="city.cid" :key="index">{{
              city.course
            }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button @click="submit">确定</el-button>
      </el-dialog>
      <el-button @click="isShow = !isShow">删除</el-button>
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
</template>
<script>
// import api from '@/api/index.js'
export default {
  data() {
    return {
      tableData: [
        {
          cid: "553",
          course: "数据库",
        },
        {
          cid: "568",
          course: "数学实验",
        },
        {
          cid: "593",
          course: "数学模型",
        },
        {
          cid: "563",
          course: "面向对象",
        },
      ],
      tableData1: [
        {
          cid: "553",
          course: "数据库",
        },
        {
          cid: "568",
          course: "数学实验",
        },
        {
          cid: "593",
          course: "数学模型",
        },
        {
          cid: "563",
          course: "面向对象",
        },
        {
          cid: "561",
          course: "面向对象1",
        },
      ],
      cids:['553','568','593','563','561'],
      name: "",
      id: "",
      nid: "",
      oid: "",
      oname: "",
      isShow: false,
      isShow2:false,
      num: "",
      num2: "",
      namec: "",
      checked1: "",
      checked2: "",
      checkAll: false,
      checkedCities: [],
      // cities: ['上海', '北京', '广州', '深圳'],
      isIndeterminate: true,
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
      value: false,
    };
  },
  created(){
    this.handleCurrentChange(1);
    // api.getSchoolCourse({
    //   params:{
    //     sid: this.$store.sid
    //   }
    // }).then(res=>{
    //   this.tableData1 = res.data.data
    //   res.data.data.foreach(item=>{
    //   this.cids.push(item.cid)
    // })
    // }).catch(error=>{
    //   this.alert1(error)
    // })
  },
  mounted() {
    // console.log(this.$store.state.sid)
    if (this.total < 12) {
      this.value = true;
      console.log(this.value);
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    alert1(msg) {
      this.$message(msg);
    },

    //添加
    submit() {
      this.dialogFormVisible = false;
      this.tableData.push({ course: this.name, cid: this.id });
      // api.getAddCourse1({
      //   params:{
      //      id : this.checkedCities
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(1)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //编辑
    // submit1() {
    //   this.teacher.splice(this.num, 1, { data: this.namec, id: this.nid });
    //   this.dialogVisible = false;
    //   // api.getChangeTeacher({
    //   //   params:{
    //   //     tid : this.oid,
    //   //     ntid : this.nid,
    //   //     ntname: this.namec
    //   //   }
    //   // }).then((res)=>{
    //   //   this.alert1(res.data.msg)
    //   //   this.changePage(this.currentPage)
    //   // }).catch(error=>{
    //   //   this.alert1(error)
    //   // })
    // },
    // open(item, index) {
    //   console.log(item, index);
    //   this.num = index;
    //   this.oid = item.id;
    //   this.oname = item.data;
    //   this.dialogVisible = true;
    // },

    //删除课程
    deleted(item, index) {
      console.log(item, index);
      this.num2 = index;
      this.oid = item.id;
      this.oname = item.data;
      this.dialogTalkVisible = true;
    },
    submit2() {
      this.tableData.splice(this.num2, 1);
      this.dialogTalkVisible = false;
      // api.getDeleteCourse1({
      //   params:{
      //     id : this.oid,
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
    // submit0(item, index) {
    //   console.log(item, index);
    //   this.$router.push({ name: "course", query: { tid: item.id } });
    // api.getEnterTeacher({
    //   params:{
    //     tid:item.id,
    //     tname:item.data,
    //   }
    // }).then((res)=>{
    //   this.alert1(res.data.msg)
    //   this.$router.push({ name: "course" ,query: {tid : item.id}});
    // }).catch(error=>{
    //   this.alert1(error)
    // })
    // },

    // 翻页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // this.changePage(val);
      // api.getCoursePage({
      //   params:{
      //     page : val
      //     sid : this.$store.state.sid
      //   }
      // }).then((res)=>{
      //   this.tableData = res.data.data
      //   this.currentPage = res.data.currentPage
      //   this.total = res.data.total
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
    handleCheckAllChange(val) {
        this.checkedCities = val ? this.cids : [];
        console.log(this.tableData[0].cid)
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        console.log(this.checkedCities)
        this.checkAll = checkedCount === this.tableData.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableData.length;
      }
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
span {
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
</style>