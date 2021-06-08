<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="公告标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <el-input type="textarea" v-model="content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增公告</el-button>
        <el-dialog
          title="确认新增此公告吗?"
          :visible.sync="dialogTalkVisible"
          :width="dialogWidth"
          append-to-body
        >
          <el-button @click="submit2">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-dialog>
      </el-form-item>
    </el-form>
    <!-- <el-table stripe style="width: 100%" :data="datas">
      <el-table-column prop="title" label="公告标题" width="180">
      </el-table-column>
      <el-table-column prop="content" label="公告内容" width="250">
      </el-table-column>
      <el-table-column prop="time" label="发布时间" width="150">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, datas)"
            type="text"
            size="small"
          >
            移除
          </el-button>
          <el-dialog
            title="确认移除此公告吗?"
            :visible.sync="dialogVisible"
            :width="dialogWidth"
            append-to-body
          >
            <el-button @click="submit1">确定</el-button>
            <el-button @click="cancel1">取消</el-button>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      title: "",
      content: "",
      id: "",
      rows: "",
      index: "",
      dialogTalkVisible: false,
      dialogVisible: false,
      dialogWidth: "250px",
    };
  },
  methods: {
    // deleteRow(index, rows) {
    //   console.log(index, rows[index]);
    //   this.id = rows[index].id;
    //   this.rows = rows;
    //   this.index = index;
    //   this.dialogVisible = true;
    // },
    // submit1() {
    //   // api.getDeleteMes({
    //   //   params:{
    //   //    id = this.id
    //   //   }
    //   // }).then((res)=>{
    //   //   rows.splice(index, 1);
    //   //   this.alert1(res.data.msg)
    //   // })
    //   this.rows.splice(this.index, 1);
    //   this.dialogVisible = false;
    // },
    // cancel1() {
    //   this.dialogVisible = false;
    // },
    alert1(msg) {
      this.$message(msg);
    },
    onSubmit() {
      console.log("submit!");
      this.dialogTalkVisible = true;
    },
    submit2() {
      // api.sendText({
      //   params:{
      //     title:this.title,
      //     content:this.content
      //   }
      // }).then((res)=>{
      //   this.title = ''
      //   this.content = ''
      //   this.alert1(res.data.msg)
      // }).catch(error=>{
      //   this.alert1(error)
      // })
      this.dialogTalkVisible = false;
    },
    cancel() {
      this.dialogTalkVisible = false;
    },
  },
};
</script>