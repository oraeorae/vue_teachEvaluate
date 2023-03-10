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
      // ????????????
      {
        path: '/manage',
        name: 'Manage',
        redirect: '/manage/codesystem',
        component: RouteView,
        meta: { title: 'menu.manage', icon: 'form', permission: ['manage'] },
        children: [
          {
            // ??????????????????
            path: '/manage/codesystem',
            name: 'CodeSystem',
            component: () => import('@/views/manage/CodeSystem'),
            meta: { title: 'menu.manage.codesystem', keepAlive: true, permission: ['manage'] }
          },
          {
            // ??????????????????
            path: '/manage/runsetup',
            name: 'RunSetup',
            component: () => import('@/views/manage/RunSetup'),
            meta: { title: 'menu.manage.runsetup', keepAlive: true, permission: ['manage'] }
          },
          {
            // ??????????????????
            path: '/manage/systemlog',
            name: 'SystemLog',
            component: () => import('@/views/manage/SystemLog'),
            meta: { title: 'menu.manage.systemlog', keepAlive: true, permission: ['manage'] }
          },
          {
            // ?????????????????????
            path: '/manage/backuprecovery',
            name: 'BackupRecovery',
            component: () => import('@/views/manage/BackupRecovery'),
            meta: { title: 'menu.manage.backuprecovery', keepAlive: true, permission: ['manage'] }
          }
        ]
      },
      // ????????????
      {
        path: '/accountm',
        name: 'Manage',
        redirect: '/accountm/codesystem',
        component: RouteView,
        meta: { title: 'menu.accountm', icon: 'form', permission: ['accountm'] },
        children: [
          {
            // ??????????????????
            path: '/accountm/add',
            name: 'Add',
            component: () => import('@/views/accountm/Add'),
            meta: { title: 'menu.accountm.add', keepAlive: true, permission: ['accountm'] }
          },
          {
            // ??????????????????
            path: '/accountm/modify',
            name: 'Modify',
            component: () => import('@/views/accountm/Modify'),
            meta: { title: 'menu.accountm.modify', keepAlive: true, permission: ['accountm'] }
          },
          {
            // ??????????????????
            path: '/accountm/reset',
              name: 'Reset',
            component: () => import('@/views/accountm/Reset'),
            meta: { title: 'menu.accountm.reset', keepAlive: true, permission: ['accountm'] }
          },
          {
            // ??????????????????
            path: '/accountm/modify',
            name: 'Modify',
            component: () => import('@/views/accountm/Modify'),
            meta: { title: 'menu.accountm.modify', keepAlive: true, permission: ['accountm'] }
          },
          {
            // ??????????????????
            path: '/accountm/query',
            name: 'Query',
            component: () => import('@/views/accountm/Query'),
            meta: { title: 'menu.accountm.query', keepAlive: true, permission: ['accountm'] }
          }
        ]
      },
      // ????????????
      {
        path: '/document',
        name: 'Document',
        redirect: '/document/upload',
        component: RouteView,
        meta: { title: 'menu.document', icon: 'form', permission: ['document'] },
        children: [
          {
            // ????????????
            path: '/document/upload',
            name: 'Upload',
            component: () => import('@/views/document/Upload'),
            meta: { title: 'menu.document.upload', keepAlive: true, permission: ['document'] }
          },
          {
            // ??????????????????????????????
            path: '/document/export',
            name: 'Export',
            component: () => import('@/views/document/Export'),
            meta: { title: 'menu.document.export', keepAlive: true, permission: ['document_manage'] }
          },
          {
            // ??????????????????????????????
            path: '/document/publish',
            name: 'Publish',
            component: () => import('@/views/document/Publish'),
            meta: { title: 'menu.document.publish', keepAlive: true, permission: ['document_manage'] }
          },
          {
            // ??????????????????????????????
            path: '/document/reset',
            name: 'Reset',
            component: () => import('@/views/document/Reset'),
            meta: { title: 'menu.document.reset', keepAlive: true, permission: ['document_admin'] }
          },
          {
            // ??????????????????????????????
            path: '/document/query',
            name: 'Query',
            component: () => import('@/views/document/Query'),
            meta: { title: 'menu.document.query', keepAlive: true, permission: ['document'] }
          }
        ]
      },
      // ????????????
      {
        path: '/notice/',
        name: 'Notice',
        component: RouteView,
        redirect: '/notice/see',
        meta: { title: 'menu.notice', icon: 'profile', permission: ['notice'] },
        children: [
          {
            // ????????????
            path: '/notice/publish',
            name: 'Publish',
            component: () => import('@/views/notice/Publish'),
            meta: { title: 'menu.notice.publish', keepAlive: true, permission: ['notice_uptwo'] }
          },
          {
            // ????????????
            path: '/notice/modify',
            name: 'Modify',
            component: () => import('@/views/notice/Modify'),
            meta: { title: 'menu.notice.modify', keepAlive: true, permission: ['notice_uptwo'] }
          },
          {
            // ????????????
            path: '/notice/delete',
            name: 'Delete',
            component: () => import('@/views/notice/Delete'),
            meta: { title: 'menu.notice.delete', keepAlive: true, permission: ['notice_uptwo'] }
          },
          {
            // ????????????
            path: '/notice/see',
            name: 'See',
            component: () => import('@/views/notice/See'),
            meta: { title: 'menu.notice.see', keepAlive: true, permission: ['notice'] }
          },
          {
            // ????????????
            path: '/notice/detail',
            name: 'Detail',
            component: () => import('@/views/notice/Detail'),
            meta: { title: 'menu.notice.detail', keepAlive: true, permission: ['notice_dis'] }
          }
        ]
      },
      // ????????????
      {
        path: '/share/',
        name: 'Share',
        component: RouteView,
        redirect: '/share/see',
        meta: { title: 'menu.share', icon: 'profile', permission: ['share'] },
        children: [
          {
            // ??????????????????
            path: '/share/upload',
            name: 'Upload',
            component: () => import('@/views/share/Upload'),
            meta: { title: 'menu.share.upload', keepAlive: true, permission: ['share_uptwo'] }
          },
          {
            // ????????????????????????
            path: '/share/modify',
            name: 'Modify',
            component: () => import('@/views/share/Modify'),
            meta: { title: 'menu.share.modify', keepAlive: true, permission: ['share_uptwo'] }
          },
          {
            // ????????????????????????
            path: '/share/delete',
            name: 'Delete',
            component: () => import('@/views/share/Delete'),
            meta: { title: 'menu.share.delete', keepAlive: true, permission: ['share_uptwo'] }
          },
          {
            // ????????????????????????
            path: '/share/see',
            name: 'Delete',
            component: () => import('@/views/share/See'),
            meta: { title: 'menu.share.see', keepAlive: true, permission: ['share'] }
          }
        ]
      },
      // ????????????
      {
        path: '/feedback',
        name: 'Feedback',
        component: RouteView,
        meta: { title: 'menu.feedback', icon: 'warning', permission: ['feedback'] },
        children: [
          {
            // ??????????????????
            path: '/feedback/submit',
            name: 'Submit',
            component: () => import('@/views/feedback/Submit'),
            meta: { title: 'menu.feedback.submit', keepAlive: true, permission: ['feedback'] }
          },
          {
            // ??????????????????
            path: '/feedback/see',
            name: 'See',
            component: () => import('@/views/feedback/See'),
            meta: { title: 'menu.feedback.see', keepAlive: true, permission: ['feedback_uptwo'] }
          },
          {
            // ??????????????????
            path: '/feedback/delete',
            name: 'Delete',
            component: () => import('@/views/feedback/Delete'),
            meta: { title: 'menu.feedback.delete', keepAlive: true, permission: ['feedback_admin'] }
          }
        ]
      },
      // ????????????
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
        meta: { title: '????????????', icon: 'slack', permission: [ 'dashboard' ] },
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
            meta: { title: '????????????', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '???????????????', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '??????????????????', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '????????????', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '????????????', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '????????????2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '????????????', keepAlive: true }
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
 * ????????????
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
