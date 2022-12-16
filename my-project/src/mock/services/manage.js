import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 5701

const serverList = (options) => {
  const parameters = getQueryParameters(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

const projects = () => {
  return builder({
    'data': [{
      id: 1,
      title: 'JAVA',
      semester: '2021-2022（1）',
      deadline: '2023.01.25',
      author: '管理员：黎老师',
      status: 1,
      updatedAt: '2022-12-05 00:00:00'
    },
    {
      id: 2,
      title: '大数据',
      semester: '2021-2022（1）',
      deadline: '2023.01.25',
      author: '管理员：黎老师',
      status: 1,
      updatedAt: '2022-12-05 00:00:00'
    },
    {
      id: 3,
      title: '软件工程',
      semester: '2021-2022（1）',
      deadline: '2023.01.25',
      author: '管理员：黎老师',
      status: 1,
      updatedAt: '2022-12-05 00:00:00'
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 6,
    'totalCount': 57
  })
}

const activity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: '管理员：黎老师',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
    },
    project: {
      url: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
      name: '关于网站项目进度的推进'
    },
    time: '2018-08-23 14:47:00'
  },
    {
      id: 1,
      user: {
        nickname: '管理员：张老师',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
      },
      project: {
        url: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
        name: '关于网站项目的立项'
      },
      time: '2018-08-23 14:47:00'
    }
  ])
}

const teams = () => {
  return builder([{
    id: 1,
    name: '科学搬砖组',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  },
  {
    id: 2,
    name: '程序员日常',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
  },
  {
    id: 1,
    name: '设计天团',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
  },
  {
    id: 1,
    name: '中二少女团',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
  },
  {
    id: 1,
    name: '骗你学计算机',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
  }
  ])
}

const radar = () => {
  return builder([{
    item: '引用',
    '个人': 70,
    '团队': 30,
    '部门': 40
  },
  {
    item: '口碑',
    '个人': 60,
    '团队': 70,
    '部门': 40
  },
  {
    item: '产量',
    '个人': 50,
    '团队': 60,
    '部门': 40
  },
  {
    item: '贡献',
    '个人': 40,
    '团队': 50,
    '部门': 40
  },
  {
    item: '热度',
    '个人': 60,
    '团队': 70,
    '部门': 40
  },
  {
    item: '引用',
    '个人': 70,
    '团队': 50,
    '部门': 40
  }
  ])
}

Mock.mock(/\/service/, 'get', serverList)
Mock.mock(/\/list\/search\/projects/, 'get', projects)
Mock.mock(/\/workplace\/activity/, 'get', activity)
Mock.mock(/\/workplace\/teams/, 'get', teams)
Mock.mock(/\/workplace\/radar/, 'get', radar)
