import Mock from 'mockjs2'
import { builder } from '../util'

// 公告
const getone = () => {
  const bulletin = {
    'msg': '获取成功',
    'subject': 'qaq',
    'content': 'qaq',
    'createTime': 'qaq',
    'issueTime': 'qaq',
    'expiredTime': 'qaq',
    'operator': 'qaq'
  }
  return builder(bulletin, '接口调用成功')
}

const getlist = () => {
  const bulletin = {
    'msg': '获取成功',
    'array':
    [{
      'subject': 'qaq',
      'content': 'qaq',
      'createTime': 'qaq',
      'issueTime': 'qaq',
      'expiredTime': 'qaq',
      'operator': 'qaq'
    },
      {
        'subject': 'qaq',
        'content': 'qaq',
        'createTime': 'qaq',
        'issueTime': 'qaq',
        'expiredTime': 'qaq',
        'operator': 'qaq'
      }
    ]

  }
  return builder(bulletin, '接口调用成功')
}

const add = () => {
  const bulletin = {
    'msg': '添加成功',
    'id': 1
  }
  return builder(bulletin, '接口调用成功')
}

const deleteq = () => {
  const bulletin = {
    'msg': '删除成功',
    'id': 1
  }
  return builder(bulletin, '接口调用成功')
}

const modify = () => {
  const bulletin = {
    'msg': '修改成功',
    'id': 1
  }
  return builder(bulletin, '接口调用成功')
}

Mock.mock(/\/bulletin\/add/, 'post', add)
Mock.mock(/\/bulletin\/get/, 'get', getone)
Mock.mock(/\/bulletin\/getlist/, 'get', getlist)
Mock.mock(/\/bulletin\/delete/, 'delete', deleteq)
Mock.mock(/\/bulletin\/modify/, 'put', modify)
