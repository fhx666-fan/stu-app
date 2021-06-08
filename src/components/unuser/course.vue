<template>
  <div>
    <el-page-header @back="goBack" content="教师详情页面"></el-page-header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="课程编号" width="100" prop="cid">
      </el-table-column>
      <el-table-column label="课程名" width="200" prop="course">
      </el-table-column>
      <el-table-column label="授课班级" width="1000">
        <template slot-scope="scope">
          <el-tag
            size="medium"
            v-for="(tag,index) in scope.row.class"
            :key="tag"
            closable
            @close="handleClose(tag, scope.$index)"
            @click="changeTag(tag, scope.$index , index)"
            >{{ tag }}</el-tag
          >
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue[scope.$index]"
            :ref="'saveTagInput' + scope.$index"
            size="small"
            @keyup.enter.native="handleInputConfirm"
          >
          <!-- <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue[scope.$index]"
            :ref="'saveTagInput' + scope.$index"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          > -->
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput(scope.$index)"
            >+ New Tag</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            type="primary"
            >编辑</el-button
          >
          <el-dialog
            title="修改课程信息"
            :visible.sync="dialogVisible"
            :width="maxWidth"
          >
            <el-form>
              <el-form-item label="修改课程编号" :label-width="formLabelWidth">
                <el-input v-model="cid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="修改课程名" :label-width="formLabelWidth">
                <el-input v-model="cname" autocomplete="off"></el-input>
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
            >删除</el-button
          >
          <el-dialog
            title="是否删除该内容?"
            :visible.sync="dialogTalkVisible"
            :width="dialogWidth"
          >
            <div class="submit2-btn">
              <el-button @click="submit2">确定</el-button>
              <el-button @click="cancel">取消</el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <div class="add-btn">
      <el-button @click="handleAdd">添加课程</el-button>
      <el-dialog
        title="添加课程"
        :visible.sync="dialogFormVisible"
        :width="maxWidth"
      >
        <el-form>
          <el-form-item label="课程编号" :label-width="formLabelWidth">
            <el-input v-model="nid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="课程名" :label-width="formLabelWidth">
            <el-input v-model="nname" autocomplete="off"></el-input>
          </el-form-item>
          <el-button @click="submit">确定</el-button>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          cid: "553",
          course: "数据库",
          class: ["信计181", "信计182"],
        },
        {
          cid: "568",
          course: "数学实验",
          class: ["信计181", "数学181", "数学183"],
        },
        {
          cid: "593",
          course: "数学模型",
          class: ["信计181", "信计182", "数师185", "数师184", "数学182"],
        },
        {
          cid: "563",
          course: "面向对象",
          class: ["信计181"],
        },
      ],
      inputVisible: false,
      inputValue: [],
      index: "",
      formLabelWidth: "120px",
      dialogVisible: false,
      cid: "",
      cname: "",
      maxWidth: "500px",
      dialogTalkVisible: false,
      dialogWidth: "400px",
      dialogFormVisible: false,
      nid: "",
      nname: "",
      tagValue: "",
      tagIndex:""
    };
  },
  created(){
    console.log(this.$route.query.tid);
    // api.getCourseList({
    //   params:{
    //     tid:this.$route.query.tid
    //   }
    // }).then((res)=>{
    //   this.tableData = res.data.course
    // }).catch(error=>{
    //   this.alert1(error)
    // })
  },
  methods: {
    goBack() {
      this.$router.push({ name: "class" });
    },
    alert1(msg){
      this.$message(msg);
    },
    //编辑行
    handleEdit(index, row) {
      this.oid = row.cid
      this.dialogVisible = true;
      this.index = index;
    },
    submit1() {
      this.tableData.splice(this.index, 1, {
        cid: this.cid,
        course: this.cname,
        class: this.tableData[this.index].class,
      });
      this.dialogVisible = false;
      // api.getChangeCou({
      //   params:{
      //     id:this.sid,
      //     nid:this.nid,
      //     nname:this.nname,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.tableData = res.data.course
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

  //删除行
    handleDelete(index, row) {
      this.oid = row.cid
      this.dialogTalkVisible = true;
      this.index = index;
    },


    cancel() {
      this.dialogTalkVisible = false;
    },


    submit2() {
      this.tableData.splice(this.index, 1);
      this.dialogTalkVisible = false;
      // api.getDeleteCou({
      //   params:{
      //     id:this.oid,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.tableData = res.data.course
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

  //删除标签
    handleClose(tag, index) {
      console.log(tag, index);
      this.tableData[index].class.splice(
        this.tableData[index].class.indexOf(tag),
        1
      );
    },

    //新增标签
    showInput(index) {
      this.index = index;
      this.inputVisible = true;
      this.$nextTick((_) => {
        let saveTagInput = "saveTagInput" + index;
        console.log(this.$refs[saveTagInput]);
        this.$refs[saveTagInput].$refs.input.focus();
      });
    },


  //修改标签
    changeTag(item, index,index1) {
      console.log(item, index,index1);
      this.inputVisible = true;
      this.$nextTick((_) => {
        let saveTagInput = "saveTagInput" + index;
        console.log(this.$refs[saveTagInput]);
        this.$refs[saveTagInput].$refs.input.focus();
      });
      this.inputValue[index] = item;
      this.index = index;
      this.tagIndex = index1;
      this.tagValue = item;
    },

    //标签输入框
    handleInputConfirm() {
      let inputValue = this.inputValue[this.index];
      if (this.tagValue && this.tagValue != inputValue) {
        this.tableData[this.index].class.splice(this.tagIndex, 1, inputValue);
        this.inputVisible = false;
        this.tagValue = "";
        this.tagIndex = "";
        this.inputValue[this.index] = "";
      } else if (this.tagValue && this.tagValue == inputValue) {
        alert("没有改动");
        this.inputVisible = false;
        this.tagValue = "";
        this.tagIndex = "";
        this.inputValue[this.index] = "";
      } else {
        if (inputValue) {
          this.tableData[this.index].class.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue[this.index] = "";
      }
    },

    //添加表格事件
    handleAdd() {
      this.dialogFormVisible = true;
    },


    submit() {
      this.tableData.push({ cid: this.nid, course: this.nname, class: [] });
      this.dialogFormVisible = false;
      // api.getAddCou({
      //   params:{
      //     id:this.nid,
      //     name:this.nanme,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.tableData = res.data.course
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },
  },
};
</script>

<style scoped>
.el-page-header {
  margin-bottom: 25px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.add-btn {
  text-align: center;
  margin-top: 15px;
}
.submit1-btn {
  text-align: center;
}
.submit2-btn {
  text-align: center;
}
</style>
