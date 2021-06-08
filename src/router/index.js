import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'
import Login from '@/page/login.vue'
import Index from '@/page/index.vue'
import AllSchool from '@/components/content/allschool';
import Grade from '@/components/content/grade'
import Class from '@/components/content/class';
import Course from '@/components/content/course'
import AllCourse from '@/components/content/allcourse'
import Student from '@/components/content/student'
import AllStudent from '@/components/content/allstudent'
import AllTeacher from '@/components/content/allteacher'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/admin/login',
      children:[{
        path: '/admin/index',
        name: 'index',
        component: Index,
        children:[{
            path: '/admin/show',
            name: 'school',
            component: AllSchool
          },{
          path: '/admin/school',
          name: 'class',
          component: Class,
          children:[{
            path: '/admin/course',
            name: 'course',
            component: Course
          },
          {
            path: '/admin/grade',
            name: 'grade',
            component: Grade
          },]
          },{
          path: '/admin/allcourse',
          name: 'allcourse',
          component: AllCourse
          },{
          path: '/admin/student',
          name: 'student',
          component: Student
          },{
            path: '/admin/allstudent',
            name: 'allstudent',
            component: AllStudent
          },{
            path: '/admin/allteacher',
            name: 'allteacher',
            component: AllTeacher
          }]
      }]
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login,
    },
  ]
})
