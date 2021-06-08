<template>
  <div>
    <div class="header">All Course</div>
    <div>
      <el-row :gutter="20">
        <el-col :span="4" v-for="(item, index) in tableData" :key="index">
          <div class="card">
            <div>
              <div class="icon-wrap">
                <i class="el-icon-collection"></i>
              </div>
              <div class="teacher-name">
                <span v-show="isShow2">{{ item.cid }}</span>
                <span>{{ item.course }}</span>
              </div>
            </div>
            <div class="icon-top" v-show="isShow">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="open(item, index)"
              ></el-button>
              <el-dialog
                title="修改课程信息"
                :visible.sync="dialogVisible"
                :width="dialogWidth"
              >
                <el-form>
                  <el-form-item
                    label="修改课程姓名"
                    :label-width="formLabelWidth"
                  >
                    <el-input v-model="namec" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-button @click="submit1">确定</el-button>
                </el-form>
              </el-dialog>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="deleted(item, index)"
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
        <el-dialog
          title="添加课程"
          :visible.sync="dialogFormVisible"
          :width="dialogWidth"
        >
          <el-form>
            <el-form-item label="课程名称" :label-width="formLabelWidth">
              <el-input v-model="name" autocomplete="off"></el-input>
            </el-form-item>
            <el-button @click="submit">确定</el-button>
          </el-form>
        </el-dialog>
        <el-button @click="dialogFileVisible = true" icon="el-icon-folder-add"
          >批量添加</el-button
        >
        <el-dialog
          title="批量添加课程"
          :visible.sync="dialogFileVisible"
          :width="dialogWidth"
        >
          <el-form>
            <el-upload
              class="upload-demo"
              ref="upload"
              action=""
              accept=".xls"
              :limit="1"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :http-request="uploadFile"
              :file-list="fileList"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选取文件</el-button
              >
              <el-button
                style="margin-left: 10px"
                size="small"
                type="success"
                @click="submitUpload"
                >上传到服务器</el-button
              >
              <div slot="tip" class="el-upload__tip">只能上传.xls文件</div>
            </el-upload>
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
  </div>
</template>
<script>
import api from '@/api/index.js'
import axios from 'axios'
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
        {
          cid: "522",
          course: "英语",
        },
        {
          cid: "511",
          course: "数学",
        },
        {
          cid: "554",
          course: "语文",
        },
        {
          cid: "501",
          course: "化学",
        },
        {
          cid: "500",
          course: "物理",
        },
      ],
      name: "",
      id: "",
      nid: "",
      oid: "",
      oname: "",
      isShow: false,
      isShow2 :false,
      activeNames: ["1"],
      num: "",
      num111:"",
      name111:"",
      num2: "",
      namec: "",
      fileList: [],
      //对话框属性
      dialogVisible: false,
      visible: false,
      dialogFormVisible: false,
      dialogTalkVisible: false,
      dialogFileVisible: false,
      formLabelWidth: "100px",
      dialogWidth: "400px",
      // isDestroy:true,
      //翻页
      currentPage: 1, // 当前页码
      total: 10, // 总条数
      pageSize: 12, // 每页的数据条数
      value: false,
    };
  },
  created(){
    this.handleCurrentChange(1);
  },
  mounted() {
    if (this.total < 12) {
      this.value = true;
      console.log(this.value);
    }
  },
  methods: {
    // handleChange(val) {
    //   console.log(val);
    // },
    alert1(msg) {
      this.$message(msg);
    },

    //添加
    submit() {
      this.dialogFormVisible = false;
      // console.log(this.id)
      // this.tableData.push({ course: this.name, cid: this.id });
      api.getAddAllCourse({
        params:{
          name : this.name
        }
      }).then((res)=>{
        this.alert1(res.data.msg)
        this.handleCurrentChange(1)
        this.name = ""
      }).catch(error=>{
        this.alert1(error)
      })
      // this.name = ""
    },
    submitUpload() {
      this.$refs.upload.submit();
      this.dialogFileVisible = false;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadFile(file) {
      console.log(file.file,this.num111,this.name111);
      const params = new FormData()
      params.append('file', file.file)
      axios
        .post('http://localhost:8080/admin/courseSubmitUpload', params, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(res => {
          this.alert1(res.data.msg)
          this.handleCurrentChange(1)
        }).catch(error => {
          this.alert1(error)
        })
      // api.submitUpload({
      //   params: {
      //     nums: this.num, // 学号
      //     name: this.name,
      //     cid: this.$store.state.cid,
      //     eid: this.$store.state.eid,
      //     fileList: file
      //   }
      // }, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }).then((res) => {
      //   if (res.data.status === 'success') {
      //     alert(res.data.msg)
      //   } else {
      //     alert(res.data.msg)
      //   }
      // })
    },

    //编辑
    submit1() {
      console.log(this.oid)
      this.tableData.splice(this.num, 1, { course: this.namec, cid: this.nid });
      this.dialogVisible = false;
      this.namec = ""
      // api.getChangeCourse({
      //   params:{
      //     id : this.oid,
      //     nname: this.namec
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
      this.oid = item.cid;
      this.oname = item.course;
      this.dialogVisible = true;
    },

    //删除课程
    deleted(item, index) {
      console.log(item, index);
      this.num2 = index;
      this.oid = item.cid;
      this.oname = item.course;
      this.dialogTalkVisible = true;
    },
    submit2() {
      // this.tableData.splice(this.num2, 1);
      
      // api.getDeleteCourse({
      //   params:{
      //     id : this.oid,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(this.currentPage)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
      this.dialogTalkVisible = false;
    },
    cancel() {
      this.dialogTalkVisible = false;
    },

    // 进入内部
    // submit0(item, index) {
    //   console.log(item, index);
    //   this.$router.push({ name: "course", query: { tid: item.id } });
    //   // api.getEnterTeacher({
    //   //   params:{
    //   //     tid:item.id,
    //   //     tname:item.data,
    //   //   }
    //   // }).then((res)=>{
    //   //   this.alert1(res.data.msg)
    //   //   this.$router.push({ name: "course" ,query: {tid : item.id}});
    //   // }).catch(error=>{
    //   //   this.alert1(error)
    //   // })
    // },

    // 翻页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // this.changePage(val);
    //   api.getAllCoursePage({
    //       page : val
    //   }).then((res)=>{
    //     this.tableData = res.data.course
    //     this.currentPage = res.data.currentPage
    //     this.total = res.data.total
    //   }).catch(error=>{
    //     this.alert1(error)
    //   })
    },
  },
}
</script>
<style scoped>
.header {
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
}
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