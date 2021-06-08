<template>
  <div>
    <div v-for="(item, index) in tableData" :key="index">
      <div class="header">{{ item.garde1 }}</div>
      <el-row :gutter="15">
        <el-col :span="3" v-for="(item1, index1) in item.data1" :key="index1">
          <!-- 卡片结构 -->
          <div class="card">
            <div @click="submit0(item1, index1, index)">
              <div class="icon-wrap">
                <i class="el-icon-folder-opened"></i>
              </div>
              <div class="class-name">
                <span v-show="isShow2">{{ item1.cid }}</span>
                <span>{{ item1.class }}</span>
              </div>
            </div>
            <div class="icon-top" v-show="isShow">
              <!-- 修改事件 -->
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click.stop="open(item1, index, index1)"
              ></el-button>
              <el-dialog title="修改班级" :visible.sync="dialogVisible">
                <el-form>
                  <el-form-item label="年级" :label-width="formLabelWidth">
                    <el-select v-model="value" placeholder="请选择">
                      <div v-for="(item, index) in grade" :key="index">
                        <el-option :label="item.grade" :value="item.id">
                        </el-option>
                      </div>
                    </el-select>
                  </el-form-item>
                  <el-form-item
                    label="修改班级名"
                    :label-width="formLabelWidth"
                  >
                    <el-input v-model="namec" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-button @click.stop="submit1">确定</el-button>
                </el-form>
              </el-dialog>

              <!-- 删除事件 -->
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click.stop="deleted(item1, index, index1)"
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
    </div>

    <!-- 增，删，改按钮 -->
    <div class="footer">
      <el-button
        @click="dialogFormVisible = true"
        icon="el-icon-circle-plus-outline"
        >添加</el-button
      >
      <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
        <el-form>
          <!-- <el-form-item label="年级" :label-width="formLabelWidth">
            <el-select v-model="value" placeholder="请选择">
              <div v-for="(item, index) in grade" :key="index">
                <el-option :label="item.garde" :value="index"> </el-option>
              </div>
            </el-select>
          </el-form-item> -->
          <el-form-item label="年级" :label-width="formLabelWidth">
            <el-select v-model="value" placeholder="请选择">
              <div v-for="(item, index) in grade" :key="index">
                <el-option :label="item.grade" :value="item.id"> </el-option>
              </div>
            </el-select>
          </el-form-item>
          <el-form-item label="班级名称" :label-width="formLabelWidth">
            <el-input v-model="name" autocomplete="off"></el-input>
          </el-form-item>
          <el-button @click="submit">确定</el-button>
        </el-form>
      </el-dialog>
      <el-button @click="isShow = !isShow">删除和修改</el-button>
    </div>
    <el-pagination
      align="center"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :hide-on-single-page="value1"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
// import api from '@/api/index.js'
export default {
  data() {
    return {
      tableData: [
        {
          garde1: "18级",
          data1: [
            {
              cid: "021",
              class: "信计189",
            },
            {
              cid: "054",
              class: "信计182",
            },
            {
              cid: "064",
              class: "师范185",
            },
            {
              cid: "055",
              class: "师范184",
            },
            {
              cid: "045",
              class: "数学181",
            },
            {
              cid: "054",
              class: "数学182",
            },
            {
              cid: "055",
              class: "数学183",
            },
          ],
        },
        {
          garde1: "19级",
          data1: [
            {
              cid: "021",
              class: "信计181",
            },
            {
              cid: "054",
              class: "信计182",
            },
            {
              cid: "064",
              class: "师范185",
            },
            {
              cid: "055",
              class: "师范184",
            },
            {
              cid: "045",
              class: "数学181",
            },
            {
              cid: "054",
              class: "数学182",
            },
            {
              cid: "055",
              class: "数学183",
            },
          ],
        },
      ],
      grade: [
        {
          grade: "18级",
          id: "1",
        },
        {
          grade: "19级",
          id: "2",
        },
        {
          grade: "20级",
          id: "3",
        },
        {
          grade: "21级",
          id: "4",
        },
      ],
      isShow: false, //是否显示删除和编辑
      isShow2: false,
      activeNames: ["1"],

      //控制对话框
      dialogVisible: false,
      visible: false,
      dialogFormVisible: false,
      dialogTalkVisible: false,
      formLabelWidth: "100px",
      dialogWidth: "400px",
      maxWidth: "500px",

      //有关位置信息
      num: "",
      num1: "",
      num2: "",
      num3: "",

      //表单绑定的有关数据
      name: "",
      idc: "",
      oid: "",
      oname: "",
      namec: "",
      // grade: "",
      cid: "",
      value: "",
      //翻页
      currentPage: 1, // 当前页码
      total: 4, // 总条数
      pageSize: 2, // 每页的数据条数
      value1: false,
    };
  },
  created() {
    console.log(this.$store.state.sid);
    this.handleCurrentChange(1);
    // api.getGradeList({
    //   params:{
    //     sid : this.$store.state.sid
    //   }
    // }).then(res=>{
    //   this.grade = res.data.data
    // })
  },
  // props: ["class1"],
  mounted() {
    // console.log(this.$store.state.sid)
    if (this.total < 2) {
      this.value1 = true;
      console.log(this.value1);
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    alert1(msg) {
      this.$message(msg);
    },

    //添加班级
    submit() {
      this.dialogFormVisible = false;
      console.log(this.tableData[this.value]);
      this.tableData[this.value].data1.push({ cid: this.cid, class: this.name });
      // api.getAddClass({
      //   params:{
      //     grade:this.value,
      //     cname:this.name,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(1)
      //   this.name = ""
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //修改班级信息
    open(item, index, index1) {
      console.log(item, index, index1,item.cid);
      this.num = index;
      this.num1 = index1;
      (this.oname = item.class), (this.oid = item.cid);
      this.dialogVisible = true;
    },
    submit1() {
      this.tableData[this.num].data1.splice(this.num1, 1, {
        cid: this.idc,
        class: this.namec,
      });
      this.dialogVisible = false;
      // api.getChangeClass({
      //   params:{
      //     cid:this.idc,
      //     grade:this.value,
      //     ncname:this.namec,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.handleCurrentChange(this.currentPage)
      //   this.namec = ""
      // }).catch(error=>{
      //   this.alert1(error)
      // })
    },

    //移除班级
    deleted(item1, index, index1) {
      console.log(item1, index, index1);
      this.num2 = index;
      this.num3 = index1;
      (this.oname = item1.class), (this.oid = item1.cid);
      this.dialogTalkVisible = true;
    },
    submit2() {
      this.tableData[this.num2].data1.splice(this.num3, 1);
      this.dialogTalkVisible = false;
      // api.getDeleteClass({
      //   params:{
      //     cid:this.oid,
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

    //点击进入班级名单
    submit0(item1, index1, index) {
      console.log(item1, index1, index);
      this.$router.push({ name: "student", query: { cid: item1.cid } });
      // api.getEnterClass({
      //   params:{
      //     num:index,
      //     cid:item1.cid,
      //     cname:item.class,
      //   }
      // }).then((res)=>{
      //   this.alert1(res.data.msg)
      //   this.$router.push({ name: "student" ,query: {cid : item1.cid}});
      // }).catch(erroe=>{
      //   this.alert1(error)
      // })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // this.changePage(val);
      // api.getClassPage({
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
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.header {
  margin-top: 10px;
  font-size: 20px;
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
  font-size: 50px;
  text-align: center;
}
.class-name {
  text-align: center;
}
</style>