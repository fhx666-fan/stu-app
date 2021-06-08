<template>
    <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.address.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column label="课程名" prop="date"> </el-table-column>
    <el-table-column label="授课老师" prop="name"> </el-table-column>
    <el-table-column label="实验名" prop="address"></el-table-column>
    <el-table-column label="状态" prop="states"> </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="{}">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="dialogFormVisible = true">提交</el-button>
        <el-dialog title="提交实验" :visible.sync="dialogFormVisible">
          <submit />
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-button
          type="info"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          >查看</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import submit from './submit.vue'
export default {
  components: { submit },
  data () {
    return {
      tableData: [
        {
          date: '数据库',
          name: '李白',
          address: '哈哈哈',
          states: '已提交'
        },
        {
          date: '面向对象',
          name: '杜甫',
          address: '哈哈哈',
          states: '已提交'
        },
        {
          date: '软件工程',
          name: '王小虎',
          address: '哈哈哈',
          states: '已提交'
        },
        {
          date: '数学实验',
          name: '陈建熙',
          address: '哈哈哈',
          states: '已提交'
        }
      ],
      search: '',
      dialogFormVisible: false
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
    // fileData (row) {
    //   let arr = []
    //   row.address.forEach((item, index) => {
    //     if (index > 2) {
    //       return
    //     }
    //     arr.push(item)
    //   })
    //   return arr.join(',')
    // }
  }
}
</script>
