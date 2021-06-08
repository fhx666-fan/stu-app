<template>
  <div>
    <div class="header">All Student</div>
    <el-table
      :data="
        tableData
      "
      style="width: 100%"
    >
      <el-table-column label="学号" prop="sid"> </el-table-column>
      <el-table-column label="姓名" prop="sname"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column label="联系方式" prop="tel"> </el-table-column>
      <el-table-column label="所属学院" prop="school"> </el-table-column>
      <el-table-column label="所属班级" prop="class"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索">
            <el-button slot="append" icon="el-icon-search" size="mini" @click="search111"></el-button>
          </el-input>
        </template>

        <!-- 删除和编辑 -->
        <template slot-scope="scope">
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
              <div v-if="active1 == 0">
                <el-form-item label="修改姓名" :label-width="formLabelWidth">
                  <el-input v-model="nname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="修改联系方式" :label-width="formLabelWidth">
                  <el-input v-model="ntel" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="修改性别" :label-width="formLabelWidth">
                  <el-select v-model="csex" placeholder="选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="学院" :label-width="formLabelWidth">
                  <el-select v-model="school" placeholder="选择学院">
                    <div v-for="(item, index) in schoolList" :key="index">
                      <el-option :label="item.school" :value="item.id">
                      </el-option>
                    </div>
                  </el-select>
                </el-form-item>
              </div>

              <el-form-item
                label="年级"
                :label-width="formLabelWidth"
                v-if="active1 == 1"
              >
                <el-select v-model="grade" placeholder="选择年级">
                  <div v-for="(item1, index1) in gradeList" :key="index1">
                    <el-option :label="item1.grade" :value="item1.grade">
                    </el-option>
                  </div>
                </el-select>
              </el-form-item>
              <el-form-item
                label="班级"
                :label-width="formLabelWidth"
                v-if="active1 == 2"
              >
                <el-select v-model="class1" placeholder="选择班级">
                  <div v-for="(item2, index2) in classList" :key="index2">
                    <el-option :label="item2.class" :value="item2.id">
                    </el-option>
                  </div>
                </el-select>
              </el-form-item>
              <el-steps :active="active1" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
              </el-steps>
              <div class="submit1-btn">
                <el-button @click="prev1" :disabled="active1 == 0"
                  >上一步</el-button
                >
                <el-button @click="submit1">下一步</el-button>
                <!-- <el-button @click="prev1" :disabled="active == 0">上一步</el-button> -->
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
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加学生 -->
    <div class="add-btn">
      <el-button @click="handleAdd">添加学生</el-button>
      <el-dialog
        title="添加学生"
        :visible.sync="dialogFormVisible"
        :width="maxWidth"
      >
        <el-form>
          <div v-if="active == 0">
            <el-form-item label="学号" :label-width="formLabelWidth">
              <el-input v-model="nid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="nname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" :label-width="formLabelWidth">
              <el-input v-model="tel" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-select v-model="csex" placeholder="选择性别">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学院" :label-width="formLabelWidth">
              <el-select v-model="school" placeholder="选择学院">
                <div v-for="(item, index) in schoolList" :key="index">
                  <el-option :label="item.school" :value="item.id"> </el-option>
                </div>
              </el-select>
            </el-form-item>
          </div>
          <!-- <div v-for="(item, index) in ClassList" :key="index" > -->
          <el-form-item
            label="年级"
            :label-width="formLabelWidth"
            v-if="active == 1"
          >
            <el-select v-model="grade" placeholder="选择年级">
              <div v-for="(item1, index1) in gradeList" :key="index1">
                <el-option :label="item1.grade" :value="item1.grade">
                </el-option>
              </div>
            </el-select>
          </el-form-item>
          <el-form-item
            label="班级"
            :label-width="formLabelWidth"
            v-if="active == 2"
          >
            <el-select v-model="class1" placeholder="选择班级">
              <div v-for="(item2, index2) in classList" :key="index2">
                <el-option :label="item2.class" :value="item2.id"> </el-option>
              </div>
            </el-select>
          </el-form-item>
          <!-- </div> -->

          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
          <el-button @click="prev" :disabled="active == 0">上一步</el-button>
          <el-button @click="next">下一步</el-button>
        </el-form>
      </el-dialog>
      <el-button @click="dialogFileVisible = true" icon="el-icon-folder-add"
          >批量添加</el-button
        >
        <el-dialog
          title="批量添加学生"
          :visible.sync="dialogFileVisible"
          :width="dialogWidth"
        >
          <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            accept=".xls"
            :limit="1"
            :on-preview="handlePreview"
            :http-request="uploadFile"
            :on-remove="handleRemove"
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
            <div slot="tip" class="el-upload__tip">
              只能上传.xls文件
            </div>
          </el-upload>
        </el-dialog>
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
import api from '@/api/index.js'
export default {
  data() {
    return {
      tableData: [
        {
          sid: "1815200001",
          sname: "路霸",
          sex: "男",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200025",
          sname: "麦克雷",
          sex: "男",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200034",
          sname: "黑百合",
          sex: "女",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200015",
          sname: "邓紫棋",
          sex: "女",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200095",
          sname: "半藏",
          sex: "男",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200045",
          sname: "源氏",
          sex: "男",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200111",
          sname: "小美",
          sex: "女",
          school: "数院",
          class: "信计181",
        },
        {
          sid: "1815200120",
          sname: "铁拳",
          sex: "男",
          school: "数院",
          class: "信计181",
        },
      ],
      active: 0,
      active1: 0,
      schoolList: [
        {
          school: "数学学院",
          id: "15",
        },
        {
          school: "计算机学院",
          id: "18",
        },
        {
          school: "物理学院",
          id: "11",
        },
        {
          school: "机电学院",
          id: "12",
        },
      ],
      gradeList: [
        {
          grade: "18级",
        },
        {
          grade: "19级",
        },
        {
          grade: "20级",
        },
        {
          grade: "21级",
        },
      ],
      classList: [
        {
          class: "信计181",
          id: "001",
        },
        {
          class: "信计182",
          id: "002",
        },
        {
          class: "信计183",
          id: "003",
        },
        {
          class: "信计184",
          id: "004",
        },
      ],
      //记录学生变化
      sid: "",
      sname: "",
      sex: "",
      tel:"",
      ntel:"",
      nid: "",
      nname: "",
      oid: "",
      csex: "",
      school: "",
      class1: "",
      class: "",
      grade: "",
      fileList:[],

      //对话框属性
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "100px",
      maxWidth: "500px",
      minWidth: "400px",
      dialogWidth: "400px",
      dialogTalkVisible: false,
      dialogFileVisible: false,
      index: "",
      dialogVisible: false,

      //翻页
      currentPage: 1, // 当前页码
      total: 8, // 总条数
      pageSize: 7, // 每页的数据条数
      value: false,
    };
  },
  created() {
    console.log(this.$route.query.cid);
    this.handleCurrentChange(1);
    // api.getSchoolList().then(res=>{
    //   this.schoolList = res.data.data
    // })
  },
  mounted() {
    // console.log(this.$store.state.sid)
    if (this.total < 7) {
      this.value = true;
      console.log(this.value);
    }
  },
  methods: {
    alert1(msg) {
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
    prev1() {
      this.active1--;
    },
    submit1() {
      // this.tableData.splice(this.index, 1, {
      //   sid: this.nid,
      //   sname: this.nname,
      //   sex: this.csex,
      // });
      // this.sex = "";
      // this.sname = "";
      // this.sid = "";
      // this.dialogVisible = false;
      if (this.active1 == 0) {
        // api.getChangeStu0({
        //   params:{
        //     id:this.sid,
        //     name:this.nname,
        //     tel:this.ntel,
        //     sex:this.csex,
        //     school:this.school
        //   }
        // }).then(res=>{
        //   this.gradeList = res.data.data
        //   this.nname = ""
        // })
      }
      if (this.active1 == 1) {
        // api.getChangeStu1({
        //   params:{
        //     grade:this.grade
        //   }
        // }).then(res=>{
        //   this.classList = res.data.data
        // })
      }
      if (this.active1 == 2) {
        // api.getChangeStu2({
        //   params:{
        //     class:this.class
        //   }
        // }).then(res=>{
        //   this.alert1(res.data.msg)
        //   this.handleCurrentChange(this.currentPage)
        // }).catch(error=>{
        //   this.alert1(error)
        // })
      }
      if (this.active1++ > 2) {
        this.active = 0;
        this.tableData.splice(this.index, 1, {
          sid: this.nid,
          sname: this.nname,
          sex: this.csex,
          school:this.school,
          grade:this.grade,
          class:this.class1
        });
        this.nid = "";
        this.nname = "";
        this.csex = "";
        this.school = "";
        this.class = "";
        // this.handleCurrentChange(1);
        this.dialogVisible = false;
      }
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
      console.log(index, row);
      this.oid = row.sid;
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
      //   this.handleCurrentChange(this.currentPage)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //新增学生
    handleAdd() {
      this.dialogFormVisible = true;
    },
    prev() {
      this.active--;
    },
        submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      uploadFile(file){
      console.log(file.file);
      const params = new FormData()
      params.append('file', file.file)
      axios
        .post('http://localhost:8080/admin/studentSubmitUpload', params, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(res => {
          this.alert1(res.data.msg)
          this.handleCurrentChange(1)
        }).catch(error => {
          this.alert1(error)
        })
      },
    next() {
      console.log(this.active);
      if (this.active == 0) {
        // api.getAddStu0({
        //   params:{
        //     id:this.nid,
        //     name:this.nname,
        //     tel:this.tel,
        //     sex:this.csex,
        //     school:this.school
        //   }
        // }).then(res=>{
        //   this.gradeList = res.data.data
        //   this.nid = ""
        //   this.nname = ""
        // })
      }
      if (this.active == 1) {
        // api.getAddStu1({
        //   params:{
        //     grade:this.grade
        //   }
        // }).then(res=>{
        //   this.classList = res.data.data
        // })
      }
      if (this.active == 2) {
        // api.getAddStu2({
        //   params:{
        //     class:this.class
        //   }
        // }).then(res=>{
        //   this.alert1(res.data.msg)
        //   this.handleCurrentChange(1)
        // }).catch(error=>{
        //   this.alert1(error)
        // })
      }
      if (this.active++ > 2) {
        this.active = 0;
        this.tableData.push({
          sid: this.nid,
          sname: this.nname,
          sex: this.csex,
          school:this.school,
          class:this.class1
        });
        this.nid = "";
        this.nname = "";
        this.csex = "";
        this.school = "";
        this.class = "";
        // this.handleCurrentChange(1);
        this.dialogFormVisible = false;
      }
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
      // api.getAllStudentPage({
      //   params:{
      //     page : val
      //   }
      // }).then((res)=>{
      //   this.tableData = res.data.data
      //   this.currentPage = res.data.currentPage
      //   this.total = res.data.total
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
    search111(){
      if(this.search){
        console.log("sssss")
      }else{
        console.log("lllll")
      }
    },
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
.header {
  margin-left: 15px;
  font-size: 20px;
  text-align: center;
}
</style>