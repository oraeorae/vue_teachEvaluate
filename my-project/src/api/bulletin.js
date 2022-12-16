import request from '@/utils/request'

const bulletinApi = {
  Add: '/bulletin/add',
  GetOne: '/bulletin/get',
  GetList: '/bulletin/getlist',
  Delete: '/bulletin/delete',
  Modify: '/bulletin/modify'
}

export function add (parameter) {
  return request({
    url: bulletinApi.Add,
    method: 'post',
    data: parameter
  })
}

export function getone (parameter) {
  return request({
    url: bulletinApi.GetOne,
    method: 'get',
    data: parameter
  })
}

export function getlist (parameter) {
  return request({
    url: bulletinApi.GetList,
    method: 'get',
    data: parameter
  })
}

export function deleteq (parameter) {
  return request({
    url: bulletinApi.Delete,
    method: 'delete',
    data: parameter
  })
}

export function modify (parameter) {
  return request({
    url: bulletinApi.Modify,
    method: 'put',
    data: parameter
  })
}
