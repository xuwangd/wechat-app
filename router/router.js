import { queryStringify, getPathAndQuery } from '../utils/util.js'
export default class Router {
  static beforeEachHook = () => { }
  static next = () => { }
  // 获取to from
  static getToAndFrom (options) {
    // 在定义的routes中，找到 to from url对应的路由信息对象
    let pages = getCurrentPages()
    let fromRoute = pages[pages.length - 1]
    fromRoute = `/${fromRoute.route}`

    let path = getPathAndQuery(options.path).path
    let toRoute = path

    const from = Router.routes.find((item) => {
      return item.path === fromRoute
    })
    const to = Router.routes.find((item) => {
      return item.path === toRoute
    })

    return {
      to: to || {},
      from: from || {}
    }
  }
  constructor(routes) {
    Router.routes = routes
  }
  // 关闭所有页面，打开到应用内的某个页面
  reLaunch (options = {}) {
    const { to, from } = Router.getToAndFrom(options)
    Router.beforeEachHook(to, from, () => {
      let { path = '', query = {}, ...params } = options
      let { path: path2 = '', query: query2 = {} } = getPathAndQuery(path)
      query = { ...query, ...query2 }
      wx.reLaunch({
        url: `${path2}${queryStringify(query)}`,
        ...params
      })
    })
  }
  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
  redirectTo (options = {}) {
    const { to, from } = Router.getToAndFrom(options)
    Router.beforeEachHook(to, from, () => {
      let { path = '', query = {}, ...params } = options
      let { path: path2 = '', query: query2 = {} } = getPathAndQuery(path)
      query = { ...query, ...query2 }
      wx.redirectTo({
        url: `${path2}${queryStringify(query)}`,
        ...params
      })
    })
  }
  // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
  navigateTo (options = {}) {
    const { to, from } = Router.getToAndFrom(options)
    Router.beforeEachHook(to, from, () => {
      let { path = '', query = {}, ...params } = options
      let { path: path2 = '', query: query2 = {} } = getPathAndQuery(path)
      query = { ...query, ...query2 }
      wx.navigateTo({
        url: `${path2}${queryStringify(query)}`,
        ...params
      })
    })
  }
  // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  switchTab (options = {}) {
    const { to, from } = Router.getToAndFrom(options)
    Router.beforeEachHook(to, from, () => {
      let { path = '', query = {}, ...params } = options
      let { path: path2 = '', query: query2 = {} } = getPathAndQuery(path)
      query = { ...query, ...query2 }
      wx.switchTab({
        url: `${path2}${queryStringify(query)}`,
        ...params
      })
    })
  }
  // 关闭当前页面，返回上一页面或多级页面
  navigateBack (options = {}) {
    Router.beforeEachHook({}, {}, () => {
      wx.navigateBack(options)
    })
  }
  // 注册beforeEach路由钩子函数
  beforeEach (callback) {
    Router.beforeEachHook = callback
  }

}