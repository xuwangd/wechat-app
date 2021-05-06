export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

export function queryStringify (query = {}) {
  query = Object.keys(query).reduce((prev, key) => {
    const k = key
    const v = query[key]
    return `${prev}${k}=${v}&`
  }, '?')
  return query.slice(0, -1)
}

export function getPathAndQuery (u = '') {
  let [path = '', query = ''] = u.split('?')
  if (query) {
    query = query.split('&')
    query = query.map((item) => item.split('='))
    query = query.reduce((query, item) => {
      query[item[0]] = item[1]
      return query
    }, {})
  }
  return {
    path: path || '',
    query: query || {}
  }
}
