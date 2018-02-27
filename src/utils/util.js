// 辅助函数，log
export const log = console.log.bind(console)

// 倒计时函数
// 传入秒数，返回剩余的时，分，秒
// endtime [Number]

export const getTimeArr = (endtime) => {
  let now = new Date().getTime()
  let resttime = (endtime - now) / 1000
  let h, m, s
  if (resttime > 0) {
    h = Math.floor(resttime / 60 / 60 % 24)
    m = Math.floor(resttime / 60 % 60)
    s = Math.floor(resttime % 60)

    h = h < 10 ? ('0' + h) : h
    m = m < 10 ? ('0' + m) : m
    s = s < 10 ? ('0' + s) : s
  } else {
    h = '00'
    m = '00'
    s = '00'
  }

  return [h, m, s]
}

// 判断三元素的数组是否都为‘00’
export const isZero = (arr) => {
  if (arr.length !== 3) {
    return 'error'
  } else if (arr[0] === '00' && arr[1] === '00' && arr[2] === '00') {
    return true
  } else {
    return false
  }
}

// 获取设备系统信息
export const getSystem = () => {
  let sys = {}
  wx.getSystemInfo({
    success: function (res) {
      sys.pixelRatio = res.pixelRatio
      sys.ww = res.windowWidth
      sys.wh = res.windowHeight
      sys.barh = res.statusBarHeight
    }
  })
  return sys
}

// 本地存储相关
export const SetItem = (key, value) => {
  wx.setStorageSync(key, value)
}

export const GetItem = (key) => {
  return wx.getStorageSync(key)
}

// 格式化日期
export const formatTime = (date) => {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).concat([hour, minute, second].map(formatNumber))
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}