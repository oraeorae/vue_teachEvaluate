import storage from 'store'
import expirePlugin from 'store/plugins/expire'
import { getInfo } from '@/api/login'
import { login } from '@/api/login_api'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

// 修改教程：https://zhuanlan.zhihu.com/p/431139611
storage.addPlugin(expirePlugin)
const user = {
  state: {
    token: '',
    isInitPwd: '',
    loginTime: '',
    loginIP: '',
    roleType: '',
    userName: '',
    userID: '',
    lastLoginTime: '',
    lastLoginIP: '',
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ISINITPWD: (state, isInitPwd) => {
      state.isInitPwd = isInitPwd
    },
    SET_LASTLOGINTIME: (state, lastLoginTime) => {
      state.lastLoginTime = lastLoginTime
    },
    SET_LOGINTIME: (state, loginTime) => {
      state.loginTime = loginTime
    },
    SET_LOGINIP: (state, loginIP) => {
      state.loginIP = loginIP
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_USERID: (state, userID) => {
      state.roleType = userID
    },
    SET_LASTLOGINIP: (state, lastLoginIP) => {
      state.lastLoginIP = lastLoginIP
    },
    SET_ROLETYPE: (state, roleType) => {
      state.roleType = roleType
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response.data
          console.log(result)
          storage.set(ACCESS_TOKEN, result.token, new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
          storage.set('USERNAME', result.username, new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.token)
          commit('SET_ISINITPWD', result.isInitPwd)
          commit('SET_LOGINIP', result.loginIP)
          commit('SET_LOGINTIME', result.loginTime)
          commit('SET_LASTLOGINIP', result.lastLoginIP)
          commit('SET_LASTLOGINTIME', result.lastLoginTime)
          commit('SET_USERID', result.userID)
          commit('SET_USERNAME', result.username)
          const role = { id: 'admin', name: '管理员', permissions: [ { 'roleId': 'admin', 'permissionId': 'dashboard_admin' } ] }
          role.permissionList = ['dashboard_admin', 'manage', 'accountm', 'document', 'document_admin', 'notice', 'notice_all', 'notice_uptwo', 'share', 'share_admin', 'feedback', 'feedback_admin', 'help']
          commit('SET_ROLES', result.role)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        // 请求后端获取用户信息 /api/user/info
        getInfo().then(response => {
          const { result } = response
          if (result.role && result.role.permissions.length > 0) {
            const role = { ...result.role }
            role.permissions = result.role.permissions.map(permission => {
              const per = {
                ...permission,
                actionList: (permission.actionEntitySet || {}).map(item => item.action)
               }
              return per
            })
            console.log('qaqcc', role.id)
            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            if (role.id === 'admin') {
              role.permissionList = ['dashboard_admin', 'manage', 'accountm', 'document', 'document_admin', 'notice', 'notice_all', 'notice_uptwo', 'share', 'share_admin', 'feedback', 'feedback_admin', 'help']
            } else if (role.id === 'manage') {
              role.permissionList = ['dashboard_manage', 'account', 'document', 'document_manage', 'notice', 'notice_all', 'notice_uptwo', 'share', 'share_admin', 'feedback', 'help']
            } else if (role.id === 'user') {
              role.permissionList = ['dashboard', 'account', 'document', 'share', 'feedback', 'help', 'notice']
            }
            console.log('qaqgg', role.permissionList)
            // 覆盖响应体的 role, 供下游使用
            // result.role = role
            result.role = { id: 'admin', name: '管理员', permissions: [ { 'roleId': 'admin', 'permissionId': 'admin' } ] }
            commit('SET_ROLES', role)
            commit('SET_INFO', result)
            commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_AVATAR', result.avatar)
            // 下游
            resolve(result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
          commit('SET_TOKEN', '')
          // commit('SET_ROLES', [])
          storage.remove(ACCESS_TOKEN)
      })
    }

  }
}

export default user
