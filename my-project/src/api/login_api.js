import request from '@/utils/request'

const userApi = {
  Login: '/user/login'
}

/**
 * login func 登录
 * parameter: {
    "userID" : "admin",
    "password" : "admin",
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    dataType: 'json',
    contentType: 'application/json;',
    data: parameter
  })
}
