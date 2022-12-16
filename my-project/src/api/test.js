import request from '@/utils/request'

const csApi = {
  cs: '/cs'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function Test () {
  return request({
    url: csApi.cs,
    method: 'get'
    // data: parameter
  })
}
