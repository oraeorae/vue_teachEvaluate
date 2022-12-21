// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    // redirect: '/dashboard/',
    children: [
      // dashboard
      // {
      //  path: '/cs',
      //  component: () => import('@/views/test/Test')
      // },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] }
      },
      {
        path: '/dashboardadmin',
        name: 'DashboardAdmin',
        component: () => import('@/views/dashboard/WorkplaceAdmin'),
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard_admin'] }
      },
      {
        path: '/dashboardmanage',
        name: 'DashboardManage',
        component: () => import('@/views/dashboard/WorkplaceManage'),
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard_manage'] }
      },
      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: 'menu.account', icon: 'user', keepAlive: true, permission: ['account'] },
        children: [
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: 'menu.account.settings', hideHeader: true, permission: ['account'] },
            redirect: '/account/settings/basic',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/basic',
                name: 'BasicSettings',
                component: () => import('@/views/account/settings/BasicSetting'),
                meta: { title: 'account.settings.menuMap.basic', hidden: true, permission: ['account'] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: {
                  title: 'account.settings.menuMap.security',
                  hidden: true,
                  keepAlive: true,
                  permission: ['account']
                }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: true, permission: ['account'] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: 'account.settings.menuMap.binding', hidden: true, keepAlive: true, permission: ['account'] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: {
                  title: 'account.settings.menuMap.notification',
                  hidden: true,
                  keepAlive: true,
                  permission: ['account']
                }
              }
            ]
          }
        ]
      },
      // 系统管理
      {
        path: '/manage',
        name: 'Manage',
        redirect: '/manage/codesystem',
        component: RouteView,
        meta: { title: 'menu.manage', icon: 'form', permission: ['manage'] },
        children: [
          {
            // 系统代码管理
            path: '/manage/codesystem',
            name: 'CodeSystem',
            component: () => import('@/views/manage/CodeSystem'),
            meta: { title: 'menu.manage.codesystem', keepAlive: true, permission: ['manage'] }
          },
          {
            // 运行配置管理
            path: '/manage/runsetup',
            name: 'RunSetup',
            component: () => import('@/views/manage/RunSetup'),
            meta: { title: 'menu.manage.runsetup', keepAlive: true, permission: ['manage'] }
          },
          {
            // 系统日志管理
            path: '/manage/systemlog',
            name: 'SystemLog',
            component: () => import('@/views/manage/SystemLog'),
            meta: { title: 'menu.manage.systemlog', keepAlive: true, permission: ['manage'] }
          },
          {
            // 系统备份与恢复
            path: '/manage/backuprecovery',
            name: 'BackupRecovery',
            component: () => import('@/views/manage/BackupRecovery'),
            meta: { title: 'menu.manage.backuprecovery', keepAlive: true, permission: ['manage'] }
          }
        ]
      },
      // 账号管理
      {
        path: '/accountm',
        name: 'Manage',
        redirect: '/accountm/codesystem',
        component: RouteView,
        meta: { title: 'menu.accountm', icon: 'form', permission: ['accountm'] },
        children: [
          {
            // 添加用户账号
            path: '/accountm/add',
            name: 'Add',
            component: () => import('@/views/accountm/Add'),
            meta: { title: 'menu.accountm.add', keepAlive: true, permission: ['accountm'] }
          },
          {
            // 修改用户账号
            path: '/accountm/modify',
            name: 'Modify',
            component: () => import('@/views/accountm/Modify'),
            meta: { title: 'menu.accountm.modify', keepAlive: true, permission: ['accountm'] }
          },
          {
            // 重置账户密码
            path: '/accountm/reset',
              name: 'Reset',
            component: () => import('@/views/accountm/Reset'),
            meta: { title: 'menu.accountm.reset', keepAlive: true, permission: ['accountm'] }
          },
          {
            // 删除用户账号
            path: '/accountm/modify',
            name: 'Modify',
            component: () => import('@/views/accountm/Modify'),
            meta: { title: 'menu.accountm.modify', keepAlive: true, permission: ['accountm'] }
          },
          {
            // 查询用户账号
            path: '/accountm/query',
            name: 'Query',
            component: () => import('@/views/accountm/Query'),
            meta: { title: 'menu.accountm.query', keepAlive: true, permission: ['accountm'] }
          }
        ]
      },
      // 上传文档
      {
        path: '/document',
        name: 'Document',
        redirect: '/document/upload',
        component: RouteView,
        meta: { title: 'menu.document', icon: 'form', permission: ['document'] },
        children: [
          {
            // 上传文档
            path: '/document/upload',
            name: 'Upload',
            component: () => import('@/views/document/Upload'),
            meta: { title: 'menu.document.upload', keepAlive: true, permission: ['document'] }
          },
          {
            // 导出文档提交任务清单
            path: '/document/export',
            name: 'Export',
            component: () => import('@/views/document/Export'),
            meta: { title: 'menu.document.export', keepAlive: true, permission: ['document_manage'] }
          },
          {
            // 发布文档提交任务清单
            path: '/document/publish',
            name: 'Publish',
            component: () => import('@/views/document/Publish'),
            meta: { title: 'menu.document.publish', keepAlive: true, permission: ['document_manage'] }
          },
          {
            // 重启教学文档提交任务
            path: '/document/reset',
            name: 'Reset',
            component: () => import('@/views/document/Reset'),
            meta: { title: 'menu.document.reset', keepAlive: true, permission: ['document_admin'] }
          },
          {
            // 查询教学文档提交任务
            path: '/document/query',
            name: 'Query',
            component: () => import('@/views/document/Query'),
            meta: { title: 'menu.document.query', keepAlive: true, permission: ['document'] }
          }
        ]
      },
      // 发布公告
      {
        path: '/notice/',
        name: 'Notice',
        component: RouteView,
        redirect: '/notice/see',
        meta: { title: 'menu.notice', icon: 'profile', permission: ['notice'] },
        children: [
          {
            // 发布公告
            path: '/notice/publish',
            name: 'Publish',
            component: () => import('@/views/notice/Publish'),
            meta: { title: 'menu.notice.publish', keepAlive: true, permission: ['notice_uptwo'] }
          },
          {
            // 修改公告
            path: '/notice/modify',
            name: 'Modify',
            component: () => import('@/views/notice/Modify'),
            meta: { title: 'menu.notice.modify', keepAlive: true, permission: ['notice_uptwo'] }
          },
          {
            // 删除公告
            path: '/notice/delete',
            name: 'Delete',
            component: () => import('@/views/notice/Delete'),
            meta: { title: 'menu.notice.delete', keepAlive: true, permission: ['notice_uptwo'] }
          },
          {
            // 查看公告
            path: '/notice/see',
            name: 'See',
            component: () => import('@/views/notice/See'),
            meta: { title: 'menu.notice.see', keepAlive: true, permission: ['notice'] }
          },
          {
            // 公告详情
            path: '/notice/detail',
            name: 'Detail',
            component: () => import('@/views/notice/Detail'),
            meta: { title: 'menu.notice.detail', permission: ['notice_dis'] }
          }
        ]
      },
      // 共享资料
      {
        path: '/share/',
        name: 'Share',
        component: RouteView,
        redirect: '/share/see',
        meta: { title: 'menu.share', icon: 'profile', permission: ['share'] },
        children: [
          {
            // 上传共享文件
            path: '/share/upload',
            name: 'Upload',
            component: () => import('@/views/share/Upload'),
            meta: { title: 'menu.share.upload', keepAlive: true, permission: ['share_uptwo'] }
          },
          {
            // 修改共享文件资料
            path: '/share/modify',
            name: 'Modify',
            component: () => import('@/views/share/Modify'),
            meta: { title: 'menu.share.modify', keepAlive: true, permission: ['share_uptwo'] }
          },
          {
            // 删除共享文件资料
            path: '/share/delete',
            name: 'Delete',
            component: () => import('@/views/share/Delete'),
            meta: { title: 'menu.share.delete', keepAlive: true, permission: ['share_uptwo'] }
          },
          {
            // 删除共享文件资料
            path: '/share/see',
            name: 'Delete',
            component: () => import('@/views/share/See'),
            meta: { title: 'menu.share.see', keepAlive: true, permission: ['share'] }
          }
        ]
      },
      // 用户反馈
      {
        path: '/feedback',
        name: 'Feedback',
        component: RouteView,
        meta: { title: 'menu.feedback', icon: 'warning', permission: ['feedback'] },
        children: [
          {
            // 提交反馈意见
            path: '/feedback/submit',
            name: 'Submit',
            component: () => import('@/views/feedback/Submit'),
            meta: { title: 'menu.feedback.submit', keepAlive: true, permission: ['feedback'] }
          },
          {
            // 查看反馈意见
            path: '/feedback/see',
            name: 'See',
            component: () => import('@/views/feedback/See'),
            meta: { title: 'menu.feedback.see', keepAlive: true, permission: ['feedback_uptwo'] }
          },
          {
            // 删除反馈意见
            path: '/feedback/delete',
            name: 'Delete',
            component: () => import('@/views/feedback/Delete'),
            meta: { title: 'menu.feedback.delete', keepAlive: true, permission: ['feedback_admin'] }
          }
        ]
      },
      // 系统帮助
      {
        path: '/help',
        name: 'Help',
        component: () => import('@/views/help/SystemHelp'),
        meta: { title: 'menu.help', icon: 'check-circle-o', permission: ['help'] }
      }
      // other
      /*
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      }
      */
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
