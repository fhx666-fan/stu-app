import axios from '@/axios.js'
var api = {
    login (params) {
      return axios.get('/login', params) // 登陆
    },
    sendText (params){
        return axios.post('/sendText',params) //发送公告
    },
    getTextList(){
        return axios.get('/getTextList.json')  //公告列表
    },
    getDeleteMes(params){
        return axios.post('/getDeleteMes.json',params) //删除公告
    },
    getSchoolPage(params){
        return axios.get('/getSchoolPage.json',params) //学院翻页
    },
    getAddSchool(params){
        return axios.post('/getAddSchool.json',params) //添加学院信息
    },
    getChangeSchool(params){
        return axios.post('/getChangeSchool.json',params) //编辑学院信息
    },
    getDeleteSchool(params){
        return axios.post('/getDeleteSchool.json',params) //删除学院信息
    },
    getEnterSchool(params){
        return axios.post('/getEnterSchool.json',params) //进入学院
    },
    getSchoolList(){
        return axios.get('/getSchoolList.json')//获取学院列表
    },
    
    





//allteacher页面
    getTeacherPage(params){
        return axios.get('/getTeacherPage.json',params) //获取老师其他页的数据
    },
    getAddTeacher(params){
        return axios.post('/getAddTeacher.json',params) //添加教师信息
    },
    getChangeTeacher(params){
        return axios.post('/getChangeTeacher.json',params) //编辑教师信息
    },
    getDeleteTeacher(params){
        return axios.post('/getDeleteTeacher.json',params) //删除教师信息
    },







//allstudent页面
    getChangeStu0(params){
        return axios.get('/getChangeStu0.json',params) //编辑学生信息(学号，姓名，性别，学院)
    },
    getChangeStu1(params){
        return axios.get('/getChangeStu1.json',params) //编辑学生信息(年级)
    },
    getChangeStu2(params){
        return axios.get('/getChangeStu2.json',params) //编辑学生信息(班级)
    },
    getDeleteStu(params){
        return axios.post('/getDeleteStu.json',params) //删除学生信息
    },
    getAddStu0(params){
        return axios.post('/getAddStu0.json',params) //添加学生信息(学号，姓名，性别，学院)
    },
    getAddStu1(params){
        return axios.post('/getAddStu1.json',params) //添加学生信息(年级)
    },
    getAddStu2(params){
        return axios.post('/getAddStu2.json',params) //添加学生信息(班级)
    },
    getAllStudentPage(params){
        return axios.get('/getAllStudentPage.json',params) //学生翻页
    },






//allcourse页面
    getAllCoursePage(params){
        return axios.get('/getAllCoursePage.json',params) //课程翻页
    },
    getChangeCourse(params){
        return axios.post('/getChangeCourse.json',params) //编辑课程信息
    },
    getDeleteCourse(params){
        return axios.post('/getDeleteCourse.json',params) //删除课程信息
    },
    getAddCourse(params){
        return axios.post('/getAddCourse.json',params) //添加课程信息
    },




    // submitUpload (params, headers) {
    //     return axios.post('/submitUpload', params, headers) // 提交实验报告
    //   },

//course页面
    getCoursePage(params){
        return axios.get('/getCoursePage.json',params) //学院内课程翻页
    },
    getDeleteCourse1(params){
        return axios.post('/getDeleteCourse1.json',params) //删除学院课程信息
    },
    getAddCourse1(params){
        return axios.post('/getAddCourse1.json',params) //添加学院课程信息
    },
    getStudentPage(params){
        return axios.get('/getStudentPage.json',params) //学院学生翻页功能
    },
    getSchoolCourse(params){
        return axios.get('/getSchoolCourse.json',params) //课程列表
    },










    getClassPage(params){
        return axios.get('/getClassPage.json',params) //班级的翻页
    },
    getAddClass(params){
        return axios.post('/getAddClass.json',params) //添加班级信息
    },
    getChangeClass(params){
        return axios.post('/getChangeClass.json',params) //编辑班级信息
    },
    getDeleteClass(params){
        return axios.post('/getDeleteClass.json',params) //删除班级信息
    },
    getGradeList(params){
        return axios.get('/getGradeList.json',params)//获取年级列表
    },
    // getEnterTeacher(params){
    //     return axios.get('/getEnterTeacher.json',params) //进入老师详情页面
    // },
    // getEnterClass(params){
    //     return axios.get('/getEnterClass.json',params) //进入班级详情页面
    // },
    // getStudentList(params){
    //     return axios.get('/getStudentList.json',params) //获取学生列表
    // },
    

}



export default api