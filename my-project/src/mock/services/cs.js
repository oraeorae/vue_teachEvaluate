import Mock from 'mockjs2'
import { builder } from '../util'

const cs = () => {
  return builder({}, '[测试接口] 成功')
}

Mock.mock(/\/cs/, 'get', cs)
