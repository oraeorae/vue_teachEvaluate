import router from './router'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const allowList = ['login', 'register', 'registerResult'] // no redirect allowList
const loginRoutePath = '/user/login'
// const defaultRoutePath = '/dashboard/workplace'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
  /* has token */
  const token = storage.get(ACCESS_TOKEN)
  // https://www.cnblogs.com/AdolphWilliam/p/15562351.html
  if (token) { // 是否存在token
    console.log('token存在')
    console.log(to, from, next)
    next()
  } else {
    if (to.path === loginRoutePath) { // 如果是登录页面路径，就直接next()
      next()
    } else { // 不然就跳转到登录；
      next(loginRoutePath)
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
