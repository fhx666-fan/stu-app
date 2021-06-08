<template>
    <div>
    <el-table stripe style="width: 100%" :data="datas">
      <el-table-column prop="id" label="公告id" width="100">
      </el-table-column>
      <el-table-column prop="title" label="公告标题" width="150">
      </el-table-column>
      <el-table-column prop="content" label="公告内容" width="250"  :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column prop="time" label="发布时间" width="120">
      </el-table-column>
      <el-table-column label="操作" width="100">
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
    </el-table>
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
  props: ["datas"],
  // mounted() {
  //   console.log(this.datas[0]);
  // },
  methods: {
    deleteRow(index, rows) {
      console.log(index, rows[index]);
      this.id = rows[index].id;
      this.rows = rows;
      this.index = index;
      this.dialogVisible = true;
    },
    submit1() {
      // api.getDeleteMes({
      //   params:{
      //    id = this.id
      //   }
      // }).then((res)=>{
      //   this.rows.splice(index, 1);
      //   this.alert1(res.data.msg)
      // })
      this.rows.splice(this.index, 1);
      this.dialogVisible = false;
    },
    cancel1() {
      this.dialogVisible = false;
    },
},
}
</script>