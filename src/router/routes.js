import DashBoard from '@/layout/DashBoard'
import ParentView from '@/components/ParentView/ParentView'
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: DashBoard,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'home'
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://github.com/sunterry/vue-iview-admin',
      icon: 'ios-book'
    }
  },
  {
    path: '/components',
    name: 'components',
    component: DashBoard,
    meta: {
      title: '组件',
      icon: 'logo-buffer'
    },
    children: [
      {
        path: 'icon',
        name: 'icon',
        meta: {
          icon: 'ios-ionic',
          title: '图标'
        },
        component: () => import(/* webpackChunkName: "icon" */ '@/views/Assembly/Icon/Icon.vue')
      },
      {
        path: 'table',
        name: 'table',
        meta: {
          icon: 'md-leaf',
          title: '表格'
        },
        component: () => import(/* webpackChunkName: "table" */ '@/views/Assembly/Table/Table.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      title: '多级菜单',
      icon: 'md-menu'
    },
    component: DashBoard,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import(/* webpackChunkName: "level_2_1" */ '@/views/Multilevel/Level_2_1/Level_2_1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '二级-2'
        },
        component: () => import(/* webpackChunkName: "level_2_1" */ '@/views/Multilevel/Level_2_2/Level_2_2.vue')
      },
      {
        path: 'level_2',
        name: 'level_2',
        meta: {
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: ParentView,
        children: [
          {
            path: 'level_2_3',
            name: 'level_2_3',
            meta: {
              icon: 'md-funnel',
              title: '三级',
              component: () => import(/* webpackChunkName: "level_2_3" */ '@/views/Multilevel/Level_2/Level_2_3/Level_2_3.vue')
            }
          }
        ]
      }
    ]
  }
]
